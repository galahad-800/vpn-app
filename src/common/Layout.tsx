import React from 'react'

import Footer from './Footer.tsx'
import { Header } from './Header.tsx'
import { AppShell } from '@mantine/core'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppShell header={{ height: 115 }}>
            <Header />
            <AppShell.Main>
                {children}
            </AppShell.Main>

            <Footer />
        </AppShell>
    )
}

export default Layout
