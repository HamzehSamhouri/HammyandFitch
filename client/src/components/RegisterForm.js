import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// FUNCTIONALITY TO COME

const RegisterForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpassword, setRepeatPassword] = useState("");

    // ERRORS
    const [errors, setErrors] = useState([]);

    // NAVIGATE BACK HOME ON SUBMISSION
    const navigate = useNavigate();

    // BACKEND CALL TO CREATE 
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new/user', {
            firstName, 
            lastName,
            email,
            birthday,
            password,
            repeatpassword
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
        <div className='RegSpacing'>
        <form className='ProductForm' onSubmit={onSubmitHandler}>
            <h1>Join myAbercrombie</h1>
            {errors.map((err, index) => <p className='Error' key={index}>{err}</p>)}
            <p>
                <label>First Name:</label>
                <input className='Input' type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                <p className="Hide">First name is required</p>
            </p>
            <p>
                <label>Last Name:</label>
                <input className='Input' type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                <p className="Hide">Last name is required</p>
            </p>
            <p>
                <label>Email:</label>
                <input className='Input' type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                <p className="Hide">Email is required</p>
            </p>
            <p>
                <label>Birthday:</label>
                <input className='Input' type="date" onChange={(e) => setBirthday(e.target.value)} value={birthday} />
            </p>
            <p>
                <label>Password:</label>
                <input className='Input' type="text" placeholder='• • • • • • • •' onChange={(e) => setPassword(e.target.value)} value={password} />
                <p className="Hide">Password is required</p>
            </p>
            <p>
                <label>Repeat Password:</label>
                <input className='Input' type="text" placeholder='• • • • • • • •' onChange={(e) => setRepeatPassword(e.target.value)} value={repeatpassword} />
                <p className="Hide">Passwords must match</p>
            </p>
            <input className='Create' type="submit" value="Create" />
            <Link className='Link' to={"/"}>Cancel</Link>
            <br></br>
                <Link className='Link LoginandRegisterLink' to={"/login"}>Already have an Account? Log In Here.</Link>
        </form>
        </div>
    )
}

export default RegisterForm