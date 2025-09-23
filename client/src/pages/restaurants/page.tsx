import { useQuery } from "../../hooks/useQuery";
import { getRestaurants } from "../../API";
import type { IRestaurants } from "../../types/restaurants";

const Page = () => {
  const { data } = useQuery<IRestaurants>(getRestaurants);

  return (
    <>
      <div>Restaurants</div>
      {data && (
        <div>
          {data.restaurants.map((restaurant) => (
            <div className="p-4">
              <div>{restaurant.name}</div>
              <div>{restaurant.city}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Page;
