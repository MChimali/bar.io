import { AllergenEnum } from 'pods/restaurant/api';
export interface AllergenInfo {
  name: AllergenEnum;
  iconUrl: string;
}
export const urlIconsPng: AllergenInfo[] = [
  {
    name: 'altramuces',
    iconUrl: 'allergen-icons/png/altramuces.png',
  },
  {
    name: 'apio',
    iconUrl: 'allergen-icons/png/apio.png',
  },
  {
    name: 'cacahuetes',
    iconUrl: 'allergen-icons/png/cacahuetes.png',
  },
  {
    name: 'crustaceos',
    iconUrl: 'allergen-icons/png/crustaceos.png',
  },
  {
    name: 'frutos secos con cascara',
    iconUrl: 'allergen-icons/png/frutosSecosConCascara.png',
  },
  {
    name: 'gluten',
    iconUrl: 'allergen-icons/png/gluten.png',
  },
  {
    name: 'huevos',
    iconUrl: 'allergen-icons/png/huevos.png',
  },
  {
    name: 'lactosa',
    iconUrl: 'allergen-icons/png/lactosa.png',
  },
  {
    name: 'moluscos',
    iconUrl: 'allergen-icons/png/moluscos.png',
  },
  {
    name: 'pescados',
    iconUrl: 'allergen-icons/png/pescados.png',
  },
  {
    name: 'mostaza',
    iconUrl: 'allergen-icons/png/mostaza.png',
  },
  {
    name: 'sesamo',
    iconUrl: 'allergen-icons/png/sesamo.png',
  },
  {
    name: 'soja',
    iconUrl: 'allergen-icons/png/soja.png',
  },
  {
    name: 'dioxido de azufre y sulfitos',
    iconUrl: 'allergen-icons/png/dioxidoDeAzufreYsulfitos.png',
  },
];

/* 'allergen-icons/png/altramuces.png',
  'allergen-icons/png/apio.png',
  'allergen-icons/png/cacahuetes.png',
  'allergen-icons/png/crustaceos.png',
  'allergen-icons/png/frutosSecosConCascara.png',
  'allergen-icons/png/gluten.png',
  'allergen-icons/png/huevos.png',
  'allergen-icons/png/lactosa.png',
  'allergen-icons/png/moluscos.png',
  'allergen-icons/png/mostaza.png',
  'allergen-icons/png/pescados.png',
  'allergen-icons/png/sesamo.png',
  'allergen-icons/png/soja.png',
  'allergen-icons/png/dioxidoDeAzufreYsulfitos.png', */
