'use client'
import Image from 'next/image'
import { ShoppingCart, Heart, Star } from 'lucide-react'

export default function ProductCard({ product }) {
  const getStockStatus = () => {
    if (product.availableQuantity <= 0) return 'Out of Stock'
    if (product.availableQuantity < 10) return 'Low Stock'
    return 'In Stock'
  }

  // Mock rating for demonstration (you can replace with actual rating from your data)
  const rating = 4.5
  const reviewCount = 24

  return (
    <div className="group relative border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full bg-white">
      {/* Product Image */}
      <div className="relative aspect-square">
        <Image
          src={'/product-placeholder.jpg'}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.availableQuantity <= 0 ? (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Sold Out
            </span>
          ) : product.availableQuantity < 10 ? (
            <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
              Almost Gone
            </span>
          ) : null}
        </div>
        
        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors duration-200">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category and Rating */}
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            Category {product.categoryId}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">
              {rating} ({reviewCount})
            </span>
          </div>
        </div>
        
        {/* Product Name */}
        <h3 className="font-semibold text-lg mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Product Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        {/* Price and Quantity */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="font-bold text-xl text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.availableQuantity > 10 && (
                <span className="ml-2 text-xs text-green-600 font-medium">
                  Free Shipping
                </span>
              )}
            </div>
            {product.availableQuantity > 0 && (
              <span className="text-xs text-gray-500">
                {product.availableQuantity} left
              </span>
            )}
          </div>
          
          {/* Add to Cart Button */}
          <button 
            className={`w-full flex items-center justify-center py-3 px-4 rounded-lg transition-all duration-200 ${
              product.availableQuantity <= 0 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md'
            }`}
            disabled={product.availableQuantity <= 0}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {product.availableQuantity <= 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}