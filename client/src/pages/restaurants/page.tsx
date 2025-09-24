import { useQuery } from "../../hooks/useQuery";
import { getRestaurants } from "../../API";
import type { IRestaurants } from "../../types/Restaurants";
import SecondNavbar from "../../components/SecondNavbar/SecondNavbar";

const Metadata = () => (
  <>
    <title>Restaurants | Maxx Burgers</title>
    <meta name="description" content="Find Max Burgers restaurants near you" />
  </>
);

const Page = () => {
  const { data } = useQuery<IRestaurants>(getRestaurants);

  return (
    <>
      <Metadata />
      <SecondNavbar />
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
