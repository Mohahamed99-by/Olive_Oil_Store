import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaEnvelope } from 'react-icons/fa';

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteStatus, setDeleteStatus] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contacts');
      setContacts(response.data);
      setLoading(false);
    } catch (err) {
      setError('حدث خطأ أثناء استرجاع الرسائل');
      setLoading(false);
      console.error('Error fetching contacts:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذه الرسالة؟')) {
      try {
        await axios.delete(`http://localhost:5000/api/contacts/${id}`);
        setDeleteStatus('تم حذف الرسالة بنجاح');
        // Remove the deleted contact from the state
        setContacts(contacts.filter(contact => contact.id !== id));
        
        // Clear the success message after 3 seconds
        setTimeout(() => {
          setDeleteStatus('');
        }, 3000);
      } catch (err) {
        setError('حدث خطأ أثناء حذف الرسالة');
        console.error('Error deleting contact:', err);
      }
    }
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('ar-SA', options);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8" dir="rtl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-green-900">إدارة رسائل التواصل</h2>
          <div className="flex items-center">
            <FaEnvelope className="text-green-700 mr-2" />
            <span className="text-gray-600">
              {contacts.length} رسالة
            </span>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {deleteStatus && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {deleteStatus}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-green-50 text-green-900">
                <th className="py-3 px-4 text-right">الاسم</th>
                <th className="py-3 px-4 text-right">البريد الإلكتروني</th>
                <th className="py-3 px-4 text-right">الرسالة</th>
                <th className="py-3 px-4 text-right">التاريخ</th>
                <th className="py-3 px-4 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4">{contact.name}</td>
                  <td className="py-4 px-4">
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-green-700 hover:text-green-900"
                    >
                      {contact.email}
                    </a>
                  </td>
                  <td className="py-4 px-4">
                    <div className="max-w-xs overflow-hidden text-ellipsis">
                      {contact.message}
                    </div>
                  </td>
                  <td className="py-4 px-4" dir="ltr">
                    {formatDate(contact.created_at)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="text-red-600 hover:text-red-800 transition-colors duration-200"
                      title="حذف الرسالة"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {contacts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            لا توجد رسائل للعرض
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminContacts;