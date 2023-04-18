import React from "react";
import '../../../Assets/scss/NavBarItem.scss';
import {NavLink} from "react-router-dom";

type NavBarItemType = {
    title: string;
    path: string;
};

export const NavBarItem = ({title, path}: NavBarItemType) => {
    const navLinkStyles = ({isActive}: any) => {
        console.log(isActive);
        return 'navbar-item ' + `${isActive ? 'navbar-item__active--style' : 'navbar-item--style'}`;
    };

    return (
        <li className={'navbar-item__container'}>
            <NavLink to={path} className={navLinkStyles}>
                <p className={'navbar-item__name'}>{title}</p>
            </NavLink>
        </li>
    );
};