import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Item.scss';
import * as utils from '../utils/utils';

export default function Item({info, categories}) {
    return(
        <div className="itemContainer">
            <Link to={{pathname: `/items/${info.id}`, itemInfo: info, categories: categories}}>
                <div className="item" id={info.id}>
                        <img src={info.picture} alt={info.title} />
                        <div className="item--info">
                            <p className="item--info__price">
                                {utils.formatPrice(info.price)}
                                {info.price.decimals ? <span className="item--info__price--decimals">{info.price.decimals}</span> : null}
                            </p>
                            {info.free_shipping ? <i className={'item-info__shipping'} /> : null}
                            <p className="item--info__title">
                                {info.title}
                            </p>
                        </div>
                        <div className="item--location">
                            <p>
                                {info.condition === 'new' ? 'Nuevo' : 'Usado'}
                            </p>
                        </div>
                </div>
            </Link>
        </div>
    )
}