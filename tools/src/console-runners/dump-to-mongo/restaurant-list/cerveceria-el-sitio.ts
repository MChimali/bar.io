import { ObjectId } from 'mongodb';
import { RestaurantApiModel } from 'pods/restaurant';

export const restaurant: RestaurantApiModel = {
  id: new ObjectId().toHexString(),
  name: 'Cervecería El Sitio',
  urlName: 'cerveceria-el-sitio',
  phone: '956 12 66 10',
  address: 'C. Virgen de los Remedios, 3, 11693 Alcalá del Valle, Cádiz',
  locationUrl:
    'https://www.google.com/maps/place/Cervercer%C3%ADa+El+Sitio/@36.9029977,-5.170835,15z/data=!3m1!5s0xd0d4916f2046fc1:0x1fb401da96efca51!4m12!1m6!3m5!1s0x0:0xaa583b7ce7103d67!2sCervercer%C3%ADa+El+Sitio!8m2!3d36.9029977!4d-5.170835!3m4!1s0xd0d4916f02ec7b7:0xaa583b7ce7103d67!8m2!3d36.9029977!4d-5.170835',
  communitySourceUrl: '',
  official: false,
  description: '',
  menuDate: new Date('2022-02-22'),
  theme: 'brewery',
  menu: [
    {
      name: 'Tapas y Raciones',
      items: [
        {
          name: 'Ensaladilla Rusa',
          priceByRation: {
            rationsTypes: [
              { price: 1, unit: 'Tapa' },
              { price: 4.5, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Jamón Serrano',
          priceByRation: {
            rationsTypes: [
              { price: 1, unit: 'Tapa' },
              { price: 7, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Chorizo Ibérico',
          priceByRation: {
            rationsTypes: [
              { price: 1.2, unit: 'Tapa' },
              { price: 8, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Salchichón Ibérico',
          priceByRation: {
            rationsTypes: [
              { price: 1, unit: 'Tapa' },
              { price: 7, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Morzilla Ibérico',
          priceByRation: {
            rationsTypes: [
              { price: 1, unit: 'Tapa' },
              { price: 7, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Tortilla de Patatas',
          priceByRation: {
            rationsTypes: [
              { price: 1, unit: 'Tapa' },
              { price: 7, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Patatas Ali-Oli',
          priceByRation: {
            rationsTypes: [
              { price: 1, unit: 'Tapa' },
              { price: 4.5, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Picadillo de Pulpo',
          priceByRation: {
            rationsTypes: [
              { price: 1.2, unit: 'Tapa' },
              { price: 6, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Serranito',
          priceByRation: {
            rationsTypes: [
              { price: 1.2, unit: 'Tapa' },
              { price: 12, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Pincho Gamba',
          priceByRation: {
            rationsTypes: [{ price: 1.8, unit: 'Tapa' }],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Pincho Moruno',
          priceByRation: {
            rationsTypes: [{ price: 1.8, unit: 'Tapa' }],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Stick Kebab',
          priceByRation: {
            rationsTypes: [
              { price: 1.5, unit: 'Tapa' },
              { price: 12, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Pollo Cajún',
          priceByRation: {
            rationsTypes: [
              { price: 1.5, unit: 'Tapa' },
              { price: 12, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Bomba (Patata y Carne',
          priceByRation: {
            rationsTypes: [
              { price: 1.5, unit: 'Tapa' },
              { price: 12, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Mini Hambuguesa',
          priceByRation: {
            rationsTypes: [
              { price: 1.5, unit: 'Tapa' },
              { price: 12, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Mini Hamburguesa de Buey',
          priceByRation: {
            rationsTypes: [{ price: 2, unit: 'Tapa' }],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Boquerón en Vinagre',
          priceByRation: {
            rationsTypes: [
              { price: 1.2, unit: 'Tapa' },
              { price: 10, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Cóctel de Marisco',
          priceByRation: {
            rationsTypes: [
              { price: 1.5, unit: 'Tapa' },
              { price: 7, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Caprichito',
          priceByRation: {
            rationsTypes: [{ price: 1.5, unit: 'Tapa' }],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Chipirón Plancha',
          priceByRation: {
            rationsTypes: [
              { price: 1.5, unit: 'Tapa' },
              { price: 7, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Cazón en Adobo',
          priceByRation: {
            rationsTypes: [
              { price: 1.2, unit: 'Tapa' },
              { price: 6, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Lagartitos',
          priceByRation: {
            rationsTypes: [
              { price: 1.5, unit: 'Tapa' },
              { price: 7, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Papas Arriera',
          priceByRation: {
            rationsTypes: [
              { price: 2, unit: 'Tapa' },
              { price: 8, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
        {
          name: 'Queso Payoyo',
          priceByRation: {
            rationsTypes: [
              { price: 1.2, unit: 'Tapa' },
              { price: 7, unit: 'Ración' },
            ],
            rationName: 'Raciones',
          },
        },
      ],
    },
    {
      name: 'Hamburguesas (Todas las Hamburguesas incluyen Patatas Fritas)',
      items: [
        {
          name: 'Simple',
          description: 'Ketchup y Mahonesa',
          price: 2.5,
        },
        {
          name: 'Con Queso',
          description: 'Queso, Ketchup y Mahonesa',
          price: 2.6,
        },
        {
          name: 'Completa',
          description:
            'Cebolla, Lechuga, Tomate, Queso, Ketchup, Mostaza y Ensalada',
          price: 2.7,
        },
        {
          name: 'Especial',
          description: 'Queso, Huevo, Bacon, Mahonesa y Ketchup',
          price: 3,
        },
        {
          name: 'De Buey',
          description: 'Queso, Mahonesa y Ketchup',
          price: 4,
        },
        {
          name: 'Especial de Buey',
          description: 'Queso, Bacon, Huevo, Mahonesa y Ketchup',
          price: 4.5,
        },
      ],
    },
    {
      name: 'Perritos',
      items: [
        {
          name: 'Simple',
          description: 'Ketchup y Mostaza',
          price: 2,
        },
        {
          name: 'Completo',
          description: 'Cebolla, Lechugar, Tomate, Ketchup y Mostaza',
          price: 2.5,
        },
      ],
    },
    {
      name: 'Camperos (Todos los Camperos incluyen Patatas Fritas)',
      items: [
        {
          name: 'Normal',
          description: 'Queso, Jamón, Tomate, Lechuga y Mahonesa',
          price: 3.2,
        },
        {
          name: 'Atún y Queso',
          description: 'Tomate, Lechuga y Mahonesa',
          price: 3.5,
        },
        {
          name: 'Bacon',
          description: 'Tomate, Lechuga, Queso y Mahonesa',
          price: 3.2,
        },
        {
          name: 'Serrano',
          description: 'Jamón Serrano, Tomate, Lechuga, Queso y Mahonesa',
          price: 3.5,
        },
        {
          name: 'Pollo y Queso',
          description: 'Tomate, Lechuga y Mahonesa',
          price: 3.5,
        },
        {
          name: 'Vegetal',
          description:
            'Queso, Lechuga, Tomate, Cebolla, Pimiento, Maiz, Zanahoria y Mahonesa',
          price: 3,
        },
        {
          name: 'Capricho',
          description: 'Pollo, Huevo, Lechuga, Tomate, Queso, Bacon y Mahonesa',
          price: 3.8,
        },
        {
          name: 'Kebab',
          description: 'Tomate, Lechuga, Cebolla y Salsa Kebab',
          price: 4,
        },
      ],
    },
    {
      name: 'Baguettes',
      items: [
        {
          name: 'Pollo y Bacon',
          description: 'Queso, Tomate, Lechuga y Mahonesa',
          price: 3.5,
        },
        {
          name: 'Pollo',
          description: 'Queso, Tomate, Lechuga y Mahonesa',
          price: 3.2,
        },
        {
          name: 'Bacon',
          description: 'Queso, Lechuga, Mahonesa',
          price: 3,
        },
        {
          name: 'Lomo Adobado',
          description: 'Queso, Tomate, Lechuga, Mahonesa',
          price: 3,
        },
        {
          name: 'Filete',
          description: 'Queso, Pimiento, Mahonesa',
          price: 3.2,
        },
        {
          name: 'Chorizo Ibérico',
          description: 'Queso',
          price: 3,
        },
        {
          name: 'Salchichón Ibérico',
          description: 'Queso',
          price: 3,
        },
        {
          name: 'Jamón Serrano',
          description: 'Aceite de Oliva, Queso',
          price: 3,
        },
        {
          name: 'Jamón a la Catalana',
          price: 3.2,
        },
        {
          name: 'Jamón Cocido',
          description: 'Huevo, Queso, Tomate, Lechuga, Mahonesa',
          price: 3,
        },
        {
          name: 'Tortilla',
          description: 'Queso, Tomate, Lechuga, Mahonesa',
          price: 3,
        },
        {
          name: 'Atún',
          description: 'Queso, Tomate, Lechuga, Mahonesa',
          price: 3.2,
        },
        {
          name: 'Baguette de Serranito',
          price: 3.5,
        },
        {
          name: 'Serrana',
          description: 'Queso Curado Oveja, Jamón Serrano',
          price: 5,
        },
      ],
    },
    {
      name: 'Ensaladas',
      items: [
        {
          name: 'Mixta',
          description: 'Lechuga, Tomate, Cebolla, Aceitunas, Atún',
          price: 4,
        },
        {
          name: 'Casa',
          description:
            'Lechuga, Tomate, Cebolla, Aceitunas, Maiz, Zanahoria, Atún, Remolacha',
          price: 4.8,
        },
      ],
    },
    {
      name: 'Papatas Fritas',
      items: [
        {
          name: 'Normales',
          price: 2,
        },
        {
          name: 'Tres salsas',
          price: 3,
        },
        {
          name: 'Kebab',
          price: 5,
        },
      ],
    },
    {
      name: 'Carnes a la Brasa (Pueden ir acompañadas de ensalada o patatas)',
      items: [
        {
          name: 'Churrasco Pollo',
          price: 7,
        },
        {
          name: 'Churrasco Cerdo',
          price: 7,
        },
        {
          name: 'Presa Húngara',
          price: 9,
        },
        {
          name: 'Secreto',
          price: 12,
        },
        {
          name: 'Churrasco Ibérico',
          price: 12,
        },
        {
          name: 'Presa Ibérica',
          price: 14,
        },
        {
          name: 'Chuletón Aguja Ternera',
          price: 15,
        },
        {
          name: 'Churrasco Ternera',
          price: 14,
        },
      ],
    },
    {
      name: 'Sandwiches',
      items: [
        {
          name: 'Mixto',
          description: 'Mantequilla, Jamón Cocido, Queso',
          price: 2,
        },
        {
          name: 'Vegetal',
          description: 'Mantequilla, Jamón, Queso, Lechuga, Tomate, Mahonesa',
          price: 2.7,
        },
        {
          name: 'Bacon',
          description: 'Mantequilla, Queso, Bacon, Lechuga, Tomate, Mahonesa',
          price: 2.7,
        },
        {
          name: 'Pollo',
          description: 'Mantequilla, Queso, Pollo, Lechuga, Tomate, Mahonesa',
          price: 2.8,
        },
        {
          name: 'Pollo y Bacon',
          description:
            'Mantequilla, Queso, Pollo, Bacon, Lechuga, Tomate, Mahonesa',
          price: 3,
        },
        {
          name: 'Atún',
          description: 'Mantequilla, Tomate, Lechuga, Atún',
          price: 2.8,
        },
      ],
    },
    {
      name: 'Pizzas',
      items: [
        {
          name: 'Margarita',
          description: 'Tomate, Queso, Orégano',
          price: 5.5,
        },
        {
          name: 'Vesubio',
          description: 'Tomate, Queso, Jamón, Óregano',
          price: 5.8,
        },
        {
          name: 'Napolitana',
          description:
            'Champiñones, Alcachofas, Jamón, Huevo, Óregano, Mozzarella',
          price: 6,
        },
        {
          name: 'Choricera',
          description:
            'Champiñones, Alcachofas, Chorizo, Jamón, Huevo, Óregano, Mozzarella',
          price: 6,
        },
        {
          name: 'Al Tonno',
          description: 'Tomate, Queso, Atún, Cebolla, Orégano',
          price: 6,
        },
        {
          name: 'Caprichosa',
          description: 'Tomate, Queso, Jamón, Champiñones, Óregano',
          price: 6,
        },
        {
          name: 'Amigo',
          description: 'Tomate, Queso, Jamón, Atún, Orégano',
          price: 6,
        },
        {
          name: 'Bianca',
          description:
            'Champiñones, Tomate, Queso, Bacon, Nata, Cebolla, Óregano',
          price: 6,
        },
        {
          name: 'Vegetal',
          description:
            'Tomate, Queso, Maiz, Tomate Natural, Cebolla, Aceituna, Pimiento, Champiñones, Óregano',
          price: 6,
        },
        {
          name: 'Barbacoa',
          description: 'Pollo, Bacon, Cebollas, Salsa Barbacoa',
          price: 6,
        },
        {
          name: '4 Estaciones',
          description:
            'Champiñones, Alcachofa, Jamón, Huevo, Gambas, Mejillones',
          price: 6,
        },
        {
          name: 'Kebab',
          price: 6,
        },
        {
          name: '4 Quesos',
          price: 6,
        },
      ],
    },
  ],
};
