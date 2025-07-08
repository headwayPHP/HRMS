'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
    HiHome, HiUsers, HiCalendar, HiBriefcase, HiUserGroup, HiLogout, HiCash
} from 'react-icons/hi'
import { HiWindow } from 'react-icons/hi2'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'

const menuItems = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: HiHome,
    },
    {
        label: 'Employee',
        href: '/dashboard/employees',
        icon: HiUsers,
    },
    {
        label: 'Attendance',
        href: '/dashboard/attendance',
        icon: HiCalendar,
    },
    {
        label: 'Payroll',
        href: '/dashboard/payroll',
        icon: HiCash,
    },
    {
        label: 'Notice',
        href: '/dashboard/notice',
        icon: HiCash,
    },
    {
        label: 'Roles',
        href: '/dashboard/roles',
        icon: HiUserGroup,
    },
    {
        label: 'Leave',
        icon: HiBriefcase,
        baseHref: '/dashboard/leave',
        subLinks: [
            { href: '/dashboard/leave/type', label: 'Leave Type' },
            { href: '/dashboard/leave/request', label: 'Leave Request' }
        ]
    },
    {
        label: 'Asset',
        icon: HiWindow,
        baseHref: '/dashboard/asset',
        subLinks: [
            { href: '/dashboard/asset/asset_type', label: 'Asset Type' },
            { href: '/dashboard/asset/assets', label: 'Assets' }
        ]
    },
]

export default function Sidebar({ isOpen }) {
    const pathname = usePathname()
    const [expandedMenus, setExpandedMenus] = useState({})

    useEffect(() => {
        menuItems.forEach(item => {
            if (item.subLinks && pathname.startsWith(item.baseHref)) {
                setExpandedMenus(prev => ({ ...prev, [item.label]: true }))
            }
        })
    }, [pathname])

    const toggleMenu = (label) => {
        setExpandedMenus(prev => ({ ...prev, [label]: !prev[label] }))
    }

    const isActive = (href) => pathname === href

    return (
        <aside className={`bg-[var(--color1)] text-[var(--color1)] h-screen flex flex-col transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
            {/* Top content (Logo and menu) */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Logo */}
                <div className="flex items-center justify-center mb-6 mt-4">
                    <img src="/logo.png" alt="Logo" className={`transition-all duration-300 ${isOpen ? 'w-24' : 'w-8'}`} />
                </div>

                {/* Scrollable Menu */}
                <div className="flex-1 overflow-y-auto custom-scroll px-4 pb-4">
                    <nav className="flex flex-col gap-3">
                        {menuItems.map(({ label, href, icon: Icon, subLinks, baseHref }) => {
                            const isSubmenu = !!subLinks
                            const isCurrent = isSubmenu
                                ? pathname.startsWith(baseHref)
                                : href === '/dashboard'
                                    ? pathname === '/dashboard'
                                    : pathname.startsWith(href)
                            const isOpenMenu = expandedMenus[label]

                            return (
                                <div key={label} className="relative">
                                    {isCurrent && (
                                        <div className="absolute -left-5 top-0 h-full w-1.5 bg-[var(--color3)] rounded-tr-md rounded-br-md" />
                                    )}

                                    {isSubmenu ? (
                                        <button
                                            onClick={() => toggleMenu(label)}
                                            className={`w-full flex items-center gap-3 ${isOpen ? '' : 'justify-center'} px-4 py-3 rounded-sm text-sm font-medium transition-all duration-200 ${isCurrent ? 'bg-[var(--light-blue)] text-[var(--color1)]' : 'hover:bg-[#FF9A431A] text-white'}`}
                                        >
                                            <Icon size={20} className="shrink-0" />
                                            {isOpen && (
                                                <>
                                                    <span className="flex-1 text-left">{label}</span>
                                                    {isOpenMenu ? <IoIosArrowDown size={16} /> : <IoIosArrowForward size={16} />}
                                                </>
                                            )}
                                        </button>
                                    ) : (
                                        <Link
                                            href={href}
                                            className={`flex items-center gap-3 ${isOpen ? '' : 'justify-center'} px-4 py-3 rounded-sm text-sm font-medium transition-all duration-200 ${isCurrent ? 'bg-[#fff] text-[var(--color1)]' : 'hover:bg-[#FF9A431A] text-white'}`}
                                        >
                                            <Icon size={20} className="shrink-0" />
                                            {isOpen && <span>{label}</span>}
                                        </Link>
                                    )}

                                    {isSubmenu && isOpenMenu && isOpen && (
                                        <div className="ml-8 mt-1 flex flex-col gap-1">
                                            {subLinks.map(({ href, label }) => (
                                                <Link
                                                    key={href}
                                                    href={href}
                                                    className={`text-sm py-2 px-2 rounded hover:bg-[#FF9A431A] hover:text-[#fff] ${pathname === href ? 'text-[#fff] font-medium' : 'text-white'}`}
                                                >
                                                    {label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </nav>
                </div>
            </div>

            {/* Logout Button */}
            <div className={`px-4 py-3 pl-8`}>
                <button
                    onClick={() => alert('Logging out...')}
                    className="flex items-center gap-3 w-full text-[var(--color1)] py-2 rounded hover:bg-[var(--light-blue)] text-sm font-medium"
                >
                    <HiLogout size={20} className="shrink-0" />
                    {isOpen && <span>Logout</span>}
                </button>
            </div>
        </aside>

    )
}
