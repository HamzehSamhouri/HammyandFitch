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
    <link rel="stylesheet" href="/css/admincss/adminsite.css">
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
    <title>Manager Site</title>
</head>

<body>
    <a class="logout" href="/adminlogout">Logout</a>
    <div class='ProductListHeader'>
        <h1>All Products</h1>
        <p>
            <a class='Link' href="/">Homepage </a>
            |
            <a class='Link' href="/mensclothing"> Mens </a>
            |
            <a class='Link' href="/womens"> Womens</a>
        </p>
        <p class='VerticalSpacing'>
            <a class='Link' href="/products/new">Add New Product</a>
        </p>
    </div>
    <!-- <div class='ManagerSearchParameters'>
<input onChange={e => setSearch(e.target.value)} type="text" placeholder='Search' />
<p onClick={() => setSearch("")}>All Clothing</p>
<p onClick={() => setSearch("Mens")}>Mens</p>
<p onClick={() => setSearch("Womens")}>Womens</p>
<p onClick={() => setSearch("Tops")}>Tops</p>
<p onClick={() => setSearch("Bottoms")}>Bottoms</p>
<p onClick={() => setSearch("Active")}>Active</p>
<p onClick={() => setSearch("Coats & Jackets")}>Coats & Jackets</p>
<p onClick={() => setSearch("Swimwear")}>Swimwear</p>
<p onClick={() => setSearch("Cologne & Body Care")}>Cologne & Body Care</p>
</div> -->
    <hr />
    <c:forEach var="product" items="${products}">
        <div class='ProductListCard'>
            <img src="${product.primaryimage}" alt="${product.title}">
            <div class="ProductListCardInfo">
                <h1>${product.title}</h1>
                <hr>
                <p>Product ID: ${product.id}</p>
                <p>Category: ${product.category}</p>
                <p>Gender: ${product.gender}</p>
                <p>Description: ${product.description}</p>
                <p>Price: $${product.price}</p>
                <p>Quantity: ${product.inventory}</p>
                <a class="editlink" href="/products/update/${product.id}">Edit</a>
                <form action="/products/delete/${product.id}" method="post">
                    <input type="hidden" name="_method" value="delete">
                    <input class="editlink delete" type="submit" value="Delete">
                </form>
            </div>
            <hr>
        </div>
    </c:forEach>
</body>

</html>