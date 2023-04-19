import React from 'react';
import '../Assets/scss/App.scss';
import {RouteComponent} from "../Components/Route/RouteComponent";
import {NavBar} from "../Components/NavBar/NavBar";
import {useLocation} from "react-router-dom";
import { PATH } from '../Components/Route/Path';

export const App = () => {
    const location = useLocation();
    const mainStyle = `${location.pathname === PATH.REQUEST_FORM ? 'main__request-form-container' : 'main__requests-list-container'}`;
    return (
        <>
            <NavBar/>
            <main className={mainStyle}>
                <RouteComponent/>
            </main>
        </>
    );
};