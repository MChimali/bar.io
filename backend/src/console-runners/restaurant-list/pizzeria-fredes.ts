import { RestaurantApiModel } from 'pods/restaurant';

export const restaurant: RestaurantApiModel = {
  id: undefined,
  name: 'Pizzería Fredes',
  urlName: 'pizzeria-fredes',
  phone: '952 97 05 61',
  address: 'Local, Pl. Gloria Fuertes, 11, 29720 La Cala del Moral, Málaga',
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
          price: 1.5,
        },
        {
          name: 'Kas Naranja',
          price: 1.5,
        },
        {
          name: 'Kas Limon',
          price: 1.5,
        },
        {
          name: 'Seven Up',
          price: 1.5,
        },
        {
          name: 'Acuarius',
          price: 1.8,
        },
        {
          name: 'Nestea',
          price: 1.8,
        },
        {
          name: 'Agua 33 cl. Lanjarón',
          price: 1,
        },
        {
          name: 'Agua 1,5 cl Lanjarón',
          price: 2,
        },
        {
          name: 'Agua con gas',
          price: 1.7,
        },
      ],
    },
    {
      name: 'Cervezas',
      items: [
        {
          name: 'Tubo de cerveza',
          price: 1.7,
        },
        {
          name: 'Caña',
          price: 1.4,
        },
        {
          name: 'Jarra de Cerveza',
          price: 3.5,
        },
        {
          name: 'Cerveza 33 cl',
          description: 'Mahou, Alhambra, San Miguel',
          price: 1.8,
        },
        {
          name: 'Cerveza Radler Limón',
          price: 2,
        },
        {
          name: 'Cerveza sin alcohol',
          price: 1.8,
        },
        {
          name: 'Copa de vino tinto',
          price: 2,
        },
        {
          name: 'Copa de vino blanco',
          price: 1.8,
        },
      ],
    },
    {
      name: 'Patatas',
      items: [
        {
          name: 'Patatas de luxe',
          price: 4,
        },
        {
          name: 'Patatas bravas',
          price: 4,
        },
        {
          name: 'Patatas juliana',
          price: 3,
        },
      ],
    },
    {
      name: 'Nuestras sugerencias',
      items: [
        {
          name: 'Provoleta',
          description: 'Queso provolone',
          price: 6,
        },
        {
          name: 'Ensalada mixta',
          description:
            'lechuga, tomate, cebolla, atún, maiz, palmito, aceitunas',
          price: 7,
        },
        {
          name: 'Ensalada tropical',
          description: 'lechuga, cebolla, piña, maiz, palmito, salsa rosa',
          price: 7,
        },
        {
          name: 'Lasaña',
          price: 8,
        },
      ],
    },
    {
      name: 'Hamburguesas y perritos',
      items: [
        {
          name: 'Hamburguesa simple',
          description: 'ketchup',
          price: 3,
        },
        {
          name: 'Hamburguesa completa',
          description: 'lechuga, tomate, cebolla, ketchup',
          price: 3.5,
        },
        {
          name: 'Super especial',
          description: 'queso, huevo, pepinillo, lechuga, tomate, ketchup',
          price: 4,
        },
        {
          name: 'De Buey',
          description: 'queso, cebolla caramelizada, lechuga, tomate y ketchup',
          price: 5,
        },
        {
          name: 'Perrito simple',
          description: 'ketchup',
          price: 3,
        },
        {
          name: 'Perrito completo',
          description: 'lechuga, tomate, cebolla, ketchup',
          price: 3.5,
        },
      ],
    },
    {
      name: 'Camperos',
      items: [
        {
          name: 'Pollo',
          description: 'queso, lechuga, tomate y mahonesa',
          price: 4,
        },
        {
          name: 'Serrano',
          description: 'jamón serrano, queso, huevo, morrrón y mahonesa',
          price: 4,
        },
        {
          name: 'Bacon',
          description: 'queso, lechuga, tomate y mahonesa',
          price: 4,
        },
        {
          name: 'Jamón',
          description: 'queso, lechuga, tomate y mahonesa',
          price: 4,
        },
        {
          name: 'Atún',
          description: 'queso, lechuga, tomate y mahonesa',
          price: 4,
        },
      ],
    },
    {
      name: 'Pizzas',
      items: [
        {
          name: 'Margarita',
          description: 'tomate, queso',
          price: 5.5,
        },
        {
          name: 'Cibolle',
          description: 'tomate, queso, cebolla',
          price: 6,
        },
        {
          name: 'Andaluza',
          description:
            'tomate, queso, jamón serrano, pimiento morrón, aceitunas negras',
          price: 8.5,
        },
        {
          name: 'Vesubio',
          description: 'tomate, queso, jamón',
          price: 6,
        },
        {
          name: 'Caprichosa',
          description: 'tomate, queso, jamón, champiñones',
          price: 6.5,
        },
        {
          name: 'Opera',
          description: 'tomate, queso, bacon, cebolla',
          price: 6.5,
        },
        {
          name: 'Aeponno',
          description: 'tomate, queso, atún, aceitunas',
          price: 6.5,
        },
        {
          name: 'Napolitana',
          description: 'tomate, queso, anchoas, aceitunas',
          price: 6.5,
        },
        {
          name: 'Amigo',
          description: 'tomate, queso, atún, jamón',
          price: 6.5,
        },
        {
          name: 'Pescador',
          description: 'tomate, queso, jamón, atún, cebolla',
          price: 6.5,
        },
        {
          name: 'Fugazzeta',
          description: 'tomate, queso, fuchagazza (salsa de cebolla)',
          price: 7,
        },
        {
          name: 'Al ajo',
          description: 'tomate natural, queso, ajo',
          price: 7,
        },
        {
          name: 'Argentina',
          description: 'tomate, queso, pimiento morrón, aceitunas negras',
          price: 7,
        },
        {
          name: 'Bussola',
          description: 'tomate, queso, fugazza, pollo',
          price: 7.5,
        },
        {
          name: 'Vegetariana',
          description:
            'tomate, queso, champiñones, cebolla, pimiento, aceitunas',
          price: 7.5,
        },
        {
          name: 'Escandinava',
          description: 'tomate, queso, salchichas, jamón',
          price: 7.5,
        },
        {
          name: 'Rossini',
          description: 'tomate, queso, jamón, bacon, pimientos, cebolla',
          price: 7.5,
        },
        {
          name: 'Caleña',
          description: 'tomate, queso, jamón, palmito',
          price: 7.5,
        },
        {
          name: 'Lorena',
          description: 'tomate, queso, champiñones, gambas, cebolla',
          price: 7.5,
        },
        {
          name: 'Maite',
          description: 'tomate, queso, jamón, pollo, pimientos',
          price: 7.5,
        },
        {
          name: 'Italiana',
          description: 'tomate, queso, bacon, fugazza (salsa de cebolla)',
          price: 7.5,
        },
        {
          name: 'Siciliana',
          description: 'tomate, queso, roquefort, anchoas, alcaparras',
          price: 7.5,
        },
        {
          name: 'Caribe',
          description: 'tomate, queso, jamón, piña, salsa rosa',
          price: 7.5,
        },
        {
          name: 'Luigi',
          description: 'tomate, queso, jamón, champiñones, atún, gambas',
          price: 8,
        },
        {
          name: 'Capricornio',
          description: 'tomate, queso, jamón, champiñones, anchoas, aceitunas',
          price: 8,
        },
        {
          name: 'Cuatro estaciones',
          description: 'tomate, queso, jamón, gambas, mejillones, cebolla',
          price: 8,
        },
        {
          name: 'Roquefort',
          description: 'tomate, queso, roquefort, aceitunas negras',
          price: 8,
        },
        {
          name: 'Danesa',
          description: 'tomate, queso, salmón, caviar',
          price: 8.5,
        },
        {
          name: 'Campera',
          description: 'tomate, queso, huevo, alcaparras, bacon',
          price: 8.5,
        },
        {
          name: 'Super Maite',
          description: 'tomate, queso, pollo, huevo, maíz',
          price: 8.5,
        },
        {
          name: 'Mediterranea',
          description: 'tomate, queso, atún, mejillones, gambas, anchoas',
          price: 8.5,
        },
        {
          name: 'Fredes',
          description: 'tomate, queso, caviar, huevo, pimiento morrón',
          price: 8.5,
        },
        {
          name: 'Noruega',
          description: 'tomate, queso, salmón, aceitunas negras',
          price: 8.5,
        },
        {
          name: 'Boloñesa',
          description: 'tomate, queso, salsa boloñesa (carne de ternera)',
          price: 8.5,
        },
        {
          name: 'Cuatro Quesos',
          description: 'tomate, queso havarti, parmesano, roquefort, edam',
          price: 8.5,
        },
        {
          name: 'Peperoni',
          description: 'tomate, queso, peperoni, cebolla, aceitunas negras',
          price: 8.5,
        },
        {
          name: 'Cántabra',
          description: 'tomate, queso, alcachofas, anchoas, pimiento morrón',
          price: 8.5,
        },
        {
          name: 'Barbacoa',
          description: 'tomate, queso, bacon, carne de ternera, salsa barbacoa',
          price: 8.5,
        },
      ],
    },
  ],
};
