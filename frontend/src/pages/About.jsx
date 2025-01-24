import React from "react";
import { FaLeaf, FaHandHoldingHeart, FaGlobe, FaTruck } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 py-8 md:py-16" dir="rtl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8 md:mb-12 text-center">
            قصة متجر زيت الزيتون
          </h2>

          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
            {/* Story Section */}
            <div className="p-4 md:p-8 border-b border-green-100">
              <div className="flex items-center mb-4 md:mb-6">
                <FaLeaf className="text-2xl md:text-3xl text-green-700 ml-3 md:ml-4" />
                <h3 className="text-xl md:text-2xl font-semibold text-green-800">
                  رحلتنا
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                بدأت رحلتنا في عام 2010 من مزرعة صغيرة في قلب أراضي الزيتون. هدفنا كان بسيطًا ولكنه طموح: تقديم زيت زيتون عالي الجودة يعكس أصالة وتراث أرضنا. نحن نؤمن بأن كل قطرة من زيتنا تحمل قصة عراقة وتميز.
              </p>
            </div>

            {/* Values Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8">
              <div className="flex items-start space-x-3 md:space-x-4 rtl:space-x-reverse">
                <FaHandHoldingHeart className="text-2xl md:text-3xl text-green-700 mt-1 md:mt-2" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-green-800 mb-2">
                    الجودة أولاً
                  </h4>
                  <p className="text-sm md:text-base text-gray-700">
                    نلتزم بمعايير صارمة في اختيار وإنتاج زيت الزيتون، مع الحفاظ على الجودة الطبيعية والمذاق الأصيل.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4 rtl:space-x-reverse">
                <FaGlobe className="text-2xl md:text-3xl text-green-700 mt-1 md:mt-2" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-green-800 mb-2">
                    الاستدامة
                  </h4>
                  <p className="text-sm md:text-base text-gray-700">
                    نعمل بشكل مستمر على حماية البيئة وتعزيز الممارسات الزراعية المستدامة في مزارعنا.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4 rtl:space-x-reverse">
                <FaTruck className="text-2xl md:text-3xl text-green-700 mt-1 md:mt-2" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-green-800 mb-2">
                    التوصيل
                  </h4>
                  <p className="text-sm md:text-base text-gray-700">
                    نوصل منتجاتنا بعناية فائقة لضمان وصولها إليك طازجة وبأعلى جودة ممكنة.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4 rtl:space-x-reverse">
                <FaHandHoldingHeart className="text-2xl md:text-3xl text-green-700 mt-1 md:mt-2" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-green-800 mb-2">
                    خدمة العملاء
                  </h4>
                  <p className="text-sm md:text-base text-gray-700">
                    نضع رضا عملائنا في أولوياتنا ونسعى دائمًا لتقديم تجربة تسوق مميزة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;