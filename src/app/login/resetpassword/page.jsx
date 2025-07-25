'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function ResetPasswordPage() {
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const searchParams = useSearchParams()
    const email = searchParams.get('email') || ''

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!newPassword || !confirmPassword) {
            alert('Please fill in all fields')
            return
        }

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match')
            return
        }

        setLoading(true)

        try {
            // Simulate password reset (replace with API call)
            await new Promise((resolve) => setTimeout(resolve, 1000))

            alert('Password reset successful')
            router.push('/login')
        } catch (err) {
            console.error(err)
            alert('Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4 text-black">
            <form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-200 shadow-md rounded-xl p-8 w-full max-w-sm"
            >
                <h2 className="text-2xl font-semibold text-center mb-4 text-[var(--color1)]">Reset Password</h2>
                <p className="text-sm text-center text-black mb-6">Set a new password for <strong>{email}</strong></p>

                <label className="block text-sm mb-2">New Password</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                    className="w-full p-2 text-sm border text-black border-gray-300 rounded mb-4 focus:outline-none focus:ring-1 focus:ring-[var(--color1)]"
                />

                <label className="block text-sm mb-2">Confirm New Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    required
                    className="w-full p-2 text-sm border text-black border-gray-300 rounded mb-6 focus:outline-none focus:ring-1 focus:ring-[var(--color1)]"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[var(--color1)] text-white py-2 rounded hover:bg-[var(--color11)] transition"
                >
                    {loading ? 'Resetting...' : 'Reset Password'}
                </button>
            </form>
        </div>
    )
}
