import React from "react";
import { useState,useEffect } from "react";
import { RES_URL } from "./constants";


const useRestaurantMenu = (restaurantId) => {

    const [resInfo, setResInfo] = useState(null)
    
    useEffect(
        () => {
            fetchMenu();
        },[]);
    
    const fetchMenu = async () => {
        const data = await fetch( RES_URL + restaurantId);
        const jsonResponse = await data.json()
    
        setResInfo(jsonResponse)
    }
    
    return resInfo;
}

export default useRestaurantMenu;