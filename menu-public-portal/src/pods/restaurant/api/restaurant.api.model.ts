import { ThemeName } from 'core/theme';
import { AllergenEnum } from 'common-app/models';

export interface RationType {
  unit: string;
  price: number;
}
export interface PriceByRation {
  rationName: string;
  rationsTypes: RationType[];
}

export interface Item {
  name: string;
  description?: string;
  price?: number;
  priceByRation?: PriceByRation;
  unit?: string;
  allergens?: AllergenEnum[];
}

export interface CategoryEntry {
  name: string;
  items: Item[];
}

export interface RestaurantApi {
  id: string;
  name: string;
  urlName: string;
  phone: string;
  address: string;
  locationUrl: string;
  menuDate: string;
  communitySourceUrl: string;
  official: boolean;
  description: string;
  theme: ThemeName;
  menu: CategoryEntry[];
}
