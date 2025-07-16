'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaPlus, FaEye, FaEdit } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function RolesPage() {
    const router = useRouter()

    const [roles, setRoles] = useState([
        { id: 1, name: 'Pritesh Prajapati', role: 'Trainer', canLogin: true },
        { id: 2, name: 'Durgesh Hirani', role: 'Developer', canLogin: true },
        { id: 3, name: 'Ravi Sanchla', role: 'Driver', canLogin: false },
    ])

    const toggleStatus = (id) => {
        setRoles((prev) => prev.map((r) => r.id === id ? { ...r, canLogin: !r.canLogin } : r))
    }

    return (
        <Layout>
            <div className="p-4 sm:p-6 text-black dark:text-black pt-0">
                {/* Heading */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
                    <div>
                        <h1 className="text-2xl font-bold text-[var(--color1)]">Roles</h1>
                        <Breadcrumbs />
                    </div>
                    <button
                        onClick={() => router.push('/dashboard/roles/create')}
                        className="flex items-center gap-2 bg-[var(--color1)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color11)]"
                    >
                        <FaPlus /> Add Role
                    </button>
                </div>

                {/* Table */}
                <h2 className="text-lg font-semibold mb-4 text-[var(--color1)]">Role List</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-300 border-b-0">
                    <table className="min-w-[800px] w-full text-sm">
                        <thead className="bg-[var(--light-blue)]">
                            <tr className="text-center">
                                {["Sr. No", "Employee Name", "Role", "Can Login", "Status", "Action"].map((title, idx) => (
                                    <th key={idx} className="p-3 border-b border-gray-300">{title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {roles.map((item, index) => (
                                <tr key={item.id} className="hover:bg-[var(--light-blue-hover)] text-center">
                                    <td className="p-3 border-b border-gray-300">{index + 1}</td>
                                    <td className="p-3 border-b border-gray-300">{item.name}</td>
                                    <td className="p-3 border-b border-gray-300">{item.role}</td>
                                    <td className="p-3 border-b border-gray-300">{item.canLogin ? 'Yes' : 'No'}</td>
                                    <td className="p-3 border-b border-gray-300">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={item.canLogin}
                                                onChange={() => toggleStatus(item.id)}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[var(--color1)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
                                        </label>
                                    </td>
                                    <td className="p-3 border-b border-gray-300">
                                        <div className="flex justify-center items-center gap-2 text-[var(--color1)]">
                                            <FaEdit
                                                className="cursor-pointer hover:text-[var(--color11)]"
                                                title="Edit"
                                                onClick={() => router.push(`/dashboard/roles/edit/${item.id}`)}
                                            />
                                            <FaDeleteLeft
                                                className="cursor-pointer hover:text-[var(--color11)]"
                                                title="Delete"
                                                onClick={() => alert(`Delete ${item.name}?`)}
                                            />
                                            <button className="bg-[var(--color1)] text-white text-xs px-2 py-1 rounded hover:bg-[var(--color11)]">
                                                Assign Permissions
                                            </button>
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
