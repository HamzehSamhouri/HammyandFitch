import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// FUNCTIONALITY TO COME
const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // ERRORS
    const [errors, setErrors] = useState([]);

    // NAVIGATE BACK HOME ON SUBMISSION
    const navigate = useNavigate();

    // BACKEND CALL TO CREATE 
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new/user', {
            email,
            password
        })
            .then(res => {
                console.log(res);
                navigate("/");
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
        <div className='LoginSpacing'>
            <form className='ProductForm' onSubmit={onSubmitHandler}>
                <h1>myAbercrombie Login</h1>
                {errors.map((err, index) => <p className='Error' key={index}>{err}</p>)}
                <p>
                    <label>Email:</label>
                    <input className='Input' type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </p>
                <p>
                    <label>Password:</label>
                    <input className='Input' type="text" placeholder='• • • • • • • •' onChange={(e) => setPassword(e.target.value)} value={password} />
                </p>
                <input className='Create' type="submit" value="Log In" />
                <Link className='Link' to={"/"}>Cancel</Link>
                <br></br>
                <Link className='Link LoginandRegisterLink' to={"/register"}>Don't have an Account? Join myAbercrombie</Link>
            </form>
        </div>
    )
}

export default LoginForm