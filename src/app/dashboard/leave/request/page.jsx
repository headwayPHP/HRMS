'use client'

import { useState } from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import CustomDropdown from '@/components/CustomDropdown'
import CustomCalendar from '@/components/CustomCalendar'
import { FaEye } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'

export default function LeavePage() {
    const router = useRouter()
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')
    const [status, setStatus] = useState('')

    const leaveData = [
        {
            id: 1,
            name: 'Pritesh Prajapati',
            type: 'Gatepass',
            from: 'Jun 04 12:00 AM',
            to: 'Jun 20 12:00 AM',
            requestedDate: '18 Jun 2025',
            requestedBy: 'Pritesh',
            days: 15,
            reason: 'Family function',
            status: 'Approved'
        },
        {
            id: 2,
            name: 'Durgesh Hirani',
            type: 'Latepunch',
            from: 'Jun 29 12:00 AM',
            to: 'Jul 04 12:00 AM',
            requestedDate: '18 Jun 2025',
            requestedBy: 'Durgesh',
            days: 4,
            reason: 'Traffic jam',
            status: 'Pending'
        },
        {
            id: 3,
            name: 'Ravi Sanchla',
            type: 'Memo',
            from: 'Jul 26 12:00 AM',
            to: 'Jul 31 12:00 AM',
            requestedDate: '18 Jun 2025',
            requestedBy: 'Ravi',
            days: 4,
            reason: 'Urgent work',
            status: 'Approved'
        }
    ]

    const filteredData = leaveData.filter(item => {
        const matchYear = year ? item.requestedDate.includes(year) : true
        const matchMonth = month ? item.from.toLowerCase().includes(month.toLowerCase()) : true
        const matchStatus = status ? item.status === status : true
        return matchYear && matchMonth && matchStatus
    })

    return (
        <Layout>
            <div className="p-4 sm:p-6 text-black dark:text-black pt-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
                    <div>
                        <h1 className="text-2xl font-bold text-[var(--color1)]">Leave</h1>
                        <Breadcrumbs />
                    </div>
                    <button
                        onClick={() => router.push('/dashboard/leave/request/create')}
                        className="flex items-center gap-2 bg-[var(--color1)] text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                    >
                        <FaPlus />
                        Create Leave Request
                    </button>
                </div>


                {/* Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 border border-gray-200 p-4 rounded-lg">
                    <div>
                        <label className="text-sm font-medium block mb-1">Select Year</label>
                        <CustomDropdown
                            value={year}
                            onChange={(value) => setYear(value)}
                            options={['2025', '2024', '2023']}
                            placeholder="All Years"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium block mb-1">Select Month</label>
                        <CustomDropdown
                            value={month}
                            onChange={(value) => setMonth(value)}
                            options={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}
                            placeholder="All Months"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium block mb-1">Select Status</label>
                        <CustomDropdown
                            value={status}
                            onChange={(value) => setStatus(value)}
                            options={['Approved', 'Pending', 'Rejected']}
                            placeholder="All Status"
                        />
                    </div>
                    <div className="sm:col-span-3 flex flex-col sm:flex-row gap-3 justify-end pt-2">
                        <button
                            onClick={() => {
                                setYear('')
                                setMonth('')
                                setStatus('')
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
                <h2 className="text-lg font-semibold mb-4 text-[var(--color1)]">Leave Request Lists</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-300 border-b-0">
                    <table className="min-w-[1000px] w-full text-sm">
                        <thead className="bg-[#FFFAF5]">
                            <tr className="text-center">
                                {["Sr. no", "Employee Name", "Type", "From", "To", "Requested Date", "Requested By", "Days", "Reason", "Status", "Action"].map((title, idx) => (
                                    <th key={idx} className="p-3 border-b border-gray-300">{title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={item.id} className="hover:bg-yellow-50 text-center">
                                    <td className="p-3 border-b border-gray-300">{index + 1}</td>
                                    <td className="p-3 border-b border-gray-300">{item.name}</td>
                                    <td className="p-3 border-b border-gray-300">{item.type}</td>
                                    <td className="p-3 border-b border-gray-300">{item.from}</td>
                                    <td className="p-3 border-b border-gray-300">{item.to}</td>
                                    <td className="p-3 border-b border-gray-300">{item.requestedDate}</td>
                                    <td className="p-3 border-b border-gray-300">{item.requestedBy}</td>
                                    <td className="p-3 border-b border-gray-300">{item.days}</td>
                                    <td className="p-3 border-b border-gray-300">{item.reason}</td>
                                    <td className="p-3 border-b border-gray-300">{item.status}</td>
                                    <td className="p-3 border-b border-gray-300 text-[var(--color1)]">
                                        <FaEye className="mx-auto cursor-pointer hover:scale-110 transition-transform scale-125" title="View Details" />
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
