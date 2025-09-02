import React from "react"
import { useState,useEffect } from "react"
import { useParams } from "react-router"
import Shimmer from "./Shimmer"
import { RES_URL } from "../utils/constants"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"


const RestaurantMenu = () => {

    const {restaurantId} = useParams()

    const resInfo = useRestaurantMenu(restaurantId)

    if (resInfo === null) return <Shimmer/> ;

    const {name , city , avgRating, costForTwoMessage , sla,cuisines }  = resInfo?.data?.cards[2]?.card?.card?.info;
    
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    const categories = resInfo?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards?.filter( (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )

    console.log(categories)

    return (
        <div className="res-menu text-center">
            <h3 className=" my-2 font-bold text-4xl " > {name} </h3>
            <h4 className=" text-2xl"> {avgRating} </h4>
            <h4 className=" text-2xl"> {costForTwoMessage} </h4>
            <h4 className=" text-2xl"> {cuisines.join(", ")} </h4>
            <h4 className=" text-2xl"> {city} </h4>
            <h4 className=" text-2xl"> {sla.slaString} </h4>

        

            <div className="m-2 p-2">{categories.map( (category) => (<RestaurantCategory/>)  ) }  </div>  

        </div>
    )
        

}

export default RestaurantMenu