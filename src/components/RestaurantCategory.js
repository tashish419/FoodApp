import { useState } from "react";
import ItemList from "./ItemList";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
//   console.log(data);
//   const [showItems, setShowIems] = useState(false) 
/*in this case RestaurantCategory component managing its own state thus now Restaurantcategory
  component has  the power of show and expand the accordian. so,  whenever i click on 
 accordian header,it expands and when i click on another accordian header ,that accordian body
 expands but previously expanded accordian body does not collapse  */
 /* it will be solved once i make the parent component(RestaurantMenu) control its state ,
   not the children(RestaurantCategory) -> this is known as lifting the state up */
 
  const handleClick = () => {
    // setshowItems(!showItems);this is a toggle feature of accordian 
    (showItems ? setShowIndex(false) : setShowIndex(true))
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        {/* Accordian Header */}
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg text-gray-900">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? <SlArrowUp /> : <SlArrowDown />}</span>
        </div>
        {/*Accordian Body */}
        <div>
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
