"use client"
import Link from 'next/link'
import { useState } from 'react'
import { account } from './appwrite' 

type AppwriteError = Error & { code?: number; message?: string }

const MagicLinkSignIn = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      await account.createMagicURLToken(
        'unique()',
        email,
        `${window.location.origin}/auth/magic-link`
      )
      setIsEmailSent(true)
    } catch (err) {
      console.error('Magic link error:', err)
      const error = err as AppwriteError

      let errorMessage = 'Failed to send magic link. Please try again.'
      if (error.code === 400) {
        errorMessage = 'Please enter a valid email address.'
      } else if (error.code === 429) {
        errorMessage = 'Too many requests. Please wait a moment before trying again.'
      } else if (error.message) {
        errorMessage = error.message
      }

      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setIsEmailSent(false)
    setEmail('')
    setError('')
  }

  const handleResend = async () => {
    setIsLoading(true)
    setError('')

    try {
      await account.createMagicURLToken(
        'unique()',
        email,
        `${window.location.origin}/auth/magic-link`
      )
    } catch (err) {
      console.error('Resend magic link error:', err)
      const error = err as AppwriteError
      setError('Failed to resend magic link. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70 backdrop-filter blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70 backdrop-filter blur-3xl opacity-50" />
      <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-emerald-400/5 right-0 -translate-y-[40%] translate-x-[40%] top-0">
        <div className="inset-[10%] rounded-full bg-gradient-to-l from-emerald-400/20">
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-emerald-400/30" />
        </div>
      </div>

      <div className="w-full max-w-md mx-auto px-5 sm:px-10 relative z-10">
        <div className="bg-white dark:bg-gray-950 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-200 dark:border-gray-800">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-x-3 text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              <div className="flex items-center -space-x-3 font-semibold">
                <span className="h-6 aspect-square bg-emerald-600 dark:bg-emerald-400 rounded-full flex" />
                <span className="h-6 aspect-square bg-gray-600 dark:bg-white rounded-full flex" />
              </div>
              Recipe Jini
            </Link>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {isEmailSent ? 'Check your email' : 'Welcome back'}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {isEmailSent 
                ? 'We sent you a magic link to sign in' 
                : 'Enter your email to receive a magic link'
              }
            </p>
          </div>

          {!isEmailSent ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-300"
                  placeholder="Enter your email"
                  disabled={isLoading}
                />
              </div>

              {error && (
                <div className="text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 rounded-lg p-3 border border-red-200 dark:border-red-800">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full h-12 rounded-xl flex items-center justify-center gap-x-3 bg-emerald-700 hover:bg-emerald-800 disabled:bg-gray-400 text-white font-semibold transition duration-300 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending magic link...
                  </>
                ) : (
                  <>
                    Send magic link
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  We sent a magic link to
                </p>
                <p className="font-semibold text-gray-900 dark:text-white text-lg">
                  {email}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Click the link in your email to sign in. The link will expire in 10 minutes.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={resetForm}
                  className="w-full h-12 rounded-xl flex items-center justify-center gap-x-3 border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 font-semibold transition duration-300"
                >
                  Use different email
                </button>

                <button
                  onClick={handleResend}
                  disabled={isLoading}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-300 disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : 'Did not receive an email? Resend'}
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Make A New Account Here
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/" className="inline-flex items-center gap-x-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M15 10a.75.75 0 01-.75.75H6.612l1.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L6.612 9.25h7.638A.75.75 0 0115 10z" clipRule="evenodd" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MagicLinkSignIn
