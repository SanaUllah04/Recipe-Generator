"use client"
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { account } from '../appwrite' 

const MagicLinkCallback = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying')
  const [error, setError] = useState('')
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const userId = searchParams.get('userId')
    const secret = searchParams.get('secret')

    if (!userId || !secret) {
      setStatus('error')
      setError('Missing verification details.')
      return
    }

    const verifyMagicLink = async () => {
      try {
        await account.updateMagicURLSession(userId, secret)
        setStatus('success')

        // Start countdown
        let seconds = 5
        const timer = setInterval(() => {
          seconds -= 1
          setCountdown(seconds)
          if (seconds === 0) {
            clearInterval(timer)
            router.push('../dashboard') // Redirect after 5 seconds
          }
        }, 1000)

      } catch (err) {
        console.error(err)
        setStatus('error')
        setError('Verification failed. Try signing in again.')
      }
    }

    verifyMagicLink()
  }, [searchParams, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-center">
      {status === 'verifying' && (
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Verifying magic link...
        </p>
      )}
      {status === 'success' && (
        <p className="text-lg text-emerald-600">
          Login successful! Redirecting in {countdown} seconds...
        </p>
      )}
      {status === 'error' && (
        <p className="text-lg text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default MagicLinkCallback
