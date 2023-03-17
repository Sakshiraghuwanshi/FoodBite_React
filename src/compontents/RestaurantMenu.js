import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () => {
    const {id}= useParams();
    const [restaurant,setRestaurant] = useState ();

    useEffect (()=> {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo(){
        const data = await fetch (
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6875335&lng=75.86500769999999&restaurantId=415031");
            const json = await data.json();
            console.log(json.data);
            setRestaurant(json.data);
    }


    return (
        <div>
            <h1>Restaurant id : {id}</h1>
           <h2>{restaurant.cards[0].card.card.info?.city}</h2>
        </div>
    )
}
export default RestaurantMenu;