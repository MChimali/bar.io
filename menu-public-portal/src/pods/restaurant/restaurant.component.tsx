import React from "react";
import * as classes from "./restaurant.styles";
import { RestaurantInfo, Items, PriceByRation } from "./restaurant.vm";

interface PropsRation {
  ration: PriceByRation[];
}

const PriceByRationComponent: React.FC<PropsRation> = (props) => {
  const { ration } = props;
  return (
    <>
      {ration.map((item) => (
        <li key={item.rationName}>
          <p>{item.rationName}</p>
          <p>Price: {item.price} €</p>
        </li>
      ))}
    </>
  );
};

interface PropsSubItemComponent {
  items: Items[];
}
export const SubItemComponent: React.FC<PropsSubItemComponent> = (props) => {
  const { items } = props;

  return (
    <>
      {items.map((item) => (
        <li key={item.name}>
          <p>{item.name}</p>
          {item.description ? <p>Descripción: {item.description}</p> : null}
          {item.price ? <p>Price: {item.price} €</p> : null}
          {item.priceByRation ? (
            <ul>
              <PriceByRationComponent ration={item.priceByRation} />
            </ul>
          ) : null}
        </li>
      ))}
    </>
  );
};

interface Props {
  restaurantName: string;
  restaurantMenuInfo: RestaurantInfo;
}

export const RestaurantComponent: React.FC<Props> = (props) => {
  const { restaurantName, restaurantMenuInfo } = props;
  const { name, heading1, heading2, menu } = restaurantMenuInfo;

  return (
    <>
      <h1 className={classes.testh1}>Carta de {name}</h1>
      <h2>{heading1}</h2>
      <h2>{heading2}</h2>
      <ul>
        {menu.map((item) => (
          <li key={item.name}>
            <h3>{item.name}</h3>
            <ul>
              <SubItemComponent items={item.items} />
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};