"use client"
import { useState } from 'react'
import Link from 'next/link'
import RecipeSearchTab from './components/RecipeSearchTab'
import CategoryTab from './components/CategoryTab'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'categories'>('search')

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70 backdrop-filter blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70 backdrop-filter blur-3xl opacity-50" />

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white dark:bg-gray-950 bg-opacity-90 backdrop-filter backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="inline-flex items-center gap-x-3 text-2xl font-semibold text-gray-700 dark:text-gray-300">
                <div className="flex items-center -space-x-3 font-semibold">
                  <span className="h-6 aspect-square bg-emerald-600 dark:bg-emerald-400 rounded-full flex" />
                  <span className="h-6 aspect-square bg-gray-600 dark:bg-white rounded-full flex" />
                </div>
                Recipe Jini
              </Link>
              
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome to Recipe Jini
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Discover amazing recipes and explore cuisines from around the world
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white dark:bg-gray-950 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab('search')}
                className={`flex-1 px-6 py-4 text-sm font-semibold transition duration-300 ${
                  activeTab === 'search'
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Recipe Search
                </div>
              </button>
              <button
                onClick={() => setActiveTab('categories')}
                className={`flex-1 px-6 py-4 text-sm font-semibold transition duration-300 ${
                  activeTab === 'categories'
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14-7v2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.511 1.511C16.52 11 15.68 11 14 11H10c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.511-1.511C5 8.52 5 7.68 5 6V4m14 7v2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.511 1.511C16.52 18 15.68 18 14 18H10c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.511-1.511C5 15.52 5 14.68 5 13v-2" />
                  </svg>
                  Food Categories
                </div>
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'search' && <RecipeSearchTab />}
              {activeTab === 'categories' && <CategoryTab />}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard