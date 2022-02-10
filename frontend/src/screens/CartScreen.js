import React, { useEffect } from 'react';
import {useParams, useLocation, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
  
  const {id} = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();

  const productId = (id);
  const qty = search ? Number(search.split('=')[1]): 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate('/signin?redirect=shipping');
  };
  return (
    <div className="cart-title">
      <h1>Shopping Cart</h1>
    <div className="card card-body">
      <div className="row top">
        <div className="col-2">
          {cartItems.length === 0 ? (
            <div className="cart-alert">
              Cart is empty. <Link className="cart-alert-link" to="/">Go Shopping</Link>
            </div>
          ) : (

            <ul>
              {cartItems.map((item) => (
                <li key={item.product}>
                  <div className="row">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="small"> 
                      </img>
                    </div>
                    <div className="cart-item">
                      <p className="section-heading">PRODUCT DETAILS</p>
                      <Link to={`/product/${item.product}`}><span className="section-subheading">PRODUCT:</span>  {item.name}</Link>
                      <div><span className="section-subheading">PRICE:</span>   ${item.price} </div>
                    </div>
                    <div className="qty-select">
                    <p className="section-subheading">QUANTITY:</p> 
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <button
                        className="cart-button"
                        type="button"
                        onClick={() => removeFromCartHandler(item.product)}>
                        <i className="fas fa-trash"></i>  Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        </div>
        <div className="checkout">
          <div className="row top">
            <ul>
              <li>
                  <h2>Subtotal:  ₱{cartItems.reduce((a, c) => a + c.price * c.qty, 0)} </h2>
                  <p className="checkout-num">{cartItems.reduce((a, c) => a + c.qty, 0)} Total items</p> 
                </li>
                <li>
                  <button
                    type="button"
                    onClick={checkoutHandler}
                    className="primary block"
                    disabled={cartItems.length === 0}>
                    Proceed to Checkout
                  </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}