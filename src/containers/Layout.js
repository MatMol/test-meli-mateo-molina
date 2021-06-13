import React, { useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import './styles/Layout.scss';

import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import ItemsList from '../components/ItemsList';
import ItemDetail from './ItemDetail';
import Toaster from '../components/Toaster';

function Layout() {
    const [data, setData] = useState({});
    const [loading, setLoader] = useState(false);
    let history = useHistory();

    const getData = (query) => {
        setLoader(true);
        fetch(`http://localhost:9000/api/items?q=${query}`)
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    console.log(response);
                    setLoader(false);
                    setData({ error: response })
                } else {
                    setLoader(false);
                    setData(response);
                    history.push(`/items?search=${query}`);
                }
            })
            .catch(error => {
                console.error(error);
                setLoader(false);
                setData({error: 'Connection lost'});
            })
    }

    return(
        <div className="container">
            <Navbar onSubmit={(query) => getData(query)}/>
            {
                loading ? <Loader /> :
                <Switch>
                    <Route exact path="/items">
                        {
                            data.error ? 
                            <Toaster error={true} message={'Hubo un problema buscando ese producto. Probá nuevamente más tarde.'}/>
                            : data.items ? data.items.length ?
                            <ItemsList categories={data.categories} items={data.items} />
                            : <Toaster error={false} message={'No encontramos resultados con lo que ingresaste. Probá buscandolo con otras palabras!'} />
                            : <Redirect to={'/'} />
                        }
                    </Route>
                    <Route path="/items/:id" component={ItemDetail}/>
                </Switch>
            }
        </div>
    )
}

export default Layout;
