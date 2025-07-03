'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FaPlus, FaEye, FaEdit, FaFileExport } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'
import CustomCalendar from '@/components/CustomCalendar'
import CustomDropdown from '@/components/CustomDropdown'

export default function AssetsPage() {
    const router = useRouter()

    const [selectedDateFrom, setSelectedDateFrom] = useState('')
    const [selectedDateTo, setSelectedDateTo] = useState('')
    const [assignedTo, setAssignedTo] = useState('')
    const [assetType, setAssetType] = useState('')
    const [workingStatus, setWorkingStatus] = useState('')
    const [availabilityStatus, setAvailabilityStatus] = useState('')

    const toggleAvailability = (id) => {
        setAssets(prev => prev.map(asset =>
            asset.id === id ? { ...asset, isAvailable: !asset.isAvailable } : asset
        ))
    }

    const [assets, setAssets] = useState([
        {
            id: 1,
            name: 'Pen',
            type: 'Stationery',
            assignedTo: 'Ravi',
            isWorking: 'Yes',
            status: true,
            isAvailable: true
        },
        {
            id: 2,
            name: 'Book',
            type: 'Stationery',
            assignedTo: 'Durgesh',
            isWorking: 'No',
            status: true,
            isAvailable: false
        },
        {
            id: 3,
            name: 'Computer',
            type: 'IT',
            assignedTo: 'Sandip',
            isWorking: 'Maintenance',
            status: false,
            isAvailable: false
        },
    ])

    const toggleStatus = (id) => {
        setAssets(prev => prev.map(asset =>
            asset.id === id ? { ...asset, status: !asset.status } : asset
        ))
    }

    const filteredAssets = assets.filter(asset => {
        const matchType = assetType ? asset.type === assetType : true
        const matchWorking = workingStatus ? asset.isWorking === workingStatus : true
        const matchAvailable = availabilityStatus ? asset.isAvailable === availabilityStatus : true
        const matchAssignedTo = assignedTo ? asset.assignedTo === assignedTo : true
        return matchType && matchWorking && matchAvailable && matchAssignedTo
    })

    return (
        <Layout>
            <div className="p-4 sm:p-6 text-black pt-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
                    <div>
                        <h1 className="text-2xl font-bold text-[var(--color1)]">Asset</h1>
                        <Breadcrumbs />
                    </div>
                    <button
                        onClick={() => router.push('/dashboard/asset/assets/create')}
                        className="flex items-center gap-2 bg-[var(--color1)] text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                    >
                        <FaPlus />
                        Add Asset
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 border border-gray-200 p-4 rounded-lg">
                    <div>
                        <label className="text-sm font-medium block mb-1">Type</label>
                        <CustomDropdown
                            value={assetType}
                            onChange={(value) => setAssetType(value)}
                            options={['Stationery', 'IT']}
                            placeholder="All Types"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium block mb-1">Working Status</label>
                        <CustomDropdown
                            value={workingStatus}
                            onChange={(value) => setWorkingStatus(value)}
                            options={['Yes', 'No', 'Maintenance']}
                            placeholder="All Status"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium block mb-1">Availability</label>
                        <CustomDropdown
                            value={availabilityStatus}
                            onChange={(value) => setAvailabilityStatus(value)}
                            options={['Active', 'in Active']}
                            placeholder="All"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium block mb-1">Purchased From</label>
                        <CustomCalendar selectedDate={selectedDateFrom} onChange={setSelectedDateFrom} />
                    </div>
                    <div>
                        <label className="text-sm font-medium block mb-1">Assigned To</label>
                        <CustomDropdown
                            value={assignedTo}
                            onChange={(value) => setAssignedTo(value)}
                            options={['Ravi', 'Durgesh', 'Sandip']}
                            placeholder="All"
                        />
                    </div>
                    <div className="sm:col-span-3 flex flex-wrap gap-3 justify-end pt-2">
                        <button
                            onClick={() => {
                                setSelectedDateFrom('')
                                setSelectedDateTo('')
                                setAssetType('')
                                setWorkingStatus('')
                                setAvailabilityStatus('')
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

                <h2 className="text-lg font-semibold mb-4 text-[var(--color1)]">Asset List</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-300 border-b-0">
                    <table className="min-w-[1000px] w-full text-sm">
                        <thead className="bg-[#FFFAF5]">
                            <tr className="text-center">
                                {['Sr. No', 'Name', 'Type', 'Assign to', 'Is Working', 'STATUS', 'Is Available', 'Action'].map((title, idx) => (
                                    <th key={idx} className="p-3 border-b border-gray-300">{title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAssets.map((item, index) => (
                                <tr key={item.id} className="hover:bg-yellow-50 text-center">
                                    <td className="p-3 border-b border-gray-300">{index + 1}</td>
                                    <td className="p-3 border-b border-gray-300">{item.name}</td>
                                    <td className="p-3 border-b border-gray-300">{item.type}</td>
                                    <td className="p-3 border-b border-gray-300">{item.assignedTo}</td>
                                    <td className="p-3 border-b border-gray-300">{item.isWorking}</td>

                                    <td className="p-3 border-b border-gray-300">
                                        <label className="inline-flex items-center cursor-pointer relative">
                                            <input
                                                type="checkbox"
                                                className="sr-only peer"
                                                checked={item.status}
                                                onChange={() => toggleStatus(item.id)}
                                            />
                                            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[var(--color1)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
                                        </label>
                                    </td>


                                    <td className="p-3 border-b border-gray-300">
                                        <label className="inline-flex items-center cursor-pointer relative">
                                            <input
                                                type="checkbox"
                                                className="sr-only peer"
                                                checked={item.isAvailable}
                                                onChange={() => toggleAvailability(item.id)}
                                            />
                                            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[var(--color1)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
                                        </label>
                                    </td>


                                    <td className="p-3 border-b border-gray-300">
                                        <div className="flex justify-center gap-3 text-[var(--color1)] scale-125">
                                            <FaEdit
                                                title="Edit"
                                                className="cursor-pointer hover:scale-110 transition-transform scale-125"
                                                onClick={() => alert(`Edit ${item.name}`)}
                                            />
                                            <FaDeleteLeft
                                                title="Delete"
                                                className="cursor-pointer hover:scale-110 transition-transform scale-125"
                                                onClick={() => confirm(`Delete ${item.name}?`)}
                                            />
                                            <FaFileExport
                                                title="Export"
                                                className="cursor-pointer hover:scale-110 transition-transform scale-125"
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
