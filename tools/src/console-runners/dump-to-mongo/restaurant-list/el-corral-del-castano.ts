import { ObjectId } from 'mongodb';
import { RestaurantInfo } from 'pods/restaurant';

export const restaurant: RestaurantInfo = {
  id: new ObjectId().toHexString(),
  name: 'El Corral del Castaño',
  urlName: 'el-corral-del-castano',
  phone: '958 76 34 14',
  address: 'Plaza del Calvario 16 Capileira',
  locationUrl:
    'https://www.google.com/maps/place/El+Corral+del+Casta%C3%B1o/@36.9619382,-3.3597789,15z/data=!4m12!1m6!3m5!1s0x0:0xaec1f84a65e41f10!2sEl+Corral+del+Casta%C3%B1o!8m2!3d36.9619382!4d-3.3597789!3m4!1s0x0:0xaec1f84a65e41f10!8m2!3d36.9619382!4d-3.3597789',
  communitySourceUrl: '',
  official: false,
  description: '',
  menuDate: new Date('2022-03-02'),
  theme: 'tapas',
  menu: [
    {
      name: 'Para calentar piensa en frio',
      items: [
        {
          name: 'Jamón del Castaño gran reserva (150g)',
          price: 10,
        },
        {
          name: 'Nuestro lomo de orza de siempre',
          price: 9.60,
        },
        {
          name: 'Medallón de foie-gras',
          description: 'micuit casero, galés de frutos rojos',
          price: 14.50,
        },
        {
          name: 'Tabla de quesos',
          description: 'artesanos de la Alpujarra',
          price: 13.50,
        },
      ],
    },
    {
      name: 'Piensa en verde',
      items: [
        {
          name: 'Ensalada verde',
          price: 8,
        },
        {
          name: 'Ensalada tricolor',
          description: 'tomate, queso de oveja y aguacate',
          price: 10,
        },
        {
          name: 'Ensalada de tomate Kumato',
          description: 'aguacate y jamón del castaño',
          price: 11.6,
        },
        {
          name: 'Ensalada de frutas tropicales',
          description: 'y crujiente de pollo',
          price: 12.6,
        },
        {
          name: 'Ensalada de quesos asados',
          description: 'y nueces sobre brotes tiernos y vinagreta de PX',
          price: 12,
        },
        {
          name: 'Ensalada de salmón',
          description: 'queso y aguacate',
          price: 13.5,
        },
      ],
    },
    {
      name: 'La cocina de nuestros ancestros... Cocina tradicional',
      items: [
        {
          name: 'Croquetas de mi abuela',
          price: 9.60,
        },
        {
          name: 'Albóndigas en salsa de almendras y azafrán',
          price: 9.60,
        },
        {
          name: 'Costillas en orza',
          price: 10,
        },
        {
          name: 'Morcilla casera',
          price: 9,
        },
        {
          name: 'Longaniza casera',
          price: 9,
        },
        {
          name: 'Plato alpujarreño',
          price: 9,
        },
        {
          name: 'Huevos rotos con patatas y jamón',
          price: 10,
        },
        {
          name: 'Huevos rotos con habitas',
          price: 12,
        },
      ],
    },
    {
      name: 'Amar es compartir... Cocina de sensaciones',
      items: [
        {
          name: 'Praliné de morcilla',
          description: 'con crema de  manzana, tostada, piñones, pimiento caramelizado y lecho de alga wadame',
          price: 9
        },
        {
          name: 'Tosta de chicharrones',
          description: 'con pimientos y queso',
          price: 8
        },
        {
          name: 'Cuscús-tabulé',
          description: 'con salmorejo, sobre crema de hummus',
          price: 8
        },
        {
          name: 'Piononos de rabo de toro',
          description: 'y boletus ocn muselina de mango caramelizado',
          price: 9.6
        },
        {
          name: 'Deliciosa pastela moruna',
          price: 9.6
        },
        {
          name: 'Croquetas de rabo de toro',
          description: 'y alioli de chocolate',
          price: 9.6
        },
        {
          name: 'Berejena mazárabe',
          description: 'hortalizas caramelizadas y queso de cabra',
          price: 8
        },
        {
          name: 'Tataki de salmorejo',
          description: 'crujiente de jamón, lomo atún ahumado y caviar de tomate',
          price: 9.6
        },
        {
          name: 'Caviar nacarii 10 gr',
          description: ' lomito de salmón ahumado, mantequilla y aguacate',
          price: 24
        },
      ],
    },
    {
      name: 'Del trigo con masa madre nuestras pizzas artesanas',
      items: [
        {
          name: 'Pizza Prosciuto',
          description: 'Salsa de tomate, jamón cocido y queso',
          price: 8
        },
        {
          name: 'Pizza Funghi',
          description: 'Salsa de tomate, jamón cocido, chanpiñones y queso',
          price: 10
        },
        {
          name: 'Pizza Nevada',
          description: 'Nata, bacon, cebolla y queso',
          price: 11
        },
        {
          name: 'Pizza Andaluza',
          description: 'Vegetales de temporada y queso de cabra',
          price: 11
        },
      ],
    },
  ],
};
