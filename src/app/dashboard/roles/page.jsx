'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaPlus, FaEye, FaFileExport, FaEdit, FaTrash } from 'react-icons/fa'
import { FaDeleteLeft } from "react-icons/fa6";
import Breadcrumbs from '@/components/Breadcrumbs'


import Layout from '@/components/Layout'

export default function RolesPage() {
    const router = useRouter()

    const [roles, setRoles] = useState([
        {
            id: 1,
            name: 'Pritesh Prajapati',
            role: 'Trainer',
            canLogin: true,
        },
        {
            id: 2,
            name: 'Durgesh Hirani',
            role: 'Developer',
            canLogin: true,
        },
        {
            id: 3,
            name: 'Ravi Sanchla',
            role: 'Driver',
            canLogin: false,
        },
    ])

    const toggleStatus = (id) => {
        setRoles((prev) =>
            prev.map((r) =>
                r.id === id ? { ...r, canLogin: !r.canLogin } : r
            )
        )
    }

    return (
        <Layout>
            <div className="px-4  text-black dark:text-black pt-0">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <h1 className="text-xl sm:text-2xl font-bold text-[var(--color1)]">Roles  <br /> <Breadcrumbs /></h1>
                    <button
                        onClick={() => router.push('/dashboard/roles/create')}
                        className="flex items-center gap-2 bg-[var(--color1)] text-white px-4 py-2 rounded-lg hover:bg-orange-600 w-fit"
                    >
                        <FaPlus />
                        Add Role
                    </button>

                </div>

                {/* Table */}
                <div>
                    <h2 className="text-lg font-medium mb-4 text-[var(--color1)]">Employee Role Lists</h2>

                    <div className="w-full overflow-x-auto rounded-xl border border-gray-300 border-b-0">
                        <table className="min-w-[800px] w-full text-sm">
                            <thead className="bg-[#FFFAF5] dark:bg-[#FFFAF5]">
                                <tr className='text-center'>
                                    <th className="p-3 border-b border-b-gray-300 ">Sr. No</th>
                                    <th className="p-3 border-b border-b-gray-300 ">Employee Name</th>
                                    <th className="p-3 border-b border-b-gray-300 ">Role</th>
                                    <th className="p-3 border-b border-b-gray-300 ">Can Login</th>
                                    <th className="p-3 border-b border-b-gray-300 ">Status</th>
                                    <th className="p-3 border-b border-b-gray-300 ">Action</th>
                                    <th className="p-3 border-b border-b-gray-300 ">Assign Permissions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roles.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-yellow-50 dark:hover:bg-[#FFFAF5] text-center"
                                    >
                                        <td className="p-3 border-b border-b-gray-300">{index + 1}</td>
                                        <td className="p-3 border-b border-b-gray-300">{item.name}</td>
                                        <td className="p-3 border-b border-b-gray-300">{item.role}</td>
                                        <td className="p-3 border-b border-b-gray-300">{item.canLogin ? 'Yes' : 'No'}</td>

                                        {/* Toggle */}
                                        <td className="p-3 border-b border-b-gray-300">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={item.canLogin}
                                                    onChange={() => toggleStatus(item.id)}
                                                    className="sr-only peer"
                                                />
                                                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-[var(--color1)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
                                            </label>
                                        </td>



                                        {/* Actions */}
                                        <td className="p-3 border-b border-b-gray-300 text-center">
                                            <div className="flex justify-center items-center gap-3 text-[var(--color1)] scale-125">
                                                <FaEdit
                                                    className="cursor-pointer hover:text-[var(--color1)] scale-125"
                                                    onClick={() => router.push(`/dashboard/roles/edit/${item.id}`)}
                                                />
                                                <FaDeleteLeft
                                                    className="cursor-pointer hover:text-[var(--color1)] scale-125"
                                                    onClick={() => alert(`Delete ${item.name}?`)}
                                                />
                                            </div>
                                        </td>

                                        {/* Assign Permissions */}
                                        <td className="p-3 border-b border-b-gray-300 text-center">
                                            <div className="flex justify-center items-center gap-3 text-[var(--color1)]">
                                                <FaEye className="cursor-pointer hover:text-[var(--color1)] scale-125" />
                                                <FaFileExport className="cursor-pointer hover:text-[var(--color1)] scale-125" />
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
