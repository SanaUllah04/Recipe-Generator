"use client"
import { useState } from 'react'

interface Ingredient {
  name: string
  quantity: string
  unit: string
}

interface RecipeResult {
  name: string
  ingredients: Ingredient[]
  description: string
  prepTime: string
  cookTime: string
  servings: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  tips: string[]
}

const RecipeSearchTab = () => {
  const [recipeName, setRecipeName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [recipeResult, setRecipeResult] = useState<RecipeResult | null>(null)
  const [error, setError] = useState('')
  const [searchHistory, setSearchHistory] = useState<string[]>([])

  // Comprehensive recipe database
  const recipeDatabase: Record<string, RecipeResult> = {
    // Pakistani/Desi Recipes
    'biryani': {
      name: 'Chicken Biryani',
      description: 'Aromatic and flavorful Pakistani-style chicken biryani with fragrant basmati rice',
      prepTime: '45 mins',
      cookTime: '1 hour',
      servings: 6,
      difficulty: 'Medium',
      ingredients: [
        { name: 'Basmati Rice', quantity: '3', unit: 'cups' },
        { name: 'Chicken (cut into pieces)', quantity: '1', unit: 'kg' },
        { name: 'Yogurt', quantity: '1', unit: 'cup' },
        { name: 'Onions (sliced)', quantity: '3', unit: 'large' },
        { name: 'Ginger-Garlic Paste', quantity: '2', unit: 'tbsp' },
        { name: 'Biryani Masala', quantity: '2', unit: 'tsp' },
        { name: 'Red Chili Powder', quantity: '1', unit: 'tsp' },
        { name: 'Turmeric Powder', quantity: '1/2', unit: 'tsp' },
        { name: 'Saffron', quantity: '1/4', unit: 'tsp' },
        { name: 'Warm Milk', quantity: '1/4', unit: 'cup' },
        { name: 'Fresh Mint Leaves', quantity: '1/2', unit: 'cup' },
        { name: 'Fresh Coriander', quantity: '1/2', unit: 'cup' },
        { name: 'Ghee', quantity: '4', unit: 'tbsp' },
        { name: 'Cooking Oil', quantity: '3', unit: 'tbsp' },
        { name: 'Salt', quantity: 'to', unit: 'taste' }
      ],
      tips: [
        'Soak basmati rice for 30 minutes before cooking',
        'Fry onions until golden brown for best flavor',
        'Layer the biryani properly for authentic taste',
        'Cook on dum (slow heat) for 45 minutes'
      ]
    },
    'karahi': {
      name: 'Chicken Karahi',
      description: 'Spicy and tangy Pakistani chicken curry cooked in a wok-style karahi',
      prepTime: '20 mins',
      cookTime: '30 mins',
      servings: 4,
      difficulty: 'Easy',
      ingredients: [
        { name: 'Chicken (cut into pieces)', quantity: '750', unit: 'grams' },
        { name: 'Tomatoes (chopped)', quantity: '4', unit: 'large' },
        { name: 'Onions (sliced)', quantity: '2', unit: 'medium' },
        { name: 'Ginger (julienned)', quantity: '2', unit: 'inch piece' },
        { name: 'Green Chilies', quantity: '4-5', unit: 'pieces' },
        { name: 'Garlic (minced)', quantity: '6', unit: 'cloves' },
        { name: 'Red Chili Powder', quantity: '1', unit: 'tsp' },
        { name: 'Coriander Powder', quantity: '1', unit: 'tsp' },
        { name: 'Cumin Powder', quantity: '1/2', unit: 'tsp' },
        { name: 'Garam Masala', quantity: '1/2', unit: 'tsp' },
        { name: 'Cooking Oil', quantity: '3', unit: 'tbsp' },
        { name: 'Fresh Coriander', quantity: '1/4', unit: 'cup' },
        { name: 'Salt', quantity: 'to', unit: 'taste' }
      ],
      tips: [
        'Cook chicken on high heat for better texture',
        'Don\'t add water - let tomatoes create natural gravy',
        'Garnish with fresh ginger and green chilies',
        'Serve hot with naan or rice'
      ]
    },
    'haleem': {
      name: 'Chicken Haleem',
      description: 'Rich and hearty Pakistani stew made with lentils, wheat, and tender chicken',
      prepTime: '4 hours',
      cookTime: '2 hours',
      servings: 8,
      difficulty: 'Hard',
      ingredients: [
        { name: 'Chicken (with bones)', quantity: '1', unit: 'kg' },
        { name: 'Mixed Lentils (soaked)', quantity: '1', unit: 'cup' },
        { name: 'Broken Wheat (daliya)', quantity: '1/2', unit: 'cup' },
        { name: 'Onions (sliced)', quantity: '4', unit: 'large' },
        { name: 'Ginger-Garlic Paste', quantity: '2', unit: 'tbsp' },
        { name: 'Red Chili Powder', quantity: '1', unit: 'tsp' },
        { name: 'Turmeric Powder', quantity: '1/2', unit: 'tsp' },
        { name: 'Cumin Seeds', quantity: '1', unit: 'tsp' },
        { name: 'Whole Garam Masala', quantity: '1', unit: 'tbsp' },
        { name: 'Ghee', quantity: '4', unit: 'tbsp' },
        { name: 'Fresh Mint', quantity: '1/2', unit: 'cup' },
        { name: 'Fresh Coriander', quantity: '1/2', unit: 'cup' },
        { name: 'Lemon Juice', quantity: '2', unit: 'tbsp' },
        { name: 'Salt', quantity: 'to', unit: 'taste' }
      ],
      tips: [
        'Soak lentils and wheat overnight',
        'Cook everything together for 6-8 hours on low heat',
        'Mash well to achieve smooth consistency',
        'Garnish with fried onions, mint, and lemon'
      ]
    },
    // Italian Recipes
    'pasta carbonara': {
      name: 'Pasta Carbonara',
      description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper',
      prepTime: '10 mins',
      cookTime: '15 mins',
      servings: 4,
      difficulty: 'Medium',
      ingredients: [
        { name: 'Spaghetti', quantity: '400', unit: 'grams' },
        { name: 'Pancetta (diced)', quantity: '150', unit: 'grams' },
        { name: 'Large Eggs', quantity: '3', unit: 'whole' },
        { name: 'Egg Yolks', quantity: '2', unit: 'pieces' },
        { name: 'Pecorino Romano (grated)', quantity: '100', unit: 'grams' },
        { name: 'Parmesan (grated)', quantity: '50', unit: 'grams' },
        { name: 'Black Pepper (freshly ground)', quantity: '1', unit: 'tsp' },
        { name: 'Salt', quantity: 'to', unit: 'taste' },
        { name: 'Extra Virgin Olive Oil', quantity: '1', unit: 'tbsp' }
      ],
      tips: [
        'Don\'t use cream - it\'s not traditional',
        'Mix eggs with cheese before adding to pasta',
        'Work quickly to prevent eggs from scrambling',
        'Save pasta water to adjust consistency'
      ]
    },
    'margherita pizza': {
      name: 'Margherita Pizza',
      description: 'Classic Italian pizza with tomato sauce, mozzarella, and fresh basil',
      prepTime: '2 hours',
      cookTime: '12 mins',
      servings: 2,
      difficulty: 'Medium',
      ingredients: [
        { name: 'Pizza Dough', quantity: '1', unit: 'ball' },
        { name: 'San Marzano Tomatoes (crushed)', quantity: '200', unit: 'grams' },
        { name: 'Fresh Mozzarella', quantity: '200', unit: 'grams' },
        { name: 'Fresh Basil Leaves', quantity: '10-12', unit: 'pieces' },
        { name: 'Extra Virgin Olive Oil', quantity: '3', unit: 'tbsp' },
        { name: 'Sea Salt', quantity: '1/2', unit: 'tsp' },
        { name: 'Garlic (minced)', quantity: '2', unit: 'cloves' }
      ],
      tips: [
        'Use high-quality San Marzano tomatoes',
        'Don\'t overload with toppings',
        'Bake at highest possible temperature',
        'Add basil after baking for fresh flavor'
      ]
    },
    // Chinese Recipes
    'fried rice': {
      name: 'Chicken Fried Rice',
      description: 'Classic Chinese stir-fried rice with chicken, vegetables, and soy sauce',
      prepTime: '15 mins',
      cookTime: '10 mins',
      servings: 4,
      difficulty: 'Easy',
      ingredients: [
        { name: 'Cooked Rice (day-old)', quantity: '4', unit: 'cups' },
        { name: 'Chicken Breast (diced)', quantity: '300', unit: 'grams' },
        { name: 'Eggs (beaten)', quantity: '2', unit: 'large' },
        { name: 'Mixed Vegetables', quantity: '1', unit: 'cup' },
        { name: 'Green Onions (chopped)', quantity: '3', unit: 'stalks' },
        { name: 'Garlic (minced)', quantity: '3', unit: 'cloves' },
        { name: 'Ginger (minced)', quantity: '1', unit: 'tsp' },
        { name: 'Soy Sauce', quantity: '3', unit: 'tbsp' },
        { name: 'Sesame Oil', quantity: '1', unit: 'tsp' },
        { name: 'Vegetable Oil', quantity: '3', unit: 'tbsp' },
        { name: 'Salt', quantity: 'to', unit: 'taste' },
        { name: 'White Pepper', quantity: '1/4', unit: 'tsp' }
      ],
      tips: [
        'Use day-old rice for best texture',
        'Cook on high heat throughout',
        'Push rice to one side when adding eggs',
        'Add soy sauce around the edges of the wok'
      ]
    },
    // French Recipes
    'croissant': {
      name: 'Butter Croissants',
      description: 'Flaky, buttery French pastries perfect for breakfast',
      prepTime: '6 hours',
      cookTime: '20 mins',
      servings: 8,
      difficulty: 'Hard',
      ingredients: [
        { name: 'Bread Flour', quantity: '3', unit: 'cups' },
        { name: 'Unsalted Butter (cold)', quantity: '200', unit: 'grams' },
        { name: 'Whole Milk (warm)', quantity: '3/4', unit: 'cup' },
        { name: 'Active Dry Yeast', quantity: '2', unit: 'tsp' },
        { name: 'Sugar', quantity: '2', unit: 'tbsp' },
        { name: 'Salt', quantity: '1', unit: 'tsp' },
        { name: 'Egg (for wash)', quantity: '1', unit: 'large' }
      ],
      tips: [
        'Keep butter cold during lamination',
        'Roll dough evenly for consistent layers',
        'Allow proper proofing time',
        'Bake at high temperature initially'
      ]
    },
    // Breakfast Items
    'pancakes': {
      name: 'Fluffy Pancakes',
      description: 'Light and fluffy American-style pancakes perfect for breakfast',
      prepTime: '10 mins',
      cookTime: '15 mins',
      servings: 4,
      difficulty: 'Easy',
      ingredients: [
        { name: 'All-Purpose Flour', quantity: '2', unit: 'cups' },
        { name: 'Sugar', quantity: '2', unit: 'tbsp' },
        { name: 'Baking Powder', quantity: '2', unit: 'tsp' },
        { name: 'Salt', quantity: '1/2', unit: 'tsp' },
        { name: 'Milk', quantity: '1 3/4', unit: 'cups' },
        { name: 'Large Eggs', quantity: '2', unit: 'pieces' },
        { name: 'Melted Butter', quantity: '4', unit: 'tbsp' },
        { name: 'Vanilla Extract', quantity: '1', unit: 'tsp' }
      ],
      tips: [
        'Don\'t overmix the batter',
        'Let batter rest for 5 minutes',
        'Cook on medium heat',
        'Serve immediately while hot'
      ]
    },
    'chocolate cake': {
      name: 'Rich Chocolate Cake',
      description: 'Moist and decadent chocolate cake perfect for celebrations',
      prepTime: '30 mins',
      cookTime: '35 mins',
      servings: 12,
      difficulty: 'Medium',
      ingredients: [
        { name: 'All-Purpose Flour', quantity: '2', unit: 'cups' },
        { name: 'Cocoa Powder', quantity: '3/4', unit: 'cup' },
        { name: 'Sugar', quantity: '2', unit: 'cups' },
        { name: 'Baking Soda', quantity: '2', unit: 'tsp' },
        { name: 'Baking Powder', quantity: '1', unit: 'tsp' },
        { name: 'Salt', quantity: '1', unit: 'tsp' },
        { name: 'Large Eggs', quantity: '2', unit: 'pieces' },
        { name: 'Buttermilk', quantity: '1', unit: 'cup' },
        { name: 'Hot Coffee', quantity: '1', unit: 'cup' },
        { name: 'Vegetable Oil', quantity: '1/2', unit: 'cup' },
        { name: 'Vanilla Extract', quantity: '2', unit: 'tsp' }
      ],
      tips: [
        'Use room temperature ingredients',
        'Don\'t open oven door while baking',
        'Test with toothpick for doneness',
        'Cool completely before frosting'
      ]
    }
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!recipeName.trim()) return

    setIsLoading(true)
    setError('')
    setRecipeResult(null)

    try {
      // Simulate AI processing time
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const searchKey = recipeName.toLowerCase().trim()
      let foundRecipe = recipeDatabase[searchKey]
      
      // Try partial matching for better user experience
      if (!foundRecipe) {
        const keys = Object.keys(recipeDatabase)
        const partialMatch = keys.find(key => 
          key.includes(searchKey) || searchKey.includes(key)
        )
        if (partialMatch) {
          foundRecipe = recipeDatabase[partialMatch]
        }
      }

      if (foundRecipe) {
        setRecipeResult(foundRecipe)
        setSearchHistory(prev => [recipeName, ...prev.filter(item => item !== recipeName)].slice(0, 5))
      } else {
        setError(`Recipe for "${recipeName}" not found. Try searching for: ${Object.keys(recipeDatabase).slice(0, 5).join(', ')}`)
      }
    } catch (err) {
      setError('Failed to get recipe. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickSearch = (recipe: string) => {
    setRecipeName(recipe)
    setError('')
  }

  const popularRecipes = ['Biryani', 'Karahi', 'Pasta Carbonara', 'Fried Rice', 'Pancakes', 'Chocolate Cake']

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Find Recipe Ingredients
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Enter a recipe name and get detailed ingredients list with cooking tips
        </p>
      </div>

      {/* Quick Search Buttons */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Popular Recipes:</h3>
        <div className="flex flex-wrap gap-2">
          {popularRecipes.map((recipe) => (
            <button
              key={recipe}
              onClick={() => handleQuickSearch(recipe)}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/20 hover:text-emerald-700 dark:hover:text-emerald-400 transition duration-300 text-sm"
            >
              {recipe}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSearch} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            placeholder="Enter recipe name (e.g., Biryani, Pasta Carbonara, Fried Rice)"
            className="w-full px-6 py-4 pr-16 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-300 text-lg"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !recipeName.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white transition duration-300 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </button>
        </div>

        {error && (
          <div className="text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
            {error}
          </div>
        )}
      </form>

      {recipeResult && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-6">
          {/* Recipe Header */}
          <div className="text-center border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {recipeResult.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {recipeResult.description}
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Prep: {recipeResult.prepTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Cook: {recipeResult.cookTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Serves: {recipeResult.servings}</span>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                recipeResult.difficulty === 'Easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                recipeResult.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' :
                'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
              }`}>
                {recipeResult.difficulty}
              </div>
            </div>
          </div>

          {/* Ingredients List */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Ingredients
            </h4>
            <div className="grid gap-3">
              {recipeResult.ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition duration-300"
                >
                  <span className="font-medium text-gray-900 dark:text-white">
                    {ingredient.name}
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cooking Tips */}
          {recipeResult.tips && recipeResult.tips.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Pro Tips
              </h4>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800">
                <ul className="space-y-2">
                  {recipeResult.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-emerald-800 dark:text-emerald-200">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Save Recipe
            </button>
            <button className="flex-1 py-3 px-4 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              Share Recipe
            </button>
            <button className="py-3 px-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-semibold transition duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H9.414a1 1 0 01-.707-.293l-2-2A1 1 0 005.586 6H4a2 2 0 00-2 2v4a2 2 0 002 2h2m3 4h6m-6 0l3-3m-3 3l3 3" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Search History */}
      {searchHistory.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Recent Searches:</h3>
          <div className="flex flex-wrap gap-2">
            {searchHistory.map((search, index) => (
              <button
                key={index}
                onClick={() => handleQuickSearch(search)}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md hover:bg-emerald-100 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-300 text-xs"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default RecipeSearchTab