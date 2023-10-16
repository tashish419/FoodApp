import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla } = restData?.info;
  return (
    <div className="m-4 p-4 w-[250px] hover:shadow-lg hover:bg-gray-100">
      <img className="h-[200px] w-[250px]" src={IMG_URL + cloudinaryImageId} />
      <h3 className=" font-bold py-2 text-lg">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <div className="flex justify-between py-2">
        <p>{avgRating} Stars</p>
        <p>{sla.deliveryTime} Minutes</p>
      </div>
    </div>
  );
};

//Higher order component (input- RestaurantCard ==> Output- RestaurantCardPromoted)

export const withBestsellerLabel = (RestaurantCard) => {
  return (props) => {
    return(
      <div>
        <label className="absolute m-2 p-1 bg-black text-white">Bestseller</label>
        < RestaurantCard {...props}/>
      </div>
    );
  };
};  

export default RestaurantCard;
