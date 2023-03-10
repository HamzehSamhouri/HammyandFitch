import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Homepage = () => {

    // PAGE RENDER
    return (
        <div className='Homepage'>
            {/* HEADER COMPONENT */}
            {<Header />}
            {/* Slideshow */}
            <div className='Slideshow'>
                <div className='SlideshowImages'>
                    <img className='BlackBorderRight' src='https://img.abercrombie.com/is/image/anf/KIC_130-3027-1147-412_life1?policy=product-large' alt='Sample Product' />
                    <img src='https://img.abercrombie.com/is/image/anf/KIC_123-3054-3214-300_life1?policy=product-extra-large' alt='Sample Product' />
                </div>
                <div className='SlideshowText' >
                    <h1>TOP <br></br> OF <br></br> MIND</h1>
                    <p className='VerticalSpacing'> Meet the top trends we can't get out of our head.</p>
                </div>
                <Link className='ShopButton VerticalSpacing' to={"/mensclothing"}>Shop Men's</Link>
            </div>
            {/* Focus Products Slideshow */}
            <div className='FocusProductsSlideshow'>
                <h1 className='FocusProductsSlideshowHeader'>For This Season & Next</h1>
                <div className='FlexFocusProductSlideshow'>
                    <div>
                        <Link className='Link' to={"/mensclothing"}>
                            <img className='FocusProductsSlideshowImage' src="https://img.abercrombie.com/is/image/anf/KIC_125-3068-3395-178_prod1?policy=product-extra-large" alt='Sample Product' />
                            <p>Texturized Flannel</p>
                        </Link>
                    </div>
                    <div>
                        <Link className='Link' to={"/mensclothing"}>
                            <img className='FocusProductsSlideshowImage' src="https://img.abercrombie.com/is/image/anf/KIC_130-2623-1100-450_prod1?policy=product-large" alt='Sample Product' />
                            <p>Loose Workwear Pant</p>
                        </Link>
                    </div>
                    <div>
                        <Link className='Link' to={"/mensclothing"}>
                            <img className='FocusProductsSlideshowImage' src="https://img.abercrombie.com/is/image/anf/KIC_133-3029-1013-205_prod1?policy=product-large" alt='Sample Product' />
                            <p>Pull-On Seersucker Swim Trunk</p>
                        </Link>
                    </div>
                    <div>
                        <Link className='Link' to={"/mensclothing"}>
                            <img className='FocusProductsSlideshowImage' src="https://img.abercrombie.com/is/image/anf/KIC_120-3023-2122-303_prod1?policy=product-extra-large" alt='Sample Product' />
                            <p>Stitch Button-Through Sweater Polo</p>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Focus Products Images */}
            <div className='FocusProducts'>
                <div className='FocusProductsImages'>
                    <img className='BlackBorderRight' src='https://img.abercrombie.com/is/image/anf/KIC_122-3115-0149-907_life1?policy=product-large' alt='Sample Product' />
                    <img src='https://img.abercrombie.com/is/image/anf/KIC_125-3030-1548-178_life1?policy=product-large' alt='Sample Product' />
                    {/* Womens Clothing */}
                    {/* <img className='BlackBorderRight' src='https://img.abercrombie.com/is/image/anf/KIC_149-3185-1028-100_life1?policy=product-extra-large' alt='Sample Product' />
                        <img src='https://img.abercrombie.com/is/image/anf/KIC_159-2775-4360-670_life1?policy=product-larges' alt='Sample Product' /> */}
                </div>
                <div className='FocusProductsText' >
                    <h1>THE <br></br> TOP <br></br> PICKS</h1>
                    <p className='VerticalSpacing'> New Arrivals for game day—and every day.</p>
                </div>
                <Link className='ShopButton VerticalSpacing' to={"/mensclothing"}>Shop Men's</Link>
            </div>
            {/* FOOTER COMPONENT */}
            {<Footer />}
        </div>
    );
}

export default Homepage;