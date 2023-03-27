![](./site_images/Hammy&Fitch-header-image.png)

#### Hammy & Fitch - a recreation of [Abercrombie and Fitch's](https://www.abercrombie.com/shop/us) e-Commerce website
<!-- > Live demo [_here_](https://www.example.com). -->

## Table of Contents
* [General Information](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup and Usage](#setup-and-usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Information
Hammy & Fitch is a recreation of [Abercrombie and Fitch's](https://www.abercrombie.com/shop/us) eCommerce website, emulating both the shoppers' and managers' experience/functionality. 

Through recreating a smooth front-end user experience with challenging CSS design, as well as back-end databases, I chose to recreate a website from an established brand to challenge myself as a full-stack software developer.

<br>


## Technologies Used
* [Javascript](https://www.javascript.com/)
* [React.js](https://reactjs.org/)
* [Express](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)

<br>


## Features
### User
- Homepage view, Promotion Detail view (planned functionality), and Cart view (planned functionality)
- Designated Men's and Women's clothing sections with functional search bar and filters 
- Clothing detail section with "Add to Cart" button (planned functionality)
### Manager
- Manager portal where all clothing items are displayed and can be filtered through
- New product form
- Edit and/or delete items


<br>


## Screenshots
### User Interface
Main homepage
![Homepage Part 1](./site_images/Homepage1.png)
![Homepage Part 2](./site_images/Homepage2.png)
![Homepage Part 3](./site_images/Homepage3.png)

Clothing Section with functional search bar and filters
![Mens Clothing Section](./site_images/MensClothing.png)

Clothing detail page where user can view images, pricing, descriptions, as well as _add to cart_  
![Clothing Details Part 1](./site_images/ClothingDetail1.png)
![Clothing Details Part 2](./site_images/ClothingDetail2.png)

### Manager Interface
Manager Portal where new clothing items can be added, all clothes are displayed with options to edit and delete items.
![Manager Portal ](./site_images/Managersite.png)
New Product Form
![New Product ](./site_images/NewProduct.png)


<br>


## Setup and Usage
Project requirements/dependencies for server and client are located within designated  package-lock.json and package.json files. 

        cd server
        npm install express cors mongoose
        nodemon server.js

        cd client
        npm install react-bootstrap bootstrap axios react-router-dom
        npm run start


<br>


## Project Status
Project MVP: _Complete_. However, additional features planned.

<br>

## Room for Improvement

Room for improvement:
- CSS Responsiveness
> Aesthetic design and ease of use across a variety of device screen sizes 
- CSS File Organization
> Potentially allocate a CSS file for each page
<br>


To do:
- CSS responsiveness

- User _myAbercrombie_ login and registration pages
![User Registration](./site_images/UserRegistration.png)

- Manager login page so that the manager portal is secure
![Manager Registration](./site_images/ManagerPortal.png)

- Functional _Add to Cart_ button and Cart page. Upon checkout item quantity will be reduced (once quantity reaches 0 item temporarily hidden from site)
![Cart](./site_images/Cart.png)

- Functional _Promotion Details_ page where manager can add, edit, and delete promotions
![Promotion Details](./site_images/Promotions.png)

<br>

## Contact
Created by [@HamzehSamhouri](https://www.linkedin.com/in/hamzehsamhouri/) - feel free to contact me!
