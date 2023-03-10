import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Product = (props) => {
    const [gender, setGender] = useState("Mens");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Tops");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [inventory, setInventory] = useState("");
    const [primaryimage, setPrimaryImage] = useState("");
    const [secondimage, setSecondImage] = useState("");
    const [thirdimage, setThirdImage] = useState("");

    // ERRORS
    const [errors, setErrors] = useState([]);

    // NAVIGATE BACK HOME ON SUBMISSION
    const navigate = useNavigate();

    // BACKEND CALL TO CREATE 
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new/product', {
            gender,
            title,
            category,
            price,
            description,
            inventory,
            primaryimage,
            secondimage,
            thirdimage
        })
            .then(res => {
                console.log(res);
                navigate("/managersite");
            })

            // ERROR MESSAGES
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

// PAGE RENDER
    return (
        <form className='ProductForm' onSubmit={onSubmitHandler}>
            <h1>Add New Product</h1>
            {errors.map((err, index) => <p className='Error' key={index}>{err}</p>)}
            <p>
                <label>Gender:</label>
                <select onChange={(e) => setGender(e.target.value)}>
                    <option></option>
                    <option value={"Mens"}>Mens</option>
                    <option value={"Womens"}>Womens</option>
                </select>
                <p className="Hide">Product Gender Class Required</p>
            </p>
            <p>
                <label>Title:</label>
                <input className='Input' type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                <p className="Hide">Product Title Required</p>
            </p>
            <p>
                <label>Category:</label>
                <select onChange={(e) => setCategory(e.target.value)}>
                <option></option>
                    <option value={"Tops"}>Tops</option>
                    <option value={"Bottoms"}>Bottoms</option>
                    <option value={"Active"}>Active</option>
                    <option value={"Coats & Jackets"}>Coats & Jackets</option>
                    <option value={"Swimwear"}>Swimwear</option>
                    <option value={"Cologne & Body Care"}>Cologne & Body Care</option>
                </select>
                <p className="Hide">Product Category Required</p>
            </p>
            <p>
                <label>Price:</label>
                <input type="number" min={0} onChange={(e) => setPrice(e.target.value)} placeholder="$" value={price} />
                <p className="Hide">Product Price Required</p>
            </p>
            <p>
                <label>Description:</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                <p className="Hide">Product Description Required</p>
            </p>
            <p>
                <label>Quantity:</label>
                <input type="number" min={0} onChange={(e) => setInventory(e.target.value)} value={inventory} />
                <p className="Hide">Product Quantity Required</p>
            </p>
            <p>
                <label>Primary Image:</label>
                <input type="text" onChange={(e) => setPrimaryImage(e.target.value)} value={primaryimage} />
                <p className="Hide">Required: Primary Image Link</p>
            </p>
            <p>
                <label>Second Image:</label>
                <input type="text" onChange={(e) => setSecondImage(e.target.value)} value={secondimage} />
                <p className="Hide">Optional: Secondary Image Link</p>
            </p>
            <p>
                <label>Third Image:</label>
                <input type="text" onChange={(e) => setThirdImage(e.target.value)} value={thirdimage} />
                <p className="Hide">Optional: Tertiary Image Link</p>
            </p>
            <input className='Create' type="submit" value="Create" />
            <Link className='Link' to={"/managersite"}>Cancel</Link>
        </form>
    )
}

export default Product