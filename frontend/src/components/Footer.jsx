import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Store Info */}
            <div className="text-center xs:text-right col-span-1 xs:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-arabic">متجر زيت الزيتون</h3>
              <p className="text-sm sm:text-base text-white/80 mb-4 font-arabic leading-relaxed">
                نقدم لكم أجود أنواع زيت الزيتون البكر الممتاز من تعاونيات مغربية موثوقة
              </p>
              <div className="flex justify-center xs:justify-end gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center xs:text-right">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 font-arabic">روابط سريعة</h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/80 hover:text-white text-sm sm:text-base transition-colors duration-300 hover:translate-x-1 rtl:hover:-translate-x-1 transform inline-block font-arabic"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center xs:text-right">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 font-arabic">تواصل معنا</h4>
              <ul className="space-y-2 sm:space-y-3">
                {contactInfo.map((info) => (
                  <li key={info.label} className="flex items-center justify-center xs:justify-end gap-2 group">
                    <span className="text-white/60 group-hover:text-white/80 transition-colors duration-300">{info.icon}</span>
                    <span className="text-white/80 group-hover:text-white text-sm sm:text-base transition-colors duration-300 font-arabic">
                      {info.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="text-center xs:text-right">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 font-arabic">النشرة البريدية</h4>
              <p className="text-white/80 text-sm sm:text-base mb-4 font-arabic leading-relaxed">
                اشترك في نشرتنا البريدية للحصول على آخر العروض والمنتجات الجديدة
              </p>
              <form className="flex flex-col sm:flex-row gap-2 justify-center xs:justify-end" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 
                         focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40
                         text-sm sm:text-base font-arabic transition-all duration-300"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-green-600 hover:bg-green-500 active:bg-green-700 rounded-lg transition-all duration-300 
                         text-sm sm:text-base whitespace-nowrap font-arabic shadow-md hover:shadow-lg
                         transform hover:-translate-y-0.5"
                >
                  اشتراك
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-right">
              <p className="text-sm sm:text-base text-white/80 font-arabic order-2 sm:order-1">
                &copy; {new Date().getFullYear()} متجر زيت الزيتون. جميع الحقوق محفوظة
              </p>
              <div className="flex items-center gap-4 text-sm sm:text-base text-white/80 order-1 sm:order-2">
                <Link to="/privacy" className="hover:text-white transition-colors duration-300 font-arabic">
                  سياسة الخصوصية
                </Link>
                <span className="text-white/40">|</span>
                <Link to="/terms" className="hover:text-white transition-colors duration-300 font-arabic">
                  شروط الاستخدام
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Social Media Links
const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
]

// Quick Links
const quickLinks = [
  { name: 'الرئيسية', href: '/' },
  { name: 'المنتجات', href: '/products' },
  { name: 'من نحن', href: '/about' },
  { name: 'تواصل معنا', href: '/contact' },
]

// Contact Information
const contactInfo = [
  {
    label: 'Phone',
    value: '+212 123-456-789',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@oliveoil.com',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: 'الدار البيضاء، المغرب',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default Footer
