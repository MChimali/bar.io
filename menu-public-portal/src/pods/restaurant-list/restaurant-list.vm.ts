import { ThemeName } from "core/theme";

export interface RestaurantInfo {
  name: string;
  urlName: string;
  phone: string;
  address: string;
  locationUrl: string;
  description: string;
  theme : ThemeName; 
}
