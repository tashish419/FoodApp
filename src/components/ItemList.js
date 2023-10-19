import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  //   console.log(items);
  
  //useDispatch() hook -> to dispatch an action(and this action will call the reducer(function))
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item))
    /*as soon as i hit the add button ->it will dispatch an action -> will call the reducer and
    whatever i write iniside addItem("pizza")->iy will be taken as an second argument inside 
    the reducer function of cartSlice-> this second arguemnt is action.payload in cartSlice ->
    then payload will be pushed inside the Items list whixh was empty initially -> */
  }

  return (
    <div className=" border-separate">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 my-2 border-b-2 border-gray-250 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="font-bold text-gray-700">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                -₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-[2px] shadow-lg bg-white hover:bg-black hover:text-white"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={IMG_URL + item.card.info.imageId}
              className="w-full h-20 p-2"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
