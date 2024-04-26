import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Admin = () => {
  const [res, setRes] = useState([]);
  const [formData, setFormData] = useState({ name: '', role: '', email: '', password: '' }); // Add formData state

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
    const res = await axios.put(`http://localhost:8081/users/${id}`, formData); // Use formData here
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
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Update formData state
  };

  return (
    <div style={{ background: 'linear-gradient(to top left, #cfd9df, #e2ebf0)', minHeight: '100vh', padding: '50px 0' }}>
      <center>
        <h1 style={{ marginBottom: '30px', fontSize: '2rem', color: '#333' }}>ADMIN PANEL</h1>
        <div style={{ marginBottom: '20px' }}>
          <Link to="/Admin" style={{ marginRight: '20px', color: '#333', textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block', padding: '10px 20px', borderRadius: '5px', background: '#f0f0f0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'background 0.3s' }}>Admin Panel</Link>
          <Link to="/BookingsData" style={{ marginRight: '20px', color: '#333', textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block', padding: '10px 20px', borderRadius: '5px', background: '#f0f0f0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'background 0.3s' }}>Bookings</Link>
          <Link to="/FlightData" style={{ color: '#333', textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block', padding: '10px 20px', borderRadius: '5px', background: '#f0f0f0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'background 0.3s' }}>Flight Data</Link>
        </div>
        <table style={{ width: '95%', color: '#333', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ border: '1px solid #ddd', backgroundColor: '#f7f7f7' }}>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Role</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Password</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Update Details</th>
            </tr>
          </thead>
          <tbody>
            {
              res.map((item, index) => (
                <tr key={index} style={{ border: '1px solid #ddd', backgroundColor: index % 2 === 0 ? '#f7f7f7' : '#fff' }}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.role}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.email}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.password}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <input type='text' name='name'
                      placeholder='New Name'
                      onChange={changeHandler}
                      style={{ marginRight: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    <input type='text' name='role'
                      placeholder='New Role'
                      onChange={changeHandler}
                      style={{ marginRight: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    <input type='text' name='email'
                      placeholder='New Email'
                      onChange={changeHandler}
                      style={{ marginRight: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    <input type='password' name='password'
                      placeholder='New Password'
                      onChange={changeHandler}
                      style={{ marginRight: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    <button onClick={() => updateData(item._id)} style={{ marginRight: '5px', padding: '5px 10px', borderRadius: '5px', border: 'none', background: 'linear-gradient(to right, #4caf50, #2e7d32)', color: '#fff', cursor: 'pointer' }}>Update</button>
                    <button onClick={() => handleDelete(item._id)} style={{ padding: '5px 10px', borderRadius: '5px', border: 'none', background: 'linear-gradient(to right, #f44336, #d32f2f)', color: '#fff', cursor: 'pointer' }}>Delete</button>
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
