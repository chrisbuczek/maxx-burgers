import { useQuery } from "../../hooks/useQuery";
import { getRestaurants } from "../../API";
import type { IRestaurant } from "../../types/Restaurant";

const Page = () => {
  const { data } = useQuery<IRestaurant[]>(getRestaurants);

  return (
    <>
      {data && <div>{data.toString()}</div>}
      <div>Restaurants</div>
    </>
  );
};

export default Page;
