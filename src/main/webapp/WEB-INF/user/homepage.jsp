<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!-- c:out ; c:forEach etc. -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/usercss/homepage.css">
    <link rel="stylesheet" href="/css/usercss/universal.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Hammy and Fitch Homepage</title>
</head>

<body>
    <!-- TOP HEADER -->
    <div class="topheader">
        <div class="topheadercontent">
            <div class="smalllogo">
                <a href="/">A<span>&</span>F</a>
            </div>
            <c:choose>
                <c:when test="${userId != null}">
                    <a class="logout" href="/logout">Logout</a>
                </c:when>
                <c:otherwise>
                    <div class="dropdown">
                        <span class="loginandreg gothic"><img class='signinicon'
                                src="https://img.icons8.com/external-gradak-royyan-wijaya/1000/253746/external-circle-gradak-user-gradak-royyan-wijaya-2.png"
                                alt="User Icon"> Sign in or Join</span>
                        <div class="dropdown-content">
                            <a href="/login">Log In</a>
                            <a href="/register">Join</a>
                        </div>
                    </div>
                </c:otherwise>
            </c:choose>
        </div>
    </div>
    <!-- MIDDLE HEADER -->
    <div class='middleheader'>
        <div class="middleheadercontent">
            <ul class="middleheaderleft">
                <li><a href="/">
                        <h3>Abercrombie<span>&</span>Fitch</h3>
                    </a></li>
                <li><a class="gothic" href="/mensclothing">Men's</a></li>
                <li><a class="gothic" href="/womensclothing">Women's</a></li>
            </ul>
            <ul class="middleheaderright">
                <li>
                    <p class='search'><img
                            src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/1000/253746/external-search-ecommerce-user-interface-inkubators-detailed-outline-inkubators.png"
                            class='searchicon' alt='Search Icon' />Search</p>
                </li>
                <li><img class="smallicon" src="https://img.icons8.com/color/1000/null/usa.png" />
                </li>
                <li><a href="cart"><img class="smallicon"
                            src="https://img.icons8.com/small/1000/253746/shopping-bag.png"
                            alt='Cart Icon' /></a></li>
            </ul>
        </div>
    </div>
    <!-- BOTTOM HEADER -->
    <div class='bottomheader'>
        <div class='bottomheadercontent'>
            <p>Limited Time: Up to 25% Off Select Styles</p>
            <a href="/promotion">See Details</a>
            <a href="/mensclothing">Shop Men's</a>
            <a href="/womensclothing">Shop Women's</a>
        </div>
    </div>
    <!-- MAIN CONTENT -->
    <div class="maincontent">
        <div class="slideshow">
            <img src='https://img.abercrombie.com/is/image/anf/KIC_130-3027-1147-412_life1?policy=product-large'
                alt='Sample Product' />
            <img src='https://img.abercrombie.com/is/image/anf/KIC_123-3054-3214-300_life1?policy=product-extra-large'
                alt='Sample Product' />
        </div>
        <div class='slideshowtext'>
            <h1>TOP</h1>
            <h1>OF</h1>
            <h1>MIND</h1>
            <p>Meet the top trends we can't get out of our head.</p>
            <a href="/mensclothing">Shop Men's</a>
        </div>
    </div>
        <div class="middleslideshow">
            <h1>For this Season and Next</h1>
            <div class='middleslideshowcontent'>
                <div>
                    <a href="/mensclothing">
                        <img src="https://img.abercrombie.com/is/image/anf/KIC_125-3068-3395-178_prod1?policy=product-extra-large"
                            alt='Sample Product' />
                        <p>Texturized Flannel</p>
                    </a>
                </div>
                <div>
                    <a href="/mensclothing">
                        <img src="https://img.abercrombie.com/is/image/anf/KIC_130-2623-1100-450_prod1?policy=product-large"
                            alt='Sample Product' />
                        <p>Loose Workwear Pant</p>
                    </a>
                </div>
                <div>
                    <a href="/mensclothing">
                        <img src="https://img.abercrombie.com/is/image/anf/KIC_133-3029-1013-205_prod1?policy=product-large"
                            alt='Sample Product' />
                        <p>Pull-On Seersucker Swim Trunk</p>
                    </a>
                </div>
                <div>
                    <a href="/mensclothing">
                        <img src="https://img.abercrombie.com/is/image/anf/KIC_120-3023-2122-303_prod1?policy=product-extra-large"
                            alt='Sample Product' />
                        <p>Stitch Button-Through Sweater Polo</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="maincontent">
            <div class="bottom slideshow">
                <img src='https://img.abercrombie.com/is/image/anf/KIC_122-3115-0149-907_life1?policy=product-large'
                    alt='Sample Product' />
                <img src='https://img.abercrombie.com/is/image/anf/KIC_125-3030-1548-178_life1?policy=product-large'
                    alt='Sample Product' />
            </div>
            <div class="bottom2 slideshowtext">
                <h1>THE</h1>
                <h1>TOP</h1>
                <h1>PICKS</h1>
                <p>New Arrivals for game day — and every day.</p>
                <a href="/mensclothing">Shop Men's</a>
            </div>
        </div>
<!-- FOOTER -->
    <div class="footer">
        <a class="footerlogo" href="/"><h1>Abercrombie<span>&</span>Fitch</h1></a>    
        <div class='socialmediaicons'>
            <a>
                <img src="https://img.icons8.com/ios-glyphs/1000/253746/twitter--v1.png" alt='Twitter Icon'/>
            </a>
            <a>
                <img src="https://img.icons8.com/ios-glyphs/1000/253746/facebook-new.png" alt='Facebook Icon'/>
            </a>
            <a>
                <img src="https://img.icons8.com/ios/1000/253746/instagram-new--v1.png" alt='Instagram Icon'/>
            </a>
            <a>
                <img src="https://img.icons8.com/windows/1000/253746/pinterest-p.png" alt='Pinterest Icon'/>
            </a>
            <a>
                <img src="https://img.icons8.com/material-rounded/1000/253746/youtube-play.png" alt='Youtube Icon'/>
            </a>
            <a>
                <img src="https://img.icons8.com/ios-glyphs/1000/253746/tiktok.png" alt='TikTok Icon'/>
            </a>
        </div>
    </div>
</body>

</html>