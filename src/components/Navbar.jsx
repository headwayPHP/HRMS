'use client'

import { HiMenu, HiBell, } from 'react-icons/hi'
// import { BsSun, BsMoon } from 'react-icons/bs'
import Alarm from '@/components/alarm'
import { MdOutlineAccessAlarm } from "react-icons/md";
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar({ toggleSidebar }) {
    const [darkMode, setDarkMode] = useState(false)
    const [showAlarm, setShowAlarm] = useState(false)

    useEffect(() => {
        // Apply class to <html>
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <header className="h-16 w-full bg-white px-4 md:px-6 flex items-center justify-between shadow-sm text-black z-40 relative">

            {/* Left: Sidebar toggle + title */}
            <div className="flex items-center gap-3">
                <button
                    id='toggle'
                    onClick={toggleSidebar}
                    className="text-xl cursor-pointer block md:block"
                    name='toggle'
                >
                    <HiMenu />
                </button>
                {/* <h1 className="text-lg font-bold">Admin Panel</h1> */}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-5">

                {/* Dark mode toggle */}
                {/* <button onClick={() => setDarkMode(!darkMode)} className="text-xl bg-[var(--color1)] p-2 rounded-3xl text-white font-bold cursor-pointer">
                    {darkMode ? <BsSun /> : <BsMoon />}
                </button> */}

                <div className="relative">
                    {/* Alarm Icon */}
                    <MdOutlineAccessAlarm
                        className="text-xl cursor-pointer"
                        onClick={() => setShowAlarm(!showAlarm)}
                    />

                    {/* Alarm Popup */}
                    <Alarm isOpen={showAlarm} onClose={() => setShowAlarm(false)} />
                </div>
                {/* Notification */}
                <div className="relative">
                    <HiBell className="text-xl cursor-pointer" />
                    <span className="absolute -top-1 -right-1 bg-[var(--color1)]+ text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">6</span>
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

                </div>
            </div>
        </header>
    )
}
