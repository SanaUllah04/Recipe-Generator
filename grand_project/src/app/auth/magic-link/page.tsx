'use client'

import { Suspense } from 'react'
import MagicLinkCallback from './main'

export default function MagicLink() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-600 text-lg">Verifying magic link...</p>
      </div>
    }>
      <MagicLinkCallback />
    </Suspense>
  )
}
