import React from 'react';
import { Leaf, Droplet, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-olive-50 to-white min-h-screen" dir="rtl">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-olive-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-olive-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-olive-100 rounded-full">
              <span className="text-olive-800 font-medium">منتج طبيعي 100%</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-olive-900 leading-tight">
              زيت زيتون فلسطيني
              <span className="block text-olive-700">عضوي ممتاز</span>
            </h1>

            <p className="text-olive-700 text-lg leading-relaxed">
              اكتشف جودة زيت الزيتون الفاخر المستخرج من أفضل الزيتون الطازج. نقدم لك تجربة طعم أصيلة ومذاق نقي مباشرة من المزرعة إلى مائدتك.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-olive-800 text-white px-8 py-4 rounded-full hover:bg-olive-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
                تسوق الآن
              </button>
              <button className="bg-white text-olive-800 px-8 py-4 rounded-full border-2 border-olive-800 hover:bg-olive-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                اكتشف المزيد
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-olive-200">
              <div className="text-center">
                <div className="bg-olive-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="text-olive-700 w-6 h-6" />
                </div>
                <span className="block text-olive-800 font-medium">طبيعي 100%</span>
              </div>
              <div className="text-center">
                <div className="bg-olive-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Droplet className="text-olive-700 w-6 h-6" />
                </div>
                <span className="block text-olive-800 font-medium">عضوي</span>
              </div>
              <div className="text-center">
                <div className="bg-olive-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-olive-700 w-6 h-6" />
                </div>
                <span className="block text-olive-800 font-medium">جائزة الجودة</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-olive-200 rounded-3xl blur-2xl transform -rotate-6"></div>
            <div className="relative">
              <img 
                src="https://fekkai.com/cdn/shop/articles/The_Healing_Power_of_Olive_Oil.jpg?v=1636647953" 
                alt="زيت زيتون عضوي" 
                className="w-full rounded-3xl shadow-2xl transform hover:scale-102 transition duration-500 object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-olive-100 p-2 rounded-full">
                    <Award className="text-olive-700 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-olive-900">جودة ممتازة</p>
                    <p className="text-sm text-olive-600">معتمد عالمياً</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;