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
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/usercss/loginandreg.css">
    <link rel="stylesheet" href="/css/usercss/universal.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
    <title>Hammy and Fitch Login Portal</title>
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
    <div class="loginform">
        <form:form class="login" action="/login" method="POST" modelAttribute="newLogin">
            <h1 class="text-center">Login</h1>
            <div>
                <form:label path="email">Email</form:label>
                <form:errors class="error" path="email"/>
                <form:errors class="error" path="password"/>
                <form:input type="text" placeholder="Email" path="email"/>
            </div>
            <div>
                <form:label path="password"><br>Password</form:label>
                <form:input type="password" placeholder="••••••••" id="passwordfield" path="password"/>
                <i class="bi bi-eye-slash" id="togglePassword"><br></i>
                </div>
                <button type="submit">Login</button>
                <a href="/register">Don't have an Account? Join myAbercrombie.</a>
        </form:form>
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


<script type="text/javascript" src="/js/script.js"></script>
</html>