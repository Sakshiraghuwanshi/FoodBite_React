import { useState , useEffect} from "react";
import react from "react";
import ReactDOM  from "react-dom/client";
import { Restaurantlist } from "../config";
import RestaurantCard from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { filterData } from "../utils/helper";


const Body=()=>{

  const [allrestaurants,setAllRestaurants]=useState([]);
  const [filteredrestaurants,setFilteredRestaurants]=useState([]);
  const [searchText, setSearchText]= useState();

  useEffect(()=>{
    getRestaurants();
  },[]
  );

  async function getRestaurants(){
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING" );   
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }


  console.log('render');
  //not render component
  //early return
  //  if(!allrestaurants) return null;

  // if(filteredrestaurants?.length == 0 )return <h1> No restayrants</h1>;

  const isOnline = useOnline();

  if(!isOnline) {
    return <h1>Offline,Please check your internet connection!!</h1>
  }

    return allrestaurants?.length == 0 ? (
    <Shimmer/> ): (
      <>
      <div className="Body">
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e) => { setSearchText(e.target.value);}}/>
      
       <button className="search-btn" onClick={()=> {
        const data= filterData (searchText,allrestaurants);
        setFilteredRestaurants(data);
       }}>Search </button>
      </div>

        <div className="restaurant-list">
        {filteredrestaurants.map((restaurant) => {
          return (
          <Link to ={"/restaurant/" + restaurant.data.id }
          key={restaurant.data.id}>
            <RestaurantCard {...restaurant.data} /></Link>
          )
        })}
      </div>
      </div>
      </>
    )
}

export default Body;