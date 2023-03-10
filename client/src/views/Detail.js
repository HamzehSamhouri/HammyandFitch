import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();


    // BACKEND CALL TO READ ONE 
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                // console.log(res);
                // console.log(res.data.results);            
                setProduct(res.data.results)
            })
            .catch(err => console.error(err));
    }, [id]);


    // PAGE RENDER
    return (
        <div>
            {/* HEADER COMPONENT */}
            {<Header />}
            {/* DETAIL*/}
            {
                product ?  // Conditional render if item exists
                    <div>
                        <div className='Detail'>
                            <img className='PrimaryImage' src={product.primaryimage} alt={product.title} />
                            <div className='DetailInfo'>
                                <h1>{product.title}</h1>
                                <p>$ {product.price}</p>
                                <div>
                                    <img className='StarIcon DetailSpacing1' src="https://img.icons8.com/windows/1000/ffdf00/filled-star.png" alt='Star Icon' />
                                    <img className='StarIcon DetailSpacing1' src="https://img.icons8.com/windows/1000/ffdf00/filled-star.png" alt='Star Icon' />
                                    <img className='StarIcon DetailSpacing1' src="https://img.icons8.com/windows/1000/ffdf00/filled-star.png" alt='Star Icon' />
                                    <img className='StarIcon DetailSpacing1' src="https://img.icons8.com/windows/1000/ffdf00/filled-star.png" alt='Star Icon' />
                                    <img className='StarIcon DetailSpacing1' src="https://img.icons8.com/windows/1000/ffdf00/filled-star.png" alt='Star Icon' />
                                </div>
                                <hr />
                                <h3 className='DetailSpacing2'>Description</h3>
                                <p>{product.description}</p>
                                <h3 className='DetailSpacing2'>Color:</h3>
                                <div className='Options'>
                                    <button className='ColorOptionButtons Black'></button>
                                    <button className='ColorOptionButtons Green'></button>
                                    <button className='ColorOptionButtons Brown'></button>
                                    <button className='ColorOptionButtons HeatherGray'></button>
                                    <button className='ColorOptionButtons Purple'></button>
                                    <button className='ColorOptionButtons White'></button>
                                </div>
                                <h3 className='DetailSpacing2'>Size:</h3>
                                <div className='Options'>
                                    <button className='SizingOptionsButtons'>XS</button>
                                    <button className='SizingOptionsButtons'>S</button>
                                    <button className='SizingOptionsButtons'>M</button>
                                    <button className='SizingOptionsButtons'>L</button>
                                    <button className='SizingOptionsButtons'>XL</button>
                                </div>
                                <button className='DetailButton'>Add to Bag</button>
                                <div>
                                    <img className='HeartIcon' src="https://img.icons8.com/material-outlined/1000/253746/hearts.png" alt='User Icon' />Save For Later
                                </div>
                            </div>
                        </div>
                        {product.secondimage ?
                                <div className='AdditionalImages'>
                                    <img src={product.secondimage} alt={product.title} />
                                    {product.thirdimage ?
                                        <img src={product.thirdimage} alt={product.title} />
                                        : <div />
                                    }
                                </div>
                            : <div/>
                        }
                    </div>
                    :
                    <div className='WrongPage'>
                        <h1>This product is not available</h1>
                        <Link className='Link' to={"/"}>Return Home</Link>
                    </div>
            }
            {/* FOOTER COMPONENT */}
            {<Footer />}
        </div>
    )
}

export default Detail;