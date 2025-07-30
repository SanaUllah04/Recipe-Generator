"use client"
import { useState } from 'react'
import Link from 'next/link'
import RecipeSearchTab from './components/RecipeSearchTab'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'categories'>('search')

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70 backdrop-filter blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70 backdrop-filter blur-3xl opacity-50" />
      <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-emerald-400/5 right-0 -translate-y-[40%] translate-x-[40%] top-0">
        <div className="inset-[10%] rounded-full bg-gradient-to-l from-emerald-400/20">
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-emerald-400/30" />
        </div>
      </div>

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
                Recipe JINI
              </Link>
              
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM4.343 12.344l7.539 7.539m0-7.539l-7.539 7.539M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <button className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                <button  className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition duration-300" >
                  
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome to Recipe JINI
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Discover amazing recipes and explore cuisines from around the world with AI-powered ingredient suggestions
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
                    : 'text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/10'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Recipe Search
                </div>
              </button>
              
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'search' && <RecipeSearchTab />}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard