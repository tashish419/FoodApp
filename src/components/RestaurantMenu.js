import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);

  //   const params = useParams();
  //   console.log(params);//useParams() return us an object of key/value pair of the dynamic params

  const { restId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restId);
    const json = await data.json();

    console.log(json);
    setRestInfo(json.data);
  };

  if (restInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, locality, city } =
    restInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;


  return (
    <div className="restDetails-container">
      <h2>{name}</h2>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <p>
        {locality},{city}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li className="menu-ietms" key={item.card.info.id}>
            {item.card.info.name} - {"Rs"} {item.card.info.defaultPrice / 100 || item.card.info.price/100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
