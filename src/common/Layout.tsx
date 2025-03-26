import React from 'react'

import Footer from './Footer.tsx'
import { Header } from './Header.tsx'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
