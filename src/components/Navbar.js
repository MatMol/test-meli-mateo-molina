import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss';
import logo from '../assets/Logo-ML-xl.png';

export default function Navbar(props) {
    const [searchItem, setSearchItem] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(searchItem);
    };

    return (
        <div className="navbar">
            <form id="search-form" className="navbar--form" onSubmit={(e) => handleSubmit(e)}>
                <Link to="/">
                    <img src={logo} alt="Mercado Libre - Logo" />
                </Link>
                <input className="navbar--form__input" type="text" placeholder="Nunca dejes de buscar" 
                        onKeyUp={(e) => setSearchItem(e.target.value)}/>
                <button className="navbar--form__btn" type="submit"></button>
            </form>
        </div>
    )
}
