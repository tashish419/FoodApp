import RestaurantCard, { withBestsellerLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { RESTAURANT_LIST_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { list } from "postcss";
import UserContext from "../utils/userContext";

const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState([]);

  const RestaurantCardBestseller = withBestsellerLabel(RestaurantCard);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();


    setListofRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your Internet Connection;
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);
  console.log(setUserName);

  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-between items-center">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black p-1"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className=" focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 m-4"
            onClick={() => {
              //fliter the restaurant cards and update the UI
              const filteredList = listofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            onClick={() => {
              const filteredList = listofRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setListofRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4">
          <label>User Name: </label>
          <input
            type="text"
            className="border border-solid border-black p-1"
            value={loggedInUser}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div className="m-4 p-4">
          Online Status: {onlineStatus ? "✅" : "🔴"}
        </div>
      </div>
      <div className="flex flex-wrap mx-20">
        {filteredRestaurant.map((restros) => (
          <Link key={restros.info.id} to={"/restaurants/" + restros.info.id}>
            {restros.info.avgRating > 4.2 ? (
              <RestaurantCardBestseller restData={restros} />
            ) : (
              <RestaurantCard restData={restros} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
