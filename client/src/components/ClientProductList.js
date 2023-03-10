import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ClientProductList = (props) => {

    const [search, setSearch] = useState("");


// PAGE RENDER
    return (
        <div className='FilterClothing'>
            <div className='SearchParameters'>
            <input onChange={e => setSearch(e.target.value)} type="text" placeholder='Search'/>
            <p onClick={() => setSearch("")}>All Clothing</p>
            <p onClick={() => setSearch("Tops")}>Tops</p>
            <p onClick={() => setSearch("Bottoms")}>Bottoms</p>
            <p onClick={() => setSearch("Active")}>Active</p>
            <p onClick={() => setSearch("Coats & Jackets")}>Coats & Jackets</p>
            <p onClick={() => setSearch("Swimwear")}>Swimwear</p>
            <p onClick={() => setSearch("Cologne & Body Care")}>Cologne & Body Care</p>
            </div>
            <div className='AllClothing' >
            {props.products.filter((product, idx) => {
                return product.title.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase())
            }).map((product, idx) =>
                <div key={idx} className='ClientProductList'>
                    <Link className='Link' to={"/product/" + product._id}><img src={product.primaryimage} alt={product.title} /></Link>
                    <div>
                        <h3><Link className='MainLink' to={"/product/" + product._id}>{product.title}</Link></h3>
                        <p className='MutedText'>${product.price}</p>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}
export default ClientProductList;

