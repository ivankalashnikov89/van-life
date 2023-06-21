import React from 'react';
import { Link, Outlet } from "react-router-dom"



function HostLayout() {
    return (
       <>
        <nav>
          <Link to="/host">Dashboard</Link>
          <Link to="/host/income">Income</Link>
          <Link to="/vans/reviews">Reviews</Link>
        </nav>
      <Outlet />
       </>
       
    )
}

export default HostLayout;
