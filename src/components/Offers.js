import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import { RESTAURANT_LIST_API } from "../utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";
import RestaurantCard from "./RestaurantCard";

const Offers = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();

    // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-8 sm:mx-14 md:mx-24 lg:mx-44 mt-12">
      <p className="font-extralight text-base">
        <span className="cursor-pointer">
          <Link to="/" className="font-semibold">Home/</Link>
        </span>{" "}
        <span className="text-[#02060c99]">Offers</span>
      </p>
      <h1 className="font-bold text-lg md:text-2xl pb-4 pt-2">
        Restaurants With Great Offers Near Me
      </h1>
      <div>
        <ButtonList />
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap:6 xl:gap-8 mt-8"
        data-testid="res-list"
      >
        {/* have to write logic for no restaurant found */}
        {filteredRestaurant.length === undefined ? (
             <h1>No Restaurant Found</h1>
        ) : (filteredRestaurant && filteredRestaurant.map((restros) => {
            return (
                <Link
                    to={"/restaurant/" + restros.info.id}
                    key={restros.info.id}
                    className='md:pr-4'
                >
                    <RestaurantCard restData = {restros} />
                </Link>
            );
        }))}
      </div>
    </div>
  );
};

export default Offers;
