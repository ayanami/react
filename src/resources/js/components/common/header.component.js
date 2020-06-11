import React from 'react';
import { useForm } from 'react-hook-form';
import * as validators from '../../validation/validator';
import { createForm } from '../creator/form.component.creator';
import { createAnchor } from '../creator/anchor.component.creator';
import { InputText } from './input.text.component'
import '../../../css/common/header.css';

const Form = createForm(({ disabled, setDisable, register, errors }) => {
    return (
        <div className="header-search">
            <button type="submit" disabled={disabled}>
                <i className="fa fa-search fa-lg" aria-hidden="true" />
            </button>
            <InputText setDisable={setDisable}
                id="device"
                name="device"
                className="header-search-text"
                placeholder="デバイスを検索"
                validate={register({
                    validate: {
                        maxLength: validators.maxLength(50)
                    }
                })}
                errors={errors} />
        </div>
    )
});

const DeviceShare = createAnchor(() => {
    return (
        <div>
            {/* <img src={`${process.env.MIX_PUBLIC_URL}images/logo.png`} alt="logo" width="50px" /><span>d RENTAL</span> */}
            <i className="fa fa-registered fa-3x" aria-hidden="true" />
            <span>d RENTAL</span>
        </div>
    );
});

const Category = createAnchor(() => {
    return (
        <div>
            <i className="fa fa-th fa-2x" aria-hidden="true" />
            <p>カテゴリ</p>
        </div>
    );
});

const FAQ = createAnchor(() => {
    return (
        <div>
            <i className="fa fa-question-circle-o fa-2x" aria-hidden="true" />
            <p>FAQ</p>
        </div>
    );
});

const Login = createAnchor(() => {
    return (
        <div>
            <i className="fa fa-user-circle-o fa-2x" aria-hidden="true" />
            <p>ログイン</p>
        </div>
    );
});

const DPoint = createAnchor(() => {
    return (<span>&gt;</span>);
});

export const Header = props => {
    const { register, errors, handleSubmit } = useForm();
    return (
        <div className="header">
            <div className="header-menu">
                <div className="header-menu-left">
                    <DeviceShare href={'/'} />
                </div>
                <div className="header-menu-right">
                    <Category href={'#'} />
                    <FAQ href={'#'} />
                    <Login href={'#'} />
                </div>
            </div>
            <Form register={register}
                errors={errors}
                handler={handleSubmit}
                listener={props.submit} />
            <div className="header-d-point">
                <span>保有ポイント</span>
                <img src={'/images/d-point.png'} alt="dpoint" width="100px" />
                <span>-,---,---P</span>
                <DPoint href={'#'} />
            </div>
        </div>
    );
}