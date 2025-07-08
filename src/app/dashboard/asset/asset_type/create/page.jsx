'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function CreateAssetTypePage() {
    const router = useRouter()
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name.trim()) {
            alert('Please enter Asset Type name.')
            return
        }

        alert('Asset Type added successfully!')
        router.push('/dashboard/asset/asset_type')
    }

    return (
        <Layout>
            <div className="p-6 text-black pt-0 max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-[var(--color1)]">
                        Asset Type <br />
                        <Breadcrumbs />
                    </h1>
                    <button
                        onClick={() => router.back()}
                        className="bg-[var(--color1)] text-white px-6 py-2 rounded-lg hover:bg-[var(--color11)]"
                    >
                        Back
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4 border-2 border-gray-300 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                        {/* Input */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter Asset Type"
                                className="w-full p-2 border border-gray-300 rounded outline-none"
                                required
                            />
                        </div>

                        {/* Submit */}
                        <div className="flex justify-start">
                            <button
                                type="submit"
                                className="bg-[var(--color1)] text-white px-6 py-2 rounded-lg hover:bg-[var(--color11)] mt-1"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
