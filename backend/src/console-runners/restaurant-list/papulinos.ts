import { RestaurantApiModel } from 'pods/restaurant';

export const restaurant: RestaurantApiModel = {
  id: undefined,
  name: 'Papulinos',
  urlName: 'papulinos',
  phone: '952 28 38 49',
  address: 'Calle Malasaña, 42 - Málaga',
  locationUrl:
    'https://www.google.com/maps/place/PAPULINOS/@36.726131,-4.42737,15z/data=!4m2!3m1!1s0x0:0xe25c1bc2d9bf5e99?sa=X&ved=2ahUKEwj_nuWFyvf1AhVjxYUKHTQ1ARgQ_BJ6BAg4EAU',
  menuDate: new Date('2022-02-14'),
  communitySourceUrl: 'http://papulinos.com/carta/',
  official: false,
  description: 'Las mejores carnes a la brasa',
  theme: 'meat',
  menu: [
    {
      name: 'Ensaladas',
      items: [
        {
          name: 'De la Casa',
          description: 'Lechuga, tomate, maiz, remolacha, zanahoria, atún',
          price: 8,
          allergenCollection: ['crustaceos', 'moluscos', 'pescados'],
        },
        {
          name: 'Especial',
          description:
            'Lechuga, tomate, manzana, palmito, espárragos, nueces, pasas, salsa rosa',
          price: 10,
          allergenCollection: [
            'cacahuetes',
            'lactosa',
            'frutos secos con cascara',
            'dioxido de azufre y sulfitos',
          ],
        },
        {
          name: 'Queso de Cabra',
          description: 'Lechuga, tomate, maiz, remolacha, zanahoria, atún',
          price: 12,
          allergenCollection: [
            'gluten',
            'cacahuetes',
            'lactosa',
            'frutos secos con cascara',
          ],
        },
        {
          name: 'Cogollos de Lechuga a la Cordobesa',
          description:
            'Cortados en cuartos y aliñados con ajo, aceite y pimientos asados',
          price: 5.5,
          allergenCollection: ['dioxido de azufre y sulfitos'],
        },
        {
          name: 'Tomate',
          price: 5,
          allergenCollection: [],
        },
        {
          name: 'Tomate con Atún',
          price: 7,
          allergenCollection: ['crustaceos', 'moluscos', 'pescados'],
        },
      ],
    },
    {
      name: 'Entrantes',
      items: [
        {
          name: 'Porra de la Casa',
          price: 3.8,
          allergenCollection: [
            'gluten',
            'crustaceos',
            'huevos',
            'pescados',
            'moluscos',
          ],
        },
        {
          name: 'Migas Caseras',
          price: 3.5,
          allergenCollection: [
            'gluten',
            'soja',
            'lactosa',
            'dioxido de azufre y sulfitos',
          ],
        },
        {
          name: 'Anchoa Lolin (unidad)',
          description: 'Tosta de pan, tomate triturado y aceite de oliva',
          price: 1.7,
          allergenCollection: ['gluten', 'pescados'],
        },
        {
          name: 'Pulpo a la gallega',
          price: 14,
          allergenCollection: ['crustaceos', 'moluscos', 'pescados'],
        },
      ],
    },
    {
      name: 'Entrantes a la Brasa',
      items: [
        {
          name: 'Chorizo Jalapeño (picante)',
          price: 3.4,
          allergenCollection: ['dioxido de azufre y sulfitos'],
        },
        {
          name: 'Chorizo Criollo',
          price: 3.4,
          allergenCollection: ['dioxido de azufre y sulfitos'],
        },
        {
          name: 'Morcilla de Burgos',
          price: 4.3,
          allergenCollection: [],
        },
        {
          name: 'Pata de Pulpo',
          price: 14,
          allergenCollection: ['crustaceos', 'moluscos', 'pescados'],
        },
        {
          name: 'Chorizo Ibérico',
          priceByRation: {
            rationName: 'Raciones',
            rationsTypes: [
              {
                unit: '½ Ración',
                price: 3.6,
              },
              {
                unit: 'Ración',
                price: 5.6,
              },
            ],
          },
          allergenCollection: ['lactosa'],
        },
        {
          name: 'Salchichón Ibérico',
          priceByRation: {
            rationName: 'Raciones',
            rationsTypes: [
              {
                unit: '½ Ración',
                price: 3.6,
              },
              {
                unit: 'Ración',
                price: 5.6,
              },
            ],
          },
          allergenCollection: ['lactosa'],
        },
        {
          name: 'Queso de Oveja',
          description: 'Curado en Manteca de Cerdo Ibérico',
          priceByRation: {
            rationName: 'Raciones',
            rationsTypes: [
              {
                unit: '½ Ración',
                price: 5.5,
              },
              {
                unit: 'Ración',
                price: 9,
              },
            ],
          },
          allergenCollection: ['lactosa', 'huevos'],
        },
        {
          name: 'Lomito Ibérico',
          priceByRation: {
            rationName: 'Raciones',
            rationsTypes: [
              {
                unit: '½ Ración',
                price: 6,
              },
              {
                unit: 'Ración',
                price: 9.5,
              },
            ],
          },
          allergenCollection: ['lactosa'],
        },
        {
          name: 'Surtido Ibérico',
          priceByRation: {
            rationName: 'Raciones',
            rationsTypes: [
              {
                unit: '½ Ración',
                price: 8,
              },
              {
                unit: 'Ración',
                price: 11,
              },
            ],
          },
          allergenCollection: ['lactosa'],
        },
      ],
    },
    {
      name: 'Tostas a la Brasa',
      items: [
        {
          name: 'Tosta al Pil-Pil',
          description: 'Langostino con salsa al pil-pil',
          price: 8,
          allergenCollection: ['gluten', 'pescados', 'moluscos'],
        },
        {
          name: 'Tosta de Queso de Cabra',
          description: 'Rulo de queso de cabra con mermelada de tomate',
          allergenCollection: ['gluten', 'lactosa'],
        },
      ],
    },
    {
      name: 'Guarnición',
      items: [
        {
          name: 'Patata Asada',
          price: 2.8,
          allergenCollection: ['lactosa'],
        },
      ],
    },
    {
      name: 'Salsas Adicionales',
      items: [
        {
          name: 'A la Pimienta',
          price: 2,
          allergenCollection: ['gluten', 'lactosa'],
        },
        {
          name: 'Queso Azul',
          price: 2,
          allergenCollection: ['gluten', 'lactosa'],
        },
        {
          name: 'Miel y Mostaza',
          price: 2,
          allergenCollection: ['lactosa', 'mostaza'],
        },
        {
          name: 'Champiñones',
          price: 2,
          allergenCollection: ['gluten', 'lactosa'],
        },
        {
          name: 'Chile Dulce',
          price: 2,
          allergenCollection: [],
        },
      ],
    },
    {
      name: 'Carnes a la Brasa',
      items: [
        {
          name: 'Costilla de Cerdo',
          price: 11,
          allergenCollection: [],
        },
        {
          name: 'Costillitas de Cerdo al Infierno',
          price: 11,
          allergenCollection: [],
        },
        {
          name: 'Solomillo de Cerdo',
          price: 11.5,
          allergenCollection: [],
        },
        {
          name: 'Brocheta de Solomillo de Cerdo',
          price: 11.5,
          allergenCollection: [],
        },
        {
          name: 'Presa Ibérica de Cerdo de Jabugo',
          price: 15.5,
          allergenCollection: [],
        },
        {
          name: 'Codillo de Cerdo en su Jugo al Horno',
          price: 12,
          allergenCollection: [],
        },
        {
          name: 'Cochinillo de Cerdo Segoviano al Horno',
          description: '1/4 para dos personas',
          price: 35,
          allergenCollection: [],
        },
        {
          name: 'Entrecot Añojo Irlandés',
          price: 16,
          allergenCollection: [],
        },
        {
          name: 'Solomillo de Añojo Irlandés',
          price: 20,
          allergenCollection: [],
        },
        {
          name: 'Brocheta Solomillo de Añojo',
          price: 15.5,
          allergenCollection: [],
        },
        {
          name: 'Centro Chuletón Añojo Irlandés',
          price: 28,
          allergenCollection: [],
        },
        {
          name: 'Chuletitas de Cordero Lechal',
          price: 17.5,
          allergenCollection: [],
        },
        {
          name: 'Pierna de Cordero Lechal al Horno',
          price: 18,
          allergenCollection: [],
        },
        {
          name: 'Paletilla de Cordero Lechal al Horno',
          price: 21,
          allergenCollection: [],
        },
        {
          name: 'Filete de Pavo Aliñado',
          price: 9.5,
          allergenCollection: ['soja'],
        },
        {
          name: 'Pinchito de Pollo',
          price: 3.6,
          allergenCollection: [],
        },
        {
          name: 'Brocheta de Pollo',
          price: 10.5,
          allergenCollection: [],
        },
        {
          name: 'Pechuga de Pollo',
          price: 9,
          allergenCollection: [],
        },
        {
          name: 'Alitas de Pollo',
          priceByRation: {
            rationName: 'Raciones',
            rationsTypes: [
              {
                unit: '½ Ración',
                price: 5.9,
              },
              {
                unit: 'Ración',
                price: 9.5,
              },
            ],
          },
          allergenCollection: [],
        },
        {
          name: 'Patita de Chivo en su Jugo al Horno',
          price: 18,
          allergenCollection: [],
        },
      ],
    },
    {
      name: 'Pescados a la Brasa',
      items: [
        {
          name: 'Chuleta de Atún (Ventresca)',
          price: 11.5,
          allergenCollection: ['pescados'],
        },
        {
          name: 'Pez Espada',
          price: 11.5,
          allergenCollection: ['pescados'],
        },
        {
          name: 'Calamar',
          price: 16,
          allergenCollection: ['moluscos'],
        },
      ],
    },
    {
      name: 'Hamburguesas a la Brasa',
      items: [
        {
          name: 'Filete de Hamburguesa mixta / Filete de Hamburguesa hereford ',
          price: 5,
          allergenCollection: ['dioxido de azufre y sulfitos'],
        },
        {
          name: 'Filete de Hamburguesa de pollo / Filete de Hamburguesa picante',
          price: 5,
          allergenCollection: ['soja', 'dioxido de azufre y sulfitos'],
        },
        {
          name: 'Hamburguesa Mixta',
          description:
            'Pan, Carne de Cerdo y Hereford, Queso Cheddar, Tomate Natural, Lechuga y Cebolla caramelizada con Patatas Chips',
          price: 9,
          allergenCollection: [
            'gluten',
            'huevos',
            'soja',
            'lactosa',
            'apio',
            'mostaza',
            'sesamo',
            'dioxido de azufre y sulfitos',
          ],
        },
        {
          name: 'Hamburguesa Hereford',
          description:
            'Pan, Carne Hereford, Queso Cheddar, Tomate Natural, Lechuga y Cebolla caramelizada con Patatas Chips',
          price: 9.5,
          allergenCollection: [
            'gluten',
            'huevos',
            'soja',
            'lactosa',
            'apio',
            'mostaza',
            'sesamo',
            'dioxido de azufre y sulfitos',
          ],
        },
        {
          name: 'Hamburguesa de Queso de Cabra',
          description:
            'Pan, Carne de Hereford, Queso de Cabra, Lechuga, Tomate Natural, Cebolla Caramelizada y Nueces con Patatas Chips',
          price: 10,
          allergenCollection: [
            'gluten',
            'huevos',
            'cacahuetes',
            'frutos secos con cascara',
            'soja',
            'lactosa',
            'apio',
            'mostaza',
            'sesamo',
            'dioxido de azufre y sulfitos',
          ],
        },
        {
          name: 'Hamburguesa Picante',
          description:
            'Pan, Carne de Cerdo y Hereford, Queso Cheddar, Lechuga, Tomate y Cebolla Frita y ali-oli con Patatas Chips',
          price: 8,
          allergenCollection: [
            'gluten',
            'huevos',
            'soja',
            'lactosa',
            'apio',
            'mostaza',
            'sesamo',
            'dioxido de azufre y sulfitos',
          ],
        },
        {
          name: 'Hamburguesa de Pollo',
          description:
            'Pan, Carne de Pollo, Queso Cheddar, Lechuga, Tomate y Cebolla caramelizada con Patatas Chips',
          price: 8.5,
          allergenCollection: [
            'gluten',
            'huevos',
            'soja',
            'lactosa',
            'apio',
            'mostaza',
            'sesamo',
            'dioxido de azufre y sulfitos',
          ],
        },
        {
          name: 'Hamburguesa de Soja',
          description:
            'Pan, Soja, Queso Cheddar, Tomate Natural, Lechuga y Cebolla Caramelizada con Patatas Chips',
          price: 9.5,
          allergenCollection: [
            'gluten',
            'huevos',
            'soja',
            'lactosa',
            'apio',
            'mostaza',
            'sesamo',
          ],
        },
      ],
    },
    {
      name: 'Sugerencias',
      items: [
        {
          name: 'Pinchito de Cordero',
          price: 6.5,
          allergenCollection: [],
        },
        {
          name: 'Entrecot de Angus Americano',
          price: 16,
          allergenCollection: [],
        },
        {
          name: 'Rabo de Toro al Vino Tino',
          price: 16,
          allergenCollection: [
            'gluten',
            'apio',
            'dioxido de azufre y sulfitos',
          ],
        },
        {
          name: 'Bacalao a la Riojana',
          price: 14.5,
          allergenCollection: ['gluten', 'pescados'],
        },
      ],
    },
  ],
};
