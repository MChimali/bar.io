import { ObjectId } from 'mongodb';
import { RestaurantInfo } from 'pods/restaurant';

export const restaurant: RestaurantInfo = {
  id: new ObjectId().toHexString(),
  name: 'Pizzería Fredes',
  urlName: 'pizzeria-fredes',
  phone: '952 97 05 61',
  address:
    'Local, Pl. Gloria Fuertes, 11, 29720 La Cala del Moral, Málaga',
  locationUrl:
    'https://www.google.com/maps/place/Pizzeria+Fredes/@36.7155113,-4.3122821,15z/data=!4m12!1m6!3m5!1s0x0:0xc152c1fe6fd58219!2sPizzeria+Fredes!8m2!3d36.7155113!4d-4.3122821!3m4!1s0x0:0xc152c1fe6fd58219!8m2!3d36.7155113!4d-4.3122821',
  theme: 'italian',
  official: false,
  menuDate: new Date('2022-03-01'),
  communitySourceUrl: '',
  description: 'Desde 1993',
  menu: [
    {
      name: 'Refrescos',
      items: [
        {
          name: 'Pepsi',
          price: 1.5
        },
        {
          name: 'Kas Naranja',
          price: 1.5
        },
        {
          name: 'Kas Limon',
          price: 1.5
        },
        {
          name: 'Seven Up',
          price: 1.5
        },
        {
          name: 'Acuarius',
          price: 1.8
        },
        {
          name: 'Nestea',
          price: 1.8
        },
        {
          name: 'Agua 33 cl. Lanjarón',
          price: 1
        },
        {
          name: 'Agua 1,5 cl Lanjarón',
          price: 2
        },
        {
          name: 'Agua con gas',
          price: 1.7
        },
      ]
    },
    {
      name: 'Cervezas',
      items: [
        {
          name: 'Tubo de cerveza',
          price: 1.7
        },
        {
          name: 'Caña',
          price: 1.4
        },
        {
          name: 'Jarra de Cerveza',
          price: 3.5
        },
        {
          name: 'Cerveza 33 cl',
          description: 'Mahou, Alhambra, San Miguel',
          price: 1.8
        },
        {
          name: 'Cerveza Radler Limón',
          price: 2
        },
        {
          name: 'Cerveza sin alcohol',
          price: 1.8
        },
        {
          name: 'Copa de vino tinto',
          price: 2
        },
        {
          name: 'Copa de vino blanco',
          price: 1.8
        },
      ]
    },
    {
      name: 'Patatas',
      items: [
        {
          name: 'Patatas de luxe',
          price: 4
        },
        {
          name: 'Patatas bravas',
          price: 4
        },
        {
          name: 'Patatas juliana',
          price: 3
        },
      ],
    },
    {
      name: 'Nuestras sugerencias',
      items: [
        {
          name: 'Provoleta',
          description: 'Queso provolone',
          price: 6
        },
        {
          name: 'Ensalada mixta',
          description: 'lechuga, tomate, cebolla, atún, maiz, palmito, aceitunas',
          price: 7
        },
        {
          name: 'Ensalada tropical',
          description: 'lechuga, cebolla, piña, maiz, palmito, salsa rosa',
          price: 7
        },
        {
          name: 'Lasaña',
          price: 8
        },
      ],
    },
    {
      name: 'Hamburguesas y perritos',
      items: [
        {
          name: 'Hamburguesa simple',
          description: 'ketchup',
          price: 3
        },
        {
          name: 'Hamburguesa completa',
          description: 'lechuga, tomate, cebolla, ketchup',
          price: 3.5
        },
        {
          name: 'Super especial',
          description: 'queso, huevo, pepinillo, lechuga, tomate, ketchup',
          price: 4
        },
        {
          name: 'De Buey',
          description: 'queso, cebolla caramelizada, lechuga, tomate y ketchup',
          price: 5
        },
        {
          name: 'Perrito simple',
          description: 'ketchup',
          price: 3
        },
        {
          name: 'Perrito completo',
          description: 'lechuga, tomate, cebolla, ketchup',
          price: 3.5
        },
      ]
    },
    {
      name: 'Camperos',
      items: [
        {
          name: 'Pollo',
          description: 'queso, lechuga, tomate y mahonesa',
          price: 4
        },
        {
          name: 'Serrano',
          description: 'jamón serrano, queso, huevo, morrrón y mahonesa',
          price: 4
        },
        {
          name: 'Bacon',
          description: 'queso, lechuga, tomate y mahonesa',
          price: 4
        },
        {
          name: 'Jamón',
          description: 'queso, lechuga, tomate y mahonesa',
          price: 4
        },
        {
          name: 'Atún',
          description: 'queso, lechuga, tomate y mahonesa',
          price: 4
        },
      ],
    },
  ],
};
