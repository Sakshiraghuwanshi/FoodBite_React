import { useState } from "react";
import { Link } from "react-router-dom";

const Title=()=>
{
    return(
        <a href="/">
        <div>
            <h2>Food App</h2>
        </div>
        </a>
    )
    
}

const Header =()=> {
    const  [isLoggedIn , setIsLoggedIn] =useState(false);
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
               <Link to = "/"> <li>Home</li></Link>
               <Link to = "/About"> <li>About</li></Link>
               <Link to = "/Contact"> <li>Contact</li></Link>
                <li>Cart</li>
                </ul>

            </div>
            {isLoggedIn ?     (
            <button onClick={()=> setIsLoggedIn (false)}>Logout</button>
            ) : (
            <button onClick={()=>setIsLoggedIn(true)}>Login</button> 
            )}
          
       
        </div>
    )
}


export default Header;