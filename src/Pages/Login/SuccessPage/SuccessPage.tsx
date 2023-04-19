import React from "react";
import {requestFormItemsData} from "../../../Utlis/Constants/RequestFormItemsData";
import '../../../Assets/scss/SuccessPage.scss';
import {useDispatch} from "react-redux";
import {setIsLoggedInAC} from "../../../Store/Reducers/Request-reducer";

export const SuccessPage = () => {
    const dispatch = useDispatch();

    const onClickRestartForm = () => {
        dispatch(setIsLoggedInAC(false));
    };

    return (
        <div className='success-page__container'>
            <p className='success-page__sent-text success-page__sent-text--style'>
                {requestFormItemsData.REQ_SUCCESS_SENT}
            </p>
            <p className='success-page__contact-text success-page__contact-text--style'>
                {requestFormItemsData.CONTACT_YOU}
            </p>
            <button className='success-page__restart-btn success-page__restart-btn--style' onClick={onClickRestartForm}>
                {requestFormItemsData.FORM_RESTART}
            </button>
        </div>
    );
};