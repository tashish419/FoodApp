import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
//   console.log(data);
  const [showItems, setShowIems] = useState(false)
 
  const handleClick = () => {
    setShowIems(!showItems);
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        {/* Accordian Header */}
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg text-gray-900">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
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
