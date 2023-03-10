import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";

const UpdateProductForm = (props) => {
    const { id } = useParams();
    const [gender, setGender] = useState("Mens");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Tops");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [inventory, setInventory] = useState("");
    const [primaryimage, setPrimaryImage] = useState("");
    const [secondimage, setSecondImage] = useState("");
    const [thirdimage, setThirdImage] = useState("");

    // ERROR
    const [errors, setErrors] = useState([]);

    // NAVIGATE
    const navigate = useNavigate();


    // BACKEND CALL TO READ ONE 
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                // console.log(res);
                // console.log(res.data.results);
                setGender(res.data.results.gender);
                setTitle(res.data.results.title);
                setPrice(res.data.results.price);
                setCategory(res.data.results.category);
                setDescription(res.data.results.description);
                setInventory(res.data.results.inventory);
                setPrimaryImage(res.data.results.primaryimage);
                setSecondImage(res.data.results.secondimage);
                setThirdImage(res.data.results.thirdimage);
            })
    }, [id]);


    // BACKEND CALL TO UPDATE ONE 
    const updateProduct = e => {

        e.preventDefault();

        axios.put('http://localhost:8000/api/product/' + id, {
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
                console.log(res)
                navigate('/managersite')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }

    // PAGE RENDER
    return (
        <div>
            <h1>Update {title}</h1>
            <form className='ProductForm' onSubmit={updateProduct}>
                {errors.map((err, index) => <p className='error' key={index}>{err}</p>)}
                <p>
                    <label>Gender:</label>
                    <select onChange={(e) => setGender(e.target.value)} value={gender}>
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
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
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
                <input className='Create' type="submit" value="Update" />
                <Link className='Link' to={"/managersite"}>Cancel</Link>
            </form>
        </div>
    )
}

export default UpdateProductForm;