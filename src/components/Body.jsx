import React from "react"
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";    
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {

    const [ listofRestaurants, setListofRestaurants ] = useState([])
    const [ filteredList , setFilteredList ] = useState([])
    
    const [searchText , setSearchText ] = useState("")

    useEffect( () => {
        fetchData();
    },[]);

    const fetchData = async() => {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6334436&lng=77.0993213&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            const jsonResponse = await data.json();

            setListofRestaurants(jsonResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredList(jsonResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    };

    const onlineStatus = useOnlineStatus()

    if (onlineStatus === false) return <h1>"Looks like you're Offline. Please check your internet connection"</h1>


    return listofRestaurants.length === 0 ? (
        <Shimmer/>
    ): (
        <div className="body">
            <div className="filter flex justify-between">
                <div className="search flex items-center" >
                    <input type="text" className="search-box border-1" value={searchText} 
                        onChange={
                            (e) =>{
                                setSearchText(e.target.value)
                            }
                        }    
                    />
                    <button className="search-btn mx-2 px-2 py-1 bg-blue-200 rounded-xl hover:border-2 border-black " 
                        onClick={
                            () => {
                                const searchList = listofRestaurants.filter(
                                    (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setFilteredList(searchList)
                            }
                        }
                    >
                    Search 
                    </button>
                    
                </div>
                <button className="filter-btn mx-2 my-1 px-2 py-1 bg-blue-400 rounded-xl hover:border-2 border-black"
                    onClick={
                        () => {
                            const topratedrestaurants = listofRestaurants.filter(
                                (restaurant) => restaurant.info.avgRating > 4
                            );              
                            setFilteredList(topratedrestaurants);
                        }
                    }
                >
                Top Rated Restaurants
                </button>                    
            </div>

            <div className="res-container flex flex-wrap">
                {filteredList.map((restaurant) => ( 
                    <Link to={ "/restaurants/" + restaurant.info.id } key={restaurant.info.id}> <RestaurantCard key = {restaurant.info.id} resData = {restaurant} /> </Link> 
                    ))}
            </div>
            
        </div>
    );
};

export default Body;