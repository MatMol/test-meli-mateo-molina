import React from 'react';
import './styles/Toaster.scss';

export default function Toaster(props) {
    return (
        <div className={`toasterContainer ${props.error ? 'error' : ''}`}>
            <h4 className="toasterContainer--title">
                <span className={`toasterContainer--title__icon ${props.error ? 'error' : ''}`}>
                    Lo sentimos!
                </span>
            </h4>
            <p className={'toasterContainer--text'}>
                {props.message}
            </p>
        </div>
    )
}