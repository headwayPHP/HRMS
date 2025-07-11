'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import CustomDropdown from '@/components/CustomDropdown'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import CustomCalendar from '@/components/CustomCalendar' // ✅ Import

export default function AddEmployeePage() {
    const router = useRouter()
    const [dob, setDob] = useState(null);
    const [joiningDate, setJoiningDate] = useState(null)
    const [pfJoiningDate, setPfJoiningDate] = useState(null);
    const [employeeType, setEmployeeType] = useState('')
    const [maritalStatus, setMaritalStatus] = useState('')
    const [epsJoiningDate, setEpsJoiningDate] = useState(null);
    const [epsExitDate, setEpsExitDate] = useState(null);
    const [gender, setGender] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [salaryCycle, setSalaryCycle] = useState('')
    const [salaryType, setSalaryType] = useState('')
    const [salaryStructure, setSalaryStructure] = useState('')
    const [openingBalanceType, setOpeningBalanceType] = useState('')
    const [openingBalanceAmount, setOpeningBalanceAmount] = useState('')
    const [selectedShift, setSelectedShift] = useState('')
    const [accountType, setAccountType] = useState('')
    const [eligibility, setEligibility] = useState({
        PF: '',
        ESI: '',
        PT: '',
        LWF: '',
        EPS: '',
        HPS: '',
    });


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
                                <div className="flex-1">
                                    <CustomDropdown
                                        options={['Full Time', 'Part Time', 'Intern', 'Contract']}
                                        value={employeeType}
                                        onChange={setEmployeeType}
                                        placeholder="Select Employee Type"
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

                    <div className="border border-gray-300 p-6  shadow-sm pt-0 px-0 pb-3 mb-0">
                        <h2 className="text-lg font-semibold pb-3 rounded-xl text-[var(--color1)] pt-3 px-6 bg-[var(--color2)]">
                            Employee Personal Details
                        </h2>

                        <div className="flex flex-col gap-3 border-t border-gray-300 pt-3">

                            {/* Email */}
                            <div className="flex items-center gap-4 px-6">
                                <label className="w-56 text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* Gender Dropdown */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Gender</label>
                                <div className="flex-1">
                                    <CustomDropdown
                                        options={['Male', 'Female', 'Other']}
                                        value={gender}
                                        onChange={setGender}
                                        placeholder="Select Gender"
                                    />
                                </div>
                            </div>

                            {/* Date of Birth */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Date of Birth</label>
                                <div className="flex-1">
                                    <CustomCalendar
                                        selectedDate={dob}
                                        onChange={(date) => setDob(date)}
                                    />
                                </div>
                            </div>

                            {/* Marital Status Dropdown */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Marital Status</label>
                                <div className="flex-1">
                                    <CustomDropdown
                                        options={['Single', 'Married', 'Divorced', 'Widowed']}
                                        value={maritalStatus}
                                        onChange={setMaritalStatus}
                                        placeholder="Select Marital Status"
                                    />
                                </div>
                            </div>

                            {/* Blood Group Dropdown */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Blood Group</label>
                                <div className="flex-1">
                                    <CustomDropdown
                                        options={['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']}
                                        value={bloodGroup}
                                        onChange={setBloodGroup}
                                        placeholder="Select Blood Group"
                                    />
                                </div>
                            </div>

                            {/* Emergency Contact */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Emergency Contact</label>
                                <input
                                    type="text"
                                    placeholder="Enter Emergency Contact"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium pt-2">Address</label>
                                <textarea
                                    placeholder="Enter Address"
                                    rows="3"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* Allow Personal Info Access Toggle */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Allow Personal Info Access</label>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[var(--color1)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                                </label>
                            </div>

                        </div>
                    </div>


                    <div className='p-4 border-x-1 border-gray-300 mb-0'></div>

                    {/* Salary Details */}
                    <div className="border border-gray-300 p-6  shadow-sm pt-0 px-0 pb-3 mb-0">
                        <h2 className="text-lg font-semibold rounded-xl text-[var(--color1)] pt-3 px-6 bg-[var(--color2)] pb-3">Salary Details</h2>

                        <div className="flex flex-col gap-3 border-t border-gray-300 pt-3">

                            {/* Salary Cycle */}
                            <div className="flex items-center gap-4 px-6">
                                <label className="w-56 text-sm font-medium">Salary Cycle</label>
                                <div className="flex-1">
                                    <CustomDropdown
                                        options={['Monthly', 'Bi-Weekly', 'Weekly']}
                                        value={salaryCycle}
                                        onChange={setSalaryCycle}
                                        placeholder="Select Salary Cycle"
                                    />
                                </div>
                            </div>


                            {/* Salary Type */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Salary Type</label>
                                <div className="flex-1">
                                    <CustomDropdown
                                        options={['Fixed', 'Hourly']}
                                        value={salaryType}
                                        onChange={setSalaryType}
                                        placeholder="Select Salary Type"
                                    />
                                </div>
                            </div>

                            {/* Salary Structure Template */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Salary Structure Template</label>
                                <div className="flex-1">
                                    <CustomDropdown
                                        options={['Template A', 'Template B']}
                                        value={salaryStructure}
                                        onChange={setSalaryStructure}
                                        placeholder="Select Salary Structure"
                                    />
                                </div>
                            </div>

                            {/* Opening Balance */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Opening Balance</label>
                                <div className="flex flex-1 gap-4">
                                    <div className="w-1/2">
                                        <CustomDropdown
                                            options={['Credit', 'Debit']}
                                            value={openingBalanceType}
                                            onChange={setOpeningBalanceType}
                                            placeholder="Select Opening Balance"
                                        />
                                    </div>
                                    <input
                                        type="number"
                                        value={openingBalanceAmount}
                                        onChange={(e) => setOpeningBalanceAmount(e.target.value)}
                                        placeholder="Enter Amount Rupees"
                                        className="w-1/2 p-2 border border-gray-300 rounded outline-none"
                                    />
                                </div>
                            </div>

                            {/* Shift */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Select Shift</label>
                                <div className="flex-1">
                                    <CustomDropdown
                                        options={['Morning', 'Evening', 'Night']}
                                        value={selectedShift}
                                        onChange={setSelectedShift}
                                        placeholder="Select Shift"
                                    />
                                </div>
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

                    <div className='p-4 border-x-1 border-gray-300 mb-0'></div>
                    <div className="border border-gray-300 p-6  shadow-sm pt-0 px-0 pb-3 mb-0">
                        <h2 className="text-lg font-semibold pb-3 rounded-xl text-[var(--color1)] pt-3 px-6 bg-[var(--color2)]">
                            Bank Details
                        </h2>

                        <div className="flex flex-col gap-3 border-t border-gray-300 pt-3">

                            {/* Bank Name */}
                            <div className="flex items-center gap-4 px-6">
                                <label className="w-56 text-sm font-medium">Bank Name<span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter Bank Name"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* Bank Account Number */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Bank Account Number<span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter Bank Account Number"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* Account Holder Name */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Account Holder Name<span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter Account Holder Name"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* Account Type Dropdown */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">
                                    Bank Account Type<span className="text-red-500">*</span>
                                </label>
                                <div className="flex-1">
                                    <CustomDropdown
                                        options={['Savings', 'Current']}
                                        value={accountType}
                                        onChange={setAccountType}
                                        placeholder="Select Account Type"
                                    />
                                </div>
                            </div>


                            {/* IFSC Code */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">IFSC Code</label>
                                <input
                                    type="text"
                                    placeholder="Enter IFSC Code"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* UPI ID */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">UPI ID</label>
                                <input
                                    type="text"
                                    placeholder="Enter UPI ID"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* Salary Details Access Toggle */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Salary Details Access</label>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[var(--color1)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                                </label>
                            </div>

                        </div>
                    </div>

                    <div className='p-4 border-x-1 border-gray-300 mb-0'></div>

                    <div className="border border-gray-300 p-6 rounded-b-xl shadow-sm pt-0 px-0 ">
                        <h2 className="text-lg font-semibold pb-3 rounded-xl text-[var(--color1)] pt-3 px-6 bg-[var(--color2)]">
                            Employment Information
                        </h2>

                        <div className="flex flex-col gap-3 ">

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

                            {/* UAN */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">UAN</label>
                                <input
                                    type="text"
                                    placeholder="Enter UAN"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* PAN */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">PAN</label>
                                <input
                                    type="text"
                                    placeholder="Enter PAN"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* Aadhaar Number */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Aadhaar Card Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter Aadhaar Card Number"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* Aadhaar Enrollment Number */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Aadhaar Enrollment No.</label>
                                <input
                                    type="text"
                                    placeholder="Enter Aadhaar Enrollment Number"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* PF Number */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">PF Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter PF Number"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* PF Joining Date */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">PF Joining Date</label>
                                <div className="flex-1">
                                    <CustomCalendar selectedDate={pfJoiningDate} onChange={setPfJoiningDate} />
                                </div>
                            </div>

                            {/* ESI Details */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">ESI Details Available</label>
                                <input
                                    type="text"
                                    placeholder="Enter ESI Details"
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* ESI Number */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">ESI Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter ESI No."
                                    className="flex-1 p-2 border border-gray-300 rounded outline-none"
                                />
                            </div>

                            {/* Eligibility Dropdowns */}
                            {[
                                ['PF Eligible', 'PF'],
                                ['ESI Eligible', 'ESI'],
                                ['PT Eligible', 'PT'],
                                ['LWF Eligible', 'LWF'],
                                ['EPS Eligible', 'EPS'],
                                ['HPS Eligible', 'HPS'],
                            ].map(([label, key]) => (
                                <div key={label} className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                    <label className="w-56 text-sm font-medium">{label}</label>
                                    <div className="flex-1">
                                        <CustomDropdown
                                            options={['Yes', 'No']}
                                            value={eligibility[key]}
                                            onChange={(val) =>
                                                setEligibility((prev) => ({ ...prev, [key]: val }))
                                            }
                                            placeholder="Select"
                                        />
                                    </div>
                                </div>
                            ))}


                            {/* EPS Joining Date */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">EPS Joining Date</label>
                                <div className="flex-1">
                                    <CustomCalendar selectedDate={epsJoiningDate} onChange={setEpsJoiningDate} />
                                </div>
                            </div>

                            {/* EPS Exit Date */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">EPS Exit Date</label>
                                <div className="flex-1">
                                    <CustomCalendar selectedDate={epsExitDate} onChange={setEpsExitDate} />
                                </div>
                            </div>

                            {/* Employment Info Access Toggle */}
                            <div className="flex items-center gap-4 px-6 border-t border-gray-300 pt-3">
                                <label className="w-56 text-sm font-medium">Employment Info Access</label>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[var(--color1)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
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
                            className="bg-[var(--color1)] text-white px-6 py-2 rounded-lg hover:bg-[var(--color11)]"
                        >
                            Add
                        </button>
                    </div>

                </form>
            </div>
        </Layout>
    )
}
