const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">من نحن</h1>
        <p className="text-xl text-gray-600">تعرف على قصتنا وقيمنا</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">قصتنا</h2>
          <p className="text-gray-600 leading-relaxed">
            نحن تعاونية مغربية متخصصة في إنتاج وتسويق المنتجات الطبيعية عالية الجودة. 
            نعمل مع المزارعين المحليين والحرفيين التقليديين لتقديم أفضل المنتجات الطبيعية 
            من مختلف مناطق المغرب.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">مهمتنا</h2>
          <p className="text-gray-600 leading-relaxed">
            نسعى إلى الحفاظ على التقاليد المغربية العريقة في إنتاج المنتجات الطبيعية، 
            مع الالتزام بأعلى معايير الجودة والاستدامة. هدفنا هو تقديم منتجات طبيعية 
            خالصة لعملائنا مع دعم المجتمعات المحلية.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">قيمنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">الجودة</h3>
            <p className="text-gray-600">نلتزم بتقديم أعلى معايير الجودة في جميع منتجاتنا</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">الاستدامة</h3>
            <p className="text-gray-600">نحرص على اتباع ممارسات مستدامة في جميع مراحل الإنتاج</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">الشفافية</h3>
            <p className="text-gray-600">نؤمن بالشفافية الكاملة في عملياتنا وعلاقاتنا مع العملاء</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
