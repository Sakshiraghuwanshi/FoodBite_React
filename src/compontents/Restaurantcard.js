import { IMG_CDN_URL } from "../config";


const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) => {
    return (
      <div className="card">
        <img
          src={
          IMG_CDN_URL +
            cloudinaryImageId
          }
        />
        <div className="card-content">
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
       
        <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
          </div>
      </div>
    );
  };
  export default RestaurantCard;