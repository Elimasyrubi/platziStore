import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import '../styles/components/Header.css'

import { Link } from 'react-router-dom';

const Header = () => {
    const { state: { cart } } = useContext(AppContext);

    const reducer = (acumulador, currentValue) => acumulador + currentValue.qty;
    const totalQty = cart.reduce(reducer, 0)

    return (
        <div className="Header">
            <h1 className="Header-title">
                <Link to='/'>
                    PlatziConf Merch
                </Link>
            </h1>
            <div className="Header-checkout">
                <Link to='/checkout'>
                    <i className="fas fa-shopping-bag" title="Checkout" />
                </Link>
                {cart.length > 0 &&
                    <div className='Header-alert'>
                        {totalQty}
                    </div>
                }
            </div>
        </div>
    );
}

export default Header;