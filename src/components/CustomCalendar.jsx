'use client'

import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

export default function CustomCalendar({ selectedDate: initialDate, onChange }) {
    const [currentDate, setCurrentDate] = useState(initialDate || new Date());
    const [selectedDate, setSelectedDate] = useState(initialDate || null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const calendarRef = useRef(null);

    const handleApply = useCallback(() => {
        onChange(selectedDate);
        setIsCalendarOpen(false);
    }, [selectedDate, onChange]);

    // Handle outside click & Escape
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                if (selectedDate) {
                    onChange(selectedDate);  // Save selected date
                }
                setIsCalendarOpen(false);
            }
        };


        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                setIsCalendarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEsc);
        };
    }, []);

    const getDaysInMonth = useCallback((year, month) => {
        return new Date(year, month + 1, 0).getDate();
    }, []);

    const getFirstDayOfMonth = useCallback((year, month) => {
        return new Date(year, month, 1).getDay();
    }, []);

    const prevMonth = useCallback(() => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    }, []);

    const nextMonth = useCallback(() => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
    }, []);

    const selectDate = useCallback((day) => {
        setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    }, [currentDate]);

    const renderCalendar = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = getFirstDayOfMonth(year, month);

        const prevMonthDays = getDaysInMonth(year, month - 1);
        const daysFromPrevMonth = firstDayOfMonth;
        const totalCells = 42;
        const daysFromNextMonth = totalCells - (daysFromPrevMonth + daysInMonth);

        const days = [];

        for (let i = 0; i < daysFromPrevMonth; i++) {
            days.push(
                <div key={`prev-${i}`} className="text-gray-300 p-2 w-8 h-8 flex items-center justify-center text-sm">
                    {prevMonthDays - daysFromPrevMonth + i + 1}
                </div>
            );
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const isSelected = selectedDate &&
                selectedDate.getDate() === i &&
                selectedDate.getMonth() === month &&
                selectedDate.getFullYear() === year;

            days.push(
                <div
                    key={`current-${i}`}
                    className={`p-2 w-8 h-8 flex items-center justify-center text-sm rounded cursor-pointer ${isSelected ? 'bg-[var(--color1)] text-white' : 'hover:bg-[var(--color2)]'}`}
                    onClick={() => selectDate(i)}
                >
                    {i}
                </div>
            );
        }

        for (let i = 1; i <= daysFromNextMonth; i++) {
            days.push(
                <div key={`next-${i}`} className="text-gray-300 p-2 w-8 h-8 flex items-center justify-center text-sm">
                    {i}
                </div>
            );
        }

        return days;
    }, [currentDate, selectedDate, getDaysInMonth, getFirstDayOfMonth, selectDate]);

    return (
        <div className="relative w-full" ref={calendarRef}>
            {/* Input box */}
            <div
                className="flex items-center border border-gray-300 rounded px-3 py-2 bg-white cursor-pointer"
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            >
                <span className="text-sm text-gray-700 mr-auto">
                    {selectedDate
                        ? `${String(selectedDate.getDate()).padStart(2, '0')}/${String(selectedDate.getMonth() + 1).padStart(2, '0')}/${selectedDate.getFullYear()}`
                        : 'Select Date'}
                </span>
                <FaCalendarAlt className="text-gray-500" />
            </div>

            {isCalendarOpen && (
                <div className="absolute z-50 bg-white shadow-lg rounded-2xl mt-2 w-[280px] border border-[var(--color1)]">
                    {/* Calendar Header */}
                    <div className="flex justify-between items-center px-4 pt-3 pb-2 border-b border-[var(--color1)] mb-2">
                        <span className="text-black font-medium text-lg">
                            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
                        </span>
                        <div className="flex gap-2">
                            <button type="button" onClick={prevMonth} className="text-[var(--color2)] bg-[var(--color1)] px-2 rounded font-bold">
                                ‹
                            </button>
                            <button type="button" onClick={nextMonth} className="text-[var(--color2)] bg-[var(--color1)] px-2 rounded font-bold">
                                ›
                            </button>
                        </div>
                    </div>

                    {/* Week Days */}
                    <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 px-4 pb-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
                            <div key={idx}>{day.charAt(0)}</div>
                        ))}
                    </div>

                    {/* Calendar Days */}
                    <div className="grid grid-cols-7 px-4">{renderCalendar}</div>

                    {/* Apply Button */}
                    <div className="flex justify-center px-4 pb-4 border-t border-[var(--color1)]">
                        <button
                            type="button"
                            className="bg-[var(--color1)] text-white px-6 py-1 rounded-md hover:bg-[var(--color11)] text-sm font-medium mt-2"
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
