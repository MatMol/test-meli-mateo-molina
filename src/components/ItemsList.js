import React from 'react';

import './styles/ItemList.scss';
import Item from './Item';
import Breadcrumb from './Breadcrumb';


export default function ItemList(props) {
    return(
        <div className="listContainer">
            <Breadcrumb categories={props.categories} />
            {props.items.slice(0, 4).map((item, idx) => <Item key={idx} info={item} categories={props.categories}/>)}
        </div>
    )
}