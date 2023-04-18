import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {RequestForm} from "../../Pages/Login/RequestForm";
import {PATH} from "./Path";
import {RequestsList} from "../../Pages/RequestsList/RequestsList";
import {SuccessPage} from "../../Pages/Login/SuccessPage";

export const RouteComponent = () => {
    return (
        <Routes>
            <Route path={PATH.REQUEST_FORM} element={<RequestForm/>}/>
            <Route path={PATH.REQUEST_SUCCESS} element={<SuccessPage/>}/>
            <Route path={PATH.REQUESTS_LIST} element={<RequestsList/>}/>

            <Route path={PATH.NOT_FOUND} element={<h1>404: PAGE NOT FOUND</h1>}/>
            <Route path='*' element={<Navigate to={PATH.NOT_FOUND}/>}/>
        </Routes>
    );
};