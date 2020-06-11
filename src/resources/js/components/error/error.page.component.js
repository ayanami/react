import React from 'react';
import { useSelector } from 'react-redux';
import '../../../css/common/error.css';

export const ErrorPage = ({ children }) => {
    const serverError = useSelector(state => state.serverError.payload);
    if (!serverError || serverError.status == 422) {
        return children;
    }
    const message = serverError.data.message || serverError.data;
    return (
        <div className="error">
            <div className="status-code">{serverError.status}</div>
            <div className="error-message">{message}</div>
        </div>
    );
}