'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import CustomDropdown from '@/components/CustomDropdown'
import { FaArrowLeft } from "react-icons/fa";

export default function CreateLeaveTypePage() {
    const router = useRouter()

    const [leaveType, setLeaveType] = useState('')
    const [isPaid, setIsPaid] = useState('')
    const [allocatedDays, setAllocatedDays] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!leaveType || !isPaid || !allocatedDays) {
            alert('Please fill all required fields.')
            return
        }

        alert('Leave Type added successfully!')
        router.push('/dashboard/leave/type')
    }

    const handleReset = () => {
        setLeaveType('')
        setIsPaid('')
        setAllocatedDays('')
    }

    return (
        <Layout>
            <div className="p-6 text-black pt-0 max-w-7xl mx-auto mt-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-[var(--color1)]">
                        Create Leave Type <br />
                        <Breadcrumbs />
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
                <form onSubmit={handleSubmit} className="p-4 space-y-5 border-2 border-gray-300 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Leave Type Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Leave Type Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={leaveType}
                                onChange={(e) => setLeaveType(e.target.value)}
                                placeholder="Enter leave type"
                                className="w-full p-2 border border-gray-300 rounded outline-none"
                                required
                            />
                        </div>

                        {/* Is Paid Leave */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Is Paid Leave <span className="text-red-500">*</span>
                            </label>
                            <CustomDropdown
                                value={isPaid}
                                onChange={(value) => setIsPaid(value)}
                                options={['Yes', 'No']}
                                placeholder="Select your leave type"
                            />
                        </div>

                        {/* Allocated Days */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Leave Allocated Days <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                min="1"
                                value={allocatedDays}
                                onChange={(e) => setAllocatedDays(e.target.value)}
                                placeholder="Enter number of days"
                                className="w-full p-2 border border-gray-300 rounded outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-8 justify-end">
                        <button
                            type="button"
                            onClick={handleReset}
                            className="bg-white text-[var(--color1)] px-6 py-2 rounded-lg border border-[var(--color1)]"
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
