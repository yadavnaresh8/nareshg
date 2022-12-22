import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>


<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="#"><img src="https://www.themealdb.com/images/logo-small.png" alt=""/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-4 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link ho" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link se" to="#">Api</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link th">Forum</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fo"><i className="fa-brands fa-facebook"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fi" ><i className="fa-brands fa-twitter"></i></Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar