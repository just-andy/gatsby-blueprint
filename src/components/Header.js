import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderSection = styled.header`
    margin: var(--space-16) 0;
    display: flex;
    justify-content: space-between;
`;

const NavBar = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
    }

    li {
        list-style: none;
        margin-right: var(--space-8);
    }

    a {
        display: block;
        color: var(--primary);
        padding: var(--space-16);
        &:hover {
            color: var(--accent);
        }
    }
`;

const Header = () => (
    <HeaderSection>
        <Link to="/">Logo</Link>
        <NavBar className="navBar">
            <ul>
                <li>
                    <Link to="/" title="Homepage">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/work" title=" Andy Cetnarskyj experience">
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="/case-studies" title="Andy Cetnarskyj case studies">
                        Case Studies
                    </Link>
                </li>
                <li>
                    <Link to="/uses" title="What Andy Uses">
                        Uses
                    </Link>
                </li>
                <li>
                    <Link to="/contact" title="Contact Andy Cetnarskyj">
                        Contact
                    </Link>
                </li>
            </ul>
        </NavBar>
    </HeaderSection>
);

export default Header;
