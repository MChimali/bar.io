import { RestaurantVm } from './restaurant-list.vm';
import { RestaurantCardComponent } from './components/restaurant-card.component';
import { RestaurantInvitationCard } from './components/restaurant-invitation-card.component';

interface Props {
  restaurantList: RestaurantVm[];
}

export const RestaurantList: React.FC<Props> = (props) => {
  const { restaurantList } = props;

  return (
    <main>
      <RestaurantInvitationCard />
      {restaurantList.map((restaurant) => (
        <RestaurantCardComponent restaurant={restaurant} key={restaurant.id} />
      ))}
    </main>
  );
};
