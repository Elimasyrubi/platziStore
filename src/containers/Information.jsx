import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/containers/Information.css';

const Information = () => {

  const { state: { cart }, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const navegate = useNavigate();

  const handleSumtotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.qty);
    const sum = cart.reduce(reducer, 0);
    return sum;
  }
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    };
    addToBuyer(buyer);
    navegate('/checkout/payment')
  };



  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form} >
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="addres" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to='/checkout'>
              Regresar
            </Link>
          </div>
          <div className="Information-next">
            <button type='button' onClick={() => handleSubmit()}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map(item => (
          <div key={item.id} className="Information-item">
            <div className="Information-element">
              <h4>{item.title} X {item.qty}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}

        <div className="Information-item">
          <div className="Information-element">
            <h4 className='total'>Total a Pagar</h4>
            <h4 className='total'>{handleSumtotal()}</h4>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Information;