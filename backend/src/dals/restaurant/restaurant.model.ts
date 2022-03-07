import { ObjectId } from 'mongodb';
import { RestaurantTheme } from 'common-app/models';

export interface RationType {
  unit: string;
  price: number;
}
export interface SubItemPrice {
  rationName: string;
  rationsTypes: RationType[];
}

export interface Item {
  name: string;
  description?: string;
  price?: number;
  priceByRation?: SubItemPrice;
  unit?: string;
}

export interface ItemsByCategory {
  categoryName: string;
  items: Item[];
}

export interface RationDefinition {
  name: string;
  units: string[];
}

export interface Restaurant {
  _id: ObjectId;
  name: string;
  urlName: string;
  phone: string;
  address: string;
  locationUrl: string;
  menuDate: Date;
  communitySourceUrl: string;
  official: boolean;
  description: string;
  theme: RestaurantTheme;
  rationsDefinitions: RationDefinition[];
  menu: ItemsByCategory[];
}

export const emptyRestaurant = (): Restaurant => ({
  _id: new ObjectId('621f1b4786a654dc6ec08f4f'),
  name: '',
  urlName: '',
  phone: '',
  address: '',
  locationUrl: '',
  menuDate: new Date('2022-03-02'),
  communitySourceUrl: '',
  official: false,
  description: '',
  theme: 'default',
  rationsDefinitions: [],
  menu: [],
});
