import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
    <>
        <Header />
        <main className="my-8">{children}</main>
        <Footer />
    </>
);

export default Layout;
