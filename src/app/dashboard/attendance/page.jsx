'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FaEye, FaEdit, FaFileExport } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'
import CustomCalendar from '@/components/CustomCalendar'
import CustomDropdown from '@/components/CustomDropdown'

export default function AttendancePage() {
    const router = useRouter()

    const [selectedDate, setSelectedDate] = useState('')
    const [department, setDepartment] = useState('')

    const attendanceData = [
        {
            id: 1,
            name: 'Pritesh Prajapati',
            designation: 'PHP',
            department: 'IT Department',
            punchIn: '10:00 am',
            punchOut: '7:00 pm',
            workedHours: '8:30',
            status: 'Approved',
        },
        {
            id: 2,
            name: 'Durgesh Hirani',
            designation: 'PHP',
            department: 'IT Department',
            punchIn: '10:00 am',
            punchOut: '7:00 pm',
            workedHours: '8:30',
            status: 'Pending',
        },
        {
            id: 3,
            name: 'Ravi Sanchla',
            designation: 'UI/UX Designer',
            department: 'IT Department',
            punchIn: '10:00 am',
            punchOut: '7:00 pm',
            workedHours: '8:30',
            status: 'Approved',
        }
    ]

    const filteredData = attendanceData.filter(emp => {
        const matchDept = department ? emp.department === department : true
        return matchDept
    })

    return (
        <Layout>
            <div className="p-4 sm:p-6 text-black dark:text-black pt-0">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
                    <div>
                        <h1 className="text-2xl font-bold text-[var(--color1)]">Attendance</h1>
                        <Breadcrumbs />
                    </div>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 border border-gray-200 p-4 rounded-lg">
                    {/* Date */}
                    <div>
                        <label className="text-sm font-medium block mb-1">Select Date</label>
                        <div>
                            <CustomCalendar
                                selectedDate={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                showTime={true}
                            />
                        </div>
                    </div>

                    {/* Department */}
                    <div>
                        <label className="text-sm font-medium block mb-1">Select Department</label>
                        <CustomDropdown
                            value={department}
                            onChange={(value) => setDepartment(value)}
                            options={['IT Department', 'HR Department']}
                            placeholder="All Departments"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 justify-end pt-2">
                        <button
                            onClick={() => {
                                setSelectedDate('')
                                setDepartment('')
                            }}
                            className="bg-white text-[var(--color1)] border border-[var(--color1)] rounded-lg px-6 py-2"
                        >
                            Reset
                        </button>
                        <button className="bg-[var(--color1)] text-white px-6 py-2 rounded-lg">
                            Filter
                        </button>
                    </div>
                </div>

                {/* Table */}
                <h2 className="text-lg font-semibold mb-4 text-[var(--color1)]">Today Employee Attendance</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-300 border-b-0">
                    <table className="min-w-[1000px] w-full text-sm">
                        <thead className="bg-[var(--light-blue)]">
                            <tr className="text-center">
                                {['Sr. No', 'Employee Name', 'Designation', 'Department', 'Punch In', 'Punch Out', 'Worked Hours', 'Status', 'Details', 'Action'].map((title, idx) => (
                                    <th key={idx} className="p-3 border-b border-gray-300">{title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((emp, index) => (
                                <tr key={emp.id} className="hover:bg-[var(--light-blue-hover)] text-center">
                                    <td className="p-3 border-b border-gray-300">{index + 1}</td>
                                    <td className="p-3 border-b border-gray-300">{emp.name}</td>
                                    <td className="p-3 border-b border-gray-300">{emp.designation}</td>
                                    <td className="p-3 border-b border-gray-300">{emp.department}</td>
                                    <td className="p-3 border-b border-gray-300">{emp.punchIn}</td>
                                    <td className="p-3 border-b border-gray-300">{emp.punchOut}</td>
                                    <td className="p-3 border-b border-gray-300">{emp.workedHours}</td>
                                    <td className="p-3 border-b border-gray-300">{emp.status}</td>

                                    {/* View Details */}
                                    <td className="p-3 border-b border-gray-300 text-[var(--color1)]">
                                        <FaEye
                                            className="mx-auto cursor-pointer hover:scale-110 transition-transform scale-125"
                                            title="View Details"
                                        />
                                    </td>

                                    {/* Action Icons */}
                                    <td className="p-3 border-b border-gray-300">
                                        <div className="flex justify-center gap-3 text-[var(--color1)] scale-125">
                                            <FaEdit
                                                title="Edit"
                                                className="cursor-pointer hover:scale-110 transition-transform"
                                                onClick={() => alert(`Edit ${emp.name}`)}
                                            />
                                            <FaDeleteLeft
                                                title="Delete"
                                                className="cursor-pointer hover:scale-110 transition-transform"
                                                onClick={() => confirm(`Delete ${emp.name}?`)}
                                            />
                                            <FaFileExport
                                                title="Export"
                                                className="cursor-pointer hover:scale-110 transition-transform"
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
