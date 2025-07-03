'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'

export default function AssetTypePage() {
    const router = useRouter()

    const [assetTypes, setAssetTypes] = useState([
        { id: 1, name: 'Stationary', count: 2, active: true },
        { id: 2, name: 'System', count: 4, active: true },
        { id: 3, name: 'Chair', count: 2, active: false },
    ])

    const toggleStatus = (id) => {
        setAssetTypes(prev =>
            prev.map(item =>
                item.id === id ? { ...item, active: !item.active } : item
            )
        )
    }

    return (
        <Layout>
            <div className="px-4 text-black pt-0">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-[var(--color1)]">Asset Type</h1>
                        <Breadcrumbs />
                    </div>

                    <button
                        onClick={() => router.push('/dashboard/asset/asset_type/create')}
                        className="flex items-center gap-2 bg-[var(--color1)] text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                    >
                        <FaPlus />
                        Add Asset Type
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-xl border border-gray-300 border-b-0">
                    <table className="min-w-[800px] w-full text-sm">
                        <thead className="bg-[#FFFAF5]">
                            <tr className="text-center">
                                <th className="p-3 border-b border-gray-300">Sr. No</th>
                                <th className="p-3 border-b border-gray-300">Name</th>
                                <th className="p-3 border-b border-gray-300">Asset Item Count</th>
                                <th className="p-3 border-b border-gray-300">Status</th>
                                <th className="p-3 border-b border-gray-300">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assetTypes.map((type, index) => (
                                <tr key={type.id} className="hover:bg-yellow-50 text-center">
                                    <td className="p-3 border-b border-gray-300">{index + 1}</td>
                                    <td className="p-3 border-b border-gray-300">{type.name}</td>
                                    <td className="p-3 border-b border-gray-300">{type.count}</td>
                                    <td className="p-3 border-b border-gray-300">
                                        <label className="inline-flex items-center cursor-pointer relative">
                                            <input
                                                type="checkbox"
                                                checked={type.active}
                                                onChange={() => toggleStatus(type.id)}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[var(--color1)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
                                        </label>
                                    </td>
                                    <td className="p-3 border-b border-gray-300 text-center">
                                        <div className="flex justify-center gap-3 text-[var(--color1)] scale-125">
                                            <FaEdit
                                                className="cursor-pointer hover:text-orange-600 scale-125"
                                                onClick={() => router.push(`/dashboard/asset/asset_type/edit/${type.id}`)}
                                            />
                                            <FaDeleteLeft
                                                className="cursor-pointer hover:text-red-500 scale-125"
                                                onClick={() => alert(`Delete ${type.name}?`)}
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
