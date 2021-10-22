import React from 'react';
import { Link } from 'gatsby';

const MobileNav = (props) => (
    <nav className="flex flex-col">
        <ul>
            {props.menuData.map((menu, index) => (
                <li key={index}>
                    <Link to={menu.url} title={menu.label}>
                        {menu.label}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export default MobileNav;
