import React from "react";
import '../../Assets/scss/NavBar.scss';
import {navbarItemsData} from "../../Utlis/Constants/NavbarItemsData";
import {NavBarItem} from "./NavBarItem/NavBarItem";

export const NavBar = () => {
    return (
        <header className='navbar__container navbar--style'>
            <nav className={'navbar__nav__container'}>
                <ul className={'navbar__ul__container'}>
                    {
                        navbarItemsData.map(({id, title, path}) => {
                            return <NavBarItem key={id} path={path} title={title}/>
                        })
                    }
                </ul>
            </nav>
        </header>
    );
};