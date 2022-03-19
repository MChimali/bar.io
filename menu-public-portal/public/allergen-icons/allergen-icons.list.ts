import { AllergenEnum } from 'pods/restaurant/api';

export interface AllergenInfo {
  name: AllergenEnum;
  iconUrl: string;
}

const baseUrlPng = '/allergen-icons/png';
const baseUrlWebp = '/allergen-icons/webp';

export const urlIconsPng: AllergenInfo[] = [
  {
    name: 'altramuces',
    iconUrl: `${baseUrlPng}/altramuces.png`,
  },
  {
    name: 'apio',
    iconUrl: `${baseUrlPng}/apio.png`,
  },
  {
    name: 'cacahuetes',
    iconUrl: `${baseUrlPng}/cacahuetes.png`,
  },
  {
    name: 'crustaceos',
    iconUrl: `${baseUrlPng}/crustaceos.png`,
  },
  {
    name: 'frutos secos con cascara',
    iconUrl: `${baseUrlPng}/frutosSecosConCascara.png`,
  },
  {
    name: 'gluten',
    iconUrl: `${baseUrlPng}/gluten.png`,
  },
  {
    name: 'huevos',
    iconUrl: `${baseUrlPng}/huevos.png`,
  },
  {
    name: 'lactosa',
    iconUrl: `${baseUrlPng}/lactosa.png`,
  },
  {
    name: 'moluscos',
    iconUrl: `${baseUrlPng}/moluscos.png`,
  },
  {
    name: 'pescados',
    iconUrl: `${baseUrlPng}/pescados.png`,
  },
  {
    name: 'mostaza',
    iconUrl: `${baseUrlPng}/mostaza.png`,
  },
  {
    name: 'sesamo',
    iconUrl: `${baseUrlPng}/sesamo.png`,
  },
  {
    name: 'soja',
    iconUrl: `${baseUrlPng}/soja.png`,
  },
  {
    name: 'dioxido de azufre y sulfitos',
    iconUrl: `${baseUrlPng}/dioxidoDeAzufreYsulfitos.png`,
  },
];
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
    iconUrl: `${baseUrlWebp}/apio.webp`,
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
    iconUrl: `${baseUrlWebp}/dioxidoDeAzufreYsulfitos.webp`,
  },
];
