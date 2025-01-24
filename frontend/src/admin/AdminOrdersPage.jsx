import React, { useState, useEffect } from "react";
import { CheckCircle, XCircle, Loader, Package, Search } from "lucide-react";

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Fetch orders from the server
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/orders");
      if (!response.ok) {
        throw new Error("فشل في تحميل الطلبات");
      }
      const data = await response.json();
      setOrders(data.orders);
      setError(null);
    } catch (error) {
      setError("حدث خطأ في تحميل الطلبات: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle update order status
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const response = await fetch(`http://localhost:5000/api/orders/${orderId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("فشل في تحديث حالة الطلب");
      }

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.orderId === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      alert("حدث خطأ أثناء تحديث حالة الطلب: " + error.message);
    }
  };

  // Handle delete order
  const handleDeleteOrder = async (orderId) => {
    if (!window.confirm("هل أنت متأكد من حذف هذا الطلب؟")) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("فشل في حذف الطلب");
      }

      setOrders((prevOrders) => prevOrders.filter((order) => order.orderId !== orderId));
    } catch (error) {
      alert("حدث خطأ أثناء حذف الطلب: " + error.message);
    }
  };

  // Filter and search orders
  const filteredOrders = orders.filter((order) => {
    const matchesSearch = 
      order.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.orderId.toString().includes(searchTerm);
    const matchesStatus = filterStatus === "all" || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "pending": return "text-yellow-600";
      case "shipped": return "text-blue-600";
      case "completed": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "pending": return "قيد الانتظار";
      case "shipped": return "تم الشحن";
      case "completed": return "تم الإتمام";
      default: return status;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="w-8 h-8 animate-spin text-green-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-600 text-center">
          <XCircle className="w-12 h-12 mx-auto mb-4" />
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8" dir="rtl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-green-900 flex items-center">
            <Package className="ml-2" />
            إدارة الطلبات
          </h1>
          <span className="text-gray-600">
            {filteredOrders.length} طلب
          </span>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="البحث عن طلب..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg pl-10"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white"
          >
            <option value="all">جميع الحالات</option>
            <option value="pending">قيد الانتظار</option>
            <option value="shipped">تم الشحن</option>
            <option value="completed">تم الإتمام</option>
          </select>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-right text-sm font-medium text-gray-500">رقم الطلب</th>
                <th className="py-3 px-6 text-right text-sm font-medium text-gray-500">الاسم الكامل</th>
                <th className="py-3 px-6 text-right text-sm font-medium text-gray-500">حالة الطلب</th>
                <th className="py-3 px-6 text-right text-sm font-medium text-gray-500">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.orderId} className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm text-gray-900">#{order.orderId}</td>
                  <td className="py-4 px-6 text-sm text-gray-900">{order.fullName}</td>
                  <td className="py-4 px-6">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.orderId, e.target.value)}
                      className={`border px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}
                    >
                      <option value="pending">قيد الانتظار</option>
                      <option value="shipped">تم الشحن</option>
                      <option value="completed">تم الإتمام</option>
                    </select>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleDeleteOrder(order.orderId)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      <XCircle className="inline-block w-5 h-5 ml-1" />
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredOrders.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              لا توجد طلبات للعرض
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminOrdersPage;