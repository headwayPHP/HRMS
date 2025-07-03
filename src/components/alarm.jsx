'use client'

import { useState } from 'react'
import { MdOutlineAccessAlarm } from 'react-icons/md'

export default function Alarm({ isOpen, onClose }) {
    const [selectedDays, setSelectedDays] = useState([])
    const [hour, setHour] = useState(7)
    const [minute, setMinute] = useState('00')
    const [ampm, setAmPm] = useState('AM')

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    const toggleDay = (day) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter(d => d !== day))
        } else {
            setSelectedDays([...selectedDays, day])
        }
    }

    const handleSubmit = () => {
        const time = `${hour}:${minute} ${ampm}`
        alert(`Alarm set for ${selectedDays.join(', ')} at ${time}`)
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="fixed top-20 right-6 z-50 w-72 bg-white rounded-xl border border-orange-300 shadow-lg p-4 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700">Set Time &amp; Date</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-red-500">&times;</button>
            </div>

            <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Days of Week <span className="text-xs">(Select Multiple Days)</span></p>
                <div className="grid grid-cols-4 gap-2">
                    {days.map((day) => (
                        <button
                            key={day}
                            onClick={() => toggleDay(day)}
                            className={`py-1 text-sm border rounded-full ${selectedDays.includes(day) ? 'bg-orange-500 text-white' : 'text-gray-700 border-gray-300 hover:bg-orange-100'}`}
                        >
                            {day}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">Set Time</p>
                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        min="1"
                        max="12"
                        value={hour}
                        onChange={(e) => setHour(e.target.value)}
                        className="w-14 text-center p-2 border border-gray-300 rounded text-xl text-orange-500"
                    />
                    <span className="text-xl font-semibold">:</span>
                    <input
                        type="text"
                        value={minute}
                        onChange={(e) => setMinute(e.target.value)}
                        className="w-14 text-center p-2 border border-gray-300 rounded text-xl text-orange-500"
                    />
                    <div className="flex flex-col">
                        <button onClick={() => setAmPm('AM')} className={`text-sm px-2 py-1 border rounded-t ${ampm === 'AM' ? 'bg-orange-500 text-white' : 'border-gray-300'}`}>AM</button>
                        <button onClick={() => setAmPm('PM')} className={`text-sm px-2 py-1 border rounded-b ${ampm === 'PM' ? 'bg-orange-500 text-white' : 'border-gray-300'}`}>PM</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <button
                    onClick={onClose}
                    className="text-orange-500 border border-orange-500 px-4 py-1 rounded hover:bg-orange-50"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSubmit}
                    className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600"
                >
                    OK
                </button>
            </div>
        </div>
    )
}
