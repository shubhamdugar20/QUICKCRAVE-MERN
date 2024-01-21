import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  let navi = useNavigate();

  const [cred, setcred] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://quickcravebackend.onrender.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: cred.email, password: cred.password }),
    });

    const json = await response.json();

    if (!json.success) {
      alert('Enter valid credentials');
    } else {
      localStorage.setItem('authToken', json.authToken);
      localStorage.setItem('userEmail', cred.email);
      navi('/');
    }
  };

  const onchange = (e) => {
    setcred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        <div className="card p-4" style={{ width: '400px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', borderRadius: '15px', background: '#fff', border: '1px solid #dcdcdc' }}>
          <h2 className="text-center mb-4" style={{ color: '#343a40' }}>Login</h2>
          <hr style={{ backgroundColor: '#f5f3b4', height: '2px', margin: '15px 0' }} />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" style={{ color:"dark-grey" }}>Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmai"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                value={cred.email}
                onChange={onchange}
                style={{ border: '1px solid #dcdcdc', borderRadius: '5px' }}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" style={{ color: "dark-grey" }}>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                value={cred.password}
                onChange={onchange}
                style={{ border: '1px solid #dcdcdc', borderRadius: '5px' }}
              />
            </div>

            <button type="submit" className="mb-3 mt-4 btn btn-secondary w-100" style={{border: '1px solid #dcdcdc', borderRadius: '5px' }}>
              Login
            </button>
            <Link to="/createuser" className="btn btn-danger w-100" style={{ background: '#7f58af', border: '1px solid #dcdcdc', borderRadius: '5px' }}>
              Not a user?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
