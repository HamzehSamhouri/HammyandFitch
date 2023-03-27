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
    <link rel="stylesheet" href="/css/admincss/loginandreg.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
    <title>Manager Login Portal</title>
</head>

<body>
<div class="forms">
<!-- <form:form class="register" action="/adminregister" method="POST" modelAttribute="newAdmin">
    <h1 class="text-center">Register</h1>
    <div>
        <form:label path="email">Email</form:label>
        <form:errors class="error" path="email"/>
        <form:input path="email" type="text" placeholder="Email"/>
    </div>
    <div>
        <form:label path="password"><br>Password</form:label>
        <form:errors class="error" path="password"/>
        <form:input type="password" placeholder="••••••••" path="password"/>
        <div class="hide">Password must be at least 8 characters long <br> Contain at least one number <br>
            Contain at least one uppercase letter <br>
            Contain at least one lower case letter <br>
            Contain at least one special symbol</div>
        </div>
        <div>
        <form:label path="password"><br>Confirm Password</form:label>
        <form:errors class="error" path="confirm_password"/>
        <form:input type="password" placeholder="••••••••" path="confirm_password"/>
        <div class="hide">Reenter password</div>
    </div>
    <button type="submit">Register</button>
</form:form> -->
<form:form class="register" action="/adminlogin" method="POST" modelAttribute="newAdminLogin">
    <h1 class="text-center">Manager Site Login</h1>
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
</form:form>
</div>
</body>


<script type="text/javascript" src="/js/script.js"></script>
</html>