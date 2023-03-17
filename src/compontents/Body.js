import { useState , useEffect} from "react";
import react from "react";
import ReactDOM  from "react-dom/client";
import { Restaurantlist } from "../config";
import RestaurantCard from "./Restaurantcard";
import Shimmer from "./Shimmer";


function filterData(searchText, restaurants){
  const filterData= restaurants.filter((restaurant)=> 
  restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
  return filterData;
}


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
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
      </div>
      </>
    )
}

export default Body;