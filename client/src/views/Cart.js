import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Cart = () => {
    return (
        <div className='Cart' >
            {/* HEADER COMPONENT */}
            {<Header />}
            {/* CART*/}
            <div className='MainCart'>
                <h1>Your Cart is Empty</h1>
                <p>
                    <Link className='Link' to={"/mensclothing"}>Shop Mens  </Link>
                    |
                    <Link className='Link' to={"/womensclothing"}>  Shop Womens</Link>
                </p>
            </div>
            {/* FOOTER COMPONENT */}
            {<Footer />}
        </div>
    )
}

export default Cart