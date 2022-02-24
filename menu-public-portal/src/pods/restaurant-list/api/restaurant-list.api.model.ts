import { ThemeName } from "core/theme";

export interface RestaurantApi {
  _id: string;
  name: string;
  urlName: string;
  phone: string;
  address: string;
  locationUrl: string;
  description: string;
  theme: ThemeName;
}