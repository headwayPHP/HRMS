'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiHome, HiUsers, HiCalendar, HiBriefcase, HiUserGroup, HiLogout, HiCash } from 'react-icons/hi'

const links = [
    { href: '/dashboard', label: 'Dashboard', icon: HiHome },
    { href: '/dashboard/employees', label: 'Employee', icon: HiUsers },
    { href: '/dashboard/attendance', label: 'Attendance', icon: HiCalendar },
    { href: '/dashboard/leave', label: 'Leave', icon: HiBriefcase },
    { href: '/dashboard/payroll', label: 'Payroll', icon: HiCash },
    { href: '/dashboard/roles', label: 'Roles', icon: HiUserGroup },
]

export default function Sidebar({ isOpen }) {
    const pathname = usePathname()

    return (
        <aside
            className={`bg-[#FFF8F3] text-black h-screen p-4 flex flex-col justify-between transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'
                }`}
        >
            {/* Top: Logo */}
            <div>
                <div className="flex items-center justify-center mb-6">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className={`transition-all duration-300 ${isOpen ? 'w-24' : 'w-8'
                            }`}
                    />
                </div>

                {/* Navigation Items */}
                <nav className="flex flex-col gap-3">
                    {links.map(({ href, label, icon: Icon }) => {
                        const isActive = pathname === href;

                        return (
                            <div key={href} className="relative">
                                {isActive && (
                                    <div className="absolute -left-5 top-0 h-full w-1.5 bg-[var(--color1)] rounded-tr-md rounded-br-md" />
                                )}
                                <Link
                                    href={href}
                                    className={`flex items-center ${isOpen ? '' : 'justify-center '} gap-3 pl-4 pr-4 py-3 rounded-sm text-sm font-medium transition-all duration-200 ${isActive
                                        ? 'bg-[var(--color1)] text-white'
                                        : 'hover:bg-[#FF9A431A] text-black'
                                        }`}
                                >
                                    <Icon size={20} className="shrink-0" />
                                    {isOpen && <span className="whitespace-nowrap">{label}</span>}
                                </Link>
                            </div>
                        );
                    })}

                </nav>
            </div>

            {/* Bottom: Logout */}
            <div className={` ${isOpen ? 'px-4' : 'px-2'} `}>
                <button
                    onClick={() => alert('Logging out...')}
                    className="flex items-center gap-3 w-full  text-black py-2 rounded hover:bg-red-100 text-sm font-medium"
                >
                    <HiLogout size={20} className="shrink-0" />
                    {isOpen && <span className="whitespace-nowrap">Logout</span>}
                </button>
            </div>
        </aside>
    )
}
