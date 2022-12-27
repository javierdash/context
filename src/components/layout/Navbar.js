import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink activeClassName="nav-active" exact to="/">Home </NavLink>
      <NavLink activeClassName="nav-active" to="/products">Products</NavLink>
    </nav>
  )
}

export default Navbar