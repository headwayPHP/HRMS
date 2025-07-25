'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FaArrowLeft } from "react-icons/fa";

export default function CreateRolePage() {
    const router = useRouter()

    const [roleName, setRoleName] = useState('')
    const [status, setStatus] = useState(true) // true = Active, false = Inactive
    const [canLogin, setCanLogin] = useState(false) // true = Yes, false = No

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!roleName) {
            alert('Role Name is required.')
            return
        }

        alert('Role created successfully!')
        router.push('/dashboard/roles')
    }

    const handleReset = () => {
        setRoleName('')
        setStatus(true)
        setCanLogin(false)
    }

    return (
        <Layout>
            <div className="p-6 text-black pt-0 max-w-7xl mx-auto mt-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-[var(--color1)]">
                        Roles <br />
                        <Breadcrumbs paths={['Roles', 'Add Role']} />
                    </h1>
                    <button
                        onClick={() => router.back()}
                        className="bg-[var(--color1)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color11)] flex gap-2 items-center"
                    >
                        <FaArrowLeft />
                        Back
                    </button>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="p-6 border-2 border-gray-200 rounded-lg space-y-8 bg-white shadow-sm"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                        {/* Role Name */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Role Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={roleName}
                                onChange={(e) => setRoleName(e.target.value)}
                                placeholder="Enter Role Name"
                                className="w-full p-2 border border-gray-300 rounded outline-none focus:ring-1 focus:ring-[var(--color1)]"
                                required
                            />
                        </div>

                        {/* Status */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <div className="flex items-center gap-3">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={status}
                                        onChange={(e) => setStatus(e.target.checked)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[var(--color1)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
                                </label>
                                <span className="text-sm">{status ? 'Active' : 'Inactive'}</span>
                            </div>
                        </div>

                        {/* Can Login */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Can Login</label>
                            <div className="flex items-center gap-3">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={canLogin}
                                        onChange={(e) => setCanLogin(e.target.checked)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[var(--color1)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
                                </label>
                                <span className="text-sm">{canLogin ? 'Yes' : 'No'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={handleReset}
                            className="bg-white text-[var(--color1)] border border-[var(--color1)] px-6 py-2 rounded-lg hover:bg-gray-100"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="bg-[var(--color1)] text-white px-6 py-2 rounded-lg hover:bg-[var(--color11)]"
                        >
                            Add
                        </button>
                    </div>
                </form>

            </div>
        </Layout>
    )
}