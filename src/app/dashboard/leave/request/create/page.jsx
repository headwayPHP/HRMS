'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import CustomCalendar from '@/components/CustomCalendar'
import CustomDropdown from '@/components/CustomDropdown'

export default function CreateLeaveRequestPage() {
    const router = useRouter()

    const [employee, setEmployee] = useState('')
    const [leaveType, setLeaveType] = useState('')
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [reason, setReason] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!employee || !leaveType || !fromDate || !toDate || !reason) {
            alert('Please fill all required fields.')
            return
        }

        alert('Leave request submitted!')
        router.push('/dashboard/leave')
    }

    const handleReset = () => {
        setEmployee('')
        setLeaveType('')
        setFromDate('')
        setToDate('')
        setReason('')
    }

    return (
        <Layout>
            <div className="p-6 text-black dark:text-dark pt-0 max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-6">
                    <h1 className="text-2xl font-bold text-[var(--color1)]">
                        Create Leave Request <br />
                        <Breadcrumbs paths={['Leave', 'Create Leave Request']} />
                        {/* <div className='text-lg'>Leave Request</div> */}
                    </h1>

                    <button
                        onClick={() => router.back()}
                        className="bg-[var(--color1)] text-white px-6 py-2 rounded-lg hover:bg-[var(--color11)]"
                    >
                        Back
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-4 space-y-5 border-2 border-gray-300 rounded-lg">
                    {/* 3-Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Requested For */}
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">
                                Requested For <span className="text-red-500">*</span>
                            </label>
                            <CustomDropdown
                                value={employee}
                                onChange={(val) => setEmployee(val)}
                                options={['Pritesh Prajapati', 'Durgesh Hirani', 'Ravi Sanchla']}
                                placeholder="Select Employee"
                            />
                        </div>

                        {/* Leave Type */}
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">
                                Leave Type <span className="text-red-500">*</span>
                            </label>
                            <CustomDropdown
                                value={leaveType}
                                onChange={(val) => setLeaveType(val)}
                                options={['Sick Leave', 'Casual Leave', 'Earned Leave']}
                                placeholder="Select Leave Type"
                            />
                        </div>
                    </div>


                    {/* Date Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* From Date */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                From Date<span className="text-red-500">*</span>
                            </label>
                            <CustomCalendar
                                selectedDate={fromDate}
                                onChange={(date) => setFromDate(date)}
                                placeholder="dd/mm/yyyy"
                            />
                        </div>

                        {/* To Date */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                To Date<span className="text-red-500">*</span>
                            </label>
                            <CustomCalendar
                                selectedDate={toDate}
                                onChange={(date) => setToDate(date)}
                                placeholder="dd/mm/yyyy"
                            />
                        </div>
                    </div>
                    {/* Reason */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Reason<span className="text-red-500">*</span>
                        </label>
                        <textarea
                            type="text"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            placeholder="Enter reason"
                            className="w-full p-2 border border-gray-300 rounded outline-none"
                            required
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-8 justify-end">
                        <button
                            type="button"
                            onClick={handleReset}
                            className="bg-[#fff] text-[var(--color1)] px-6 py-2 rounded-lg border-2 border-[var(--color1)]"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="bg-[var(--color1)] text-white px-6 py-2 rounded-lg hover:bg-[var(--color11)]"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
