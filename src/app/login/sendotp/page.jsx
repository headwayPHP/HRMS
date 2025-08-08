'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SendOtpPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [otpSent, setOtpSent] = useState(false)
    const [otp, setOtp] = useState('')
    const [loading, setLoading] = useState(false)
    const [timer, setTimer] = useState(60)

    useEffect(() => {
        let interval
        if (otpSent && timer > 0) {
            interval = setInterval(() => {
                setTimer(prev => prev - 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [otpSent, timer])

    const handleSendOtp = async (e) => {
        e.preventDefault()
        if (!email) return alert("Please enter a valid email")

        setLoading(true)
        await new Promise(res => setTimeout(res, 1000)) // simulate API
        setOtpSent(true)
        setTimer(60)
        setLoading(false)
    }

    const handleVerifyOtp = async (e) => {
        e.preventDefault()
        if (otp.length !== 6) return alert("Enter valid 6-digit OTP")

        setLoading(true)
        await new Promise(res => setTimeout(res, 1000)) // simulate verify
        router.push(`/login/resetpassword?email=${encodeURIComponent(email)}`)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white font-nunito p-4 select-none">
            <div className="rounded-2xl border-2 border-[var(--color1)] bg-white shadow-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

                {/* Left: Logo */}
                <div className="flex items-center justify-center bg-[var(--color3)] p-8">
                    <img src="/logo.png" alt="Logo" className="max-w-xs w-50 md:w-70" />
                </div>

                {/* Right: Form */}
                <div className="relative flex items-center justify-center bg-white text-black p-6">
                    {/* Decorations */}
                    <div className="absolute -top-2 -right-2 w-30 h-30 z-0 hidden md:block">
                        <img src="/logintopright.png" alt="" />
                    </div>
                    <div className="absolute bottom-7 right-0 w-20 h-20 z-0 hidden md:block">
                        <img src="/loginbottomright.png" alt="" />
                    </div>

                    {/* OTP Form */}
                    <form
                        onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}
                        className="bg-white p-8 rounded-2xl w-full max-w-sm z-10 py-14"
                    >
                        <h1 className="text-[28px] font-semibold text-center mb-2">
                            {otpSent ? "Verify OTP" : "Forgot Password?"}
                        </h1>
                        <p className="text-xs text-center mb-6 text-[#202224]">
                            {otpSent
                                ? `Enter the 6-digit code sent to ${email}`
                                : "Enter your email to receive a one-time password"}
                        </p>

                        <label className="text-sm" htmlFor='email'>Email Address</label>
                        <input
                            id='email'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={otpSent}
                            required
                            className="w-full p-2 mb-4 mt-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[var(--color1)] focus:border-1 focus:border-[var(--color1)]"
                        />

                        {otpSent && (
                            <>
                                <label className="text-sm" htmlFor='otp'>Enter OTP</label>
                                <input
                                    id='otp'
                                    type="text"
                                    maxLength={6}
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                    placeholder="6-digit OTP"
                                    className="w-full p-2 mb-2 mt-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[var(--color1)]"
                                />
                                <div className="text-xs text-gray-500 mb-4">
                                    {timer > 0 ? (
                                        <span className="text-xs text-gray-500 mb-4">
                                            Resend in {timer}s
                                        </span>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={handleSendOtp}
                                            className="text-xs text-[var(--color1)] hover:underline mb-4"
                                        >
                                            Resend OTP
                                        </button>
                                    )}
                                </div>
                            </>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="text-base border border-1 w-full bg-[var(--color1)] text-white py-2 rounded-md hover:bg-[var(--color11)] hover:cursor-pointer hover:text-[var(--color1)] hover:bg-white hover:border-[var(--color1)] mt-3"
                        >
                            {loading
                                ? otpSent ? "Verifying..." : "Sending..."
                                : otpSent ? "Verify OTP" : "Send OTP"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
