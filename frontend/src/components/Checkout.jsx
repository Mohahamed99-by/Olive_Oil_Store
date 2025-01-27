import { useState } from 'react'
import { useCart } from '../context/CartContext'

const Checkout = ({ onClose }) => {
  const { cartItems, clearCart, calculateTotal } = useCart()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // Shipping Information
    address: '',
    city: '',
    postalCode: ''
  })
  const [errors, setErrors] = useState({})
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateStep = (stepNumber) => {
    const newErrors = {}
    
    if (stepNumber === 1) {
      if (!formData.firstName) newErrors.firstName = 'الاسم الأول مطلوب'
      if (!formData.lastName) newErrors.lastName = 'اسم العائلة مطلوب'
      if (!formData.email) newErrors.email = 'البريد الإلكتروني مطلوب'
      if (!formData.phone) newErrors.phone = 'رقم الهاتف مطلوب'
    }
    
    if (stepNumber === 2) {
      if (!formData.address) newErrors.address = 'العنوان مطلوب'
      if (!formData.city) newErrors.city = 'المدينة مطلوبة'
      if (!formData.postalCode) newErrors.postalCode = 'الرمز البريدي مطلوب'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    setStep(prev => prev - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateStep(2)) return

    setIsProcessing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsProcessing(false)
    setOrderComplete(true)
    clearCart()
  }

  if (orderComplete) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">تم تأكيد طلبك بنجاح!</h2>
          <p className="text-gray-600 mb-3">
            سيتم إرسال تفاصيل الطلب إلى بريدك الإلكتروني.
          </p>
          <p className="text-gray-600 mb-6">
            سيتم الدفع عند استلام الطلب. شكراً لك على الثقة!
          </p>
          <button
            onClick={() => {
              onClose()
              window.location.href = '/'
            }}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700
                     transition-colors duration-300"
          >
            العودة للرئيسية
          </button>
        </div>
      </div>
    )
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold mb-6">المعلومات الشخصية</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الأول</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} 
                           focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300`}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">اسم العائلة</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} 
                           focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300`}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} 
                         focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-200'} 
                         focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold mb-6">معلومات الشحن</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">العنوان</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.address ? 'border-red-500' : 'border-gray-200'} 
                         focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300`}
              />
              {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">المدينة</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.city ? 'border-red-500' : 'border-gray-200'} 
                           focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300`}
                />
                {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الرمز البريدي</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.postalCode ? 'border-red-500' : 'border-gray-200'} 
                           focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300`}
                />
                {errors.postalCode && <p className="mt-1 text-sm text-red-500">{errors.postalCode}</p>}
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center
                           ${step === stepNumber ? 'bg-green-600 text-white' :
                             step > stepNumber ? 'bg-green-200 text-green-800' :
                             'bg-gray-200 text-gray-600'}`}>
                {stepNumber}
              </div>
              {stepNumber < 2 && (
                <div className={`w-24 h-1 mx-2
                              ${step > stepNumber ? 'bg-green-200' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {renderStepContent()}

          {/* Order Summary */}
          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-gray-600">المجموع:</span>
              <span className="font-bold text-xl">{calculateTotal().toFixed(2)} درهم</span>
            </div>
            <p className="text-sm text-gray-500 text-center">
              الدفع عند الاستلام
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700
                         hover:bg-gray-50 transition-colors duration-300"
              >
                السابق
              </button>
            )}
            {step < 2 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700
                         transition-colors duration-300 mr-auto"
              >
                التالي
              </button>
            ) : (
              <button
                type="submit"
                disabled={isProcessing}
                className={`px-6 py-3 rounded-xl text-white transition-colors duration-300 mr-auto
                         ${isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
              >
                {isProcessing ? 'جاري المعالجة...' : 'تأكيد الطلب'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Checkout
