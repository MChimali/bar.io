import { ThemeName } from 'core/theme';

export interface RestaurantApi {
  id: string;
  name: string;
  urlName: string;
  phone: string;
  address: string;
  locationUrl: string;
  description: string;
  theme: ThemeName;
}
