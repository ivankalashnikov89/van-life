import React from 'react';
import { Link, NavLink, Outlet } from "react-router-dom"



function HostLayout() {

  const activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red"
}

    return (
       <>
        <nav className="host-nav">
          <NavLink to="/host" end={true} {({isActive}) => isActive ? activeLink : null}>Dashboard</NavLink>
          <NavLink to="/host/income" {({isActive}) => isActive ? activeLink : null}>Income</NavLink>
          <NavLink to="/host/reviews" {({isActive}) => isActive ? activeLink : null}>Reviews</NavLink>
        </nav>
      <Outlet />
       </>
       
    )
}

export default HostLayout;
