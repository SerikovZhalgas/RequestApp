import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Store/Store";
import {useFormik} from "formik";
import {setIsLoggedInAC} from "../../Store/Reducers/Request-reducer";
import {setRequestValuesAC} from "../../Store/Reducers/RequestsList-reducer";
import {Navigate} from "react-router-dom";
import {PATH} from "../../Components/Route/Path";
import '../../Assets/scss/RequestForm.scss';
import * as Yup from 'yup';
import {phoneRegExp} from "../../Utlis/Constants/RequestFormConstants";
import {requestFormItemsData} from "../../Utlis/Constants/RequestFormItemsData";

export const RequestForm = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.request.isLoggedIn);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
            phoneNumber: '',
            email: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required'),
            phoneNumber: Yup.string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        }),
        onSubmit: values => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setRequestValuesAC(values.name, values.phoneNumber, values.email))
            formik.resetForm()
        },
    })

    if (isLoggedIn) {
        return <Navigate to={PATH.REQUEST_SUCCESS}/>
    }

    const inputNameStyle = `form__input ` +
        `${!formik.errors.name && formik.touched.name
            ? 'form__input-valid--style'
            : formik.errors.name && formik.touched.name && formik.errors.name
                ? 'form__input-error-style'
                : 'form__input--style'}`;

    const inputPhoneNumberStyle = `form__input ` +
        `${!formik.errors.phoneNumber && formik.touched.phoneNumber
            ? 'form__input-valid--style'
            : formik.errors.phoneNumber && formik.touched.phoneNumber && formik.errors.phoneNumber
                ? 'form__input-error-style'
                : 'form__input--style'}`;

    const inputEmailStyle = `form__input ` +
        `${!formik.errors.email && formik.touched.email
            ? 'form__input-valid--style'
            : formik.errors.email && formik.touched.email && formik.errors.email
                ? 'form__input-error-style'
                : 'form__input--style'}`;

    return <div className='form__container'>
        <h2 className='form__header form__header--style'>{requestFormItemsData.SUBMIT_REQUEST}</h2>
        <form onSubmit={formik.handleSubmit} className='form__form'>
            <div className={'form__inputs'}>
                <input
                    className={inputNameStyle}
                    placeholder={requestFormItemsData.YOUR_NAME}
                    {...formik.getFieldProps('name')}
                />
                <input
                    className={inputPhoneNumberStyle}
                    placeholder={requestFormItemsData.PHONE_NUMBER}
                    {...formik.getFieldProps('phoneNumber')}
                />
                <input
                    className={inputEmailStyle}
                    placeholder={requestFormItemsData.E_MAIL}
                    {...formik.getFieldProps('email')}
                />
            </div>
            <div className='form__button-container'>
                <button type="submit" disabled={formik.isSubmitting}
                        className='form__submit-button form__submit-button--style'>
                    {requestFormItemsData.SUBMIT}
                </button>
                <p className='form__privacy-policy-text form__privacy-policy-text--style'>
                    {requestFormItemsData.PS_TEXT}
                    <a href='https://google.com/' target="_blank"
                       className='form__privacy-policy-active-text--style'>
                        {requestFormItemsData.PRIVATE_POLICY_TEXT}
                    </a>
                </p>
            </div>
        </form>
    </div>
};