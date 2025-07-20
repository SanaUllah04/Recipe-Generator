"use client"
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false)
  const toggleNavbar = () => {
    setOpenNavbar(openNavbar => !openNavbar)
  }
  return (
    <header className="absolute top-0 inset-x-0 z-50 h-24 flex items-center">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 h-full items-center">
        <nav className="flex justify-between items-center h-full">
          <div className="flex min-w-max items-center">
            <Link href="/" className="flex items-center gap-x-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
              <div className="flex items-center -space-x-3 font-semibold">
                <span className="h-6 aspect-square bg-emerald-600 dark:bg-emerald-400 rounded-full flex" />
                <span className="h-6 aspect-square bg-gray-600 dark:bg-white rounded-full flex" />
              </div>
              Recipe Jini
            </Link>
          </div>
          <div className={`
              flex flex-col space-y-10 inset-0 fixed top-0  h-[100dvh] bg-white dark:bg-gray-950 lg:!bg-transparent py-20 px-5 sm:px-10 md:px-14
              transition-all ease-linear duration-300 lg:flex-row lg:flex-1 lg:py-0 lg:px-0 lg:space-y-0 lg:gap-x-10 lg:relative lg:top-0 lg:h-full lg:items-center lg:justify-between lg:w-max
              ${openNavbar ? "visible opacity-100 translate-y-0" : "-translate-y-9 opacity-0 invisible lg:translate-y-0 lg:visible lg:opacity-100"}
            `}>
            <ul className="flex flex-col gap-y-5 text-gray-700 dark:text-gray-300 lg:items-center lg:flex-row lg:gap-x-5 lg:h-full lg:justify-center lg:flex-1">
              <li>
                <Link href="..#" className="transition ease-linear hover:text-gray-900 dark:hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition ease-linear hover:text-gray-900 dark:hover:text-white text-emerald-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition ease-linear hover:text-gray-900 dark:hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/company" className="transition ease-linear hover:text-gray-900 dark:hover:text-white">
                  Company
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-end relative z-60 lg:hidden">
            <button onClick={toggleNavbar} className="p-3 rounded-full bg-emerald-600 dark:bg-emerald-500 outline-none w-12 aspect-square flex flex-col relative justify-center items-center">
              <span className="sr-only">toggle navbar</span>
              <span className={`w-6 h-0.5 rounded-full bg-gray-300 transition-transform duration-300 ease-linear ${openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""}`} />
              <span className={`w-6 origin-center  mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear ${openNavbar ? "scale-x-0 opacity-0" : ""}`} />
              <span className={`w-6 mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear ${openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""}`} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

const ProductsPage = () => {
  const cuisines = [
    {
      name: "Italian Cuisine",
      description: "Authentic Italian recipes from pasta to pizza, risotto to gelato",
      image: "🍝",
      recipes: 1200,
      popular: ["Spaghetti Carbonara", "Margherita Pizza", "Risotto Milanese", "Tiramisu"]
    },
    {
      name: "Chinese Cuisine",
      description: "Traditional and modern Chinese dishes from all regions",
      image: "🥟",
      recipes: 980,
      popular: ["Kung Pao Chicken", "Fried Rice", "Dumplings", "Sweet & Sour Pork"]
    },
    {
      name: "Desi Cuisine",
      description: "Rich South Asian flavors with authentic spices and techniques",
      image: "🍛",
      recipes: 1450,
      popular: ["Biryani", "Butter Chicken", "Dal Tadka", "Naan Bread"]
    },
    {
      name: "Mexican Cuisine",
      description: "Vibrant Mexican flavors from street food to traditional dishes",
      image: "🌮",
      recipes: 850,
      popular: ["Tacos Al Pastor", "Guacamole", "Enchiladas", "Churros"]
    },
    {
      name: "Japanese Cuisine",
      description: "Delicate Japanese cooking from sushi to ramen",
      image: "🍜",
      recipes: 720,
      popular: ["Sushi Rolls", "Ramen", "Tempura", "Miso Soup"]
    },
    {
      name: "French Cuisine",
      description: "Classic French cooking techniques and elegant dishes",
      image: "🥐",
      recipes: 650,
      popular: ["Coq au Vin", "Croissants", "French Onion Soup", "Crème Brûlée"]
    },
    {
      name: "Mediterranean",
      description: "Healthy Mediterranean diet with fresh ingredients",
      image: "🥗",
      recipes: 580,
      popular: ["Greek Salad", "Hummus", "Grilled Fish", "Olive Tapenade"]
    },
    {
      name: "Thai Cuisine",
      description: "Bold Thai flavors with perfect balance of sweet, sour, and spicy",
      image: "🍲",
      recipes: 470,
      popular: ["Pad Thai", "Tom Yum Soup", "Green Curry", "Mango Sticky Rice"]
    }
  ]

  const features = [
    {
      icon: "🔍",
      title: "Smart Recipe Search",
      description: "Find any recipe instantly with AI-powered search"
    },
    {
      icon: "⚙️",
      title: "Custom Modifications",
      description: "Adjust ingredients, portions, and dietary preferences"
    },
    {
      icon: "📊",
      title: "Nutrition Analysis",
      description: "Get detailed nutritional information for every recipe"
    },
    {
      icon: "⏱️",
      title: "Cooking Timer",
      description: "Built-in timers and step-by-step cooking guidance"
    }
  ]

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70 backdrop-filter blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70 backdrop-filter blur-3xl opacity-50" />
          
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="text-center max-w-4xl mx-auto">
              <span className="border border-gray-500 px-3 py-0.5 rounded-full bg-gray-50 dark:bg-gray-950 bg-opacity-50 text-gray-700 dark:text-gray-300 mb-6 inline-block">
                Recipe Products
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Discover Recipes from Around the World
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Access thousands of authentic recipes from every cuisine. Customize ingredients, adjust portions, and get step-by-step cooking guidance powered by AI.
              </p>
            </div>
          </div>
        </section>

        {/* Cuisine Grid */}
        <section className="py-20">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Explore Global Cuisines
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                From Italian pasta to Indian curries, discover authentic recipes from every corner of the world
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cuisines.map((cuisine, index) => (
                <div key={index} className="bg-white dark:bg-gray-950 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-600 group">
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-3">{cuisine.image}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {cuisine.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {cuisine.description}
                    </p>
                    <div className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold">
                      {cuisine.recipes}+ Recipes
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Popular dishes:</p>
                    {cuisine.popular.map((dish, dishIndex) => (
                      <div key={dishIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{dish}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 group-hover:bg-emerald-700">
                    Explore Recipes
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Powerful Recipe Features
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our AI-powered platform makes cooking easier with smart features designed for modern home chefs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700"></div>
          <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Cooking Amazing Meals Today
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of home chefs who discover new recipes and improve their cooking with Recipe Jini
              </p>
              <Link href="/signin" className="inline-flex items-center gap-x-3 bg-white text-emerald-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300">
                Get Started Free
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductsPage