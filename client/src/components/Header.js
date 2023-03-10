import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
// PAGE RENDER
    return (
        <div>
            {/* TOP HEADER */}
            <div className='TopHeader'>
                <Link className='MainLink' to={"/"}><h4 className='SmallLogo'>A<span className='SmallerFont'>&</span>F</h4></Link>
                <div className="dropdown">
                    <span><img className='SignInIcon' src="https://img.icons8.com/external-gradak-royyan-wijaya/1000/null/external-circle-gradak-user-gradak-royyan-wijaya-2.png" alt='User Icon' />Sign in or Join</span>
                    <div className="dropdown-content">
                        <p><Link className='MainLink' to={"/login"}>Log In</Link></p>
                        <p><Link className='MainLink' to={"/register"}>Join</Link></p>
                    </div>
                </div>
            </div>
            {/* BOTTOM HEADER */}
            <div className='BottomHeader'>
                <ul className='BottomHeaderLeft'>
                    <li><Link className='MainLink' to={"/"}><h1 className='MainLogo'>Abercrombie & Fitch</h1></Link></li>
                    <li><Link className='Link' to={"/mensclothing"}> <h3>Men's</h3></Link></li>
                    <li> <Link className='Link' to={"/womensclothing"}><h3>Women's</h3></Link></li>
                </ul>
                <div className='BottomHeaderRight'>
                    <p className='Search' type="text" placeholder='Search'><img src="https://img.icons8.com/ios-glyphs/1000/000000/search--v1.png" className='SearchIcon' alt='Search Icon' /> Search</p>
                    <Link to={"/cart"}>
                        <img className='CartIcon' src="https://img.icons8.com/small/1000/253746/shopping-bag.png" alt='Cart Icon' />
                    </Link>
                </div>
            </div>
            {/* MAIN CONTENT */}
            <div className='MainContent'>
                {/* Main Content Header */}
                <div className='MainContentHeader'>
                    <div className='MainContentHeaderText'>
                        <p>Limited Time: Up to 25% Off Select Styles</p>
                        <Link className='MainContentHeaderLinks' to={"/promotion"}>See Details</Link>
                        <Link className='MainContentHeaderLinks' to={"/mensclothing"}>Shop Men's</Link>
                        <Link className='MainContentHeaderLinks' to={"/womensclothing"}>Shop Women's</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header