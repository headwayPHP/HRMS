'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function EmployeeDetailsPage() {
    const { id } = useParams()
    const router = useRouter()
    const [employee, setEmployee] = useState(null)

    useEffect(() => {
        // Simulate API call (replace with actual fetch)
        const fetchEmployee = async () => {
            const mockEmployee = {
                id,
                name: 'Alex Rawles',
                email: 'alexrawles@gmail.com',
                image: '/profile.jpg',

                // Section: Basic
                code: 'EMP - 00012',
                type: 'Full Time',
                phone: '123456789',
                employeeId: '27',
                joinDate: '12/12/2014',
                emailWork: 'chirag@123mail.com',
                marital: 'Married',

                // Section: Personal
                gender: 'Male',
                blood: 'B+',
                contact: '1234567890',
                address: 'Post Office MANJALPUR, GF OFFICE, AHMEDABAD',
                dob: '01/10/1990',

                // Section: Salary
                cycle: 'Monthly',
                structure: 'L1',
                typeSalary: 'Fixed',
                amount: '1,20,000',
                openingBalance: 'N/A',

                // Section: Bank
                bank: 'HDFC',
                accountNo: '123456789',
                holder: 'N/A',
                ifsc: 'HDFC123456',
                upi: 'alex@upi',

                // Section: Employment
                uan: '123123123',
                pfNo: 'P123456',
                esiNo: 'E123456',
                pfJoin: '12/12/2014',
                esiJoin: '12/12/2014',
                aadhar: '1234 1234 1234',
                pan: 'ABCDE1234F',
                driving: 'GJ012019123456',
                epfAvailable: 'Yes',
                epsAvailable: 'No',
                epfAmount: 'N/A',
                epsAmount: 'N/A',
                pfType: 'Basic',
                epfUan: '123456789',
            }
            setEmployee(mockEmployee)
        }

        fetchEmployee()
    }, [id])

    if (!employee) return <div>Loading...</div>

    const Section = ({ title, children, light }) => (
        <div className={`border  border-gray-300 rounded-xl px-0 `}>
            <div className="font-semibold mb-3 border-b border-gray-300 pb-1 px-4 pt-2 rounded-t-xl bg-blue-50">{title}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pb-4 text-sm px-4">
                {children}
            </div>
        </div>
    )
    // const Section = ({ title, children, light }) => (
    //     <div className={`border rounded-md p-4 ${light ? 'bg-blue-50' : ''}`}>
    //         <div className="font-semibold mb-3 border-b pb-1">{title}</div>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
    //             {children}
    //         </div>
    //     </div>
    // )

    const Item = ({ label, value }) => (
        <p><strong>{label} :</strong> {value || 'N/A'}</p>
    )

    return (
        <Layout>
            <div className="p-6 text-black">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-[var(--color1)]">Employee</h1>
                        <Breadcrumbs />
                        <p className="text-lg font-semibold text-[var(--color1)]">Employee Full Details</p>
                    </div>
                    <button
                        onClick={() => router.back()}
                        className="bg-[var(--color1)] text-white px-4 py-1 rounded-lg hover:bg-[var(--color11)]"
                    >
                        Back
                    </button>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-4 mb-8">
                    <Image src={employee.image} alt="Profile" width={70} height={70} className=" w-[70px] h-[70px] rounded-[50%]" />
                    <div>
                        <div className="font-medium">{employee.name}</div>
                        <div className="text-sm text-gray-500">{employee.email}</div>
                    </div>
                </div>

                <div className="grid gap-6">
                    <Section title="Employee Basic Details" light>
                        <Item label="Employee Code" value={employee.code} />
                        <Item label="Employee ID" value={employee.employeeId} />
                        <Item label="Employee Name" value={employee.name} />
                        <Item label="Employee Type" value={employee.type} />
                        <Item label="Phone Number" value={employee.phone} />
                        <Item label="Employee Joining Date" value={employee.joinDate} />
                        <Item label="Employee Email" value={employee.emailWork} />
                        <Item label="Marital Attendance" value={employee.marital} />
                    </Section>

                    <Section title="Employee Personal Details">
                        <Item label="Email" value={employee.email} />
                        <Item label="Blood Group" value={employee.blood} />
                        <Item label="Gender" value={employee.gender} />
                        <Item label="Emergency Contact" value={employee.contact} />
                        <Item label="Marital Status" value={employee.marital} />
                        <Item label="Address" value={employee.address} />
                    </Section>

                    <Section title="Employee Salary Details" light>
                        <Item label="Salary Cycle" value={employee.cycle} />
                        <Item label="Opening Balance" value={employee.openingBalance} />
                        <Item label="Salary Type" value={employee.typeSalary} />
                        <Item label="Amount" value={employee.amount} />
                        <Item label="Salary Structure" value={employee.structure} />
                    </Section>

                    <Section title="Employee Bank Details">
                        <Item label="Bank Name" value={employee.bank} />
                        <Item label="Bank Account No." value={employee.accountNo} />
                        <Item label="Account Holder" value={employee.holder} />
                        <Item label="IFSC Code" value={employee.ifsc} />
                        <Item label="UPI ID" value={employee.upi} />
                    </Section>

                    <Section title="Employment Details" light>
                        <Item label="UAN" value={employee.uan} />
                        <Item label="PF No." value={employee.pfNo} />
                        <Item label="ESI No." value={employee.esiNo} />
                        <Item label="PF Joining Date" value={employee.pfJoin} />
                        <Item label="ESI Joining Date" value={employee.esiJoin} />
                        <Item label="Aadhar Number" value={employee.aadhar} />
                        <Item label="PAN Number" value={employee.pan} />
                        <Item label="Driving License" value={employee.driving} />
                        <Item label="EPF Available" value={employee.epfAvailable} />
                        <Item label="EPS Available" value={employee.epsAvailable} />
                        <Item label="EPF Amount" value={employee.epfAmount} />
                        <Item label="EPS Amount" value={employee.epsAmount} />
                        <Item label="PF Type" value={employee.pfType} />
                        <Item label="EPF UAN" value={employee.epfUan} />
                    </Section>
                </div>
            </div>
        </Layout>
    )
}
