import { RestaurantInfo } from "./restaurant-list.vm";
import { RestaurantCardComponent } from "./components/restaurant-card.component";
import { RestaurantInvitationCard } from "./components/restaurant-invitation-card.component";

interface Props {
  restaurantList: RestaurantInfo[];
}

export const RestaurantList: React.FC<Props> = (props) => {
  const { restaurantList } = props;

  return (
    <main>
      <RestaurantInvitationCard />
      {restaurantList.map((restaurant) => (
        <RestaurantCardComponent restaurant={restaurant} />
      ))}
    </main>
  );
};
