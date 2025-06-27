'use client'

import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FaPlus, FaEye } from 'react-icons/fa6'
import { FaEdit } from 'react-icons/fa'

export default function PayrollPage() {
    const router = useRouter()

    const payrollData = [
        {
            id: 1,
            name: 'Pritesh Prajapati',
            designation: 'PHP',
            department: 'IT Department',
            workingDays: 18,
            monthly: '70,000/-',
            yearly: '90,000/-',
        },
        {
            id: 2,
            name: 'Durgesh Hirani',
            designation: 'PHP',
            department: 'IT Department',
            workingDays: 20,
            monthly: '50,000/-',
            yearly: '70,000/-',
        },
        {
            id: 3,
            name: 'Ravi Sanchla',
            designation: 'UI/UX Designer',
            department: 'IT Department',
            workingDays: 19,
            monthly: '40,000/-',
            yearly: '60,000/-',
        },
    ]

    return (
        <Layout>
            <div className="p-6 pt-0 text-black ">

                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-[var(--color1)]">Payroll <br /> <Breadcrumbs /></h1>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white  border border-gray-200 rounded-lg p-4 shadow">
                        <h3 className="text-sm font-semibold text-gray-500 ">Total Payment</h3>
                        <p className="text-xl font-bold text-[var(--color1)]">25,00,000/-</p>
                    </div>
                    <div className="bg-white  border border-gray-200 rounded-lg p-4 shadow">
                        <h3 className="text-sm font-semibold text-gray-500 ">Yearly</h3>
                        <p className="text-xl font-bold text-[var(--color1)]">4,00,000/-</p>
                    </div>
                    <div className="flex items-center justify-end">
                        <button
                            onClick={() => router.push('/dashboard/payroll/create')}
                            className="flex items-center gap-2 bg-[var(--color1)] text-white px-4 py-2 rounded-lg hover:bg-orange-600 w-fit"
                        >
                            <FaPlus />
                            Create Payslip
                        </button>
                    </div>
                </div>

                {/* Payroll Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-[var(--color1)]">Employee Payroll List</h2>
                    <span className="text-sm text-gray-600 -400">June - 2025</span>
                </div>

                {/* Payroll Table */}
                <div className="overflow-x-auto rounded-xl border border-gray-300 border-b-0">
                    <table className="w-full text-sm">
                        <thead className="bg-[#FFFAF5]  text-left">
                            <tr className='text-center'>
                                <th className="p-3 border-b border-gray-300">Sr. No</th>
                                <th className="p-3 border-b border-gray-300">Employee Name</th>
                                <th className="p-3 border-b border-gray-300">Designation</th>
                                <th className="p-3 border-b border-gray-300">Department</th>
                                <th className="p-3 border-b border-gray-300">Total Working Day</th>
                                <th className="p-3 border-b border-gray-300">Monthly</th>
                                <th className="p-3 border-b border-gray-300">Yearly</th>
                                <th className="p-3 border-b border-gray-300">Payroll Details</th>
                                <th className="p-3 border-b border-gray-300">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payrollData.map((item, index) => (
                                <tr key={item.id} className="text-center hover:bg-yellow-50 -[#2a2a2a]">
                                    <td className="p-3 border-b border-gray-300">{index + 1}</td>
                                    <td className="p-3 border-b border-gray-300">{item.name}</td>
                                    <td className="p-3 border-b border-gray-300">{item.designation}</td>
                                    <td className="p-3 border-b border-gray-300">{item.department}</td>
                                    <td className="p-3 border-b border-gray-300">{item.workingDays}</td>
                                    <td className="p-3 border-b border-gray-300">{item.monthly}</td>
                                    <td className="p-3 border-b border-gray-300">{item.yearly}</td>
                                    <td className="p-3 border-b border-gray-300 text-[var(--color1)] cursor-pointer text-center">
                                        <FaEye className="inline-block hover:scale-110 transition-transform duration-200" title="View Details" />
                                    </td>
                                    <td className="p-3 border-b border-gray-300 text-center">
                                        <FaEdit className="inline-block text-[var(--color1)] hover:scale-110 transition-transform duration-200 cursor-pointer" title="Edit" />
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
