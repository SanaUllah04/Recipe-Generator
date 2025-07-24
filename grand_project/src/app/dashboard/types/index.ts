export type FoodCategory = 'breakfast' | 'brunch' | 'lunch' | 'dinner' | 'dessert'

export type CuisineType = 'desi' | 'french' | 'italian' | 'chinese' | 'mexican' | 'indian'

export interface FoodItem {
  id: string
  name: string
  image?: string
  prepTime: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
}

export interface Ingredient {
  name: string
  quantity: string
  unit: string
}

export interface Recipe {
  id: string
  name: string
  category: FoodCategory
  cuisine: CuisineType
  ingredients: Ingredient[]
  instructions: string[]
  prepTime: string
  cookTime: string
  servings: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  image?: string
}