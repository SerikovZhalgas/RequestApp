import React from "react";
import '../../Assets/scss/RequestForm.scss';
import {requestFormItemsData} from "../../Utlis/Constants/RequestFormItemsData";
import {ValidationForm} from "./ValidationForm/ValidationForm";
import {SuccessPage} from "./SuccessPage/SuccessPage";
import {useAppSelector} from "../../Utlis/Hooks/useAppSelector";

export const RequestPage = () => {
    const isLoggedIn = useAppSelector(state => state.request.isLoggedIn);

    return <div className='form__container'>
        {
            isLoggedIn
                ?
                <SuccessPage/>
                :
                <>
                    <h2 className='form__header form__header--style'>{requestFormItemsData.SUBMIT_REQUEST}</h2>
                    <ValidationForm/>
                </>
        }
    </div>
};