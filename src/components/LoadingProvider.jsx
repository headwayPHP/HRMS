// components/LoadingProvider.jsx
'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

export default function LoadingProvider({ children }) {
    const [loading, setLoading] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        let timeout
        setLoading(true)
        timeout = setTimeout(() => {
            setLoading(false)
        }, 500) // simulate minimum load time

        return () => clearTimeout(timeout)
    }, [pathname])

    return (
        <>
            {loading && (
                <div className="fixed inset-0 bg-white bg-opacity-70 z-[1000] flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[var(--color1)]"></div>
                </div>
            )}
            {children}
        </>
    )
}
