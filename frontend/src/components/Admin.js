import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [res, setRes] = useState([]);
  const [formData, setFormData] = useState({ name: '', role: '', email: '', password: '' });

  const fetchData = async () => {
    await axios.get('http://localhost:8081/retrive')
      .then(response => {
        setRes(response.data);
        console.log(response.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const updateData = async (id) => {
    console.log(id);
    const res = await axios.put(`http://localhost:8081/users/${id}`, formData);
    fetchData();
    console.log(res.data);
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8081/users/${id}`)
      .then(response => {
        console.log(response.data);
      });
    fetchData();
  };
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <center>
        <h1>ADMIN PANEL</h1>
        <table style={{ width: '95%', color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.7)', border: '1px solid black', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ border: '1px solid black' }}>
              <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Role</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Password</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Update Details</th>
            </tr>
          </thead>
          <tbody>
            {
              res.map((item, index) => (
                <tr key={index} style={{ border: '1px solid black' }}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{item.name}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{item.role}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{item.email}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{item.password}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>
                    <input type='text' name='name'
                      placeholder='New Name'
                      onChange={changeHandler} />
                    <input type='text' name='role'
                      placeholder='New Role'
                      onChange={changeHandler} />
                    <input type='text' name='email'
                      placeholder='New Email'
                      onChange={changeHandler} />
                    <input type='password' name='password'
                      placeholder='New Password'
                      onChange={changeHandler} />
                    <button onClick={() => updateData(item._id)}>update</button>
                    <button onClick={() => handleDelete(item._id)}>delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default Admin;
