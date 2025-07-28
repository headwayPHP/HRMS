'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
    HiHome, HiUsers, HiCalendar, HiBriefcase, HiUserGroup, HiLogout, HiCash
} from 'react-icons/hi'
import { HiWindow } from 'react-icons/hi2'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { MdOutlineShield, MdTask } from "react-icons/md"

// Define your sidebar menu structure
const menuItems = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        href: '/dashboard',
        icon: HiHome,
    },
    {
        id: 'employee-management',
        title: 'Employee Management',
        icon: HiUsers,
        children: [
            { id: 'designations', title: 'Designations', href: '/dashboard/roles' },
            { id: 'departments', title: 'Departments', href: '/dashboard/departments' },
            { id: 'employees', title: 'Employees', href: '/dashboard/employees' },
        ],
    },
    {
        id: 'attendance',
        title: 'Attendance',
        href: '/dashboard/attendance',
        icon: HiCalendar,
    },
    {
        id: 'leave',
        title: 'Leave',
        icon: HiBriefcase,
        children: [
            { id: 'holidays', title: 'Holidays', href: '/dashboard/holidays' },
            { id: 'leave-types', title: 'Leave Types', href: '/dashboard/leave/type' },
            { id: 'leave-requests', title: 'Leave Requests', href: '/dashboard/leave/request' },
        ],
    },
    {
        id: 'notice',
        title: 'Notice',
        href: '/dashboard/notice',
        icon: HiUserGroup,
    },
    {
        id: 'payroll',
        title: 'Payroll Management',
        href: '/dashboard/payroll',
        icon: HiCash,
    },
    {
        id: 'asset-management',
        title: 'Asset Management',
        icon: HiWindow,
        children: [
            { id: 'assets', title: 'Assets', href: '/dashboard/asset/assets' },
            { id: 'asset-types', title: 'Asset Types', href: '/dashboard/asset/asset_type' },
        ],
    },
    {
        id: 'policy',
        title: 'Policy',
        href: '/dashboard/policy',
        icon: MdOutlineShield,
    },
    {
        id: 'task',
        title: 'Task',
        href: '/dashboard/tasks',
        icon: MdTask,
    },
    {
        id: 'reports',
        title: 'Reports',
        icon: HiWindow,
        children: [
            { id: 'task-reports', title: 'Task Reports', href: '/dashboard/reports/tasks' },
            { id: 'attendance-reports', title: 'Attendance Reports', href: '/dashboard/reports/attendance' },
            { id: 'leave-reports', title: 'Leave Reports', href: '/dashboard/reports/leave' },
            { id: 'salary-reports', title: 'Salary Reports', href: '/dashboard/reports/salary' },
            { id: 'asset-requests', title: 'Asset Requests', href: '/dashboard/reports/assets' },
        ],
    },
    // REMOVE "logout" here! It will be rendered as a button at the bottom.
]

// The Sidebar Component
export default function Sidebar({ isOpen, setIsOpen }) {
    const pathname = usePathname()
    const [expandedMenus, setExpandedMenus] = useState({})
    const router = useRouter()
    const [isMobile, setIsMobile] = useState(false)

    // Handle mobile width check
    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth < 768)
        checkIsMobile()
        window.addEventListener('resize', checkIsMobile)
        return () => window.removeEventListener('resize', checkIsMobile)
    }, [])

    // Expand sub-menus if current path matches
    useEffect(() => {
        const newExpandedMenus = {}
        menuItems.forEach(item => {
            if (item.children) {
                const shouldExpand = item.children.some(child =>
                    pathname.startsWith(child.href)
                )
                if (shouldExpand) newExpandedMenus[item.id] = true
            }
        })
        setExpandedMenus(newExpandedMenus)
    }, [pathname])

    // Handles logout action (replace with actual logout logic if needed)
    const handleLogout = () => {
        router.push('/login')
    }

    return (
        <aside
            className={`sidebar bg-[var(--color1)] text-white h-screen flex flex-col transition-all duration-300 fixed top-0 z-50 ${isOpen ? 'left-0 w-64' : '-left-64'
                } md:static md:left-0 md:translate-x-0 ${isOpen ? 'md:w-64' : 'md:w-20'}`}
        >
            {/* Logo */}
            <div className="flex items-center justify-center pb-2 pt-2 bg-[var(--color2)]">
                <img
                    src="/logo.png"
                    alt="Logo"
                    className={`transition-all duration-300 ${isOpen ? 'w-24' : 'w-13'}`}
                />
            </div>

            {/* Menu */}
            <div className="flex-1 overflow-y-auto custom-scroll px-4 pb-4 mt-3">
                <nav className="flex flex-col gap-3">
                    {menuItems.map(item => {
                        const isSubmenu = !!item.children
                        const isCurrent = isSubmenu
                            ? item.children.some(child => pathname.startsWith(child.href))
                            : (
                                item.href === '/dashboard'
                                    ? pathname === '/dashboard'
                                    : pathname.startsWith(item.href)
                            )
                        const isOpenMenu = expandedMenus[item.id]

                        return (
                            <div key={item.id} className="relative">
                                {isCurrent && (
                                    <div className="absolute -left-5 top-0 h-full w-1.5 bg-[var(--color11)] rounded-tr-md rounded-br-md" />
                                )}

                                {isSubmenu ? (
                                    <button
                                        type="button"
                                        onClick={() => setExpandedMenus(prev => ({
                                            ...prev,
                                            [item.id]: !prev[item.id],
                                        }))}
                                        className={`w-full flex items-center gap-3 ${isOpen ? '' : 'justify-center'
                                            } px-4 py-3 rounded-sm text-sm font-medium transition-all duration-200 ${isCurrent ? 'bg-[var(--color11)] text-[#fff]' : 'hover:bg-[#FEFEFE] text-white hover:text-black'
                                            }`}
                                    >
                                        <item.icon size={20} className="shrink-0" />
                                        {isOpen && (
                                            <>
                                                <span className="flex-1 text-left">{item.title}</span>
                                                {isOpenMenu
                                                    ? <IoIosArrowDown size={16} />
                                                    : <IoIosArrowForward size={16} />}
                                            </>
                                        )}
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-3 ${isOpen ? '' : 'justify-center'
                                            } px-4 py-3 rounded-sm text-sm font-medium transition-all duration-200 ${isCurrent ? 'bg-[var(--color11)] text-[#fff]' : 'hover:bg-[#FEFEFE] text-white hover:text-black'
                                            }`}
                                    >
                                        <item.icon size={20} className="shrink-0" />
                                        {isOpen && <span>{item.title}</span>}
                                    </Link>
                                )}

                                {/* Submenu */}
                                {isSubmenu && isOpenMenu && isOpen && (
                                    <div className="ml-8 mt-1 flex flex-col gap-1">
                                        {item.children.map(child => (
                                            <Link
                                                key={child.id}
                                                href={child.href}
                                                className={`text-sm py-2 px-2 rounded hover:bg-[#FEFEFE] hover:text-[#000] ${pathname.startsWith(child.href)
                                                    ? 'bg-[var(--color11)] text-[#fff] font-medium'
                                                    : 'text-white hover:text-black'
                                                    }`}
                                            >
                                                {child.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </nav>
            </div>

            {/* Logout Button (moved out from menuItems, handled as button) */}
            <div className="px-4 py-3 pl-8">
                <button
                    type="button"
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full text-[#fff] py-2 rounded hover:bg-[#fff] hover:text-[#000] text-sm font-medium"
                >
                    <HiLogout size={20} className="shrink-0" />
                    {isOpen && <span>Logout</span>}
                </button>
            </div>
        </aside>
    )
}
