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
    <link rel="stylesheet" href="/css/admincss/newproduct.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
    <title>New Product</title>
</head>
<body>
<form:form class="form" action="/products" method="POST" modelAttribute="product">
    <form:input type="hidden" value="${adminId}" path="admin"></form:input>
    <h1 class="text-center">New Product Form</h1>
    <div>
        <form:label path="gender">Gender:</form:label>
        <form:errors class="error" path="gender"></form:errors>
        <form:select path="gender">
            <option></option>
            <form:option value="Mens">Mens</form:option>
            <form:option value="Womens">Womens</form:option>
        </form:select>
        <p class="hide">Product Gender Class Required</p>
    </div>
<div>
    <form:label path="title">Title:</form:label>
    <form:errors class="error" path="title"></form:errors>
    <form:input path="title" type="text"></form:input>
    <p class="hide">Product Title Required</p>
</div>
<div>
    <form:label path="category">Category:</form:label>
    <form:errors class="error" path="category"></form:errors>
    <form:select path="category">
        <option></option>
        <form:option value="Tops">Tops</form:option>
        <form:option value="Bottoms">Bottoms</form:option>
        <form:option value="Active">Active</form:option>
        <form:option value="Coats & Jackets">Coats & Jackets</form:option>
        <form:option value="Swimwear">Swimwear</form:option>
        <form:option value="Cologne & Body Care">Cologne & Body Care</form:option>
    </form:select>
    <p class="hide">Product Category Class Required</p>
</div>
<div>
    <form:label path="price">Price:</form:label>
    <form:errors class="error" path="price"></form:errors>
    <form:input path="price" placeholder="$" type="number" min="0"></form:input>
    <p class="hide">Product Price Required</p>
</div>
<div>
    <form:label path="description">Description:</form:label>
    <form:errors class="error" path="description"></form:errors>
    <form:input path="description" type="text"></form:input>
    <p class="hide">Product Description Required</p>
</div>
<div>
    <form:label path="inventory">Quantity:</form:label>
    <form:errors class="error" path="inventory"></form:errors>
    <form:input path="inventory" type="number" min="0"></form:input>
    <p class="hide">Product inventory Required</p>
</div>
<div>
    <form:label path="primaryimage">Primary Image:</form:label>
    <form:errors class="error" path="primaryimage"></form:errors>
    <form:input path="primaryimage" type="text"></form:input>
    <p class="hide">Primary Image Required</p>
</div>
<div>
    <form:label path="secondimage">Second Image:</form:label>
    <form:input path="secondimage" type="text"></form:input>
</div>
<div>
    <form:label path="thirdimage">Third Image:</form:label>
    <form:input path="thirdimage" type="text"></form:input>
</div>
<div class="submitflex">
    <button type="submit">Create</button>
    <a href="/managersite">Cancel</a>
</div>
</form:form>
</body>
</html>