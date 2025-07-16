'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [remember, setRemember] = useState(false)
    const router = useRouter()

    const handleLogin = (e) => {
        e.preventDefault()
        if (email === 'admin@gmail.com' && password === '123456') {
            localStorage.setItem('token', 'dummy-token')
            router.push('/dashboard')
        } else {
            alert('Invalid credentials')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white font-nunito p-4 select-none ">
            <div className="rounded-2xl  border-2 border-[var(--color1)] bg-white shadow-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

                {/* Left: Yellow background and logo */}
                <div className="flex items-center justify-center bg-[var(--color3)] p-8">
                    <img src="/logo.png" alt="Logo" className="max-w-xs w-50 md:w-70" />
                </div>

                {/* Right: Login Form + Decorative Elements */}
                <div className="relative flex items-center justify-center bg-white text-black p-6">

                    {/* Decorative top-right corner (RIGHT CONTAINER) */}
                    <div className="absolute -top-2 -right-2 w-30 h-30  z-0 hidden md:block">
                        <img src="/logintopright.png" alt="" srcSet="" />
                    </div>

                    {/* Decorative bottom-right square (RIGHT CONTAINER) */}
                    <div className="absolute bottom-7 right-0 w-20 h-20  z-0 hidden md:block">
                        <img src="/loginbottomright.png" alt="" srcSet="" />
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl  w-full max-w-sm z-10 py-14">
                        <h1 className="text-[28px] font-semibold text-center mb-2">Login to the Account</h1>
                        <p className="text-xs text-center mb-6 text-[#202224]">Please enter your email and password to continue</p>

                        <label className="text-sm">Employee ID / Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 mb-4 mt-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[var(--color1)] focus:border-1 focus:border-[var(--color1)] transition duration-150"
                        />

                        <label className="text-sm">Password</label>
                        <div className="relative mt-2 mb-3">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-2 border text-xs border-gray-300 rounded pr-12 focus:outline-none focus:ring-1 focus:ring-[var(--color1)] focus:border-1 focus:border-[var(--color1)]"
                            />
                            <div
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white  p-1 rounded-full"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <FaEyeSlash className="text-grey-500 w-4 h-4" />
                                ) : (
                                    <FaEye className="text-grey-500 w-4 h-4" />
                                )}
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-4 text-xs">
                            <label className="flex items-center gap-1">
                                <input
                                    type="checkbox"
                                    checked={remember}
                                    onChange={() => setRemember(!remember)}
                                    className="accent-[#ffb168]"
                                />
                                Remember me
                            </label>
                            <a href="/forgot-password" className="text-[var(--color1)] hover:underline">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            className=" text-base border border-1 w-full bg-[var(--color1)] text-white py-2 rounded-md hover:bg-[var(--color11)] hover:cursor-pointer hover:text-[var(--color1)] hover:bg-white hover:border-[var(--color1)] mt-3"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
