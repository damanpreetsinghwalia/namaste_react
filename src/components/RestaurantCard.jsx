import React from "react"
import { CDN_URL } from "../utils/constants";




const RestaurantCard = (props) => {
    const {resData} = props
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = resData?.info
    return (
        <div className="res-card m-2.5 p-2 w-[280px] bg-blue-100 rounded-lg " >
            <div className=" flex justify-around ">
                <img 
                    className="res-logo h-[260] rounded-lg "
                    alt="res-logo"
                    src={
                        CDN_URL + cloudinaryImageId
                    }
                />
            </div>
            
            

            <h3 className=" font-bold " > {name} </h3>
            <h4> {cuisines.join(", ")} </h4>
            <h4> {avgRating} </h4>
            <h4> {costForTwo} </h4>
            <h4> {sla.slaString} </h4>
        </div>
    );

};

export default RestaurantCard;