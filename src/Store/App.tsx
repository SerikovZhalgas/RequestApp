import React from 'react';
import '../Assets/scss/App.scss';
import {RouteComponent} from "../Components/Route/RouteComponent";
import {NavBar} from "../Components/NavBar/NavBar";

export const App = () => {
    return (
        <>
            <NavBar/>
            <main className='main_container'>
                <RouteComponent/>
            </main>
        </>
    );
};