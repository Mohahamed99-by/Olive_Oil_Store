const express = require('express');
const path = require('path');
const cors = require('cors'); // Import the cors package
const mysql = require("mysql2");

const app = express();
const port = 5000;
app.use(express.json()); // Parse JSON request bodies

// Enable CORS for all origins (you can restrict this for specific origins)
app.use(cors()); // Add CORS middleware to your server

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "olive_oil_store"
})

db.connect((err) => {
  if (err) {
    console.error('خطأ في الاتصال بقاعدة البيانات:', err.message);
    return;
  }
  console.log('تم الاتصال بقاعدة البيانات.');
});

// استرجاع قائمة المنتجات
app.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM products';

  db.query(query, (err, result) => {
    if (err) {
      console.error('خطأ أثناء استرجاع المنتجات:', err.message);
      return res.status(500).json({ message: 'حدث خطأ أثناء استرجاع المنتجات.' });
    }
    res.status(200).json(result);
  });
});

// Route لإضافة طلب جديد
app.post('/api/checkout', (req, res) => {
  const { fullName, phone, email, address, city, paymentMethod, totalPrice, cart } = req.body;
  const status = 'pending'; // Default status when the order is created

  const query = `
    INSERT INTO orders (fullName, phone, email, address, city, paymentMethod, totalPrice, cart, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [fullName, phone, email, address, city, paymentMethod, totalPrice, JSON.stringify(cart), status],
    (err, result) => {
      if (err) {
        console.error('خطأ أثناء إضافة الطلب:', err.message);
        res.status(500).json({ message: 'حدث خطأ أثناء معالجة الطلب.' });
        return;
      }
      res.status(200).json({ message: 'تمت إضافة الطلب بنجاح!', orderId: result.insertId });
    }
  );
});

// استرجاع جميع الطلبات
app.get("/api/orders", (req, res) => {
  const query = "SELECT * FROM orders";
  
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching orders." });
    }
    res.status(200).json({ orders: result });
  });
});

app.patch('/api/orders/:id/status', (req, res) => {
  const { id } = req.params; // استخراج ID الطلب من المعرف
  const { status } = req.body; // استخراج الحالة الجديدة من الطلب (Body)

  // التحقق من صحة الحالة المدخلة
  const validStatuses = ['pending', 'shipped', 'completed'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ message: 'حالة الطلب غير صحيحة' });
  }

  // صياغة استعلام SQL لتحديث الحالة
  const query = 'UPDATE orders SET status = ? WHERE orderId = ?';

  // تنفيذ الاستعلام
  db.query(query, [status, id], (err, result) => {
    if (err) {
      console.error('خطأ أثناء تحديث حالة الطلب:', err.message);
      return res.status(500).json({ message: 'حدث خطأ أثناء تحديث حالة الطلب.' });
    }

    // التحقق مما إذا كان الطلب موجودًا
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'الطلب غير موجود.' });
    }

    // الاستجابة الناجحة
    res.status(200).json({ message: 'تم تحديث حالة الطلب بنجاح.' });
  });
});

// Route لحذف الطلب
app.delete('/api/orders/:id', (req, res) => {
  const { id } = req.params;
  
  const query = 'DELETE FROM orders WHERE orderId = ?';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('خطأ أثناء حذف الطلب:', err.message);
      return res.status(500).json({ message: 'حدث خطأ أثناء حذف الطلب.' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'الطلب غير موجود.' });
    }
    res.status(200).json({ message: 'تم حذف الطلب بنجاح.' });
  });
});





// Add this route to your Express.js server
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'جميع الحقول مطلوبة.' });
  }

  const query = `
    INSERT INTO contacts (name, email, message)
    VALUES (?, ?, ?)
  `;

  db.query(
    query,
    [name, email, message],
    (err, result) => {
      if (err) {
        console.error('خطأ في حفظ بيانات الاتصال:', err.message);
        return res.status(500).json({ message: 'حدث خطأ أثناء معالجة طلب الاتصال.' });
      }
      res.status(200).json({ 
        message: 'تم استلام رسالتك بنجاح!',
        contactId: result.insertId 
      });
    }
  );
});

// Route to get all contact messages (for admin panel)
app.get('/api/contacts', (req, res) => {
  const query = 'SELECT * FROM contacts ORDER BY created_at DESC';

  db.query(query, (err, result) => {
    if (err) {
      console.error('خطأ في استرجاع رسائل الاتصال:', err.message);
      return res.status(500).json({ message: 'حدث خطأ أثناء استرجاع رسائل الاتصال.' });
    }
    res.status(200).json(result);
  });
});

// Route to delete a contact message
app.delete('/api/contacts/:id', (req, res) => {
  const { id } = req.params;
  
  const query = 'DELETE FROM contacts WHERE id = ?';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('خطأ في حذف رسالة الاتصال:', err.message);
      return res.status(500).json({ message: 'حدث خطأ أثناء حذف رسالة الاتصال.' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'رسالة الاتصال غير موجودة.' });
    }
    res.status(200).json({ message: 'تم حذف رسالة الاتصال بنجاح.' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
