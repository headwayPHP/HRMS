'use client'

import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

export default function CustomCalendar({ selectedDate: initialDate, onChange, showTime = false }) {
    const [currentDate, setCurrentDate] = useState(initialDate || new Date());
    const [selectedDate, setSelectedDate] = useState(initialDate || null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [hour, setHour] = useState('01');
    const [minute, setMinute] = useState('00');
    const [ampm, setAmpm] = useState('AM');

    const calendarRef = useRef(null);

    const handleApply = useCallback(() => {
        const date = new Date(selectedDate || new Date());
        let h = parseInt(hour, 10);
        if (ampm === 'PM' && h !== 12) h += 12;
        if (ampm === 'AM' && h === 12) h = 0;
        date.setHours(h);
        date.setMinutes(parseInt(minute, 10));
        date.setSeconds(0);
        date.setMilliseconds(0);
        onChange(selectedDate);
        setIsCalendarOpen(false);
    }, [selectedDate, hour, minute, ampm, onChange]);

    // Handle outside click & Escape
    useEffect(() => {
        if (initialDate instanceof Date) {
            let h = initialDate.getHours();
            setAmpm(h >= 12 ? 'PM' : 'AM');
            h = h % 12 || 12;
            setHour(String(h).padStart(2, '0'));
            setMinute(String(initialDate.getMinutes()).padStart(2, '0'));
        }
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
                        ? `${String(selectedDate.getDate()).padStart(2, '0')}/${String(selectedDate.getMonth() + 1).padStart(2, '0')}/${selectedDate.getFullYear()}${showTime ? ` ${String((selectedDate.getHours() % 12 || 12)).padStart(2, '0')}:${String(selectedDate.getMinutes()).padStart(2, '0')} ${selectedDate.getHours() >= 12 ? 'PM' : 'AM'}` : ''}`
                        : 'Select Date'}

                </span>
                <FaCalendarAlt className="text-gray-500" />
            </div>

            {isCalendarOpen && (
                <div
                    className={`absolute z-50 bg-white shadow-lg rounded-2xl mt-2 border border-[var(--color1)] ${showTime ? 'w-[540px]' : 'w-[290px]'
                        }`}
                >



                    <div className="flex flex-col md:flex-row">

                        <div className="md:w-[280px] p-4">
                            {/* Calendar Header */}
                            <div className="flex justify-between items-center px-4 pt-3 pb-2 pr-2 border-b border-[var(--color1)] mb-2 pl-0">
                                <div className="flex items-center gap-2">
                                    {/* Month Dropdown */}
                                    <select
                                        className="border border-gray-300 rounded px-2 py-1 text-sm"
                                        value={currentDate.getMonth()}
                                        onChange={(e) =>
                                            setCurrentDate(new Date(currentDate.getFullYear(), parseInt(e.target.value), 1))
                                        }
                                    >
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i} value={i}>
                                                {new Date(0, i).toLocaleString('default', { month: 'long' })}
                                            </option>
                                        ))}
                                    </select>

                                    {/* Year Dropdown */}
                                    <select
                                        className="border border-gray-300 rounded px-2 py-1 text-sm mr-2"
                                        value={currentDate.getFullYear()}
                                        onChange={(e) =>
                                            setCurrentDate(new Date(parseInt(e.target.value), currentDate.getMonth(), 1))
                                        }
                                    >
                                        {Array.from({ length: 101 }, (_, i) => {
                                            const year = 1975 + i;
                                            return (
                                                <option key={year} value={year}>
                                                    {year}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>

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

                        </div>

                        {showTime && (
                            <div className="flex gap-4 p-3 border-l border-gray-300 max-h-[340px] overflow-hidden min-w-[260px]">
                                {/* Hour */}
                                <div className="flex flex-col items-center">
                                    <label className="font-medium text-sm mb-2">Hour</label>
                                    <div className="overflow-y-auto max-h-[260px] w-16 border border-gray-300 rounded-md ">
                                        {[...Array(12)].map((_, i) => {
                                            const h = i + 1
                                            return (
                                                <div
                                                    key={h}
                                                    onClick={() => setHour(h)}
                                                    className={`px-3 py-1 text-center cursor-pointer ${hour === h ? 'bg-[var(--color1)] text-white' : 'hover:bg-gray-100'
                                                        }`}
                                                >
                                                    {h}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Minute */}
                                <div className="flex flex-col items-center">
                                    <label className="font-medium text-sm mb-2">Minute</label>
                                    <div className="overflow-y-auto max-h-[260px] w-16 border border-gray-300 rounded-md">
                                        {[...Array(60)].map((_, i) => (
                                            <div
                                                key={i}
                                                onClick={() => setMinute(i)}
                                                className={`px-3 py-1 text-center cursor-pointer ${minute === i ? 'bg-[var(--color1)] text-white' : 'hover:bg-gray-100'
                                                    }`}
                                            >
                                                {String(i).padStart(2, '0')}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* AM/PM */}
                                <div className="flex flex-col items-center">
                                    <label className="font-medium text-sm mb-2">AM/PM</label>
                                    <div className="border border-gray-300 rounded-md overflow-hidden w-16">
                                        {['AM', 'PM'].map((val) => (
                                            <div
                                                key={val}
                                                onClick={() => setAmpm(val)}
                                                className={`px-3 py-2 text-center cursor-pointer ${ampm === val ? 'bg-[var(--color1)] text-white' : 'hover:bg-gray-100'
                                                    }`}
                                            >
                                                {val}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}


                    </div>


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
