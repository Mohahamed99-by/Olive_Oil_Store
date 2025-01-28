import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Clock, Heart, Star, ThumbsUp, ChevronLeft } from 'lucide-react';

// Hero Background Image
const heroBg = 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80';

// Animation variants
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <div className="relative min-h-[500px] xs:min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-screen">
        {/* Background Gradient and Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/95 via-green-800/90 to-green-700/85">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
        </div>

        {/* Content */}
        <div className="relative pt-16 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white space-y-4 sm:space-y-6 w-full xs:w-[95%] sm:w-4/5 md:w-3/4 lg:w-2/3"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="inline-block mb-2 sm:mb-4"
            >
              <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-green-100">
                منتجات طبيعية 100%
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight font-arabic"
            >
              منتجات مغربية اصيلة
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-arabic leading-relaxed"
            >
              اكتشف روعة المنتجات المغربية الأصيلة، من زيت الزيتون البكر الممتاز إلى العسل الطبيعي والأعشاب العطرية
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="pt-4 sm:pt-6 space-y-4 sm:space-y-6"
            >
              <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  to="/products"
                  className="w-full xs:w-auto bg-white text-green-900 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl 
                           text-sm sm:text-base lg:text-lg font-bold hover:bg-green-50 transform hover:scale-105 
                           transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white 
                           focus:ring-offset-2 focus:ring-offset-green-800 shadow-xl shadow-green-900/20 
                           font-arabic"
                >
                  تسوق الآن
                </Link>
                <Link
                  to="/about"
                  className="w-full xs:w-auto bg-green-800/40 backdrop-blur-sm text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 
                           rounded-xl text-sm sm:text-base lg:text-lg font-bold hover:bg-green-800/60 transform 
                           hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 
                           focus:ring-white/50 shadow-lg shadow-green-900/10 font-arabic"
                >
                  تعرف علينا
                </Link>
              </div>
              <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm lg:text-base font-arabic text-white/80">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>شحن مجاني للطلبات فوق 500 درهم</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>ضمان استرجاع خلال 30 يوم</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 sm:h-20 lg:h-24 fill-current text-white" viewBox="0 0 1440 74" preserveAspectRatio="none">
            <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-900 mb-3 sm:mb-4 font-arabic">ما يميزنا</h2>
            <p className="text-sm sm:text-base lg:text-lg text-green-700/80 max-w-2xl mx-auto font-arabic">
              نقدم لكم أفضل المنتجات الطبيعية المغربية مع خدمة متميزة وجودة مضمونة
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeIn}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-green-50 transition-colors duration-300
                         border border-green-100 hover:border-green-200 shadow-sm hover:shadow-md"
              >
                <div className="absolute top-0 right-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-green-50 rounded-bl-[100px] group-hover:bg-green-100/50 
                              transition-colors duration-300" />
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-3 sm:mb-4 lg:mb-6 text-green-600 group-hover:text-green-700 
                              transition-colors duration-300 bg-white rounded-lg sm:rounded-xl p-2 sm:p-2.5 lg:p-3 
                              shadow-sm group-hover:shadow-md">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-green-900 mb-2 sm:mb-3 font-arabic">{feature.title}</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-green-700/80 leading-relaxed font-arabic">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-900 mb-3 sm:mb-4 font-arabic">منتجاتنا المميزة</h2>
            <p className="text-base sm:text-lg text-green-700/80 max-w-2xl mx-auto font-arabic">
              مجموعة مختارة من أفضل المنتجات الطبيعية المغربية، معالجة بطرق تقليدية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-40 sm:h-48 lg:h-56 bg-green-100 relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-2 font-arabic">{product.name}</h3>
                  <p className="text-sm sm:text-base text-green-700/80 mb-4 font-arabic">{product.description}</p>
                  <Link
                    to={product.link}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium font-arabic"
                  >
                    اكتشف المزيد
                    <ChevronLeft className="mr-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guarantee Section */}
      <div className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center shadow-xl sm:shadow-2xl shadow-green-100"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 lg:mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-900 mb-3 sm:mb-4 lg:mb-6 font-arabic">ضمان الجودة</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 font-arabic leading-relaxed">
              نضمن لكم جودة منتجاتنا 100%. إذا لم تكونوا راضين عن جودة المنتج، نقدم لكم استرجاع كامل المبلغ خلال 30 يوماً من تاريخ الشراء
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
              <div className="flex items-center justify-center bg-green-50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 ml-2 sm:ml-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base lg:text-lg text-green-900 font-arabic">منتج طبيعي 100%</span>
              </div>
              <div className="flex items-center justify-center bg-green-50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 ml-2 sm:ml-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base lg:text-lg text-green-900 font-arabic">معتمد من وزارة الصحة</span>
              </div>
              <div className="flex items-center justify-center bg-green-50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 ml-2 sm:ml-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base lg:text-lg text-green-900 font-arabic">شهادة الجودة العالمية ISO</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: 'جودة فائقة',
    description: 'نختار بعناية أفضل المنتجات من المزارع العضوية المعتمدة',
    icon: <Award className="w-full h-full" />,
  },
  {
    title: 'خدمة سريعة',
    description: 'توصيل سريع وآمن لجميع أنحاء المملكة',
    icon: <Clock className="w-full h-full" />,
  },
  {
    title: 'منتجات طبيعية',
    description: 'منتجات عضوية 100% خالية من المواد الكيميائية',
    icon: <Heart className="w-full h-full" />,
  },
  {
    title: 'جودة مضمونة',
    description: 'ضمان استرجاع خلال 30 يوم',
    icon: <Star className="w-full h-full" />,
  },
  {
    title: 'دعم متميز',
    description: 'فريق دعم متخصص لخدمتكم على مدار الساعة',
    icon: <ThumbsUp className="w-full h-full" />,
  },
];

const products = [
  {
    name: 'زيت الزيتون البكر',
    description: 'زيت زيتون عضوي معصور على البارد من أجود أصناف الزيتون المغربي',
    image: 'https://cdn.altibbi.com/cdn/cache/1000x500/image/2022/10/24/998b4af28c84a1b13241572160467a45.jpg.webp',
    link: '/products/olive-oil',
  },
  {
    name: 'عسل الأزهار البري',
    description: 'عسل طبيعي 100% من جبال الأطلس',
    image: 'https://tajy.b-cdn.net/wp-content/uploads/2024/01/%D8%B5%D9%81%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D8%B3%D9%84-%D8%A7%D9%84%D8%AC%D8%A8%D9%84%D9%8A-1024x585.webp',
    link: '/products/honey',
  },
  {
    name: 'الأعشاب الطبية',
    description: 'تشكيلة من الأعشاب الطبية التقليدية المغربية',
    image: 'https://mhtwyat.com/wp-content/uploads/2019/12/pexels-photo-1793035.jpeg',
    link: '/products/herbs',
  },
];

export default Home;