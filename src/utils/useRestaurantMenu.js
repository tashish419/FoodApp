import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

//custom hook
const useRestaurantMenu = (restId) => {
    const [restInfo , setRestInfo] = useState(null);

    useEffect(() =>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + restId);
        const menu = await data.json();
        console.log(menu);

        setRestInfo(menu.data);
    }

    return restInfo;
}

export default useRestaurantMenu;