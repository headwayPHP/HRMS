'use client'

import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar: fixed height, no scroll */}
            <Sidebar isOpen={sidebarOpen} />

            {/* Right side: Navbar + Main */}
            <div className="flex flex-col flex-1 overflow-hidden">
                <Navbar toggleSidebar={toggleSidebar} />

                {/* Main content: should scroll independently */}
                <main className="flex-1 overflow-y-auto bg-white p-6 pt-0">
                    <div className="w-full max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>


    )
}
