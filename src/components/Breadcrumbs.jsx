'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumbs() {
    const pathname = usePathname()

    // Do not render on dashboard root
    if (pathname === '/dashboard') return null

    const segments = pathname
        .split('/')
        .filter((seg) => seg && seg !== 'dashboard')

    return (
        <div className="text-sm mb-4 text-gray-600 dark:text-gray-300 pt-2">
            <div className="flex items-center gap-2 flex-wrap">
                {/* Static 'Dashboard' link */}
                <Link href="/dashboard" className="text-black  hover:text-[var(--color1)] font-medium">
                    Dashboard
                </Link>

                {segments.map((seg, i) => {
                    const fullPath = '/dashboard/' + segments.slice(0, i + 1).join('/')
                    const label = decodeURIComponent(seg).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

                    return (
                        <div key={i} className="flex items-center gap-2">
                            <span>/</span>
                            {i === segments.length - 1 ? (
                                <span className="capitalize text-[var(--color1)] dark:text-[var(--color1)]">
                                    {label}
                                </span>
                            ) : (
                                <Link
                                    href={fullPath}
                                    className="capitalize text-black dark:text-black hover:text-[var(--color1)]"
                                >
                                    {label}
                                </Link>
                            )}
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
