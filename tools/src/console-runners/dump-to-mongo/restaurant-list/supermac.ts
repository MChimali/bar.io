import { ObjectId } from 'mongodb';
import { RestaurantInfo } from 'pods/restaurant';

export const restaurant: RestaurantInfo = {
  id: new ObjectId().toHexString(),
  name: 'Supermac',
  urlName: 'supermac',
  phone: '641 047 027 / 951 38 14 91',
  address: 'C/ Mar, 29 (detrás del colegio SAFA ICET)',
  locationUrl:
    'https://www.google.com/maps/place/Supermac/@36.7195404,-4.3589943,15z/data=!4m12!1m6!3m5!1s0x0:0x64499bc9b66ba3a8!2sSupermac!8m2!3d36.7195404!4d-4.3589943!3m4!1s0x0:0x64499bc9b66ba3a8!8m2!3d36.7195404!4d-4.3589943',
  communitySourceUrl: '',
  official: false,
  description: '',
  menuDate: new Date('2022-02-24'),
  theme: 'italian',
  menu: [
    {
      name: 'Bebidas',
      items: [
        {
          name: 'Cocacola',
          price: 1.5,
        },
        {
          name: 'Cocacola Light',
          price: 1.5,
        },
        {
          name: 'Cocacola Zero',
          price: 1.5,
        },
        {
          name: 'Cocacola Zero Zero',
          price: 1.5,
        },
        {
          name: 'Fanta naranja/limón',
          price: 1.5,
        },
        {
          name: 'Nestéa',
          price: 1.7,
        },
        {
          name: 'Aquarius naranja/limón',
          price: 1.7,
        },
        {
          name: '7UP',
          price: 1.5,
        },
        {
          name: 'Tónica',
          price: 1.5,
        },
        {
          name: 'Agua',
          price: 1.3,
        },
        {
          name: 'Caña estrella Galicia',
          price: 1.2,
        },
        {
          name: 'Lata C. Victoria',
          price: 1.5,
        },
        {
          name: 'Lata C. Estrella Galicia',
          price: 1.8,
        },
        {
          name: 'Estrella Galicia 1/3',
          price: 1.8,
        },
        {
          name: 'Red Vintage',
          price: 2.5,
        },
        {
          name: 'Reserva 1960',
          price: 2.5,
        },
        {
          name: 'Tinto de Verano',
          price: 1.8,
        },
        {
          name: 'Zumos',
          price: 1.3,
        },
        {
          name: 'Monster Verde',
          price: 1.8,
        },
        {
          name: 'Monster Juici (mango loco)',
          price: 1.8,
        },
      ],
    },
    {
      name: 'Para picar',
      items: [
        {
          name: 'Patata fritas',
          price: 3.2,
        },
        {
          name: 'Patata deluxe',
          price: 3.8,
        },
        {
          name: 'Patata Bravas o alioli',
          price: 3.5,
        },
        {
          name: 'Alitas BBQ',
          price: 3.9,
        },
        {
          name: 'Alitas estilo kentuky',
          price: 3.5,
        },
        {
          name: 'Aros de cebolla',
          price: 3.5,
        },
        {
          name: 'Palitos de Mozzarela',
          price: 3.5,
        },
        {
          name: 'Croquetas (pollo o jamón)',
          priceByRation: {
            rationName: 'Raciones',
            rationsTypes: [
              {
                unit: '1/2 ración',
                price: 4,
              },
              {
                unit: 'entera',
                price: 8,
              },
            ],
          },
        },
        {
          name: 'Patatas Supermac',
          description: 'salsa yogur, bacon, queso gratinado',
          price: 5.5,
        },
        {
          name: 'Patatas nueva era',
          description: 'salsa bbq, salsa cheddar, bacon',
          price: 5.6,
        },
        {
          name: 'Patatas kebab',
          description: 'yogur, kebab, queso gratinado',
          price: 5.6,
        },
      ],
    },
    {
      name: 'Ensaladas',
      items: [
        {
          name: 'de la hulerta',
          description:
            'lechuga, tomate, cebolla, zanahoria, maiz, atún, aceitunas',
          price: 6,
        },
        {
          name: 'Malpica',
          description:
            'lechuga, frutos secos, queso de cabra, pañuelo crujiente, salsa de frambuesas',
          price: 6.5,
        },
        {
          name: 'Cesar',
          description:
            'lechuga, tomate, pollo empanado, picatostes, parmesano, salsa cesar',
          price: 6.5,
        },
        {
          name: 'Turca',
          description: 'lechuga, tomate, cebolla, kebab de pollo, salsa yogur',
          price: 6.5,
        },
      ],
    },
    {
      name: 'Especialidades',
      items: [
        {
          name: 'Rollo kebab de pollo',
          description: 'lechuga, tomate, cebolla y salsa de yogur',
          price: 4.5,
        },
        {
          name: 'Rollo kebab solo carne y salsa',
          description: '',
          price: 5,
        },
        {
          name: 'Hamburguesa amy',
          description:
            'carne de buey, lechuga, tomate, cebolla caramelo, queso cabra y salsa frambuesa',
          price: 5.1,
        },
        {
          name: 'Hamburguesa supermac',
          description:
            'lechuga, tomate, cebolla, doble carne de vacuno, queso cheddar, pepinillo y salsa supermac',
          price: 5.2,
        },
        {
          name: 'Hamburguesa gold',
          description:
            'cane de buey, lechuga, tomate, cebolla caramelo, bañada en cheddar y bacon',
          price: 6.5,
        },
        {
          name: 'Hamburguesa crispy',
          description: 'pollo crujiente, lechuga, tomate y mahonesa',
          price: 4.5,
        },
        {
          name: 'New York Burguer',
          description:
            'hamburguesa de buey, lechuga, tomate, cebolla, pepinillos, aros de cebolla y salsa BBQ',
          price: 4.9,
        },
        {
          name: 'Hamburguesa Vegana',
          description:
            'de berenjena, lechuga, tomate, cebolla y mahonesa y vegana',
          price: 5.2,
        },
        {
          name: 'Alvarosky',
          description:
            'carne de buey, lechuga, tomate, cebolla plancha, mezcla de cuatro quesos',
          price: 5.95,
        },
        {
          name: 'Sabrosa',
          description:
            'carne a la parrilla, lechuga, tomate, cebolla, pepinillo, mahonesa',
          price: 4.9,
        },
      ],
    },
    {
      name: 'Pizzas (cada ingrediente extra 0.99 € adicionales)',
      items: [
        {
          name: 'Margarita',
          description: 'tomate y mozzarella',
          price: 5,
        },
        {
          name: 'Proscciuto',
          description: 'tomate, mozzarella y jamón cocido',
          price: 6,
        },
        {
          name: 'Atún',
          description: 'tomate, mozzarella y atún',
          price: 6.5,
        },
        {
          name: 'Carbonara',
          description: 'tomate, mozzarella, bacon, nata y cebolla',
          price: 6.95,
        },
        {
          name: 'Julia',
          description: 'pollo asado, jamón cocido y cebolla',
          price: 6.95,
        },
        {
          name: 'Toscana',
          description:
            'tomate, mozzarella, jamón cocido, pepperonni y champiñones',
          price: 6.95,
        },
        {
          name: 'Kebab',
          description: 'tomate, mozzarella, carne de kebab de pollo y yogur',
          price: 6.95,
        },
        {
          name: 'Barbacoa',
          description: 'tomate, mozzarella, bacon, carne picada y salsa bbq',
          price: 6.95,
        },
        {
          name: 'Cuatro Quesos',
          description: 'tomate, mozzarella, parmesano, queso azul y cheddar',
          price: 6.95,
        },
        {
          name: 'Marinera',
          description: 'tomate, mozzarella, atún, anchoa y aceituna negra',
          price: 7.5,
        },
        {
          name: 'Al gusto',
          description: 'tomate, mozzarella, + 2 ingredientes',
          price: 6.5,
        },
      ],
    },
    {
      name: 'Los originales de Supermac',
      items: [
        {
          name: 'Camperazo',
          description: 'pollo, bacon, huevo, serrano, queso y mahonesa',
          price: 4.9,
        },
        {
          name: 'Mónica',
          description: 'pollo, queso cheddar y salsa de curry',
          price: 4.7,
        },
        {
          name: 'Sagitario',
          description: 'solomillo, queso y mahonesa',
          price: 5.5,
        },
        {
          name: 'Ángel',
          description: 'tortilla de patatas y alioli',
          price: 4.5,
        },
        {
          name: 'Bea',
          description: 'lomo en manteca',
          price: 4.7,
        },
        {
          name: 'Guille',
          description: 'pollo asado, alioli',
          price: 4.5,
        },
        {
          name: 'Baguette Nezor',
          description:
            'pollo, bacon, queso, jamón cocido, tortilla francesa y mahonesa',
          price: 4.9,
        },
      ],
    },
    {
      name: 'Camperos (Todos llevan incluidos lechuga, tomate, cebolla y mahonesa)',
      items: [
        {
          name: 'Normal',
          description: 'jamón cocido y queso',
          price: 3.7,
        },
        {
          name: 'De Pollo',
          price: 4,
        },
        {
          name: 'De Atún',
          price: 3.9,
        },
        {
          name: 'Especial',
          description: 'pollo, jamón cocido y queso',
          price: 4.2,
        },
        {
          name: 'Pepito de pollo o cerdo',
          price: 3.9,
        },
        {
          name: 'Serranito',
          description: 'cerdo o pollo, pimiento y serrano',
          price: 4.2,
        },
        {
          name: 'Pinchito de pollo',
          price: 4.2,
        },
      ],
    },
    {
      name: 'Hamburguesas y Perritos (Todos llevan incluidos lechuga, tomate, cebolla, ketchup y mostaza)',
      items: [
        {
          name: 'Hamburguesa Clásica (pollo o cerdo)',
          price: 3.3,
        },
        {
          name: 'Hamburguesa con queso',
          price: 3.5,
        },
        {
          name: 'Hamburguesa con bacon y huevo',
          price: 4.2,
        },
        {
          name: 'Perrito clásico',
          price: 3.2,
        },
        {
          name: 'Perrito con bacon y huevo',
          price: 3.9,
        },
      ],
    },
    {
      name: 'Postres',
      items: [
        {
          name: 'Tarta de queso casera',
          price: 4.5,
        },
        {
          name: 'Tata kinder',
          price: 4.5,
        },
      ],
    },
  ],
};
