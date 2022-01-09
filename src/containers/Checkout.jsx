
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/containers/Checkout.css';



const Checkout = () => {
  const { state: { cart }, removeFromCart } = useContext(AppContext);

  const handleRemote = product => {
    removeFromCart(product)
  }

  const handleSumtotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.qty);
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        {cart.length > 0
          ? <>
            {cart.map(product => (
              <div key={product.id} className="Checkout-item">
                <div className="Checkout-element">
                  <h4>{product.title}</h4>
                  <span>Cant. {product.qty}</span>
                  <span>$ {product.price}</span>
                  <span>Total: $ {product.price * product.qty}</span>
                </div>
                <button
                  onClick={() => handleRemote(product)}
                  type="button">
                  <i className="fas fa-trash-alt" title="Eliminar" />
                </button>
              </div>
            ))}
          </>
          : <p>No hay Articulos en el carrito</p>}

      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: {handleSumtotal()}</h3>
        <Link to='/checkout/information'>
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;