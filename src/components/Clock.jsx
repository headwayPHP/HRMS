'use client'
import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(interval)
    }, [])

    const radius = 100
    const center = radius
    const hour = time.getHours() % 12
    const minute = time.getMinutes()
    const second = time.getSeconds()

    const hourAngle = (360 / 12) * hour + (30 / 60) * minute
    const minuteAngle = (360 / 60) * minute

    const handCoordinates = (length, angle) => {
        const rad = ((angle - 90) * Math.PI) / 180
        return {
            x: center + length * Math.cos(rad),
            y: center + length * Math.sin(rad),
        }
    }

    const hourHand = handCoordinates(40, hourAngle)
    const minuteHand = handCoordinates(60, minuteAngle)

    return (
        <div className="flex justify-center items-center h-48">
            <svg width="150" height="150" viewBox="0 0 200 200" className="drop-shadow-xl">
                {/* Outer circle */}
                <circle cx="100" cy="100" r="95" fill="#fff" stroke="#1E293B" strokeWidth="1.5" />

                {/* Hour ticks */}
                {[0, 90, 180, 270].map((deg, idx) => {
                    const start = handCoordinates(80, deg)
                    const end = handCoordinates(90, deg)
                    return (
                        <line
                            key={idx}
                            x1={start.x}
                            y1={start.y}
                            x2={end.x}
                            y2={end.y}
                            stroke="#000"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                    )
                })}

                {/* Hour hand */}
                <line
                    x1={center}
                    y1={center}
                    x2={hourHand.x}
                    y2={hourHand.y}
                    stroke="#0F172A"
                    strokeWidth="6"
                    strokeLinecap="round"
                />

                {/* Minute hand */}
                <line
                    x1={center}
                    y1={center}
                    x2={minuteHand.x}
                    y2={minuteHand.y}
                    stroke="#0F172A"
                    strokeWidth="4"
                    strokeLinecap="round"
                />

                {/* Center dot */}
                <circle cx="100" cy="100" r="4" fill="#0F172A" />
            </svg>
        </div>
    )
}

export default Clock
