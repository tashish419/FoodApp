import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { restId } = useParams();
  //   const params = useParams();
  //   console.log(params);//useParams() return us an object of key/value pair of the dynamic params

  const restInfo = useRestaurantMenu(restId);
   
  const [showIndex, setShowIndex] = useState(0);

  if (restInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, locality, city } =
    restInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  // console.log(restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-8 text-3xl text-orange-800">{name}</h1>
      <p className="font-bold text-md">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <p className="font-bold text-md">
        {locality},{city}
      </p>
      {/* categories accordians */}
      {categories.map((category, index) => (
        //controlled component
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={(param) => {
            if(param){
              setShowIndex(index);
            } else{
              setShowIndex(null);
            }}}//now i have passed a function as a prop which will update the setShowIndex variable acc to index
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
