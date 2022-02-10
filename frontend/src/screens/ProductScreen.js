import Rating from '../components/Rating';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useParams,  useNavigate } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useEffect, useState } from 'react';
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen(props) {
   const dispatch=useDispatch();
   const navigate = useNavigate();

   const {id} = useParams();
   const productId= (id);
   const [qty, setQty] = useState(1);
   const productDetails = useSelector((state)=> state.productDetails);
   const {loading, error, product}= productDetails;

   useEffect(()=> {
       dispatch(detailsProduct(productId));
   }, [dispatch, productId]);

   const addToCartHandler = () => {
    navigate(`/cart/${productId}?qty=${qty}`);
    };
    
    return (
        <div>
            {loading ? (<LoadingBox></LoadingBox>)
            :error ? (<MessageBox variant="danger">{error}</MessageBox>)   
            : (
            <div>
                <div className="row top">
                    <div className="col-1">
                        <Link to="/"><i class="fas fa-arrow-left"></i> Back to Result</Link>
                        <img className="large" src={product.image} alt={product.name}></img>
                    </div>
                    <div className="col-2">
                        <ul>
                            <li><h1>{product.name}</h1></li>
                            <li><Rating rating={product.rating} numReview={product.numReview}></Rating></li>
                            <li className="section-heading">PRODUCT DESCRIPTION</li>
                            <li><span className="section-subheading">Price:</span> ₱{product.price}</li>
                            <li><span className="section-subheading">Description:</span> {product.description}</li>
                            <li><span className="section-subheading">Brand:</span> {product.brand}</li>
                            <li><span className="section-subheading">Stock:</span> {product.countInStock}</li>
                        </ul>

                        <hr></hr>
                        <div className="card card-body">
                            <div className="cart-title"><h2>ORDER NOW <i className="fas fa-cart-arrow-down"></i> </h2></div>
                            <ul>
                                <li>
                                    <div className="row">
                                        <div className="section-heading">Price:</div>
                                        <div className="price">₱{product.price}</div>
                                    </div>
                                </li>

                                <li>
                                    <div className="row">
                                        <div className="section-heading">Status: </div>
                                        <div>
                                            {product.countInStock > 0 ? (<span className="success"> In Stock</span>):
                                            (<span className="error">Unavailable</span>)}
                                        </div>
                                    </div>
                                </li>
                                {
                                    product.countInStock > 0 &&(
                                        <>
                                    <li>
                                        <div className="row">
                                        <div className="section-heading">Quantity:</div>
                                        <div className="qty-select">
                                            <select
                                            value={qty}
                                            onChange={(e) => setQty(e.target.value)}
                                            >
                                            {[...Array(product.countInStock).keys()].map(
                                                (x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                                )
                                            )}
                                            </select>
                                        </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button
                                        onClick={addToCartHandler}
                                        className="primary block"
                                        >
                                        Add to Cart
                                        </button>
                                    </li>
                                    </>
                                    
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
              )
            }   
        </div>    
    )
}