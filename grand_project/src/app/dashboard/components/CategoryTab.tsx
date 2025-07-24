"use client"
import { useState } from 'react'
import FoodCard from './FoodCard'
import { FoodCategory, CuisineType, FoodItem } from '../types'

const CategoryTab = () => {
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory>('breakfast')
  const [selectedCuisine, setSelectedCuisine] = useState<CuisineType>('desi')

  const categories: { key: FoodCategory; label: string; icon: string }[] = [
    { key: 'breakfast', label: 'Breakfast', icon: '🌅' },
    { key: 'brunch', label: 'Brunch', icon: '🥐' },
    { key: 'lunch', label: 'Lunch', icon: '🍽️' },
    { key: 'dinner', label: 'Dinner', icon: '🌙' },
    { key: 'dessert', label: 'Dessert', icon: '🍰' }
  ]

  const cuisines: { key: CuisineType; label: string; flag: string }[] = [
    { key: 'desi', label: 'Desi', flag: '🇵🇰' },
    { key: 'french', label: 'French', flag: '🇫🇷' },
    { key: 'italian', label: 'Italian', flag: '🇮🇹' },
    { key: 'chinese', label: 'Chinese', flag: '🇨🇳' },
    { key: 'mexican', label: 'Mexican', flag: '🇲🇽' },
    { key: 'indian', label: 'Indian', flag: '🇮🇳' }
  ]

  // Mock data - replace with actual data
  const getFoodItems = (category: FoodCategory, cuisine: CuisineType): FoodItem[] => {
    const mockItems: Record<string, FoodItem[]> = {
      'breakfast-desi': [
        { id: '1', name: 'Paratha with Chai', image: '/api/placeholder/300/200', prepTime: '20 mins', difficulty: 'Easy' },
        { id: '2', name: 'Halwa Puri', image: '/api/placeholder/300/200', prepTime: '45 mins', difficulty: 'Medium' },
        { id: '3', name: 'Aloo Paratha', image: '/api/placeholder/300/200', prepTime: '30 mins', difficulty: 'Easy' }
      ],
      'breakfast-french': [
        { id: '4', name: 'Croissant', image: '/api/placeholder/300/200', prepTime: '15 mins', difficulty: 'Easy' },
        { id: '5', name: 'French Toast', image: '/api/placeholder/300/200', prepTime: '20 mins', difficulty: 'Easy' }
      ],
      'lunch-italian': [
        { id: '6', name: 'Pasta Carbonara', image: '/api/placeholder/300/200', prepTime: '25 mins', difficulty: 'Medium' },
        { id: '7', name: 'Margherita Pizza', image: '/api/placeholder/300/200', prepTime: '35 mins', difficulty: 'Medium' }
      ]
    }
    
    return mockItems[`${category}-${cuisine}`] || []
  }

  const foodItems = getFoodItems(selectedCategory, selectedCuisine)

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Explore Food Categories
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Browse recipes by meal type and cuisine
        </p>
      </div>

      {/* Category Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Select Meal Type
        </h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-xl font-semibold transition duration-300 ${
                selectedCategory === category.key
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cuisine Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Select Cuisine
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {cuisines.map((cuisine) => (
            <button
              key={cuisine.key}
              onClick={() => setSelectedCuisine(cuisine.key)}
              className={`p-4 rounded-xl font-semibold transition duration-300 text-center ${
                selectedCuisine === cuisine.key
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
              }`}
            >
              <div className="text-2xl mb-1">{cuisine.flag}</div>
              <div className="text-sm">{cuisine.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Food Items Grid */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          {categories.find(c => c.key === selectedCategory)?.label} - {cuisines.find(c => c.key === selectedCuisine)?.label} Cuisine
        </h3>
        
        {foodItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14-7v2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.511 1.511C16.52 11 15.68 11 14 11H10c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.511-1.511C5 8.52 5 7.68 5 6V4" />
              </svg>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              No recipes available for this combination yet.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
              Try selecting a different cuisine or meal type.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryTab