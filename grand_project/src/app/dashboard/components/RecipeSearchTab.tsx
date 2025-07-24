"use client"
import { useState } from 'react'

interface Ingredient {
  name: string
  quantity: string
  unit: string
}

const RecipeSearchTab = () => {
  const [recipeName, setRecipeName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [error, setError] = useState('')

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!recipeName.trim()) return

    setIsLoading(true)
    setError('')
    setIngredients([])

    try {
      // TODO: Replace with your n8n AI logic API call
      // const response = await fetch('/api/get-ingredients', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ recipeName })
      // })
      // const data = await response.json()
      
      // Mock data for now
      await new Promise(resolve => setTimeout(resolve, 2000))
      const mockIngredients: Ingredient[] = [
        { name: 'Flour', quantity: '2', unit: 'cups' },
        { name: 'Sugar', quantity: '1', unit: 'cup' },
        { name: 'Eggs', quantity: '3', unit: 'pieces' },
        { name: 'Butter', quantity: '100', unit: 'grams' }
      ]
      setIngredients(mockIngredients)
    } catch (err) {
      setError('Failed to get ingredients. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Find Recipe Ingredients
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Enter a recipe name and get the ingredients list powered by AI
        </p>
      </div>

      <form onSubmit={handleSearch} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            placeholder="Enter recipe name (e.g., Chocolate Cake, Biryani, Pasta)"
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

      {ingredients.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Ingredients for {recipeName}
          </h3>
          <div className="grid gap-3">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
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
          
          <div className="flex gap-3 mt-6">
            <button className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition duration-300">
              Save Recipe
            </button>
            <button className="flex-1 py-3 px-4 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg font-semibold transition duration-300">
              Share Recipe
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default RecipeSearchTab