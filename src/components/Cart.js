import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { CART_IMG } from "../utils/constants";

const Cart = () => {
  //have to subscribe cart to the store using useSelector hook
  const cartItems = useSelector((store) => store.cart.items);
  
  /* NOTE: this is as same as the above line but as we are subscribing to the store and if we subscribe
  the whole store instead of the items inside cart then whenever there is change in the whole 
  store ,the whole store will be updated using selector even when it is not related the cart slice 
  const store = useSelector((store) => store)
  const cartItems = store.cart.items;
  that is why it is very inefficient way of subscribing to the store - Never ever do this
  */

  //have to dispatch an action using useDispatch() hook
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center">
      <h2 className="font-bold my-8 text-3xl text-orange-800">Cart</h2>
      <button
        className="focus:outline-none text-white bg-gray-700 hover:bg-black focus:ring-4 font-medium rounded-lg text-sm px-2 py-1 mb-2"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        {cartItems.length === 0 && (
          <div>
            <img className="w-6/12 m-auto" src={CART_IMG}/>
            <h2 className="font-bold py-3 text-xl">Your cart is empty. Add items to the cart!</h2>
          </div>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
