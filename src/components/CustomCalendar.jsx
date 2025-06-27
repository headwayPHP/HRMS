// CustomCalendar.jsx
'use client'

import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

export default function CustomCalendar({ selectedDate: initialDate, onChange }) {
    const [currentDate, setCurrentDate] = useState(initialDate || new Date());
    const [selectedDate, setSelectedDate] = useState(initialDate || null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const handleApply = () => {
        onChange(selectedDate);
        setIsCalendarOpen(false);
    };

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const selectDate = (day) => {
        setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    };

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = getFirstDayOfMonth(year, month);

        const prevMonthDays = getDaysInMonth(year, month - 1);
        const daysFromPrevMonth = firstDayOfMonth;
        const totalCells = 42;
        const daysFromNextMonth = totalCells - (daysFromPrevMonth + daysInMonth);

        const days = [];

        // Previous month days
        for (let i = 0; i < daysFromPrevMonth; i++) {
            days.push(
                <div key={`prev-${i}`} className="text-gray-300 p-2 w-8 h-8 flex items-center justify-center text-sm">
                    {prevMonthDays - daysFromPrevMonth + i + 1}
                </div>
            );
        }

        // Current month days
        for (let i = 1; i <= daysInMonth; i++) {
            const isSelected = selectedDate &&
                selectedDate.getDate() === i &&
                selectedDate.getMonth() === month &&
                selectedDate.getFullYear() === year;

            days.push(
                <div
                    key={`current-${i}`}
                    className={`p-2 w-8 h-8 flex items-center justify-center text-sm rounded cursor-pointer ${isSelected ? 'bg-orange-500 text-white' : 'hover:bg-orange-100'
                        }`}
                    onClick={() => selectDate(i)}
                >
                    {i}
                </div>
            );
        }

        // Next month days
        for (let i = 1; i <= daysFromNextMonth; i++) {
            days.push(
                <div key={`next-${i}`} className="text-gray-300 p-2 w-8 h-8 flex items-center justify-center text-sm">
                    {i}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="relative w-full">
            {/* Input box */}
            <div
                className="flex items-center border border-gray-300 rounded px-3 py-2 bg-white cursor-pointer"
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            >
                <span className="text-sm text-gray-700 mr-auto">
                    {selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}
                </span>
                <FaCalendarAlt className="text-gray-500 mr-2" />

            </div>

            {isCalendarOpen && (
                <div className="absolute z-50 bg-white shadow-lg rounded-2xl mt-2 w-[280px] border-1 border-[var(--color1)]">
                    {/* Calendar Header */}
                    <div className="flex justify-between items-center px-4 pt-3 pb-2 border-b-1 border-[var(--color1)] mb-2">
                        <span className="text-black font-medium text-lg">
                            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
                        </span>
                        <div className="flex gap-3">
                            <button
                                onClick={prevMonth}
                                className="text-[var(--color1)] hover:text-black bg-[var(--color3)] px-2 rounded font-bolder"
                            >
                                ‹
                            </button>
                            <button
                                onClick={nextMonth}
                                className="text-[var(--color1)] hover:text-black bg-[var(--color3)] px-2 rounded font-bolder"
                            >
                                ›
                            </button>
                        </div>
                    </div>

                    {/* Day names */}
                    <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 px-4 pb-2">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                            <div key={day}>{day}</div>
                        ))}
                    </div>

                    {/* Calendar days */}
                    <div className="grid grid-cols-7 px-4">
                        {renderCalendar()}
                    </div>

                    {/* Apply button */}
                    <div className="flex justify-center px-4 pb-4 border-t-1 border-[var(--color1)]">
                        <button
                            className="bg-orange-500 text-white px-6 py-1 rounded-md hover:bg-orange-600 text-sm font-medium mt-2 "
                            onClick={handleApply}
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}