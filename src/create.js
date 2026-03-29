import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';

export const Create = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    ; const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(name,age,email);
        axios.post('https://69c69dd4f272266f3eacdf1a.mockapi.io/crud', {  
            name: name,
            age: age,
            email: email
        }).then((res) => {
            console.log(res);
            navigate('/')
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <div className='container'>
                <div className='row justify-content-center mt-5'>
                    <div className='col-md-6'>
                        <div>
                            <Link to='/' className='btn btn-primary'>Read Data</Link>
                        </div>
                        <div className='card p-4'>
                            <h2 className='text-center mb-4'>Create New Data</h2>
                            <form onSubmit={handleSubmit} >
                                <div className='form-group mb-3'>
                                    <label>Enter the name</label>
                                    <input type='text' name='name' className='form-control' onChange={(e) => setName(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Enter Age</label>
                                    <input type='number' name='age' className='form-control' onChange={(e) => setAge(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Enter Email</label>
                                    <input type='email' name='email' className='form-control' onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                                <button type='submit' className='btn btn-primary w-100'>Submit</button>
                            </form>
                            {name} {age} {email}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
