'use client'

import { useRef } from 'react'
import { FiTrash2, FiUploadCloud } from 'react-icons/fi'

export default function FileUploadBox({ uploadedFiles, setUploadedFiles }) {
    const inputRef = useRef()

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files)
        setUploadedFiles(prev => [...prev, ...newFiles])
    }

    const handleDrop = (e) => {
        e.preventDefault()
        const newFiles = Array.from(e.dataTransfer.files)
        setUploadedFiles(prev => [...prev, ...newFiles])
    }

    const handleRemove = (index) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index))
    }

    const openFileDialog = () => {
        inputRef.current?.click()
    }

    return (
        <div className='border-2 border-[var(--color1)] p-6 rounded-xl mt-2'>
            {/* Drag & Drop Clickable Area */}
            <div
                className="border-2 border-dashed border-[var(--color1)] rounded-lg p-6  text-center cursor-pointer"
                onClick={openFileDialog}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <div className="flex flex-col items-center justify-center text-sm text-gray-600">
                    <FiUploadCloud className="text-4xl text-[var(--color1)] mb-2" />
                    <p>Drag & drop files or <span className="text-[var(--color1)] font-semibold">click to browse</span></p>
                    <input
                        ref={inputRef}
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    <p className="text-xs mt-2 text-gray-500">
                        Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
                    </p>
                </div>
            </div>

            {/* Uploaded Files List */}
            {uploadedFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                    <p className="font-semibold">Uploaded</p>
                    {uploadedFiles.map((file, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white text-sm"
                        >
                            <span className="truncate">{file.name}</span>
                            <FiTrash2
                                className="text-red-500 cursor-pointer hover:text-red-700"
                                onClick={() => handleRemove(index)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
