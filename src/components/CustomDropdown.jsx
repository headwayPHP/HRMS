'use client'

import { useState, useRef, useEffect } from 'react'

export default function CustomDropdown({ options = [], value, onChange, placeholder = 'Select option' }) {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)

    const handleSelect = (option) => {
        onChange(option)
        setOpen(false)
    }

    // Handle click outside and Escape key
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false)
            }
        }

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleEscape)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscape)
        }
    }, [])

    return (
        <div className="relative w-full custom-dropdown" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full p-2 border border-gray-300 rounded flex justify-between items-center bg-white"
            >
                <span className="text-left">{value || placeholder}</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <ul className="absolute z-10 mt-1 w-full border rounded bg-white shadow">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="px-4 py-2 cursor-pointer hover:bg-[var(--color1)] hover:text-white"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
