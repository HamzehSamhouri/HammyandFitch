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
    <link rel="stylesheet" href="/css/usercss/universal.css">
    <link rel="stylesheet" href="/css/usercss/promotion.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Hammy and Fitch Promotion Details</title>
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
<div class="promotion">
        <h1>Promotion <span>Details</span></h1>
        <div class='GothicFont'>

        </div>
        <h5>UP TO 25% OFF SELECT STYLES</h5>
        <p>Offer valid online only for a limited time at Abercrombie.com in US/CA. Offer applies to select styles as indicated. Online price reflects discount. Offer excludes abercrombie kids merchandise. Applies pre-tax and does not apply to gift cards, e-gift cards, gift wrapping or shipping & handling of discounted items. Cannot be applied to previous purchases. Cannot be used in combination with other offers or promo codes on the same items, or in combination with Associate Discount. Discount will be applied to all eligible items and will be deducted upon return of any item to which the discount was applied. Purchase quantities may be limited. Not redeemable for cash or credit. Offer may be terminated or modified at any time without notice. Other restrictions may apply. Excluded locations: all stores.</p>
        <h5>FREE SHIPPING OVER $99</h5>
        <p>Offer valid for a limited time on all approved orders equaling $99.00 or more placed online at Abercrombie.com. To qualify, orders must be shipped within the U.S. or Canada via Standard Ground service. Order total is calculated after all discounts. Excludes gift cards, e-gift cards, gift wrap, taxes, and shipping and handling. Discount will be taken automatically at checkout. Not valid on previous orders. Purchase quantities may be limited. Not redeemable for cash or store credit. Other restrictions may apply.
        </p>
</div>
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