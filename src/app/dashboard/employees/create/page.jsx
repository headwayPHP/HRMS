'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import CustomCalendar from '@/components/CustomCalendar' // ✅ Import

export default function AddEmployeePage() {
    const router = useRouter()
    const [joiningDate, setJoiningDate] = useState(null)

    return (
        <Layout>
            <div className=" self-center p-6 pt-0 text-black dark:text-black">
                {/* Page Title and Breadcrumb */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-[var(--color1)]">
                        Employee <br />
                        <Breadcrumbs />
                    </h1>
                    <button
                        onClick={() => router.back()}
                        className="bg-white border border-[var(--color1)] text-[var(--color1)] px-4 py-2 rounded-lg hover:bg-gray-100"
                    >
                        Back
                    </button>
                </div>

                {/* Form Section */}
                <form className="space-y-8">
                    {/* Employee Basic Details */}
                    <div className="border border-gray-300 p-6 rounded-t-xl shadow-sm pt-0 px-0 pb-3 mb-0">
                        <h2 className="text-lg font-semibold pb-3 rounded-xl text-[var(--color1)] pt-3 px-6 bg-[var(--color2)]">Employee Basic Details</h2>
                        <div className="flex flex-col gap-3  border-t border-gray-300 pt-3">

                            {/* Employee Name */}
                            <div className="flex items-center gap-4  px-6 ">
                                <label className="w-56 text-sm font-medium">Employee Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Employee Name"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>
                            {/* Phone Number */}
                            <div className="flex items-center gap-4 px-6 border-t-1 pt-3 border-gray-300">
                                <label className="w-56 text-sm font-medium">Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* Employee ID */}
                            <div className="flex items-center gap-4 px-6 border-t-1 pt-3 border-gray-300">
                                <label className="w-56 text-sm font-medium">Employee ID</label>
                                <input
                                    type="text"
                                    placeholder="Enter Employee ID"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* Employee Type */}
                            <div className="flex items-center gap-4 px-6 border-t-1 pt-3 border-gray-300">
                                <label className="w-56 text-sm font-medium">Employee Type</label>
                                <select className="flex-1 p-2 border border-gray-300 rounded outline-none">
                                    <option>Select Employee Type</option>
                                </select>
                            </div>

                            {/* Joining Date Field */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Employee Joining Date</label>
                                <div className="flex-1">
                                    <CustomCalendar
                                        selectedDate={joiningDate}
                                        onChange={(date) => setJoiningDate(date)}
                                    />
                                </div>
                            </div>

                            {/* Manual Attendance Toggle */}
                            <div className="flex items-center gap-4 px-6 border-t-1 pt-3 border-gray-300">
                                <label className="w-56 text-sm font-medium leading-snug">
                                    Manual Attendance
                                    <br />
                                    <span className="text-xs text-gray-500">(With Location and Selfie)</span>
                                </label>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[var(--color1)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className='p-4 border-x-1 border-gray-300 mb-0'></div>

                    {/* Salary Details */}
                    <div className="border border-gray-300 p-6 rounded-b-xl shadow-sm pt-0 px-0">
                        <h2 className="text-lg font-semibold rounded-xl text-[var(--color1)] pt-3 px-6 bg-[var(--color2)] pb-3">Salary Details</h2>

                        <div className="flex flex-col gap-3 border-t border-gray-300 pt-3">

                            {/* Salary Cycle */}
                            <div className="flex items-center gap-4 px-6">
                                <label className="w-56 text-sm font-medium">Salary Cycle</label>
                                <select className="flex-1 p-2 border border-gray-300 rounded outline-none">
                                    <option>Select Salary Cycle</option>
                                </select>
                            </div>

                            {/* Salary Type */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Salary Type</label>
                                <select className="flex-1 p-2 border border-gray-300 rounded outline-none">
                                    <option>Select Salary Type</option>
                                </select>
                            </div>

                            {/* Salary Structure Template */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Salary Structure Template</label>
                                <select className="flex-1 p-2 border border-gray-300 rounded outline-none">
                                    <option>Select Salary Structure</option>
                                </select>
                            </div>

                            {/* Opening Balance */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Opening Balance</label>
                                <div className="flex flex-1 gap-4">
                                    <select className="w-1/2 p-2 pr-12 border border-gray-300 rounded outline-none">
                                        <option>Select Opening Balance</option>
                                    </select>

                                    <input
                                        type="number"
                                        placeholder="Enter Amount Rupees"
                                        className="w-1/2 p-2 border border-gray-300 rounded outline-none "
                                    />
                                </div>
                            </div>

                            {/* Shift */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Select Shift</label>
                                <select className="flex-1 p-2 border border-gray-300 rounded outline-none">
                                    <option>Select Shift</option>
                                </select>
                            </div>

                            {/* Salary Details Access */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Salary Details Access</label>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[var(--color1)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                                </label>
                            </div>

                            {/* Current Cycle Access */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Allow Current Cycle Salary Access</label>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[var(--color1)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                                </label>
                            </div>

                        </div>
                    </div>


                    {/* Form Buttons */}
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="bg-white text-[var(--color1)] border border-[var(--color1)] px-6 py-2 rounded-lg"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="bg-[var(--color1)] text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                        >
                            Add
                        </button>
                    </div>

                </form>
            </div>
        </Layout>
    )
}
