import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductList from '../components/ProductList';

const ManagerSite = (props) => {
    const [products, setProducts] = useState([]);

    // FILTER OUT AFTER DELETE
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }


    // BACKEND CALL TO READ ALL 
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                // console.log(res);
                // console.log(res.data.results);                
                setProducts(res.data.results);
                // ALPHABETICAL ORDER LIST RENDER
                res.data.results.sort((a, b) => {
                    if (b.gender === "Mens") return 1;
                    if (b.gender === "Womens") return -1;
                    else {
                        if (b.category < a.category) return -1;
                        if (b.category > a.category) return 1;
                        return 0
                    }
                })
            })
            .catch(err => console.error("Catch Error:", err));
    }, []);

    // PAGE RENDER
    return (
        <div>
            {<ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    );
}

export default ManagerSite;