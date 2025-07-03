'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import CustomDropdown from '@/components/CustomDropdown'
import CustomCalendar from '@/components/CustomCalendar'
import FileUploadBox from '@/components/FileUploadBox'

export default function CreateAssetPage() {
    const router = useRouter()

    const [assetType, setAssetType] = useState('')
    const [assetName, setAssetName] = useState('')
    const [serialNumber, setSerialNumber] = useState('')
    const [isWorking, setIsWorking] = useState('')
    const [purchasedDate, setPurchasedDate] = useState('')
    const [isAvailable, setIsAvailable] = useState('')
    const [assignedTo, setAssignedTo] = useState('')
    const [assignedDate, setAssignedDate] = useState('')
    const [description, setDescription] = useState('')
    const [uploadedFiles, setUploadedFiles] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Asset created successfully!')
        router.push('/dashboard/asset/assets')
    }

    return (
        <Layout>
            <div className="p-4 sm:p-6 text-black pt-0 max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
                    <div>
                        <h1 className="text-2xl font-bold text-[var(--color1)]">Asset</h1>
                        <Breadcrumbs />
                    </div>
                    <button
                        onClick={() => router.back()}
                        className="bg-[var(--color1)] text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                    >
                        Back
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4 border border-gray-200 rounded-lg space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm font-medium block mb-1">Asset Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                value={assetName}
                                onChange={(e) => setAssetName(e.target.value)}
                                placeholder="Enter asset name"
                                className="w-full p-2 border border-gray-300 rounded outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium block mb-1">Asset Type</label>
                            <CustomDropdown
                                value={assetType}
                                onChange={setAssetType}
                                options={['Stationery', 'IT', 'Furniture']}
                                placeholder="Select"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium block mb-1">Asset Serial Number</label>
                            <input
                                type="text"
                                value={serialNumber}
                                onChange={(e) => setSerialNumber(e.target.value)}
                                placeholder="Enter serial number"
                                className="w-full p-2 border border-gray-300 rounded outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium block mb-1">Is Working</label>
                            <CustomDropdown
                                value={isWorking}
                                onChange={setIsWorking}
                                options={['Yes', 'No', 'Maintenance']}
                                placeholder="Select"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium block mb-1">Purchased Date</label>
                            <CustomCalendar selectedDate={purchasedDate} onChange={setPurchasedDate} />
                        </div>
                        <div>
                            <label className="text-sm font-medium block mb-1">Is Available For Employee <span className="text-red-500">*</span></label>
                            <CustomDropdown
                                value={isAvailable}
                                onChange={setIsAvailable}
                                options={['Yes', 'No']}
                                placeholder="Select Availability"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium block mb-1">Assigned To</label>
                            <CustomDropdown
                                value={assignedTo}
                                onChange={setAssignedTo}
                                options={['Ravi', 'Durgesh', 'Sandip']}
                                placeholder="Select Employee"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium block mb-1">Assigned Date</label>
                            <CustomCalendar selectedDate={assignedDate} onChange={setAssignedDate} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* File Upload */}
                        <div>
                            <label className="text-sm font-medium mb-2">Upload Image</label>
                            <FileUploadBox
                                uploadedFiles={uploadedFiles}
                                setUploadedFiles={setUploadedFiles}
                            />
                            <p className="text-xs text-gray-500 mt-2">
                                Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="text-sm font-medium mb-1">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter description..."
                                className="w-full p-2 border border-gray-300 rounded outline-none h-[10px] min-h-[170px] mt-2"
                                rows={4}
                            ></textarea>
                        </div>
                    </div>


                    {/* Submit Button */}
                    <div className="text-right">
                        <button
                            type="submit"
                            className="bg-[var(--color1)] text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
