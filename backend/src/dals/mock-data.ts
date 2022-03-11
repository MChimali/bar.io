import { Restaurant } from './restaurant';
import { ObjectId } from 'mongodb';
export interface DB {
  restaurants: Restaurant[];
}

export const db: DB = {
  restaurants: [
    {
      _id: new ObjectId('621d23201f37d33a5dd8c180'),
      name: 'Paluba II',
      urlName: 'paluba',
      phone: '606 629 069',
      address:
        'Rotonda del Motorista, La Granja, Avenida Juan Carlos I, 11405 Jerez de la Frontera, Cádiz',
      locationUrl:
        'https://www.google.com/maps/place/Cervecer%C3%ADa+Paluba/@36.6934059,-6.1025559,15z/data=!4m5!3m4!1s0x0:0x88ff8889eecfff0e!8m2!3d36.6934065!4d-6.1025711',
      menuDate: new Date('2022-02-14'),
      communitySourceUrl: '',
      description: 'Cervecería & Urban Food',
      theme: 'brewery',
      rationsDefinitions: [],
      menu: [
        {
          categoryName: 'Burguers',
          items: [
            {
              name: 'Paluba Burguer',
              description:
                'Pan Brioche, 285 gr. de carne de Buey, Queso Cheda, Lechuga, tomate, cebolla roja a la plancha, pepinillo',
              price: 7.8,
            },
            {
              name: 'Black Angus XL',
              description:
                'Pan de sésamo, 200 gr. de carne de Angus, bacon, Doble de queso Chedar, Cebolla blanca pochada con BBQ, canónigos',
              price: 7,
            },
            {
              name: 'Pulled Pork',
              description:
                'Pan rústico, Pulled Pork, A elegir: (1) Aguacate, cebolla encurtida y pepinillo (2) Ensaladilla de col',
              price: 6.5,
            },
            {
              name: "Chicharron's Burguer",
              description:
                'Pan rústico, Carne picada & chicharrones, A elegir: queso semicurado o queso de cabra, Lechuga, tomate y cebolla pochada',
              price: 5.5,
            },
            {
              name: 'Buey Burguer',
              description:
                'Pan de sésamo, Carne de Buey, bacon, Queso, Cebolla blanca, lechuga y tomate',
              price: 5.5,
            },
            {
              name: 'Burguer completa',
              description:
                'Pan de sésamo, Carne de vacuno, Queso, Cebolla blanca, lechuga y tomate',
              price: 4.8,
            },
          ],
        },
        {
          categoryName: "Hot Dog's",
          items: [
            {
              name: 'Hot Dog XL',
              description: 'Con pico de gallo o queso y cebolla frita',
              price: 3,
            },
          ],
        },
      ],
      official: true,
    },
    {
      _id: new ObjectId('6225dcc92bdbbd56c09efd6c'),
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
      rationsDefinitions: [],
      menu: [
        {
          categoryName: 'Ensaladas',
          items: [
            {
              name: 'De la Casa',
              description: 'Lechuga, tomate, maiz, remolacha, zanahoria, atún',
              price: 8,
            },
            {
              name: 'Especial',
              description:
                'Lechuga, tomate, manzana, palmito, espárragos, nueces, pasas, salsa rosa',
              price: 10,
            },
            {
              name: 'Queso de Cabra',
              description: 'Lechuga, tomate, maiz, remolacha, zanahoria, atún',
              price: 12,
            },
            {
              name: 'Cogollos de Lechuga a la Cordobesa',
              description:
                'Cortados en cuartos y aliñados con ajo, aceite y pimientos asados',
              price: 5.5,
            },
            {
              name: 'Tomate',
              description: null,
              price: 5,
            },
            {
              name: 'Tomate con Atún',
              description: null,
              price: 7,
            },
          ],
        },
        {
          categoryName: 'Entrantes',
          items: [
            {
              name: 'Porra de la Casa',
              description: null,
              price: 3.8,
            },
            {
              name: 'Migas Caseras',
              description: null,
              price: 3.5,
            },
            {
              name: 'Anchoa Lolin (unidad)',
              description: 'Tosta de pan, tomate triturado y aceite de oliva',
              price: 1.7,
            },
            {
              name: 'Pulpo a la gallega',
              description: null,
              price: 14,
            },
          ],
        },
      ],
    },
    {
      _id: new ObjectId('621d33f3cb82e2480784d0ca'),
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
      rationsDefinitions: [],
      menu: [
        {
          categoryName: 'Baguettes',
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
              description:
                'Mahonesa, Tomate, Lechuga, Pollo, Tortilla Francesa',
              price: 4,
            },
          ],
        },
        {
          categoryName: 'Pizzas',
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
              description:
                'Tomate, Bacon, Champiñones, Nata, Mozzarella y Orégano',
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
              description:
                'Tomate, Cebolla, Pimiento Morrón, Mozzarella y Orégano',
              price: 7,
            },
            {
              name: 'Barbacoa',
              description:
                'Tomate, Carne, Salsa Barbacoa, Mozzarella y Orégano',
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
      ],
    },
  ],
};
