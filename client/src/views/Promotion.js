import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';


const Promotion = () => {
    return (
        <div className='Cart' >
            {/* HEADER COMPONENT */}
            {<Header />}
            {/* PROMOTION */}
            <div className='MainPromotion'>
                <h1>Promotion <span className='Italics'>Details</span> </h1>
                <div className='GothicFont'>

                </div>
                <h3>UP TO 25% OFF SELECT STYLES</h3>
                <p>Offer valid online only for a limited time at Abercrombie.com in US/CA. Offer applies to select styles as indicated. Online price reflects discount. Offer excludes abercrombie kids merchandise. Applies pre-tax and does not apply to gift cards, e-gift cards, gift wrapping or shipping & handling of discounted items. Cannot be applied to previous purchases. Cannot be used in combination with other offers or promo codes on the same items, or in combination with Associate Discount. Discount will be applied to all eligible items and will be deducted upon return of any item to which the discount was applied. Purchase quantities may be limited. Not redeemable for cash or credit. Offer may be terminated or modified at any time without notice. Other restrictions may apply. Excluded locations: all stores.</p>
                <h3>FREE SHIPPING OVER $99</h3>
                <p>Offer valid for a limited time on all approved orders equaling $99.00 or more placed online at Abercrombie.com. To qualify, orders must be shipped within the U.S. or Canada via Standard Ground service. Order total is calculated after all discounts. Excludes gift cards, e-gift cards, gift wrap, taxes, and shipping and handling. Discount will be taken automatically at checkout. Not valid on previous orders. Purchase quantities may be limited. Not redeemable for cash or store credit. Other restrictions may apply.
                </p>
            </div>
            {/* FOOTER COMPONENT */}
            {<Footer />}
        </div>
    )
}

export default Promotion