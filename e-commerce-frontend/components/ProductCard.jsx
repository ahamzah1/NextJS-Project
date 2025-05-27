'use client'
import Image from 'next/image'
import { ShoppingCart, Heart } from 'lucide-react'

/**
 * @typedef {Object} ProductResponse
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {number} availableQuantity
 * @property {number} price
 * @property {number} categoryId
 */

/**
 * @param {{ product: ProductResponse }} props
 */
export default function ProductCard({ product }) {
  // Helper to show stock status
  const getStockStatus = () => {
    if (product.availableQuantity <= 0) return 'Out of Stock'
    if (product.availableQuantity < 10) return 'Low Stock'
    return 'In Stock'
  }

  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
      {/* Product Image with Stock Badge */}
      <div className="relative aspect-square">
        <Image
          src={'/product-placeholder.jpg'} // Replace with your actual image path
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Stock Status Badge */}
        <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${
          product.availableQuantity <= 0 ? 'bg-red-100 text-red-800' : 
          product.availableQuantity < 10 ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'
        }`}>
          {getStockStatus()}
        </div>
        
        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm">
          <Heart className="w-4 h-4" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs text-gray-500">Category ID: {product.categoryId}</span>
          <h3 className="font-medium text-lg line-clamp-2">{product.name}</h3>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
          {product.description}
        </p>
        
        {/* Price */}
        <div className="mb-3">
          <span className="font-bold text-lg">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        {/* Quantity Available */}
        {product.availableQuantity > 0 && (
          <p className="text-xs text-gray-500 mb-3">
            {product.availableQuantity} available
          </p>
        )}

        {/* Add to Cart Button */}
        <button 
          className={`w-full mt-auto flex items-center justify-center py-2 px-4 rounded-md ${
            product.availableQuantity <= 0 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
          disabled={product.availableQuantity <= 0}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.availableQuantity <= 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}