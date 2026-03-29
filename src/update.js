import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));
    }, []);
      
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://69c69dd4f272266f3eacdf1a.mockapi.io/crud/${id}`, {
            name: name,
            age: age,
            email: email
        }).then(()=>
        {
            navigate('/');
        }
        );
        }
    return (
        <>
            <div className='container'>
                <div className='row justify-content-center mt-5'>
                    <div className='col-md-6'>
                        <div>
                            <Link to='/' className='btn btn-primary mb-2'>Read Data</Link>
                        </div>
                        <div className='card p-4'>
                            <h2 className='text-center mb-4'>Update New Data</h2>
                            <form onSubmit={handleUpdate}>
                                <div className='form-group mb-3'>
                                    <label>Enter the name</label>
                                    <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} className='form-control'></input>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Enter Age</label>
                                    <input type='number' name='age' value={age} onChange={(e) => setAge(e.target.value)} className='form-control' ></input>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Enter Email</label>
                                    <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' ></input>
                                </div>
                                <button type='submit' value='Update' className='btn btn-primary w-100'>Update</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
