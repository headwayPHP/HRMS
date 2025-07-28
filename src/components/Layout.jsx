'use client'

import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isDesktop = window.innerWidth >= 768
            setSidebarOpen(isDesktop)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // const toggleSidebar = () => setSidebarOpen(prev => !prev)

    return (
        <div className="flex h-screen overflow-hidden relative">
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-[rgba(0,0,0,0.3)] z-30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <div className="flex flex-col flex-1 overflow-hidden">
                <Navbar toggleSidebar={() => setSidebarOpen(prev => !prev)} />
                <main className="flex-1 overflow-y-auto bg-white p-6 pt-0">
                    <div className="w-full max-w-7xl mx-auto">{children}</div>
                </main>
            </div>
        </div>
    )
}
