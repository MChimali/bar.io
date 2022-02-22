import { ThemeName } from "core/theme";
export interface RestaurantVm {
  id: string;
  name: string;
  urlName: string;
  phone: string;
  address: string;
  locationUrl: string;
  description: string;
  theme: ThemeName;
}
