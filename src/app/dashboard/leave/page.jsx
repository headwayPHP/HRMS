// app/dashboard/leave/page.jsx

'use client'

import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function LeavePage() {
    return (
        <Layout>
            <div className="p-4 sm:p-6 text-black dark:text-black pt-0">
                <h1 className="text-2xl font-bold text-[var(--color1)]">Leave</h1>
                <Breadcrumbs />
                {/* Content here */}
                <p className="mt-4">This is the Leave Overview page.</p>
            </div>
        </Layout>
    )
}
