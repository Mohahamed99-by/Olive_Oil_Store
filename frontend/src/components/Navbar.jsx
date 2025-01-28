import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className={`transition-colors duration-300 ${
                scrolled ? 'text-green-700' : 'text-white'
              }`}
            >
              <Logo />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-2">
              <NavLink to="/" scrolled={scrolled}>الرئيسية</NavLink>
              <NavLink to="/products" scrolled={scrolled}>المنتجات</NavLink>
              <NavLink to="/about" scrolled={scrolled}>من نحن</NavLink>
              <NavLink to="/contact" scrolled={scrolled}>اتصل بنا</NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? 'text-green-700 hover:bg-green-50' : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="sr-only">فتح القائمة</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`px-2 pt-2 pb-3 space-y-1 ${
            scrolled ? 'bg-white/80 backdrop-blur-lg' : 'bg-green-800/95'
          }`}>
            <MobileNavLink to="/" scrolled={scrolled} onClick={() => setIsOpen(false)}>
              الرئيسية
            </MobileNavLink>
            <MobileNavLink to="/products" scrolled={scrolled} onClick={() => setIsOpen(false)}>
              المنتجات
            </MobileNavLink>
            <MobileNavLink to="/about" scrolled={scrolled} onClick={() => setIsOpen(false)}>
              من نحن
            </MobileNavLink>
            <MobileNavLink to="/contact" scrolled={scrolled} onClick={() => setIsOpen(false)}>
              اتصل بنا
            </MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Desktop NavLink Component
const NavLink = ({ to, children, scrolled }) => (
  <Link
    to={to}
    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
              hover:scale-105 active:scale-95 ${
      scrolled
        ? 'text-gray-700 hover:bg-green-50 hover:text-green-700'
        : 'text-white/90 hover:bg-white/10 hover:text-white'
    }`}
  >
    {children}
  </Link>
)

// Mobile NavLink Component
const MobileNavLink = ({ to, children, scrolled, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
      scrolled
        ? 'text-gray-700 hover:bg-green-50 hover:text-green-700'
        : 'text-white hover:bg-white/10'
    }`}
  >
    {children}
  </Link>
)

export default Navbar
