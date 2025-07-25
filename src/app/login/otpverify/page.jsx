'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function OtpVerifyPage() {
    const [otp, setOtp] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const searchParams = useSearchParams()
    const email = searchParams.get('email')

    const handleVerify = async (e) => {
        e.preventDefault()

        if (!otp || otp.length !== 6) {
            alert('Please enter a valid 6-digit OTP')
            return
        }

        setLoading(true)

        try {
            // Simulate OTP verification delay
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // Normally you'd call backend to verify OTP
            // const res = await fetch('/api/verify-otp', { ... })

            // Redirect to reset password page
            router.push(`/login/resetpassword?email=${encodeURIComponent(email)}`)
        } catch (err) {
            console.error(err)
            alert('Failed to verify OTP')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4 text-black">
            <form
                onSubmit={handleVerify}
                className="bg-white border border-gray-200 shadow-md rounded-xl p-8 w-full max-w-sm"
            >
                <h2 className="text-2xl font-semibold text-center mb-4 text-[var(--color1)]">Verify OTP</h2>
                <p className="text-sm text-center text-black mb-6">Enter the 6-digit OTP sent to <strong>{email}</strong></p>

                <label className="block text-sm mb-2">OTP</label>
                <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    maxLength={6}
                    placeholder="Enter OTP"
                    required
                    className="w-full p-2 text-sm border text-black border-gray-300 rounded mb-4 focus:outline-none focus:ring-1 focus:ring-[var(--color1)]"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[var(--color1)] text-white py-2 rounded hover:bg-[var(--color11)] transition"
                >
                    {loading ? 'Verifying...' : 'Verify OTP'}
                </button>
            </form>
        </div>
    )
}
