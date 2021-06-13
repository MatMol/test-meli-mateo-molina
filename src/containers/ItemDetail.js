import React, { useState, useEffect } from 'react';

import './styles/ItemDetail.scss';
import * as utils from '../utils/utils';
import Toaster from '../components/Toaster';
import Loader from '../components/Loader';

export default function ItemDetail(props) {
    const id = props.match.params.id;
    const [itemData, setItemData] = useState({});
    const [error, setError] = useState({error: false, text: ''});

    useEffect(() => {
        fetch(`http://localhost:9000/api/items/${id}`)
            .then(response => response.json())
            .then(response => {
                if(response.error) {
                    let text;
                    switch(response.status) {
                        case 404: text = 'El artículo que estas buscando no existe.'; break;
                        case 500: text = 'No pudimos encontrar el artículo que estabas buscando. Probá nuevamente más tarde'; break;
                        default: text = 'Ups! Algo salió mal. Probá nuevamente más tarde'; break;
                    }
                    setError({error: true, text: text});
                } else {
                    setItemData(response.item);
                }
            })
            .catch(error => {
                setError({error: true, text: 'Ups! Algo salió mal. Probá nuevamente más tarde'})
            });
    }, [id]);

    return(
        error.error ? <Toaster error={error.error} message={error.text} /> :
        itemData.id ? 
            <div className="detailContainer">
                <div className="detailRow">
                    <div className="detailRow--img">
                        <img src={itemData.picture} alt={itemData.title} />
                    </div>
                    <div className="detailRow--info">
                        <p className="detailRow--info__condition">
                            {`${itemData.condition === 'new' ? 'Nuevo' : 'Usado'} - ${itemData.sold_quantity} vendidos`}
                        </p>
                        <h5 className="detailRow--info__title">{itemData.title}</h5>
                        <h3 className="detailRow--info__price">
                            {utils.formatPrice(itemData.price)}
                            {itemData.price.decimals ? <span>{itemData.price.decimals}</span> : null}
                        </h3>
                        <button className="detailRow--info__btn">Comprar</button>
                    </div>
                </div>
                <div className="detailDescription">
                    <p className="detailDescription--title">Descripcion del producto</p>
                    <p className="detailDescription--text">{itemData.description}</p>
                </div>
            </div> : <Loader />
    )
}
