import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Hero Background Image
const heroBg = 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative min-h-[400px] xs:min-h-[500px] sm:min-h-[600px] md:h-[90vh] lg:h-screen">
        {/* Background Gradient and Image */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/90 to-green-800/90 sm:from-green-900/80 sm:to-green-800/80">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl pt-28 mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-3 xs:space-y-4 sm:space-y-6 w-full xs:w-[95%] sm:w-4/5 md:w-3/4 lg:w-2/3"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-arabic"
            >
              منتجات مغربية اصيلة             </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-arabic leading-relaxed"
            >
              اكتشف روعة المنتجات المغربية الأصيلة، من زيت الزيتون البكر الممتاز إلى العسل الطبيعي والأعشاب العطرية. منتجات مختارة بعناية من قلب الطبيعة المغربية لتقدم لك تجربة تذوق استثنائية
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-2 xs:pt-3 sm:pt-4 space-y-4"
            >
              <Link
                to="/products"
                className="inline-block bg-green-600 text-white px-6 xs:px-8 sm:px-10 py-3 xs:py-4 rounded-lg xs:rounded-xl 
                         text-sm xs:text-base sm:text-lg md:text-xl font-semibold hover:bg-green-700 transform hover:scale-105 
                         transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 
                         focus:ring-offset-green-800 shadow-lg shadow-green-900/20 font-arabic"
              >
                تسوق الآن
              </Link>
              <p className="text-white/80 text-sm xs:text-base font-arabic">
                ✓ شحن مجاني للطلبات فوق 500 درهم | ✓ ضمان استرجاع خلال 30 يوم
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 to-emerald-50/50">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 xs:mb-10 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 mb-3 xs:mb-4 font-arabic"
            >
              منتجاتنا المميزة
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm xs:text-base sm:text-lg text-green-800/80 max-w-3xl mx-auto leading-relaxed font-arabic px-2"
            >
              نفخر بتقديم مجموعة مختارة من أفضل المنتجات الطبيعية المغربية، معالجة بطرق تقليدية موروثة عبر الأجيال لضمان أعلى جودة وأصالة
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 lg:gap-10 px-2 xs:px-0">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl xs:rounded-3xl bg-white shadow-md hover:shadow-xl 
                         transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 xs:aspect-h-10 sm:aspect-h-9">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/40 to-transparent" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 xs:p-6 sm:p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white mb-2 font-arabic">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-xs xs:text-sm sm:text-base mb-3 opacity-0 group-hover:opacity-100 
                              transition-all duration-300 font-arabic line-clamp-2 transform translate-y-2 
                              group-hover:translate-y-0">
                      {category.description}
                    </p>
                    <div className="space-y-3 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div>
                        <h4 className="text-white/95 text-sm xs:text-base font-semibold mb-1 font-arabic">المميزات:</h4>
                        <ul className="space-y-1">
                          {category.features.map((feature, idx) => (
                            <li key={idx} className="text-white/85 text-xs xs:text-sm font-arabic flex items-center">
                              <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white/95 text-sm xs:text-base font-semibold mb-1 font-arabic">الأصناف المتوفرة:</h4>
                        <ul className="space-y-1">
                          {category.varieties.map((variety, idx) => (
                            <li key={idx} className="text-white/85 text-xs xs:text-sm font-arabic flex items-center">
                              <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              </svg>
                              {variety}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link
                      to={category.link}
                      className="inline-flex items-center bg-white/90 backdrop-blur-sm text-green-900 px-4 xs:px-5 py-2 xs:py-2.5 
                               rounded-lg xs:rounded-xl group-hover:bg-green-800 group-hover:text-white transform 
                               transition-all duration-300 text-xs xs:text-sm sm:text-base font-semibold font-arabic 
                               hover:scale-105 shadow-lg"
                    >
                      اكتشف المزيد
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 xs:h-5 xs:w-5 mr-2 transform rotate-180"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-16 bg-green-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-12">ما يميزنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 text-green-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-12">فوائد زيت الزيتون</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto text-green-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quality Guarantee Section */}
      <div className="py-16 xs:py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-2xl p-8 xs:p-10 sm:p-12 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h2 className="text-2xl xs:text-3xl font-bold text-gray-900 mb-4 font-arabic">ضمان الجودة</h2>
            <p className="text-gray-600 text-base xs:text-lg max-w-2xl mx-auto mb-6 font-arabic">
              نضمن لكم جودة منتجاتنا 100%. إذا لم تكونوا راضين عن جودة المنتج، نقدم لكم استرجاع كامل المبلغ خلال 30 يوماً من تاريخ الشراء
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm xs:text-base font-arabic">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>منتج طبيعي 100%</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>معتمد من وزارة الصحة</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>شهادة الجودة العالمية ISO</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const categories = [
  {
    name: 'زيت الزيتون البكر الممتاز',
    description: 'زيت زيتون عضوي معصور على البارد من أجود أصناف الزيتون المغربي، غني بمضادات الأكسدة والفيتامينات',
    features: [
      'نسبة حموضة منخفضة لا تتجاوز 0.8%',
      'معصور على البارد للحفاظ على القيمة الغذائية',
      'غني بمضادات الأكسدة وفيتامين E',
      'طعم ورائحة مميزة'
    ],
    varieties: [
      'زيت زيتون بكر ممتاز - عبوة 500مل',
      'زيت زيتون بكر ممتاز - عبوة 750مل',
      'زيت زيتون بكر ممتاز - عبوة 1 لتر',
      'زيت زيتون عضوي فاخر - عبوة 500مل'
    ],
    image: 'https://i.pinimg.com/originals/3e/08/76/3e087634965157b063fc0862b63566bc.jpg',
    link: '/products/olive-oil'
  },
  {
    name: 'العسل الجبلي الطبيعي',
    description: 'عسل نقي 100% من مناحل الأطلس المغربي، يتم جمعه بعناية للحفاظ على جميع فوائده الطبيعية',
    features: [
      'عسل طبيعي 100% بدون إضافات',
      'غني بمضادات الأكسدة والإنزيمات',
      'مصدر ممتاز للطاقة والمعادن',
      'يحتوي على حبوب اللقاح الطبيعية'
    ],
    varieties: [
      'عسل الزهور البرية - 250جم',
      'عسل الأكاسيا - 500جم',
      'عسل الخزامى - 500جم',
      'عسل السدر الجبلي - 500جم'
    ],
    image: 'https://media.gettyimages.com/id/1093966734/photo/honey-jar-with-honey-dipper-shot-on-rustic-wooden-table.jpg?s=612x612&w=0&k=20&c=L9IKs_ESNZ9bPdAvxU2vLOESQ26JnLQ1LW6CE2PRlzk=',
    link: '/products/honey'
  },
  {
    name: 'الأعشاب الطبية التقليدية',
    description: 'تشكيلة مختارة من الأعشاب الطبية المغربية الأصيلة، مجففة بطرق طبيعية للحفاظ على خصائصها العلاجية',
    features: [
      'مجففة طبيعياً بدون مواد حافظة',
      'معبأة يدوياً لضمان الجودة',
      'غنية بالزيوت الأساسية',
      'خصائص علاجية متعددة'
    ],
    varieties: [
      'زعتر بري مجفف - 100جم',
      'إكليل الجبل - 100جم',
      'نعناع مغربي - 50جم',
      'مزيج أعشاب الشاي المغربي - 100جم'
    ],
    image: 'https://media.istockphoto.com/id/504069254/photo/fresh-herbs-on-wooden-background.jpg?s=612x612&w=0&k=20&c=UmuG3l9qSQDu0cOjjVG-9lfTMEYoOYoILa7oYGGsRmc=',
    link: '/products/herbs'
  }
]

const features = [
  {
    title: 'جودة فائقة',
    description: 'نختار بعناية أفضل المنتجات من المزارع العضوية المعتمدة، ونخضعها لفحوصات جودة صارمة لضمان أعلى المعايير',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: 'شحن آمن وسريع',
    description: 'نوفر خدمة شحن سريعة وآمنة لجميع أنحاء المملكة، مع تتبع مباشر للطلب وتغليف خاص يضمن وصول المنتجات بحالة ممتازة',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'دعم متميز',
    description: 'فريق خدمة العملاء لدينا متاح على مدار الساعة للإجابة على استفساراتكم وتقديم المشورة حول منتجاتنا واستخداماتها',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
]

const benefits = [
  {
    title: 'غني بمضادات الأكسدة',
    description: 'يحتوي على مركبات البوليفينول القوية التي تحمي الجسم من الجذور الحرة وتعزز صحة القلب',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: 'مصدر للفيتامينات',
    description: 'يحتوي على فيتامين E وK والأحماض الدهنية الأساسية التي تدعم صحة الجسم والبشرة',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    title: 'معصور على البارد',
    description: 'يتم عصر الزيتون بطريقة ميكانيكية دون استخدام الحرارة للحفاظ على جميع العناصر الغذائية',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: 'حموضة منخفضة',
    description: 'نسبة حموضة لا تتجاوز 0.8%، مما يضمن أعلى جودة وأفضل مذاق لزيت الزيتون',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
]

export default Home
