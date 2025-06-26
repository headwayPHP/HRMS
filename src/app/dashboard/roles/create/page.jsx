'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'

export default function CreateRolePage() {
    const router = useRouter()

    const [roleName, setRoleName] = useState('')
    const [status, setStatus] = useState('')
    const [authorizeLogin, setAuthorizeLogin] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!roleName || !status || !authorizeLogin) {
            alert('Please fill all fields.')
            return
        }

        alert('Role added successfully!')
        router.push('/dashboard/roles')
    }

    return (
        <Layout>
            <div className="p-6 text-black dark:text-dark pt-0 max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-[var(--color1)]">Roles</h1>

                    <button
                        onClick={() => router.back()}
                        className="bg-[var(--color1)] text-white  px-6 py-2 rounded-lg hover:bg-orange-600"
                    >
                        Back
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-4 space-y-5 border-2 border-gray-300 rounded-lg">
                    {/* Inputs in a row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Role Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Role Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={roleName}
                                onChange={(e) => setRoleName(e.target.value)}
                                placeholder="Enter role name"
                                className="w-full p-2 border border-gray-300 rounded outline-none"
                                required
                            />
                        </div>

                        {/* Status Dropdown */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Status</label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded outline-none text-gray-400 h-10.5"
                                required
                            >
                                <option className='' value="">Select your Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>

                        {/* Authorize Login Dropdown */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Authorize Login</label>
                            <select
                                value={authorizeLogin}
                                onChange={(e) => setAuthorizeLogin(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded outline-none text-gray-400 h-10.5"
                                required
                            >
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-8 justify-end ">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="bg-[#fff] text-[var(--color1)] px-6 py-2 rounded-lg border-2 border-[var(--color1)]"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="bg-[var(--color1)] text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
