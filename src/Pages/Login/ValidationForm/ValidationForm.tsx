import React from "react";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {setIsLoggedInAC} from "../../../Store/Reducers/Request-reducer";
import {setRequestValuesAC} from "../../../Store/Reducers/RequestsList-reducer";
import '../../../Assets/scss/ValidationForm.scss';
import * as Yup from 'yup';
import {phoneRegExp} from "../../../Utlis/Constants/RequestFormConstants";
import {requestFormItemsData} from "../../../Utlis/Constants/RequestFormItemsData";

export const ValidationForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
            phoneNumber: '',
            email: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required'),
            phoneNumber: Yup.string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .length(12, 'Phone number length must be 12')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        }),
        onSubmit: values => {
            dispatch(setIsLoggedInAC(true));
            dispatch(setRequestValuesAC(values.name, values.phoneNumber, values.email));
            formik.resetForm();
        },
    });

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
                ? 'form__input-phone-error-style'
                : 'form__input--style'}`;

    const inputEmailStyle = `form__input ` +
        `${!formik.errors.email && formik.touched.email
            ? 'form__input-valid--style'
            : formik.errors.email && formik.touched.email && formik.errors.email
                ? 'form__input-error-style'
                : 'form__input--style'}`;

    return <form onSubmit={formik.handleSubmit} className='form__form'>
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
            <div className='form__tabs form__tabs--style'>
                <input className='form__tab-input form__tab-input--style' type='radio' id='radio-1' name='tabs'
                       defaultChecked/>
                <label className='form__tab-label form__tab-radio-1 form__tab-label--style' htmlFor='radio-1'>
                    {requestFormItemsData.ASTANA}
                </label>
                <input className='form__tab-input form__tab-input--style' type='radio' id='radio-2' name='tabs'/>
                <label className='form__tab-label form__tab-radio-2 form__tab-label--style' htmlFor='radio-2'>
                    {requestFormItemsData.ALMATY}
                </label>
                <span className='form__glider form__glider--style'></span>
            </div>
        </div>
        <div className='form__button-container'>
            <button type="submit" disabled={formik.isSubmitting}
                    className='form__submit-button form__submit-button--style'>
                {requestFormItemsData.SUBMIT}
            </button>
            <p className='form__privacy-policy-text form__privacy-policy-text--style'>
                {requestFormItemsData.PS_TEXT}
                <a href='src/Pages/RequestPage/ValidationForm/ValidationForm' target="_blank"
                   className='form__privacy-policy-active-text--style'>
                    {requestFormItemsData.PRIVATE_POLICY_TEXT}
                </a>
            </p>
        </div>
    </form>
};