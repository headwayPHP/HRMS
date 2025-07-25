'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '../../components/Layout'
import PunchIn from '../../components/PunchIn'

export default function DashboardPage() {
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.push('/login')
        }
    }, [])

    return (
        <Layout >
            <h2 className="text-2xl font-semibold mb-4 text-black">Welcome to the Dashboard</h2>
            <p className="text-sm text-gray-600">You can manage users, settings, and more here.</p>

            <PunchIn />
        </Layout>
    )
}
