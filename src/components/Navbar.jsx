'use client'

import { HiMenu, HiBell, HiChevronDown } from 'react-icons/hi'
import { BsSun, BsMoon } from 'react-icons/bs'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar({ toggleSidebar }) {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        // You can integrate dark mode switching logic here (class toggling, localStorage, etc.)
    }

    return (
        <header className="h-16 w-full bg-white  px-4 md:px-6 flex items-center justify-between shadow-sm text-black">
            {/* Left: Sidebar toggle + title */}
            <div className="flex items-center gap-3">
                <button onClick={toggleSidebar} className="text-xl cursor-pointer">
                    <HiMenu />
                </button>
                <h1 className="text-lg font-bold">Admin Panel</h1>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-5">

                {/* Dark mode toggle */}
                <button onClick={toggleDarkMode} className="text-xl bg-[#F6821F] p-2 rounded-3xl text-white font-bold cursor-pointer">
                    {darkMode ? <BsSun /> : <BsMoon />}
                </button>

                {/* Notification */}
                <div className="relative">
                    <HiBell className="text-xl cursor-pointer" />
                    <span className="absolute -top-1 -right-1 bg-[#F6821F]+ text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">6</span>
                </div>

                {/* Profile with dropdown */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image
                        src="/profile.jpg"
                        alt="User"
                        width={32}
                        height={32}
                        className="rounded-full object-cover w-8 h-8"
                    />
                    <div className="hidden md:flex flex-col leading-tight text-xs">
                        <span className="font-medium">John Doe</span>
                        <span className="text-gray-500">Admin</span>
                    </div>
                    <HiChevronDown className="text-2xl" />
                </div>
            </div>
        </header>
    )
}
