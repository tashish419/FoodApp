import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    aggregatedDiscountInfoV2,
    areaName,
  } = restData?.info;

  const discountHeader = aggregatedDiscountInfoV2?.header;
  const discountSubHeader = aggregatedDiscountInfoV2?.subHeader;
  const shouldRenderDiscount = discountHeader && discountSubHeader;

  return (
    <div className="transition-transform transform hover:scale-95">
      <div className="relative overflow-hidden rounded-lg">
        <img
          className="rounded-2xl object-cover w-full h-[150px]"
          src={IMG_URL + cloudinaryImageId}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to transparent "></div>
        {shouldRenderDiscount && (
          <h3 className="absolute bottom-1 left-3 font-bold text-white text-xl line-clamp-1">
            {discountHeader} {discountSubHeader}
          </h3>
        )}
      </div>
      <div className="ml-3 mt-3">
        <h2 className="font-bold text-xl line-clamp-1">{name}</h2>
        <div className="flex justify-between">
          <p className="font-semibold text-l">⭐ {avgRating} .</p>
          <p className="font-semibold text-l">{sla.deliveryTime} Minutes</p>
        </div>
        <h3 className="line-clamp-1">{cuisines.join(", ")}</h3>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

//Higher order component (input- RestaurantCard ==> Output- RestaurantCardPromoted)

export const withBestsellerLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-1 bg-black text-white">
          Bestseller
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
