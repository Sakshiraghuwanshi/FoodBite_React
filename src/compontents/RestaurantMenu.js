import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () => {
    const {id}= useParams();
    const [restaurant,setRestaurant] = useState ([]);
    const [restaurantDetails, setRestaurantDetails] = useState();

    useEffect (()=> {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo(){
        const data = await fetch (
           `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7041103&lng=75.888232&restaurantId=${id}&submitAction=ENTER`);
            const res = await data.json();
            console.log(res?.data?.cards[0]?.card?.card?.info);
            console.log(res?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
            setRestaurant(res?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
            setRestaurantDetails(res?.data?.cards[0]?.card?.card?.info);
    }

    return (
        <>
        <div>
            <h1>Restaurant id : {id}</h1>
            <h2>{restaurantDetails?.name}</h2>
           <img src= {IMG_CDN_URL + restaurantDetails?.cloudinaryImageId}/>
           <h2>{restaurantDetails?.areaName}</h2>
           <h2>{restaurantDetails?.city}</h2>
           <h2>{restaurantDetails?.avgRating} Stars</h2>
           <h2>{restaurantDetails?.costForTwoMessage
}</h2> 
          
        </div>
        <div className="Menu">
            <h1>Menu</h1>    
            <ul>
              
                {
                    (restaurant.length>1) ? restaurant.map((data) => {
                        return (
                            <h1> {data?.card?.info?.name} </h1>
                        )
                    }) : <h1> No Restaurant </h1>
                }
                </ul> 
        </div>
        </>
    )
}
export default RestaurantMenu;
