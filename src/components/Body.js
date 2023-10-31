import RestaurantCard, { withBestsellerLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { RESTAURANT_LIST_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { list } from "postcss";
import UserContext from "../utils/userContext";
import ButtonList from "./ButtonList";
import FoodCarousel from "./FoodCarousel";
import ItemCarousel from "./ItemCarousel";
import ShimmerCursor from "./ShimmerCursor";

const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [carousel, setCarousel] = useState("");
  const [itemCarousel, setItemCarousel] = useState("");

  const [searchText, setSearchText] = useState([]);

  const RestaurantCardBestseller = withBestsellerLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();
    console.log(json);

    setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards);
    setItemCarousel(json?.data?.cards[1]?.card?.card?.imageGridCards);

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

  // const { loggedInUser, setUserName } = useContext(UserContext);
  // console.log(setUserName);
  if(!listofRestaurant){
    return(
      <div>
        <ShimmerCursor />
        <Shimmer />
      </div>
    )
  }

  return listofRestaurant.length === 0 ? (
    <div>
      <ShimmerCursor />
      <Shimmer />
    </div>
  ) : (
    <div>
      {/* <div className="flex justify-between items-center">
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
      </div> */}
      <div className="mx-8 sm:mx-14 md:mx-24 lg:mx-44 pb-4">
        {carousel && <FoodCarousel data={carousel} />}
      </div>

      <div className="mx-8 sm:mx-14 md:mx-24 lg:mx-44 pb-4">
        {itemCarousel && <ItemCarousel data={itemCarousel} />}
      </div>

      <hr className="mx-8 sm:mx-14 md:mx-24 lg:mx-44 border-1 border-solid border-gray-300 my-8" />

      <div className="mx-8 sm:mx-14 md:mx-24 lg:mx-44 ">
        <h1 className="font-bold text-2xl py-6 ">
          Restaurants with online food delivery
        </h1>
        <div>
          <ButtonList />
        </div>
        <div
          className="grid grid-cols-1 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-8 mt-8"
          data-testid="res-list"
        >
          {/* You have to write logic for NO restraunt fount here */}
          {filteredRestaurant &&
            filteredRestaurant.map((restaurants) => {
              return (
                <Link
                  key={restaurants.info.id}
                  to={"/restaurants/" + restaurants.info.id}
                >
                  {restaurants.info.avgRating > 4.2 ? (
                    <RestaurantCardBestseller restData={restaurants} />
                  ) : (
                    <RestaurantCard restData={restaurants} />
                  )}
                </Link>
              );
            })}
        </div>
      </div>
      {/* {filteredRestaurant.map((restaurants) => (
          <Link key={restaurants.info.id} to={"/restaurants/" + restaurants.info.id}>
            {restaurants.info.avgRating > 4.2 ? (
              <RestaurantCardBestseller restData={restaurants} />
            ) : (
              <RestaurantCard restData={restaurants} />
            )}
          </Link>
        ))} */}
    </div>
  );
};

export default Body;
