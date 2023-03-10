import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ClientProductList from '../components/ClientProductList';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MensClothing = (props) => {

    const [products, setProducts] = useState([]);

    // BACKEND CALL TO READ ALL 
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                // console.log(res);
                // console.log(res.data.results);                
                const list = res.data.results.filter((g) =>
                    g.gender === "Womens"
                )
                setProducts(list)

                list.sort((a, b) => {
                    if (b.category === "Tops") return 1;
                    if (b.category > a.category) return -1;
                    else {
                        if (b.title < a.title) return 1;
                        if (b.title > a.title) return -1;
                        return 0
                    }
                })


                list.sort(function (a) {
                    if (a.category === "Tops") {
                        return -1
                    }
                    else {
                        return 1
                    }
                })
            })

            .catch(err => console.error("Catch Error:", err));
    }, []);

    return (
        <div className='Cart' >
            {/* HEADER COMPONENT */}
            {<Header />}
            {/* MENS CLOTHING  */}
            <div className='MainClothing'>
                <h3 className='MainClothingHeader' >Women's Clothing & Accessories</h3>
                {<ClientProductList products={products} />}

            </div>
            {/* FOOTER COMPONENT */}
            {<Footer />}
        </div>
    )
}

export default MensClothing