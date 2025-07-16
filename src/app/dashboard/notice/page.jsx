'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa6'
import CustomCalendar from '@/components/CustomCalendar'
import CustomDropdown from '@/components/CustomDropdown'

export default function NoticePage() {
    const router = useRouter()

    const [receiver, setReceiver] = useState('')
    const [publishedFrom, setPublishedFrom] = useState('')
    const [publishedTo, setPublishedTo] = useState('')
    const [filteredData, setFilteredData] = useState([])

    const noticeData = [
        { id: 1, type: 'Professionalism', date: 'Jul 04 2025 12:04 PM', receiver: 'Ravi' },
        { id: 2, type: 'Professionalism', date: 'Jul 04 2025 12:04 PM', receiver: 'Durgesh' },
        { id: 3, type: 'Confidentiality', date: 'Jul 04 2025 12:04 PM', receiver: 'Chirag' },
    ]

    const resetFilters = () => {
        setReceiver('')
        setPublishedFrom('')
        setPublishedTo('')
        setFilteredData(noticeData)
    }

    const applyFilters = () => {
        const filtered = noticeData.filter(item => {
            const matchReceiver = receiver ? item.receiver === receiver : true

            const itemDate = new Date(Date.parse(item.date))
            const from = publishedFrom instanceof Date ? publishedFrom : null
            const to = publishedTo instanceof Date ? publishedTo : null

            const matchDate = (!from || itemDate >= from) && (!to || itemDate <= to)

            return matchReceiver && matchDate
        })

        setFilteredData(filtered)
    }

    // Load default on first render
    useState(() => {
        setFilteredData(noticeData)
    })

    return (
        <Layout>
            <div className="p-4 sm:p-6 text-black dark:text-black pt-0">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
                    <div>
                        <h1 className="text-2xl font-bold text-[var(--color1)]">Notice</h1>
                        <Breadcrumbs />
                    </div>
                    <button
                        onClick={() => router.push('/dashboard/notice/create')}
                        className="flex items-center gap-2 bg-[var(--color1)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color11)]"
                    >
                        <FaPlus />
                        Create Notice
                    </button>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 border border-gray-200 p-4 rounded-lg">
                    <div>
                        <label className="text-sm font-medium block mb-1">Notice Receiver</label>
                        <CustomDropdown
                            value={receiver}
                            onChange={(val) => setReceiver(val)}
                            options={['Ravi', 'Durgesh', 'Chirag']}
                            placeholder="All Receivers"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium block mb-1">Published From</label>
                        <CustomCalendar
                            selectedDate={publishedFrom}
                            onChange={(date) => setPublishedFrom(date)}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium block mb-1">Published To</label>
                        <CustomCalendar
                            selectedDate={publishedTo}
                            onChange={(date) => setPublishedTo(date)}
                        />
                    </div>

                    <div className="sm:col-span-3 flex flex-col sm:flex-row gap-3 justify-end pt-2">
                        <button
                            onClick={resetFilters}
                            className="bg-white text-[var(--color1)] border border-[var(--color1)] rounded-lg px-6 py-2"
                        >
                            Reset
                        </button>
                        <button
                            onClick={applyFilters}
                            className="bg-[var(--color1)] text-white px-6 py-2 rounded-lg"
                        >
                            Filter
                        </button>
                    </div>
                </div>

                {/* Table Title */}
                <h2 className="text-lg font-semibold mb-4 text-[var(--color1)]">Notice List</h2>

                {/* Table */}
                <div className="overflow-x-auto rounded-xl border border-gray-300 border-b-0">
                    <table className="min-w-full w-full text-sm table-fixed">
                        <thead className="bg-[var(--light-blue)] text-center">
                            <tr>
                                {['Sr. No', 'Notice Type', 'Publish Date', 'Receiver', 'Description', 'Action'].map((title, idx) => (
                                    <th key={idx} className="p-3 border-b border-gray-300">{title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <tr key={item.id} className="hover:bg-[var(--light-blue-hover)] text-center">
                                        <td className="p-3 border-b border-gray-300">{index + 1}</td>
                                        <td className="p-3 border-b border-gray-300">{item.type}</td>
                                        <td className="p-3 border-b border-gray-300">{item.date}</td>
                                        <td className="p-3 border-b border-gray-300">{item.receiver}</td>
                                        <td className="p-3 border-b border-gray-300 text-[var(--color1)]">
                                            <FaEye className="mx-auto cursor-pointer hover:scale-110 transition-transform scale-125" title="View" />
                                        </td>
                                        <td className="p-3 border-b border-gray-300">
                                            <div className="flex justify-center gap-3 text-[var(--color1)]">
                                                <FaEdit title="Edit" className="cursor-pointer hover:scale-110 transition-transform scale-110" />
                                                <FaTrash title="Delete" className="cursor-pointer hover:scale-110 transition-transform text-[var(--color1)] scale-110" />
                                                <button className="text-xs bg-[var(--color1)] text-white px-2 py-1 rounded hover:bg-[var(--color11)]">
                                                    Assign
                                                </button>
                                            </div>

                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="p-4 text-center text-gray-500">
                                        No records found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}
