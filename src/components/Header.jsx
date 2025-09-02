import React from "react"
import { LOGO_URL } from "../utils/constants";  
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [ loginButton , setLoginButton ] = useState("Login")

    const onlineStatus = useOnlineStatus()

    return (
        <div className="header flex justify-between bg-amber-100 ">
            <div className="logo-container">
                 <img className="logo w-28 rounded-full" src= {LOGO_URL} />
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex">
                    <li className=" m-2 p-2 " >
                        Online Status : { onlineStatus ? "🟢" : "🔴"}
                    </li>

                    <li className=" m-2 p-2 rounded-lg shadow-2xl shadow-gray-500 border-1 hover:border-2 border-black">
                        <Link to = "" >Home</Link>
                    </li>
                    <li className=" m-2 p-2 rounded-lg shadow-2xl shadow-gray-500 border-1 hover:border-2 border-black">
                        <Link to="/about">About</Link>  
                    </li>
                    <li className=" m-2 p-2 rounded-lg shadow-2xl shadow-gray-500 border-1 hover:border-2 border-black">
                        <Link to = "/contact" >Contact Us</Link>
                    </li>
                    <li className=" m-2 p-2 rounded-lg shadow-2xl shadow-gray-500 border-1 hover:border-2 border-black">Cart</li>
                    <button className="login-btn  m-2 p-2 rounded-lg shadow-2xl shadow-gray-500 border-1 hover:border-2 border-black" 
                     onClick={ () => {5
                        loginButton === "Login" ? 
                        setLoginButton("Logout"):
                        setLoginButton("Login");
                    } } > {loginButton} </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
