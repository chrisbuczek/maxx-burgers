import { useQuery } from "../../hooks/useQuery";
import { getRestaurants } from "../../API";
import SecondNavbar from "../../components/common/SecondNavbar/SecondNavbar";
import TitleBar from "../../components/common/TitleBar/TitleBar";
import type { IRestaurants } from "../../types/Restaurants";

const Metadata = () => (
  <>
    <title>Restaurants | Maxx Burgers</title>
    <meta name="description" content="Find Max Burgers restaurants near you" />
  </>
);

const Page = () => {
  // const { data } = useQuery<IRestaurants>(() => getRestaurants()); this keeps calling to infinity
  const { data } = useQuery<IRestaurants>(getRestaurants);

  return (
    <>
      <Metadata />
      <SecondNavbar />
      <TitleBar />
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
