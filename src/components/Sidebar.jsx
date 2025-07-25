'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    HiHome, HiUsers, HiCalendar, HiBriefcase, HiUserGroup, HiLogout, HiCash
} from 'react-icons/hi'
import { HiWindow } from 'react-icons/hi2'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import { MdOutlineShield, MdTask } from "react-icons/md"

const menuItems = [
    { label: 'Dashboard', href: '/dashboard', icon: HiHome },
    { label: 'Employee', href: '/dashboard/employees', icon: HiUsers },
    { label: 'Attendance', href: '/dashboard/attendance', icon: HiCalendar },
    { label: 'Payroll', href: '/dashboard/payroll', icon: HiCash },
    { label: 'Notice', href: '/dashboard/notice', icon: HiCash },
    { label: 'Roles', href: '/dashboard/roles', icon: HiUserGroup },
    {
        label: 'Leave',
        icon: HiBriefcase,
        baseHref: '/dashboard/leave',
        subLinks: [
            { href: '/dashboard/leave/type', label: 'Leave Type' },
            { href: '/dashboard/leave/request', label: 'Leave Request' },
        ],
    },
    {
        label: 'Asset',
        icon: HiWindow,
        baseHref: '/dashboard/asset',
        subLinks: [
            { href: '/dashboard/asset/asset_type', label: 'Asset Type' },
            { href: '/dashboard/asset/assets', label: 'Assets' },
        ],
    },
    { label: 'Policy', href: '/dashboard/policy', icon: MdOutlineShield },
    { label: 'Task', href: '/dashboard/task', icon: MdTask },
]

export default function Sidebar({ isOpen, setIsOpen }) {
    const pathname = usePathname()
    const [expandedMenus, setExpandedMenus] = useState({})
    const router = useRouter()

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkIsMobile()
        window.addEventListener('resize', checkIsMobile)

        return () => window.removeEventListener('resize', checkIsMobile)
    }, [])

    if (!isOpen && isMobile) return null


    useEffect(() => {
        menuItems.forEach(item => {
            if (item.subLinks && pathname.startsWith(item.baseHref)) {
                setExpandedMenus(prev => ({ ...prev, [item.label]: true }))
            }
        })
    }, [pathname])

    const handleLogout = () => {
        // Clear token/cookie/localStorage if needed
        // localStorage.removeItem('token') // ⬅️ or your key
        // You can also clear cookies if used
        // document.cookie = 'token=; Max-Age=0; path=/;'

        // Redirect to login
        router.push('/login')
    }


    return (
        <aside
            className={` sidebar
    bg-[var(--color1)] text-white  h-screen flex flex-col transition-all duration-300
    fixed top-0 z-50
    ${isOpen ? 'left-0 w-64' : '-left-64'}
    md:static md:left-0 md:translate-x-0 ${isOpen ? 'md:w-64' : 'md:w-20'}
  `}

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
                                    <div className="absolute -left-5 top-0 h-full w-1.5 bg-[var(--color11)] rounded-tr-md rounded-br-md" />
                                )}

                                {isSubmenu ? (
                                    <button
                                        onClick={() => setExpandedMenus(prev => ({ ...prev, [label]: !prev[label] }))}
                                        className={`w-full flex items-center gap-3 ${isOpen ? '' : 'justify-center'} px-4 py-3 rounded-sm text-sm font-medium transition-all duration-200 ${isCurrent ? 'bg-[var(--color11)] text-[#fff]' : 'hover:bg-[#FEFEFE]  text-white hover:text-black'
                                            }`}
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
                                        className={`flex items-center gap-3 ${isOpen ? '' : 'justify-center'} px-4 py-3 rounded-sm text-sm font-medium transition-all duration-200 ${isCurrent ? 'bg-[var(--color11)] text-[#fff]' : 'hover:bg-[#FEFEFE] text-white hover:text-black'
                                            }`}
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
                                                className={`text-sm py-2 px-2 rounded hover:bg-[#FEFEFE] hover:text-[#000] ${pathname === href ? 'text-[#fff] font-medium' : 'text-white hover:text-black'
                                                    }`}
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

            {/* Logout Button */}
            <div className="px-4 py-3 pl-8">
                <button
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
