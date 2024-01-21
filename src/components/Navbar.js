import React from 'react'
import {Link,useNavigate} from "react-router-dom";
export default function Navbar() {


  const navbar = {backgroundColor:"#f5f3b4",







};


  
  const navigate=useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem("authToken")
    navigate("/")

  }
  const gotoCart=()=>{
    //localStorage.removeItem("authToken")
    navigate("/Cart")

  }
  return (


    <div>
      <nav className="navbar navbar-expand-lg navbar-dark " style={navbar}>
  <div className="container-fluid"> 
    <Link className="navbar-brand mx-1" to="/" ><img src="logo-no-background.png" height="60px" width="160px" ></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fs-4 mx-4 text-dark " aria-current="page" to="/">Home</Link>
        </li>
        {
          (localStorage.getItem("authToken"))? <li className="nav-item">
          <Link className="nav-link active fs-4 text-dark" aria-current="page" to="/myOrder">Orders</Link>
        </li>
        :""
        }
       
   
      
      </ul>

      {
          (!localStorage.getItem("authToken"))?
        
      <div className='d-flex'>

       
     
          <Link className="btn bg-white text-dark mx-1" to="/Login">Login</Link>
      
          <Link className="btn bg-white text-dark mx-1" to="/createuser">SignUp</Link>
       
      </div>
      :
      <div className='d-flex'>

       
      <div className="btn bg-white mx-1 text-dark fs-5" onClick={gotoCart} >My Cart</div>
      <div className="btn bg-white mx-1 text-danger font-weight-bold fs-5" onClick={handlelogout}>Logout</div>
  
  
   
  </div>
}
     
    </div>
  </div>
</nav>
    </div>
  )
}
