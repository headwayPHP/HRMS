'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FaPlus, FaEdit } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'

export default function LeaveTypePage() {
    const router = useRouter()

    const [leaveTypes, setLeaveTypes] = useState([
        { id: 1, type: 'Gatepass', isPaid: true, days: 2, status: true },
        { id: 2, type: 'Latepunch', isPaid: false, days: 5, status: false },
        { id: 3, type: 'Memo', isPaid: false, days: 1, status: true },
    ])

    const toggleStatus = (id) => {
        setLeaveTypes((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, status: !item.status } : item
            )
        )
    }

    return (
        <Layout>
            <div className="p-6 text-black pt-0">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 gap-4">
                    <h1 className="text-2xl font-bold text-[var(--color1)]">Leave <br /><Breadcrumbs />
                        <div className="text-lg font-semibold text-[var(--color1)]">Leave Type List</div></h1>
                    <button
                        onClick={() => router.push('/dashboard/leave/type/create')}
                        className="flex items-center gap-2 bg-[var(--color1)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color11)]"
                    >
                        <FaPlus />
                        Add Leave Type
                    </button>
                </div>

                {/* Table Title */}

                {/* Table */}
                <div className="overflow-x-auto rounded-xl border border-gray-300">
                    <table className="w-full text-sm">
                        <thead className="bg-[var(--light-blue)]">
                            <tr className="text-center">
                                <th className="p-3 border-b border-gray-300">Sr. No</th>
                                <th className="p-3 border-b border-gray-300 text-left">Type</th>
                                <th className="p-3 border-b border-gray-300">Is Paid?</th>
                                <th className="p-3 border-b border-gray-300">Allocated Days</th>
                                <th className="p-3 border-b border-gray-300">Status</th>
                                <th className="p-3 border-b border-gray-300">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaveTypes.map((item, index) => (
                                <tr key={item.id} className="hover:bg-[var(--light-blue-hover)] text-center">
                                    <td className="p-3 border-b border-gray-300">{index + 1}</td>
                                    <td className="p-3 border-b border-gray-300 text-left">{item.type}</td>
                                    <td className="p-3 border-b border-gray-300">{item.isPaid ? 'Yes' : 'No'}</td>
                                    <td className="p-3 border-b border-gray-300">{item.days}</td>

                                    {/* Toggle */}
                                    <td className="p-3 border-b border-gray-300">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={item.status}
                                                onChange={() => toggleStatus(item.id)}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-[var(--color1)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
                                        </label>
                                    </td>

                                    {/* Actions */}
                                    <td className="p-3 border-b border-gray-300">
                                        <div className="flex justify-center gap-3 text-[var(--color1)] scale-125">
                                            <FaEdit
                                                className="cursor-pointer"
                                                title="Edit"
                                                onClick={() => router.push(`/dashboard/leave/type/edit/${item.id}`)}
                                            />
                                            <FaDeleteLeft
                                                className="cursor-pointer"
                                                title="Delete"
                                                onClick={() => alert(`Delete ${item.type}?`)}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}
