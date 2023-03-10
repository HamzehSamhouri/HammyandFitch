import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
// PAGE RENDER
    return (
        <div>
            {/* Footer */}
            <div className='Footer'>
                <Link className='MainLink' to={"/"}><h1 className='MainLogo'>Abercrombie & Fitch</h1></Link>
                <div className='SocialMediaIcons'>
                    <Link>
                        <img src="https://img.icons8.com/ios-glyphs/1000/253746/twitter--v1.png" alt='Twitter Icon' />
                    </Link>
                    <Link>
                        <img src="https://img.icons8.com/ios-glyphs/1000/253746/facebook-new.png" alt='Facebook Icon' />
                    </Link>
                    <Link>
                        <img src="https://img.icons8.com/ios/1000/253746/instagram-new--v1.png" alt='Instagram Icon' />
                    </Link>
                    <Link>
                        <img src="https://img.icons8.com/windows/1000/253746/pinterest-p.png" alt='Pinterest Icon' />
                    </Link>
                    <Link>
                        <img src="https://img.icons8.com/material-rounded/1000/253746/youtube-play.png" alt='Youtube Icon' />
                    </Link>
                    <Link>
                        <img src="https://img.icons8.com/ios-glyphs/1000/253746/tiktok.png" alt='TikTok Icon' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer