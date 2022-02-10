import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';

function App() {

  const EMPTY_CART = { cartItems: [] };
  const cart = useSelector((state) => state.cart || EMPTY_CART);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter> 
        <div className="grid-container">
            <header className="row">
                <div>
                <Link className="brand" to="/">POP STORE</Link>
                </div>

                <div className="nav">
                <Link to="/cart">
                  Cart
                  {cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                  )}
                </Link>
                {userInfo ? (
                  <div className="dropdown">
                    <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i>{' '} </Link>
                    <ul className="dropdown-content">
                      <li><Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                      </li>
                    </ul>
                  </div>
              ) : (
                <Link to="/signin">Sign In</Link>
              )}
                </div>
            </header>
              <main>
                <Routes>
                  <Route path="/cart" element={<CartScreen/>}></Route>
                  <Route path="/cart/:id" element={<CartScreen/>}></Route>
                  <Route path="/product/:id" element={<ProductScreen/>}></Route>
                  <Route path="/signin" element={<SigninScreen/>}></Route>
                  <Route path="/" element={<HomeScreen/>}exact></Route> 
                </Routes>
              </main>
          <footer className="row center"> © All rights reserved. </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
