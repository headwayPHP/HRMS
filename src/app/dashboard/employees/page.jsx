'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function EmployeeListPage() {
    const router = useRouter()

    const [department, setDepartment] = useState('')
    const [search, setSearch] = useState('')

    const employees = [
        {
            id: 1,
            name: 'Pritesh Prajapati',
            designation: 'PHP',
            department: 'IT Department',
            email: 'Pritesh.p@gmail.com',
        },
        {
            id: 2,
            name: 'Durgesh Hirani',
            designation: 'PHP',
            department: 'IT Department',
            email: 'Durgesh.h@gmail.com',
        },
        {
            id: 3,
            name: 'Ravi Sanchla',
            designation: 'UI/UX Designer',
            department: 'IT Department',
            email: 'Ravi.s@gmail.com',
        },
    ]

    const filteredEmployees = employees.filter((emp) => {
        const matchDept = department ? emp.department === department : true
        const matchSearch = emp.name.toLowerCase().includes(search.toLowerCase())
        return matchDept && matchSearch
    })

    return (
        <Layout>
            <div className="p-6 text-white dark:text-black pt-0">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-[var(--color1)]">Employee</h1>
                    <button
                        onClick={() => router.push('/dashboard/employees/create')}
                        className="flex items-center gap-2 bg-[var(--color1)] text-white px-4 py-2 rounded-lg hover:bg-orange-600 w-fit "
                    >
                        <FaPlus />
                        Add New Employee
                    </button>

                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="text-sm font-medium block mb-1">Select Department</label>
                        <div className="relative w-full">
                            <select
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                className="w-full p-2 pr-10 border border-gray-300 rounded appearance-none outline-none cursor-pointer"
                            >
                                <option value="">All Departments</option>
                                <option value="IT Department">IT Department</option>
                                <option value="HR Department">HR Department</option>
                            </select>

                            {/* Chevron Icon */}
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>


                    </div>
                    <div>
                        <label className="text-sm font-medium block mb-1">Search Employee</label>

                        <div className="relative">
                            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />

                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search by name"
                                className="w-full pl-10 p-2 border border-gray-300 rounded outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Employee List Table */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Employee List</h2>
                    <div className="overflow-x-auto rounded-xl border border-gray-300 border-b-0">
                        <table className="w-full text-sm  ">
                            <thead className="bg-[#FFFAF5] dark:bg-[#FFFAF5]">
                                <tr>
                                    <th className="p-3 border-b border-b-gray-300">Sr. No</th>
                                    <th className="p-3 border-b border-b-gray-300">Employee Name</th>
                                    <th className="p-3 border-b border-b-gray-300">Designation</th>
                                    <th className="p-3 border-b border-b-gray-300">Department</th>
                                    <th className="p-3 border-b border-b-gray-300">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEmployees.map((emp, index) => (
                                    <tr key={emp.id} className="text-center hover:bg-yellow-50 dark:hover:bg-[#FFFAF5]">
                                        <td className="p-3 border-b border-b-gray-300">{index + 1}</td>
                                        <td className="p-3 border-b border-b-gray-300">{emp.name}</td>
                                        <td className="p-3 border-b border-b-gray-300">{emp.designation}</td>
                                        <td className="p-3 border-b border-b-gray-300">{emp.department}</td>
                                        <td className="p-3 border-b border-b-gray-300">{emp.email}</td>
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
