import { ThemeName } from 'core/theme';

export type AllergenEnum =
  | 'gluten'
  | 'lactosa'
  | 'huevos'
  | 'pescados'
  | 'crustaceos'
  | 'moluscos'
  | 'soja'
  | 'cacahuetes'
  | 'frutos secos con cascara'
  | 'sesamo'
  | 'mostaza'
  | 'apio'
  | 'altramuces'
  | 'dioxido de azufre y sulfitos';

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
  allergenCollection?: AllergenEnum[];
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
