'use client'

import { useState } from 'react'
import Clock from '../components/Clock'

export default function PunchIn() {
    const [startTime, setStartTime] = useState('Start time')
    const [endTime, setEndTime] = useState('End time')
    const [breakOnTime, setBreakOnTime] = useState('Break on')
    const [breakOffTime, setBreakOffTime] = useState('Break off')

    const getCurrentTime = () => {
        const now = new Date()
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
    }

    const today = new Date()
    const formattedDate = today.toLocaleDateString('en-GB', {
        weekday: 'long',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    })

    return (
        <div className="bg-blue-50 p-6 rounded-xl w-fit mx-auto text-center shadow-md border border-[var(--color1)] pt-0">
            <Clock />

            {/* Date */}
            <div className="font-semibold text-gray-700 mb-4">
                {formattedDate}
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3 w-56 mx-auto">
                <button
                    onClick={() => setStartTime(getCurrentTime())}
                    className="bg-[#5CB338] hover:bg-green-600 text-white py-2 px-3 rounded-lg"
                >
                    {startTime}
                </button>
                <button
                    onClick={() => setEndTime(getCurrentTime())}
                    className="bg-[#EE2B2B] hover:bg-red-600 text-white py-2 px-3 rounded-lg"
                >
                    {endTime}
                </button>
                <button
                    onClick={() => setBreakOnTime(getCurrentTime())}
                    className="bg-[#7552E7] hover:bg-purple-600 text-white py-2 px-3 rounded-lg"
                >
                    {breakOnTime}
                </button>
                <button
                    onClick={() => setBreakOffTime(getCurrentTime())}
                    className="bg-[#7552E7] hover:bg-indigo-600 text-white py-2 px-3 rounded-lg"
                >
                    {breakOffTime}
                </button>
            </div>
        </div>
    )
}
