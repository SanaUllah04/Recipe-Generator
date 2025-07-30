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
              Recipe JINI
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
                <Link href="/products" className="transition ease-linear hover:text-gray-900 dark:hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition ease-linear hover:text-gray-900 dark:hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/company" className="transition ease-linear hover:text-gray-900 dark:hover:text-white text-emerald-600">
                  Company
                </Link>
              </li>
            </ul>
              <div className="w-full flex sm:w-max lg:min-w-max lg:items-center">
              <Link href="https://sanaullah04.github.io/SanaUllahTheLearner.github.io/#" className="flex justify-center gap-x-3 items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white
                      border-b bg-gray-700 dark:border-blue-300 hover:border-b-gray-900 dark:hover:border-b-white bg-transparent">
                About Creator
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
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

const CompanyPage = () => {
  const stats = [
    { number: "2M+", label: "Recipes Generated", icon: "🍳" },
    { number: "500K+", label: "Active Users", icon: "👥" },
    { number: "150+", label: "Countries Served", icon: "🌍" },
    { number: "99.9%", label: "Uptime", icon: "⚡" }
  ]

  const team = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Co-Founder",
      image: "👩‍💼",
      description: "Former head chef with 15+ years in culinary arts. Passionate about making cooking accessible to everyone.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "David Chen",
      role: "CTO & Co-Founder",
      image: "👨‍💻",
      description: "AI/ML expert with background in food science. Previously at Google and Tesla, building intelligent systems.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Product",
      image: "👩‍🔬",
      description: "Product strategist focused on user experience. Former product manager at Uber and Airbnb.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "James Thompson",
      role: "Head of Engineering",
      image: "👨‍⚙️",
      description: "Full-stack architect with expertise in scalable systems. Previously led engineering teams at Netflix.",
      social: { linkedin: "#", twitter: "#" }
    }
  ]

  const timeline = [
    {
      year: "2020",
      title: "The Idea",
      description: "Two food enthusiasts realized the need for personalized, AI-powered recipe solutions."
    },
    {
      year: "2021",
      title: "MVP Launch",
      description: "Launched the first version with 10,000 recipes and basic customization features."
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Introduced machine learning algorithms for personalized recipe recommendations."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Reached 100+ countries with localized cuisine databases and multi-language support."
    },
    {
      year: "2024",
      title: "Enterprise Solutions",
      description: "Launched B2B services for restaurants and food brands with API integrations."
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Working on AR cooking assistance and IoT kitchen device integration."
    }
  ]

  const values = [
    {
      icon: "🎯",
      title: "Innovation First",
      description: "We continuously push the boundaries of culinary technology to create better cooking experiences."
    },
    {
      icon: "🤝",
      title: "Community Driven",
      description: "Our platform thrives on community feedback and user-generated content from home cooks worldwide."
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description: "We promote sustainable cooking practices and help reduce food waste through smart ingredient usage."
    },
    {
      icon: "🔒",
      title: "Privacy & Security",
      description: "We protect user data with enterprise-grade security while maintaining complete transparency."
    }
  ]

  const awards = [
    {
      year: "2024",
      award: "Best Food Tech Startup",
      organization: "TechCrunch Disrupt",
      icon: "🏆"
    },
    {
      year: "2024",
      award: "Innovation in AI",
      organization: "AI Excellence Awards",
      icon: "🥇"
    },
    {
      year: "2023",
      award: "Top 10 Food Apps",
      organization: "App Store Awards",
      icon: "📱"
    },
    {
      year: "2023",
      award: "Sustainability Leader",
      organization: "Green Tech Summit",
      icon: "🌿"
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
                About Recipe JINI
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Revolutionizing How the World Cooks
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                We are on a mission to make cooking accessible, personalized, and enjoyable for everyone through the power of artificial intelligence and community collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  We believe everyone deserves access to delicious, personalized recipes that fit their lifestyle, dietary needs, and cooking skills. Our AI-powered platform democratizes culinary expertise, making professional-level cooking guidance available to home cooks worldwide.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  By combining traditional culinary knowledge with cutting-edge technology, we are building a future where cooking is more creative, efficient, and enjoyable than ever before.
                </p>
                <Link href="/products" className="inline-flex items-center gap-x-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
                  Explore Our Products
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              <div className="text-center">
                <div className="text-9xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Innovation in Every Recipe
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Powered by advanced AI algorithms and machine learning
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A diverse group of culinary experts, engineers, and innovators working together to transform the cooking experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white dark:bg-gray-950 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <div className="text-emerald-600 font-semibold mb-4">
                    {member.role}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    {member.description}
                  </p>
                  <div className="flex justify-center gap-4">
                    <Link href={member.social.linkedin} className="text-gray-400 hover:text-emerald-600 transition duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <Link href={member.social.twitter} className="text-gray-400 hover:text-emerald-600 transition duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Journey
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                From a simple idea to a global platform serving millions of home cooks
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200 dark:bg-emerald-800"></div>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md">
                        <div className="text-emerald-600 font-bold text-2xl mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Values
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                The principles that guide everything we do at Recipe Jini
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Recognition & Awards
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We are proud to be recognized by industry leaders for our innovation and impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
                  <div className="text-4xl mb-4">{award.icon}</div>
                  <div className="text-emerald-600 font-bold mb-2">{award.year}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {award.award}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {award.organization}
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
            <div className="text-center max-w-4xl mx-auto text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Cooking?
              </h2>
              <p className="text-xl mb-8 text-emerald-100">
                Join millions of home cooks who have discovered the joy of personalized, AI-powered recipes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth" className="inline-flex items-center justify-center gap-x-3 bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition duration-300 shadow-lg">
                  Get Started Today
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center gap-x-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-semibold px-8 py-4 rounded-lg transition duration-300">
                  Learn More
                </Link>
              </div>
              <div className="mt-8 text-emerald-100">
                <p className="text-sm">
                  Free to start • No credit card required • Join 500K+ happy cooks
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="text-center">
              <div className="flex items-center justify-center gap-x-4 text-2xl font-semibold mb-6">
                <div className="flex items-center -space-x-3 font-semibold">
                  <span className="h-6 aspect-square bg-emerald-400 rounded-full flex" />
                  <span className="h-6 aspect-square bg-white rounded-full flex" />
                </div>
                Recipe Jini
              </div>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Revolutionizing how the world cooks through AI-powered personalized recipes and community collaboration.
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                
                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.402-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.989C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </Link>
              </div>
              <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-400 text-sm">
                  © 2025 Recipe Jini. All rights reserved. Made with ❤️ for home cooks everywhere.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default CompanyPage