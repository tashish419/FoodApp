import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla } = restData?.info;
  return (
    <div className="rest-card">
      <img className="rest-image" src={IMG_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <div className="detail-box">
        <p>{avgRating} Stars</p>
        <p>{sla.deliveryTime} Minutes</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
