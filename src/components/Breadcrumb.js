import React from 'react';
import './styles/Breadcrumb.scss';

export default function Breadcrumb(props) {
    return (
        <ul className="breadcrumb">
            {props.categories ? props.categories.map((category, idx) => 
                <li className="breadcrumb--text" key={idx}>
                    {category}
                    {idx !== props.categories.length -1 ? <i/> : null}
                </li>)
            : null }
        </ul>
    )
}