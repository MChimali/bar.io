import { ObjectId } from 'mongodb';
import { RestaurantApiModel } from 'pods/restaurant';

export const restaurant: RestaurantApiModel = {
  id: new ObjectId().toHexString(),
  name: 'Estación Término',
  urlName: 'estacion-termino',
  phone: '952 40 10 96',
  address:
    'Plaza del Señorío, 8, Edificio Garcia Lorca, 29730 Rincón de la Victoria, Málaga',
  locationUrl:
    'https://www.google.com/maps/place/Estaci%C3%B3n+T%C3%A9rmino+Restaurante/@36.7166232,-4.2816961,15z/data=!4m5!3m4!1s0x0:0xdfb3fd3416c42c60!8m2!3d36.7166232!4d-4.2816961',
  communitySourceUrl: 'https://www.estacion-termino.es/carta/',
  theme: 'meat',
  official: false,
  menuDate: new Date('2022-02-15'),
  description: '',
  menu: [
    {
      name: 'Entrantes',
      items: [
        {
          name: 'Sopa fría del día',
          price: 5,
        },
        {
          name: 'Sopa caliente del día',
          price: 5,
        },
        {
          name: 'Ensalada gratinada',
          description: 'Lechuga, Queso de Cabra, Nueces y Manzana',
          price: 8,
        },
        {
          name: 'Ensalada tricolor',
          description: 'Tomate, Aguacate, Queso Mozarela',
          price: 8,
        },
        {
          name: 'Ensalada tropical',
          description: 'Lechuga, Aguacate, Piña y Melocotón, Palmito',
          price: 8,
        },
        {
          name: 'Ensalada E.T',
          description: 'Zanahoria, Manzana, Pasas, Maiz, Nueces',
          price: 6.5,
        },
        {
          name: 'Ensalada Atapay',
          description: 'Lechuga, Apio, Manzana, Nueces y Pollo',
          price: 8,
        },
        {
          name: 'Milhojas',
          description: 'Verduras a la plancha con Queso de Cabra',
          price: 9,
        },
        {
          name: 'Croquetas Caseras',
          price: 8,
        },
        {
          name: 'Camembert Frito',
          price: 8,
        },
        {
          name: 'Pincho de Langostinos y Vieras',
          price: 9.5,
        },
        {
          name: 'Langostinos Rebozados',
          price: 9.5,
        },
        {
          name: 'Langostinos al Curry',
          price: 10.25,
        },
      ],
    },
    {
      name: 'Carnes',
      items: [
        {
          name: 'Pincho de Cordero a la Moruna',
          price: 10.75,
        },
        {
          name: 'Lápices de pollo a la Pimienta Verde',
          price: 12.75,
        },
        {
          name: 'Pastel de Carne con Salsa de Frambuesas',
          price: 11.75,
        },
        {
          name: 'Solomillo de Cerdo al Estilo E.T',
          price: 13.25,
        },
        {
          name: 'Albóndigas a la Moruna',
          price: 12.75,
        },
        {
          name: 'Solomillo de Ternera',
          price: 20,
        },
        {
          name: 'Codillo de Cerdo al Horno',
          price: 13.25,
        },
        {
          name: 'Bobotie',
          description: 'Pastel de Carne Sudafricano',
          price: 11.75,
        },
      ],
    },
    {
      name: 'Pescados',
      items: [
        {
          name: 'Bacalao Poché en su Pil-Pil',
          price: 14.25,
        },
        {
          name: 'Filetes de Salmonete con Salsa de Hinojo',
          price: 14.25,
        },
        {
          name: 'Salmón a la Pimienta Verde',
          price: 14.25,
        },
      ],
    },
  ],
};
