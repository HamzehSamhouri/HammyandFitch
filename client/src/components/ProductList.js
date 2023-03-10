import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

    // REMOVE FROM DOM 
    const { removeFromDom } = props;

    // PRODUCT LIST FILTER 
    const [search, setSearch] = useState("");


    // BACKEND CALL TO DELETE ONE 
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error("Catch Error:", err));
    }

// PAGE RENDER
    return (
        <div className='ProductList'>
            <div className='ProductListHeader'>
                <h1>All Products</h1>
                <p>
                    <Link className='Link' to={"/"}>Homepage </Link>
                    |
                    <Link className='Link' to={"/mensclothing"}> Mens </Link>
                    |
                    <Link className='Link' to={"/womens"}> Womens</Link>
                </p>
                <p className='VerticalSpacing'>
                    <Link className='Link' to={"/create"}>Add New Product</Link>
                </p>
            </div>
            <div className='ManagerSearchParameters'>
                <input onChange={e => setSearch(e.target.value)} type="text" placeholder='Search' />
                <p onClick={() => setSearch("")}>All Clothing</p>
                <p onClick={() => setSearch("Mens")}>Mens</p>
                <p onClick={() => setSearch("Womens")}>Womens</p>
                <p onClick={() => setSearch("Tops")}>Tops</p>
                <p onClick={() => setSearch("Bottoms")}>Bottoms</p>
                <p onClick={() => setSearch("Active")}>Active</p>
                <p onClick={() => setSearch("Coats & Jackets")}>Coats & Jackets</p>
                <p onClick={() => setSearch("Swimwear")}>Swimwear</p>
                <p onClick={() => setSearch("Cologne & Body Care")}>Cologne & Body Care</p>
            </div>
            <hr />
            {props.products.filter((product, idx) => {
                return product.title.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase()) || product.gender.toLowerCase().includes(search.toLowerCase())
            }).map((product, idx) =>
                <div className='ProductListCard' key={idx}>
                    <Link className='Link' to={"/product/edit/" + product._id}><img src={product.primaryimage} alt={product.title} /></Link>
                    <div className='ProductListCardInfo'>
                        <h1><Link className='MainLink' to={"/product/edit/" + product._id}>{product.title}</Link></h1>
                        <hr />
                        <p>Category: {product.category}</p>
                        <p>Gender: {product.gender}</p>
                        <p>Description: {product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Quantity: {product.inventory}</p>
                        <div className='EditLinkSpacing'>
                            <Link className='EditLink' to={"/product/edit/" + product._id}>Edit</Link>
                            <button className='DeleteButton' onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default ProductList;