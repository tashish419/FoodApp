import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { RESTAURANT_LIST_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  },[])

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

  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="searchBar-container">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
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
        <div className="filter">
          <button
            className="filter-btn"
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
        <div className="online-status">
          Online Status: {onlineStatus ? "✅": "🔴"}
        </div>
      </div>
      <div className="rest-container">
        {filteredRestaurant.map((restros) => (
          <Link key={restros.info.id} to={"/restaurants/" + restros.info.id}>
            {" "}
            <RestaurantCard restData={restros} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
