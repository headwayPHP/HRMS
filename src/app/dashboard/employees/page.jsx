'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import { FaPlus, FaEye, FaFileExport } from "react-icons/fa6"
import { FaEdit } from 'react-icons/fa'
import { CiSearch } from "react-icons/ci"
import Breadcrumbs from '@/components/Breadcrumbs'
import CustomDropdown from '@/components/CustomDropdown'

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
            <div className="p-4 sm:p-6 text-black dark:text-black pt-0">
                {/* Heading & Button */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
                    <div>
                        <h1 className="text-2xl font-bold text-[var(--color1)]">Employee</h1>
                        <Breadcrumbs />
                    </div>
                    <button
                        onClick={() => router.push('/dashboard/employees/create')}
                        className="flex items-center gap-2 bg-[var(--color1)] text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                    >
                        <FaPlus />
                        Add New Employee
                    </button>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 border border-gray-200 p-4 rounded-lg">
                    {/* Department */}
                    <div>
                        <label className="text-sm font-medium block mb-1">Select Department</label>
                        <div className="relative">
                            <CustomDropdown
                                label="Select Department"
                                value={department}
                                onChange={setDepartment}
                                options={['IT Department', 'HR Department']}
                                placeholder="All Departments"
                                className="px-0"
                            />
                            {/* <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div> */}
                        </div>
                    </div>

                    {/* Search */}
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

                    {/* Buttons */}
                    <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 justify-end pt-2">
                        <button
                            onClick={() => {
                                setDepartment('')
                                setSearch('')
                            }}
                            className="bg-white text-[var(--color1)] border border-[var(--color1)] rounded-lg px-6 py-2"
                        >
                            Reset
                        </button>
                        <button
                            className="bg-[var(--color1)] text-white px-6 py-2 rounded-lg"
                        >
                            Filter
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 text-[var(--color1)]">Employee List</h2>
                    <div className="overflow-x-auto rounded-xl border border-gray-300 border-b-0">
                        <table className="min-w-[640px] w-full text-sm">
                            <thead className="bg-[#FFFAF5] dark:bg-[#FFFAF5]">
                                <tr>
                                    {['Sr. No', 'Employee Name', 'Designation', 'Department', 'Email', 'Status', 'Details', 'Actions'].map((title, idx) => (
                                        <th key={idx} className="p-3 border-b border-gray-300 text-left whitespace-nowrap">
                                            {title}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEmployees.map((emp, index) => (
                                    <tr key={emp.id} className="hover:bg-yellow-50 dark:hover:bg-[#FFFAF5] text-left">
                                        <td className="p-3 border-b border-gray-300">{index + 1}</td>
                                        <td className="p-3 border-b border-gray-300">{emp.name}</td>
                                        <td className="p-3 border-b border-gray-300">{emp.designation}</td>
                                        <td className="p-3 border-b border-gray-300">{emp.department}</td>
                                        <td className="p-3 border-b border-gray-300">{emp.email}</td>
                                        <td className="p-3 border-b border-gray-300">
                                            <label className="inline-flex items-center cursor-pointer relative">
                                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[var(--color1)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
                                            </label>
                                        </td>
                                        <td className="p-3 border-b border-gray-300 text-[var(--color1)] cursor-pointer">
                                            <FaEye className="h-5 w-5 inline-block hover:scale-110 transition-transform" title="View Details" />
                                        </td>
                                        <td className="p-3 border-b border-gray-300">
                                            <div className="flex gap-3 text-[var(--color1)] justify-start">
                                                <FaEdit title="Edit" className="h-5 w-5 cursor-pointer hover:scale-110 transition-transform" />
                                                <FaFileExport title="Export" className="h-5 w-5 cursor-pointer hover:scale-110 transition-transform" />
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
