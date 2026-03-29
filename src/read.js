import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';

function Read() {
  const [apiData, setApiData] = useState([]);
  function getData() {
    axios.get('https://69c69dd4f272266f3eacdf1a.mockapi.io/crud')
      .then((response) => {
        setApiData(response.data);
        console.log(response.data);
      })
  }
  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    axios.delete(`https://69c69dd4f272266f3eacdf1a.mockapi.io/crud/${id}`)
      .then(
        () => {
          getData();
        }
      );
  }

  function setDataToLocalStorage(id,name,age,email)
  {
     localStorage.setItem('id',id);
     localStorage.setItem('name',name);
     localStorage.setItem('age',age);
     localStorage.setItem('email',email);
  }

  return (
    <>
      <div className='row'>
        <div className='col-md-12'>
          <div>
            <Link to='/create' className='btn btn-primary mb-2 ' >Create new Data</Link>
          </div>
          <table className='table table-bordered mt-5 text-center'>
            <thead className='bg-dark text-white'>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                apiData.map(
                  (data) => {
                    return (
                      <>
                        <tr>
                          <td>{data.id}</td>
                          <td>{data.name}</td>
                          <td>{data.age}</td>
                          <td>{data.email}</td>
                          <td>
                           <Link to='/update'>
                            <button className='btn btn-primary' onClick={()=>setDataToLocalStorage(data.id,data.name,data.age,data.email)}>Edit</button>
                           </Link>
                          </td>
                          <td>
                            <button className='btn btn-danger' onClick={()=>{if(window.confirm("Areyou sure to delete the data")){handleDelete(data.id)}}} >Delete</button>
                          </td>
                        </tr>
                      </>
                    )
                  }
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export { Read };