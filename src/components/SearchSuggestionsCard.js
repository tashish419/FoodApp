import React from "react";
import { IMG_URL } from "../utils/constants";

const SearchSuggestionsCard = ({cloudinaryId, text, type}) => {
    // const {cloudinaryId, text, type} = data;
    // console.log(text)
  return (
    <div className='flex pt-4 ml-2 items-center cursor-pointer hover:bg-gray-100 transition duration-300'>
        <div>
            <img src={IMG_URL + cloudinaryId} alt="Food-Image" className='w-16 h-16 object-contain rounded'/>
        </div>
        <div className='ml-4 '>
            <p className='text-sm'>{text}</p>
            <p className='text-xs'>{type}</p>
        </div>
    </div>
  )
}

export default SearchSuggestionsCard;