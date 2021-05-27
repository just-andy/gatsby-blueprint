import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Spacing from '../styles/Spacing';

const Layout = ({ children }) => (
    <main className="container">
        <GlobalStyles />
        <Typography />
        <Spacing />
        <Header />
        {children}
        <Footer />
    </main>
);

export default Layout;
