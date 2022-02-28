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
  ],
};
