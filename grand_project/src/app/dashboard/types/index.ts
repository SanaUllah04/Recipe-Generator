export type FoodCategory = 'breakfast' | 'brunch' | 'lunch' | 'dinner' | 'dessert'

export type CuisineType = 'desi' | 'french' | 'italian' | 'chinese' | 'mexican' | 'indian'

export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export interface FoodItem {
  id: string
  name: string
  image?: string
  prepTime: string
  difficulty: Difficulty
  description?: string
  isVegetarian?: boolean
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
  difficulty: Difficulty
  image?: string
  description?: string
  tips?: string[]
  isVegetarian?: boolean
}

export interface CategoryOption {
  key: FoodCategory
  label: string
  icon: string
}

export interface CuisineOption {
  key: CuisineType
  label: string
  flag: string
}

export interface RecipeSearchResult {
  name: string
  ingredients: Ingredient[]
  description: string
  prepTime: string
  cookTime: string
  servings: number
  difficulty: Difficulty
  tips: string[]
}