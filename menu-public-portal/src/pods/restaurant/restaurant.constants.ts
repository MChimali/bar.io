import { AllergenEnum } from 'common-app/models';

export interface AllergenInfo {
  name: AllergenEnum;
  iconUrl: string;
}
const baseUrlWebp = '/allergen-icons';

export const urlIconsWebp: AllergenInfo[] = [
  {
    name: 'altramuces',
    iconUrl: `${baseUrlWebp}/altramuces.webp`,
  },
  {
    name: 'apio',
    iconUrl: `${baseUrlWebp}/apio.webp`,
  },
  {
    name: 'cacahuetes',
    iconUrl: `${baseUrlWebp}/cacahuetes.webp`,
  },
  {
    name: 'crustaceos',
    iconUrl: `${baseUrlWebp}/crustaceos.webp`,
  },
  {
    name: 'frutos secos con cascara',
    iconUrl: `${baseUrlWebp}/frutos-secos-con-cascara.webp`,
  },
  {
    name: 'gluten',
    iconUrl: `${baseUrlWebp}/gluten.webp`,
  },
  {
    name: 'huevos',
    iconUrl: `${baseUrlWebp}/huevos.webp`,
  },
  {
    name: 'lactosa',
    iconUrl: `${baseUrlWebp}/lactosa.webp`,
  },
  {
    name: 'moluscos',
    iconUrl: `${baseUrlWebp}/moluscos.webp`,
  },
  {
    name: 'pescados',
    iconUrl: `${baseUrlWebp}/pescados.webp`,
  },
  {
    name: 'mostaza',
    iconUrl: `${baseUrlWebp}/mostaza.webp`,
  },
  {
    name: 'sesamo',
    iconUrl: `${baseUrlWebp}/sesamo.webp`,
  },
  {
    name: 'soja',
    iconUrl: `${baseUrlWebp}/soja.webp`,
  },
  {
    name: 'dioxido de azufre y sulfitos',
    iconUrl: `${baseUrlWebp}/dioxido-de-azufre-y-sulfitos.webp`,
  },
];
