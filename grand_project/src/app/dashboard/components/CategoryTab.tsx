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

  // Comprehensive food database
  const foodDatabase: Record<string, FoodItem[]> = {
    // Desi Breakfast
    'breakfast-desi': [
      { 
        id: '1', 
        name: 'Paratha with Chai', 
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop', 
        prepTime: '20 mins', 
        difficulty: 'Easy',        
      },
      { 
        id: '2', 
        name: 'Halwa Puri', 
        image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop', 
        prepTime: '45 mins', 
        difficulty: 'Medium',        
      },
      { 
        id: '3', 
        name: 'Aloo Paratha', 
        image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop', 
        prepTime: '30 mins', 
        difficulty: 'Easy',
      },
      { 
        id: '4', 
        name: 'Nihari', 
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop', 
        prepTime: '8 hours', 
        difficulty: 'Hard',
      }
    ],

    // French Breakfast
    'breakfast-french': [
      { 
        id: '5', 
        name: 'Croissant', 
        image: 'https://images.unsplash.com/photo-1555507036-ab794f4afe5a?w=400&h=300&fit=crop', 
        prepTime: '15 mins', 
        difficulty: 'Easy',
      },
      { 
        id: '6', 
        name: 'French Toast', 
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop', 
        prepTime: '20 mins', 
        difficulty: 'Easy',
      },
      { 
        id: '7', 
        name: 'Pain au Chocolat', 
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop', 
        prepTime: '25 mins', 
        difficulty: 'Medium',
      }
    ],

    // Italian Breakfast
    'breakfast-italian': [
      { 
        id: '8', 
        name: 'Cappuccino e Cornetto', 
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop', 
        prepTime: '10 mins', 
        difficulty: 'Easy',
      },
      { 
        id: '9', 
        name: 'Frittata', 
        image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop', 
        prepTime: '25 mins', 
        difficulty: 'Medium',
      }
    ],

    // Chinese Breakfast
    'breakfast-chinese': [
      { 
        id: '10', 
        name: 'Congee', 
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop', 
        prepTime: '1 hour', 
        difficulty: 'Easy',
      },
      { 
        id: '11', 
        name: 'Dim Sum', 
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop', 
        prepTime: '45 mins', 
        difficulty: 'Hard',
      }
    ],

    // Desi Lunch
    'lunch-desi': [
      { 
        id: '20', 
        name: 'Chicken Biryani', 
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop', 
        prepTime: '1.5 hours', 
        difficulty: 'Medium',
      },
      { 
        id: '21', 
        name: 'Chicken Karahi', 
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop', 
        prepTime: '45 mins', 
        difficulty: 'Easy',
      },
      { 
        id: '22', 
        name: 'Dal Chawal', 
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop', 
        prepTime: '30 mins', 
        difficulty: 'Easy',
      },
      { 
        id: '23', 
        name: 'Mutton Korma', 
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop', 
        prepTime: '2 hours', 
        difficulty: 'Hard',
      }
    ],

    // Italian Lunch
    'lunch-italian': [
      { 
        id: '24', 
        name: 'Pasta Carbonara', 
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop', 
        prepTime: '20 mins', 
        difficulty: 'Medium',
      },
      { 
        id: '25', 
        name: 'Margherita Pizza', 
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop', 
        prepTime: '30 mins', 
        difficulty: 'Medium',
      },
      { 
        id: '26', 
        name: 'Risotto Milanese', 
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop', 
        prepTime: '40 mins', 
        difficulty: 'Hard',
      }
    ],

    // Chinese Lunch
    'lunch-chinese': [
      { 
        id: '27', 
        name: 'Kung Pao Chicken', 
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop', 
        prepTime: '25 mins', 
        difficulty: 'Medium',
      },
      { 
        id: '28', 
        name: 'Fried Rice', 
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop', 
        prepTime: '15 mins', 
        difficulty: 'Easy',
      },
      { 
        id: '29', 
        name: 'Sweet and Sour Pork', 
        image: 'https://images.unsplash.com/photo-1559847844-d7b79a9d40b8?w=400&h=300&fit=crop', 
        prepTime: '35 mins', 
        difficulty: 'Medium',
      }
    ],

    // French Lunch
    'lunch-french': [
      { 
        id: '30', 
        name: 'Coq au Vin', 
        image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop', 
        prepTime: '2 hours', 
        difficulty: 'Hard',
      },
      { 
        id: '31', 
        name: 'Quiche Lorraine', 
        image: 'https://images.unsplash.com/photo-1565299585323-38174c4a6471?w=400&h=300&fit=crop', 
        prepTime: '1 hour', 
        difficulty: 'Medium',
      }
    ],

    // Desi Dinner
    'dinner-desi': [
      { 
        id: '40', 
        name: 'Seekh Kebab', 
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop', 
        prepTime: '45 mins', 
        difficulty: 'Medium',
      },
      { 
        id: '41', 
        name: 'Palak Paneer', 
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop', 
        prepTime: '40 mins', 
        difficulty: 'Medium',
      },
      { 
        id: '42', 
        name: 'Fish Curry', 
        image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop', 
        prepTime: '35 mins', 
        difficulty: 'Easy',
      }
    ],

    // Italian Dinner
    'dinner-italian': [
      { 
        id: '43', 
        name: 'Osso Buco', 
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop', 
        prepTime: '3 hours', 
        difficulty: 'Hard',
      },
      { 
        id: '44', 
        name: 'Eggplant Parmigiana', 
        image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400&h=300&fit=crop', 
        prepTime: '1.5 hours', 
        difficulty: 'Medium',
      }
    ],

    // Desserts
    'dessert-desi': [
      { 
        id: '50', 
        name: 'Kheer', 
        image: 'https://images.unsplash.com/photo-1571167095814-77d2c1b7ba9d?w=400&h=300&fit=crop', 
        prepTime: '45 mins', 
        difficulty: 'Easy',
      },
      { 
        id: '51', 
        name: 'Gulab Jamun', 
        image: 'https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?w=400&h=300&fit=crop', 
        prepTime: '1 hour', 
        difficulty: 'Medium',
      },
      { 
        id: '52', 
        name: 'Kulfi', 
        image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?w=400&h=300&fit=crop', 
        prepTime: '4 hours', 
        difficulty: 'Easy',
      }
    ],

    'dessert-french': [
      { 
        id: '53', 
        name: 'Crème Brûlée', 
        image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop', 
        prepTime: '2 hours', 
        difficulty: 'Hard',
      },
      { 
        id: '54', 
        name: 'Macarons', 
        image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=300&fit=crop', 
        prepTime: '3 hours', 
        difficulty: 'Hard',
      },
      { 
        id: '55', 
        name: 'Tarte Tatin', 
        image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&h=300&fit=crop', 
        prepTime: '1.5 hours', 
        difficulty: 'Medium',
      }
    ],

    'dessert-italian': [
      { 
        id: '56', 
        name: 'Tiramisu', 
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop', 
        prepTime: '4 hours', 
        difficulty: 'Medium',
      },
      { 
        id: '57', 
        name: 'Panna Cotta', 
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop', 
        prepTime: '3 hours', 
        difficulty: 'Easy',
      },
      { 
        id: '58', 
        name: 'Cannoli', 
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop', 
        prepTime: '2 hours', 
        difficulty: 'Hard',
      }
    ],

    'dessert-chinese': [
      { 
        id: '59', 
        name: 'Mango Pudding', 
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop', 
        prepTime: '2 hours', 
        difficulty: 'Easy',
      },
      { 
        id: '60', 
        name: 'Sesame Balls', 
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop', 
        prepTime: '1 hour', 
        difficulty: 'Medium',
      }
    ],

    // Mexican dishes
    'lunch-mexican': [
      { 
        id: '70', 
        name: 'Tacos al Pastor', 
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop', 
        prepTime: '45 mins', 
        difficulty: 'Medium',
      },
      { 
        id: '71', 
        name: 'Chicken Quesadilla', 
        image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&h=300&fit=crop', 
        prepTime: '20 mins', 
        difficulty: 'Easy',
      }
    ],

    'dinner-mexican': [
      { 
        id: '72', 
        name: 'Enchiladas', 
        image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop', 
        prepTime: '1 hour', 
        difficulty: 'Medium',
      }
    ],

    // Indian dishes (different from Desi/Pakistani)
    'lunch-indian': [
      { 
        id: '80', 
        name: 'Butter Chicken', 
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop', 
        prepTime: '1 hour', 
        difficulty: 'Medium',
      },
      { 
        id: '81', 
        name: 'Masala Dosa', 
        image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop', 
        prepTime: '8 hours', 
        difficulty: 'Hard',
      }
    ],

    'dinner-indian': [
      { 
        id: '82', 
        name: 'Tandoori Chicken', 
        image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop', 
        prepTime: '4 hours', 
        difficulty: 'Medium',
      }
    ],

    // Brunch items
    'brunch-french': [
      { 
        id: '90', 
        name: 'Eggs Benedict', 
        image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop', 
        prepTime: '30 mins', 
        difficulty: 'Medium',
      },
      { 
        id: '91', 
        name: 'Croque Monsieur', 
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop', 
        prepTime: '25 mins', 
        difficulty: 'Easy',
      }
    ],

    'brunch-desi': [
      { 
        id: '92', 
        name: 'Chana Chaat', 
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop', 
        prepTime: '15 mins', 
        difficulty: 'Easy',
      }
    ]
  }

  const getFoodItems = (category: FoodCategory, cuisine: CuisineType): FoodItem[] => {
    const key = `${category}-${cuisine}`
    return foodDatabase[key] || []
  }

  const foodItems = getFoodItems(selectedCategory, selectedCuisine)

  const getEmptyStateMessage = (category: FoodCategory, cuisine: CuisineType) => {
    const categoryLabel = categories.find(c => c.key === category)?.label
    const cuisineLabel = cuisines.find(c => c.key === cuisine)?.label
    return `No ${categoryLabel?.toLowerCase()} recipes available for ${cuisineLabel} cuisine yet.`
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Explore Food Categories
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Browse our collection of authentic recipes by meal type and cuisine
        </p>
      </div>

      {/* Category Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Select Meal Type
        </h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105 ${
                selectedCategory === category.key
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-700 dark:hover:text-emerald-400'
              }`}
            >
              
            </button>
          ))}
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-xl p-4 border border-emerald-200 dark:border-emerald-800">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="text-emerald-700 dark:text-emerald-300 font-medium">
              📍 {categories.find(c => c.key === selectedCategory)?.label} - {cuisines.find(c => c.key === selectedCuisine)?.label} Cuisine
            </span>
            <span className="text-emerald-600 dark:text-emerald-400">
              {foodItems.length} recipes found
            </span>
          </div>
          <div className="flex items-center gap-2">
          
          </div>
        </div>
      </div>

      {/* Food Items Grid */}
      <div>
        {foodItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14-7v2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.511 1.511C16.52 11 15.68 11 14 11H10c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.511-1.511C5 8.52 5 7.68 5 6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No Recipes Found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
              {getEmptyStateMessage(selectedCategory, selectedCuisine)}
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Try selecting a different combination, or check out our popular options:
              </p>
              <div className="flex justify-center gap-2 flex-wrap">
                <button 
                  onClick={() => { setSelectedCategory('breakfast'); setSelectedCuisine('desi'); }}
                  className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-md text-xs hover:bg-emerald-200 dark:hover:bg-emerald-900/40 transition duration-300"
                >
                  Desi Breakfast
                </button>
                <button 
                  onClick={() => { setSelectedCategory('lunch'); setSelectedCuisine('italian'); }}
                  className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-md text-xs hover:bg-emerald-200 dark:hover:bg-emerald-900/40 transition duration-300"
                >
                  Italian Lunch
                </button>
                <button 
                  onClick={() => { setSelectedCategory('dessert'); setSelectedCuisine('french'); }}
                  className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-md text-xs hover:bg-emerald-200 dark:hover:bg-emerald-900/40 transition duration-300"
                >
                  French Desserts
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      {foodItems.length > 0 && (
        <div className="bg-white dark:bg-gray-950 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Collection Statistics</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {foodItems.filter(item => item.difficulty === 'Easy').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Easy Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {foodItems.filter(item => item.difficulty === 'Medium').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Medium Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                {foodItems.filter(item => item.difficulty === 'Hard').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Advanced Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Vegetarian</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CategoryTab