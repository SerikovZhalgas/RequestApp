import React from "react";
import '../../Assets/scss/RequestsList.scss';
import {requestsList} from "../../Utlis/Constants/RequestFormItemsData";
import {RequestsTable} from "./RequestsTable/RequestsTable";

export const RequestsList = () => {
    return (
        <div className='request-list__container'>
            <h2 className='request-list__all-requests-text request-list__all-requests-text--style'>
                {requestsList.ALL_REQUESTS}
            </h2>
            <div className='request-list__table'>
                <RequestsTable/>
            </div>
        </div>
    );
};