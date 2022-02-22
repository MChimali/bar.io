import { ObjectId } from 'mongodb';
import { RestaurantInfo } from 'pods/restaurant';

export const restaurant: RestaurantInfo = {
  _id: new ObjectId(),
  name: 'Pizzería Manolin',
  urlName: 'pizzeria-manolin',
  phone: '856 099 277',
  address: 'C. Virgen de los Remedios, 7, 11693 Alcalá del Valle, Cádiz',
  locationUrl:
    'https://www.google.com/maps/place/Pizzeria+Manolin/@36.9028876,-5.1709014,15z/data=!4m12!1m6!3m5!1s0x0:0x225efb7abc22f620!2sPizzeria+Manolin!8m2!3d36.9028876!4d-5.1709014!3m4!1s0x0:0x225efb7abc22f620!8m2!3d36.9028876!4d-5.1709014',
  communitySourceUrl: '',
  official: false,
  description: 'Las mejores pizzas de la sierra de Cádiz',
  menuDate: new Date('2022-02-22'),
  theme: 'italian',
  menu: [
    {
      name: 'Baguettes',
      items: [
        {
          name: 'Pollo',
          description: 'Mahonesa, Tomate, Lechuga y Pollo',
          price: 3.5,
        },
        {
          name: 'Bacon',
          description: 'Mahonesa, Tomate, Lechuga y Bacon',
          price: 3.5,
        },
        {
          name: 'Lomo',
          description: 'Mahonesa, Tomate, Lechuga y Lomo',
          price: 3.5,
        },
        {
          name: 'Española',
          description: 'Mahonesa, Tomate, Lechuga, Tortilla de Patatas',
          price: 3.5,
        },
        {
          name: 'Francesa',
          description: 'Mahonesa, Tomate, Lechuga, Tortilla Francesa',
          price: 3.5,
        },
        {
          name: 'Barbacoa',
          description:
            'Mahonesa, Tomate, Lechuga, Queso, Pollo, Bacon, Salsa Barbacoa',
          price: 4,
        },
        {
          name: 'Kebat',
          description: 'Mahonesa, Tomate, Lechuga, Kebat',
          price: 4,
        },
        {
          name: 'Pollo con Roquefort',
          description: 'Mahonesa, Tomate, Lechuga, Roquefort',
          price: 4,
        },
        {
          name: 'Serranito',
          description:
            'Mahonesa, Tomate, Lechuga, Pimiento, Jamón Serrano y Pollo',
          price: 4,
        },
        {
          name: 'Ballena',
          description: 'Mahonesa, Tomate, Lechuga, Pollo, Tortilla Francesa',
          price: 4,
        },
      ],
    },
    {
      name: 'Pizzas',
      items: [
        {
          name: 'Capricho Francis',
          description:
            'Tomate, Champiñones, Jamón Cocido, Salchichas, Atún, Mozzarella y Orégano',
          price: 7,
        },
        {
          name: 'Tropical',
          description: 'Tomate, Jamón Cocido, Piña, Mozzarella y Orégano',
          price: 7,
        },
        {
          name: 'Napolitana',
          description: 'Tomate, Anchoas, Mozzarella y Orégano',
          price: 7,
        },
        {
          name: 'Chip',
          description: 'Tomate, Roquefort, Mozzarella y Orégano',
          price: 7,
        },
        {
          name: 'Bianca',
          description: 'Tomate, Bacon, Champiñones, Nata, Mozzarella y Orégano',
          price: 7,
        },
        {
          name: 'Kebat',
          description: 'Tomate, Kebat, Champiñones, Salsa Kebat y Orégano',
          price: 7,
        },
        {
          name: 'Proscuito',
          description: 'Tomate, Jamón Cocido, Mozzarella y Orégano',
          price: 7,
        },
        {
          name: 'Tres Quesos',
          description: 'Tomate, Mozzarella y Orégano',
          price: 7,
        },
        {
          name: 'Frontentina',
          description: 'Tomate, Jamón Cocido, Huevo y Orégano',
          price: 7,
        },
        {
          name: 'Chorizo',
          description: 'Tomate, Chorizo, Champiñones, Mozzarella y Orégano',
          price: 7,
        },
        {
          name: 'Capricho Manolín',
          description:
            'Tomate, Jamón Serrano, Huevo Cocido, Champiñones, Mozzarella y Orégano',
          price: 7,
        },
        {
          name: 'Vegetal',
          description:
            'Tomate, Cebolla, Pimiento Rojo y Verde, Aceitunas, Maiz, Champiñones, Mozzarella y Orégano',
          price: 7,
        },
        {
          name: 'Tormentosa',
          description: 'Tomate, Cebolla, Pimiento Morrón, Mozzarella y Orégano',
          price: 7,
        },
        {
          name: 'Barbacoa',
          description: 'Tomate, Carne, Salsa Barbacoa, Mozzarella y Orégano',
          price: 7,
        },
        {
          name: 'Calzone Manolín',
          description:
            'Mozzarella, Tomate, Champiñones, Bacón, Queso Roquefort, Chorizo y Huevo',
          price: 7,
        },
      ],
    },
    {
      name: 'Bebidas',
      items: [
        {
          name: 'Refrescos, Cervezas',
          price: 1,
        },
      ],
    },
  ],
};
