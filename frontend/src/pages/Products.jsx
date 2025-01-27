import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, X, Heart, Eye } from 'lucide-react'

const categories = [
  {
    id: 'olive-oil',
    name: 'زيت الزيتون البكر الممتاز',
    description: 'زيت زيتون عضوي معصور على البارد من أجود أصناف الزيتون المغربي، غني بمضادات الأكسدة والفيتامينات',
    categorieImage: 'https://i.pinimg.com/originals/3e/08/76/3e087634965157b063fc0862b63566bc.jpg',
  },
  {
    id: 'honey',
    name: 'العسل الجبلي الطبيعي',
    description: 'عسل نقي 100% من مناحل الأطلس المغربي، يتم جمعه بعناية للحفاظ على جميع فوائده الطبيعية',
    categorieImage: 'https://media.gettyimages.com/id/1093966734/photo/honey-jar-with-honey-dipper-shot-on-rustic-wooden-table.jpg?s=612x612&w=0&k=20&c=L9IKs_ESNZ9bPdAvxU2vLOESQ26JnLQ1LW6CE2PRlzk=',
  },
  {
    id: 'herbs',
    name: 'الأعشاب الطبية التقليدية',
    description: 'تشكيلة مختارة من الأعشاب المغربية الأصيلة، مجففة بطرق طبيعية للحفاظ على خصائصها العلاجية',
    categorieImage: 'https://media.istockphoto.com/id/504069254/photo/fresh-herbs-on-wooden-background.jpg?s=612x612&w=0&k=20&c=UmuG3l9qSQDu0cOjjVG-9lfTMEYoOYoILa7oYGGsRmc=',
  }
]

const allProducts = [
  // زيت الزيتون
  {
    id: 1,
    name: 'زيت زيتون عضوي - 1 لتر',
    price: '150 درهم',
    description: 'زيت زيتون بكر ممتاز معصور على البارد، عضوي 100%',
    image: 'https://m.media-amazon.com/images/I/71i7AFjvfLL.jpg',
    categoryId: 'olive-oil'
  },
  {
    id: 2,
    name: 'زيت زيتون عضوي - 2 لتر',
    price: '280 درهم',
    description: 'زيت زيتون بكر ممتاز معصور على البارد - عبوة عائلية',
    image: 'https://aljouf.com/image/cache/catalog/Products%202024/1-700x700.png',
    categoryId: 'olive-oil'
  },
  {
    id: 3,
    name: 'زيت زيتون بكر ممتاز - 500 مل',
    price: '85 درهم',
    description: 'زيت زيتون بكر ممتاز للاستخدام اليومي، غني بمضادات الأكسدة',
    image: 'https://media.zid.store/ce084504-e42c-44aa-abb9-f560e05f013a/f36efe95-7c15-4a13-83c6-529d26cddb5b.jpg',
    categoryId: 'olive-oil'
  },
  {
    id: 4,
    name: 'زيت زيتون مع الأعشاب - 750 مل',
    price: '120 درهم',
    description: 'زيت زيتون منكه بالأعشاب العطرية، مثالي للسلطات',
    image: 'https://m.media-amazon.com/images/I/61ajZ9F7wKL.jpg',
    categoryId: 'olive-oil'
  },
  {
    id: 5,
    name: 'زيت زيتون للطبخ - 3 لتر',
    price: '380 درهم',
    description: 'زيت زيتون عالي الجودة مخصص للطبخ، عبوة اقتصادية',
    image: 'https://m.media-amazon.com/images/I/512Sbwv-ZlL.jpg',
    categoryId: 'olive-oil'
  },
  {
    id: 6,
    name: 'زيت زيتون فاخر - 1 لتر',
    price: '200 درهم',
    description: 'زيت زيتون فاخر من أجود أنواع الزيتون، تعبئة خاصة',
    image: 'https://m.media-amazon.com/images/I/51BM-Fw-QcL.jpg',
    categoryId: 'olive-oil'
  },

  // العسل
  {
    id: 7,
    name: 'عسل الأزهار البري - 500 جرام',
    price: '200 درهم',
    description: 'عسل طبيعي 100% من جبال الأطلس',
    image: 'https://cdn.salla.sa/Agdd/QACA6Dzn0Sw9u18XK23VCL9ps83ddW8JsfAJP99j.jpg',
    categoryId: 'honey'
  },
  {
    id: 8,
    name: 'عسل السدر - 1 كيلو',
    price: '450 درهم',
    description: 'عسل سدر طبيعي 100% من جبال الأطلس',
    image: 'https://cdn.salla.sa/YDabo/E8v6gEjYiFGPJX2yXM1IamqVvfcSwxzbMtYbEvGw.png',
    categoryId: 'honey'
  },
  {
    id: 9,
    name: 'عسل الزهور المتنوع - 750 جرام',
    price: '280 درهم',
    description: 'عسل متعدد الأزهار، نكهة غنية ومذاق فريد',
    image: 'https://cdn.salla.sa/YDabo/fkmxXQNF3MpWBBEXvqbVWX4Y5uVNV9OTeQ6X5uOX.png',
    categoryId: 'honey'
  },
  {
    id: 10,
    name: 'عسل الأكاسيا - 500 جرام',
    price: '220 درهم',
    description: 'عسل أكاسيا نقي، لون ذهبي فاتح ونكهة معتدلة',
    image: 'https://media.zid.store/65730a34-b013-4500-b975-df2ee30686dc/126dd2a7-8a96-42de-82a7-5b0218dca383.jpg',
    categoryId: 'honey'
  },
  {
    id: 11,
    name: 'عسل الليمون - 350 جرام',
    price: '180 درهم',
    description: 'عسل بنكهة الليمون الطبيعية، مثالي للمشروبات الساخنة',
    image: 'https://cdn.salla.sa/twCvt01dz8kwQibKgxLKeWbrCoQOnWm0IbE8kHDP.png',
    categoryId: 'honey'
  },
  {
    id: 12,
    name: 'عسل الجبل الصافي - 1 كيلو',
    price: '400 درهم',
    description: 'عسل جبلي صافي 100%، معبأ بطريقة تقليدية',
    image: 'https://m.media-amazon.com/images/I/71cyBtI5rlL.jpg',
    categoryId: 'honey'
  },

  // الأعشاب
  {
    id: 13,
    name: 'زعتر بلدي فاخر',
    price: '50 درهم',
    description: 'زعتر بلدي مجفف، معبأ يدوياً',
    image: 'https://m.media-amazon.com/images/I/617QcXud3AL.jpg',
    categoryId: 'herbs'
  },
  {
    id: 14,
    name: 'أوراق النعناع المجففة',
    price: '40 درهم',
    description: 'نعناع مجفف طبيعياً، مثالي للشاي والمشروبات',
    image: 'https://m.media-amazon.com/images/I/81WfGdeRzDL.jpg',
    categoryId: 'herbs'
  },
  {
    id: 15,
    name: 'إكليل الجبل الطازج',
    price: '45 درهم',
    description: 'إكليل الجبل طازج، مثالي للطبخ والشاي',
    image: 'https://img.youm7.com/ArticleImgs/2022/5/17/64785-%D9%88%D8%B5%D9%81%D8%A7%D8%AA-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A9-%D9%85%D9%86-%D8%A5%D9%83%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%AC%D8%A8%D9%84-%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D8%B4%D8%B9%D8%B1.jpg',
    categoryId: 'herbs'
  },
  {
    id: 16,
    name: 'خليط الأعشاب المغربية',
    price: '60 درهم',
    description: 'مزيج من الأعشاب المغربية التقليدية للشاي',
    image: 'https://coffeekinds.b-cdn.net/wp-content/uploads/2021/11/%D8%A7%D9%84%D8%B4%D8%A7%D9%8A-%D8%A7%D9%84%D8%A3%D8%AE%D8%B6%D8%B1-%D8%A3%D9%85-%D8%A7%D9%84%D8%A3%D8%B3%D9%88%D8%AF-768x576.webp',
    categoryId: 'herbs'
  },
  {
    id: 17,
    name: 'الزعفران النقي',
    price: '150 درهم',
    description: 'زعفران مغربي أصلي عالي الجودة',
    image: 'https://qaenat.com/cdn/shop/files/Untitled_design_-_2024-11-28T150853.966.png?v=1732792169&width=1080',
    categoryId: 'herbs'
  },
  {
    id: 18,
    name: 'الريحان المجفف',
    price: '35 درهم',
    description: 'ريحان مجفف طبيعياً، نكهة قوية وعطرية',
    image: 'https://static.zarahome.net/assets/public/b330/7e17/8a0d4e678f0a/cbf9ef56ec49/45411700537-p1/45411700537-p1.jpg?ts=1721229620132&f=auto&w=576',
    categoryId: 'herbs'
  }
]



// Categories and Products data remain the same...
// (Previous categories and allProducts arrays remain unchanged)

const Products = () => {
  const { categoryId } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState(categoryId || 'all')
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    if (categoryId) {
      setSelectedCategory(categoryId)
    }
  }, [categoryId])

  const handleCategoryChange = (categoryId) => {
    if (categoryId === 'all') {
      navigate('/products')
    } else {
      navigate(`/products/${categoryId}`)
    }
    setSelectedCategory(categoryId)
  }

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const filteredProducts = selectedCategory === 'all'
    ? allProducts
    : allProducts.filter(product => product.categoryId === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Categories Navigation */}
        <div className="mb-12">
          {/* Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCategoryChange(category.id)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                  selectedCategory === category.id ? 'ring-2 ring-green-800' : ''
                }`}
              >
                <div className="aspect-[16/9]">
                  <img
                    src={category.categorieImage}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <h3 className="text-white text-lg sm:text-xl font-semibold mb-1 font-arabic">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm line-clamp-2 font-arabic">
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Filter Buttons */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex overflow-x-auto gap-2 sm:gap-3 pb-4 scrollbar-hide -mx-4 sm:mx-0 px-4 sm:px-0"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange('all')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap font-arabic
                ${selectedCategory === 'all'
                  ? 'bg-green-800 text-white shadow-lg'
                  : 'bg-white text-green-800 hover:bg-green-800 hover:text-white'}`}
            >
              جميع المنتجات
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap font-arabic
                  ${selectedCategory === category.id
                    ? 'bg-green-800 text-white shadow-lg'
                    : 'bg-white text-green-800 hover:bg-green-800 hover:text-white'}`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setQuickViewProduct(product)}
                        className="flex-1 bg-white/90 backdrop-blur-sm py-3 rounded-xl flex items-center justify-center gap-2 text-green-800 font-arabic"
                      >
                        <Eye size={18} />
                        <span>عرض سريع</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleFavorite(product.id)}
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-xl text-green-800"
                      >
                        <Heart
                          size={18}
                          fill={favorites.includes(product.id) ? "currentColor" : "none"}
                        />
                      </motion.button>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-green-900 font-arabic">{product.name}</h3>
                  <p className="text-green-700/80 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 font-arabic">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-base sm:text-lg font-bold text-green-800">{product.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addToCart(product)}
                      className="p-3 bg-green-800 text-white rounded-xl hover:bg-green-900 transition-colors duration-300"
                    >
                      <ShoppingBag size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Quick View Modal */}
        <AnimatePresence>
          {quickViewProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
              onClick={() => setQuickViewProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl sm:rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                  <div className="relative aspect-square">
                    <img
                      src={quickViewProduct.image}
                      alt={quickViewProduct.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setQuickViewProduct(null)}
                      className="absolute top-2 sm:top-4 right-2 sm:right-4 p-2 bg-white/90 backdrop-blur-sm rounded-xl text-green-800"
                    >
                      <X size={18} className="sm:w-5 sm:h-5" />
                    </button>
                  </div>
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-green-900 font-arabic">{quickViewProduct.name}</h2>
                    <p className="text-green-700/80 mb-4 sm:mb-6 text-sm sm:text-base font-arabic">{quickViewProduct.description}</p>
                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                      <span className="text-xl sm:text-2xl font-bold text-green-800">{quickViewProduct.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleFavorite(quickViewProduct.id)}
                        className={`p-3 rounded-xl border ${
                          favorites.includes(quickViewProduct.id)
                            ? 'bg-red-50 border-red-200 text-red-500'
                            : 'border-green-200 hover:border-green-300 text-green-800'
                        }`}
                      >
                        <Heart
                          size={20}
                          fill={favorites.includes(quickViewProduct.id) ? "currentColor" : "none"}
                        />
                      </motion.button>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        addToCart(quickViewProduct)
                        setQuickViewProduct(null)
                      }}
                      className="w-full bg-green-800 text-white py-4 rounded-xl hover:bg-green-900 transition-colors duration-300 flex items-center justify-center gap-2 font-arabic"
                    >
                      <ShoppingBag size={20} />
                      إضافة إلى السلة
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Products