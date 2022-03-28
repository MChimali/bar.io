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
          allergens: ['crustaceos', 'moluscos', 'pescados'],
        },
        {
          name: 'Especial',
          description:
            'Lechuga, tomate, manzana, palmito, espárragos, nueces, pasas, salsa rosa',
          price: 10,
          allergens: [
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
          allergens: [
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
          allergens: ['dioxido de azufre y sulfitos'],
        },
        {
          name: 'Tomate',
          price: 5,
          allergens: [],
        },
        {
          name: 'Tomate con Atún',
          price: 7,
          allergens: ['crustaceos', 'moluscos', 'pescados'],
        },
      ],
    },
    {
      name: 'Entrantes',
      items: [
        {
          name: 'Porra de la Casa',
          price: 3.8,
          allergens: ['gluten', 'crustaceos', 'huevos', 'pescados', 'moluscos'],
        },
        {
          name: 'Migas Caseras',
          price: 3.5,
          allergens: [
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
          allergens: ['gluten', 'pescados'],
        },
        {
          name: 'Pulpo a la gallega',
          price: 14,
          allergens: ['crustaceos', 'moluscos', 'pescados'],
        },
      ],
    },
    {
      name: 'Entrantes a la Brasa',
      items: [
        {
          name: 'Chorizo Jalapeño (picante)',
          price: 3.4,
          allergens: ['dioxido de azufre y sulfitos'],
        },
        {
          name: 'Chorizo Criollo',
          price: 3.4,
          allergens: ['dioxido de azufre y sulfitos'],
        },
        {
          name: 'Morcilla de Burgos',
          price: 4.3,
          allergens: [],
        },
        {
          name: 'Pata de Pulpo',
          price: 14,
          allergens: ['crustaceos', 'moluscos', 'pescados'],
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
          allergens: ['lactosa'],
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
          allergens: ['lactosa'],
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
          allergens: ['lactosa', 'huevos'],
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
          allergens: ['lactosa'],
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
          allergens: ['lactosa'],
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
          allergens: ['gluten', 'pescados', 'moluscos'],
        },
        {
          name: 'Tosta de Queso de Cabra',
          description: 'Rulo de queso de cabra con mermelada de tomate',
          allergens: ['gluten', 'lactosa'],
        },
      ],
    },
    {
      name: 'Guarnición',
      items: [
        {
          name: 'Patata Asada',
          price: 2.8,
          allergens: ['lactosa'],
        },
      ],
    },
    {
      name: 'Salsas Adicionales',
      items: [
        {
          name: 'A la Pimienta',
          price: 2,
          allergens: ['gluten', 'lactosa'],
        },
        {
          name: 'Queso Azul',
          price: 2,
          allergens: ['gluten', 'lactosa'],
        },
        {
          name: 'Miel y Mostaza',
          price: 2,
          allergens: ['lactosa', 'mostaza'],
        },
        {
          name: 'Champiñones',
          price: 2,
          allergens: ['gluten', 'lactosa'],
        },
        {
          name: 'Chile Dulce',
          price: 2,
          allergens: [],
        },
      ],
    },
    {
      name: 'Carnes a la Brasa',
      items: [
        {
          name: 'Costilla de Cerdo',
          price: 11,
          allergens: [],
        },
        {
          name: 'Costillitas de Cerdo al Infierno',
          price: 11,
          allergens: [],
        },
        {
          name: 'Solomillo de Cerdo',
          price: 11.5,
          allergens: [],
        },
        {
          name: 'Brocheta de Solomillo de Cerdo',
          price: 11.5,
          allergens: [],
        },
        {
          name: 'Presa Ibérica de Cerdo de Jabugo',
          price: 15.5,
          allergens: [],
        },
        {
          name: 'Codillo de Cerdo en su Jugo al Horno',
          price: 12,
          allergens: [],
        },
        {
          name: 'Cochinillo de Cerdo Segoviano al Horno',
          description: '1/4 para dos personas',
          price: 35,
          allergens: [],
        },
        {
          name: 'Entrecot Añojo Irlandés',
          price: 16,
          allergens: [],
        },
        {
          name: 'Solomillo de Añojo Irlandés',
          price: 20,
          allergens: [],
        },
        {
          name: 'Brocheta Solomillo de Añojo',
          price: 15.5,
          allergens: [],
        },
        {
          name: 'Centro Chuletón Añojo Irlandés',
          price: 28,
          allergens: [],
        },
        {
          name: 'Chuletitas de Cordero Lechal',
          price: 17.5,
          allergens: [],
        },
        {
          name: 'Pierna de Cordero Lechal al Horno',
          price: 18,
          allergens: [],
        },
        {
          name: 'Paletilla de Cordero Lechal al Horno',
          price: 21,
          allergens: [],
        },
        {
          name: 'Filete de Pavo Aliñado',
          price: 9.5,
          allergens: ['soja'],
        },
        {
          name: 'Pinchito de Pollo',
          price: 3.6,
          allergens: [],
        },
        {
          name: 'Brocheta de Pollo',
          price: 10.5,
          allergens: [],
        },
        {
          name: 'Pechuga de Pollo',
          price: 9,
          allergens: [],
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
          allergens: [],
        },
        {
          name: 'Patita de Chivo en su Jugo al Horno',
          price: 18,
          allergens: [],
        },
      ],
    },
    {
      name: 'Pescados a la Brasa',
      items: [
        {
          name: 'Chuleta de Atún (Ventresca)',
          price: 11.5,
          allergens: ['pescados'],
        },
        {
          name: 'Pez Espada',
          price: 11.5,
          allergens: ['pescados'],
        },
        {
          name: 'Calamar',
          price: 16,
          allergens: ['moluscos'],
        },
      ],
    },
    {
      name: 'Hamburguesas a la Brasa',
      items: [
        {
          name: 'Filete de Hamburguesa mixta / Filete de Hamburguesa hereford ',
          price: 5,
          allergens: ['dioxido de azufre y sulfitos'],
        },
        {
          name: 'Filete de Hamburguesa de pollo / Filete de Hamburguesa picante',
          price: 5,
          allergens: ['soja', 'dioxido de azufre y sulfitos'],
        },
        {
          name: 'Hamburguesa Mixta',
          description:
            'Pan, Carne de Cerdo y Hereford, Queso Cheddar, Tomate Natural, Lechuga y Cebolla caramelizada con Patatas Chips',
          price: 9,
          allergens: [
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
          allergens: [
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
          allergens: [
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
          allergens: [
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
          allergens: [
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
          allergens: [
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
          allergens: [],
        },
        {
          name: 'Entrecot de Angus Americano',
          price: 16,
          allergens: [],
        },
        {
          name: 'Rabo de Toro al Vino Tino',
          price: 16,
          allergens: ['gluten', 'apio', 'dioxido de azufre y sulfitos'],
        },
        {
          name: 'Bacalao a la Riojana',
          price: 14.5,
          allergens: ['gluten', 'pescados'],
        },
      ],
    },
  ],
};
