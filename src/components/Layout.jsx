'use client'

import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar isOpen={sidebarOpen} />
            <div className="flex-1 flex flex-col">
                <Navbar toggleSidebar={toggleSidebar} />
                <main className="p-6 flex-1 overflow-y-auto bg-[#fff] pt-0 flex justify-center">
                    <div className="w-full max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
