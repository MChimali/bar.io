import { ObjectId } from 'mongodb';
import { RestaurantApiModel } from 'pods/restaurant';

export const restaurant: RestaurantApiModel = {
  id: new ObjectId().toHexString(),
  name: 'Paluba II',
  urlName: 'paluba',
  phone: '606 629 069',
  address:
    'Rotonda del Motorista, La Granja, Avenida Juan Carlos I, 11405 Jerez de la Frontera, Cádiz',
  locationUrl:
    'https://www.google.com/maps/place/Cervecer%C3%ADa+Paluba/@36.6934059,-6.1025559,15z/data=!4m5!3m4!1s0x0:0x88ff8889eecfff0e!8m2!3d36.6934065!4d-6.1025711',
  theme: 'brewery',
  official: true,
  menuDate: new Date('2022-02-14'),
  communitySourceUrl: '',
  description: 'Cervecería & Urban Food',
  menu: [
    {
      name: 'Cervezas',
      items: [
        {
          name: 'Estrella Galicia Barril',
          price: 1.2,
          description:
            'Agua de la ciudad de A Coruña, maltas de doscarreras (pilsen y tostada), maíz y lúpulos Nugget y Perle Hallertau. Levadura seleccionada Hijos de Rivera.',
        },
        {
          name: 'Estrella Galicia (33 cl)',
          price: 1.5,
          description:
            'Agua de la ciudad de A Coruña, maltas de doscarreras (pilsen y tostada), maíz y lúpulos Nugget y Perle Hallertau. Levadura seleccionada Hijos de Rivera.',
        },
        {
          name: '1906 Reserva Especial',
          price: 2,
          description:
            'Agua de la ciudad de A Coruña, maltas de dos carreras (pilsen y tostada), maíz y lúpulos Nugget y Perle Hallertau. Levadura seleccionada Hijos de Rivera.',
        },
        {
          name: 'Grolsch Radler',
          price: 1.3,
          description:
            'Una mezcla de 40% de cerveza Grolsch y zumo de frutas. Carácter refrescante propio de una Radler; con la calidad y tradición propias de Grolsch. Con una mezcla de 40% de cerveza Grolsch y zumo de frutas, y elaborada solo con ingredientes naturales, Grolsch Radler tiene un sabor dulce y un regusto muy ligero, con el sabor refrescante que le aporta el limón.',
        },
        {
          name: 'Brewdog - Punk IPA',
          price: 2.7,
          description:
            'Levadura Wyeast 1056 - American Ale. Malta Extra Pale y Caramalt. Lúpulos Chinook, Ahtanum, Amarillo, Cascade, Simcoe y Nelson Sauvin.',
        },
        {
          name: 'Erdinger Urweisse (50 cl)',
          price: 2.9,

          description:
            'Agua, Malta de trigo (+ 50%), malta de cebada, malta tostada, lúpulo Hallertau y levadura weizen.',
        },
      ],
    },
    {
      name: 'Cervezas cero alcohol',
      items: [
        {
          name: 'Estrella Galicia 0,0%',
          price: 1.5,
          description:
            'Agua de la ciudad de A Coruña, maltas de dos carreras (pilsen y tostada), maíz y lúpulos Nugget y Perle Hallertau. Levadura seleccionada Hijos de Rivera.',
        },
        {
          name: 'Estrella Galicia 0,0% Tostada',
          price: 1.8,
          description:
            'Agua de la ciudad de A Coruña, blend de maltas con diferentes grados de secado/tostado, maíz, lúpulos de las variedades Nugget, Perle y Sladek. Levadura seleccionada de Hijos de Rivera.',
        },
        {
          name: 'Estrella Galicia 0,0% Negra',
          price: 1.8,

          description:
            'Agua de la ciudad de A Coruña, un coupage de cuatro maltas (Pilsen, Dark, Caramel y Black),lúpulos de las variedades Nugget y Sladek. Levadura seleccionada de Hijos de Rivera.',
        },
      ],
    },
    {
      name: 'Tapas frías',
      items: [
        {
          name: 'Ensaladilla',
          price: 2.5,
        },
        {
          name: 'Ali-oli',
          price: 2.2,
        },
        {
          name: 'Pimientos asados con caballa',
          price: 3,
        },
        {
          name: 'Boquerones en vinagre',
          price: 3,
        },
        {
          name: 'Chicharrones',
          price: 3,
        },
        {
          name: 'Tapa de queso',
          price: 2.5,
        },
        {
          name: 'Queso con anchoas',
          price: 3,
        },
      ],
    },
    {
      name: 'Tapas Calientes',
      items: [
        {
          name: 'Carrillá Ibérica',
          price: 3,
        },
        {
          name: 'Albóndigas',
          price: 3,
        },
        {
          name: 'Pinchito guarnición',
          price: 4,
        },
        {
          name: 'Croquetas de chicharrones',
          price: 3,
        },
        {
          name: 'Lagrimitas de pollo',
          price: 3.5,
        },
        {
          name: 'Medallones de queso de cabra a la plancha',
          price: 6.3,
        },
        {
          name: 'Salchipapa',
          price: 3,
          description: 'Patatas fritas con salchicha y salsas',
        },
      ],
    },
    {
      name: 'Montaditos',
      items: [
        {
          name: 'Palometa',
          price: 2.5,
        },
        {
          name: 'Melva',
          price: 2.5,
        },
        {
          name: 'Caballa',
          price: 2.5,
        },
        {
          name: 'Lomo',
          price: 2.5,
        },
        {
          name: 'Serranito',
          price: 3,
        },
      ],
    },
    {
      name: 'Ensaladas',
      items: [
        {
          name: 'Ensalada Mixta',
          price: 5,
          description: 'Lechuga, tomate, cebolla, huevo, maíz, atun',
        },
        {
          name: 'Ensalada César con pollo',
          price: 5,
          description:
            'Lechuga, pechuga de pollo, picatostes, queso parmesano, salsa césar',
        },
      ],
    },
    {
      name: 'Entrantes',
      items: [
        {
          name: 'Nachos Mexicanos',
          price: 5.5,
          description:
            'Nachos, mezcla de quesos, pico de gallo y chili con carne',
        },
        {
          name: 'Nachos 3 Salsas',
          price: 5,
          description:
            'Nachos, mezcla de quesos, guacamole, crema agria y cebolla encurtida',
        },
        {
          name: 'Patatas Paluba',
          price: 5,
          description:
            'Patatas fritas, bacon, queso Chedar y nuestra salsa especial',
        },
        {
          name: 'Patatas Bacon Cheese Fries',
          price: 5.5,
          description:
            'Patatas fritas, bacon, mezcla de quesos y salsa ranchera',
        },
        {
          name: 'Patatas Chili Cheese Fries',
          price: 6.5,
          description:
            'Patatas fritas, salsa ranchera, mezcla de quesos, chili con carne, pico de gallo y jalapeños',
        },
        {
          name: 'Patatas Pulled Pork',
          price: 6.0,
          description: 'Patatas fritas, mezcla de quesos, pulled pork',
        },
        {
          name: 'Patatas Bravas',
          price: 3.5,
          description: 'Patatas fritas con salsa brava',
        },
      ],
    },
    {
      name: 'Platos',
      items: [
        {
          name: 'Costilla BBQ',
          price: 13,
        },
        {
          name: 'Lasaña casera',
          price: 4.8,
          description: 'Pasta, boloñesa, queso y bechamel',
        },
        {
          name: 'Revuelto casero',
          price: 4.5,
          description: 'Patatas, huevo, jamón y pimientos',
        },
        {
          name: 'Huevos rotos',
          price: 4.5,
          description: 'Patatas, jamón y huevos',
        },
        {
          name: 'Brochetas',
          price: 5.5,
          description: 'De pollo o cerdo, con guarnición',
        },
        {
          name: 'Aneto',
          price: 4.5,
          description: 'A la castellana con patatas y pimientos asados',
        },
        {
          name: 'Escalopines',
          price: 4,
          description: 'De pollo empanado con patatas',
        },
      ],
    },
    {
      name: 'Burguers',
      items: [
        {
          name: 'Paluba Burguer',
          price: 7.8,
          description:
            'Pan Brioche, 285 gr. de carne de Buey, Queso Cheda, Lechuga, tomate, cebolla roja a la plancha, pepinillo',
        },
        {
          name: 'Black Angus XL',
          price: 7,
          description:
            'Pan de sésamo, 200 gr. de carne de Angus, bacon, Doble de queso Chedar, Cebolla blanca pochada con BBQ, canónigos',
        },
        {
          name: 'Pulled Pork',
          price: 6.5,
          description:
            'Pan rústico, Pulled Pork, A elegir: (1) Aguacate, cebolla encurtida y pepinillo (2) Ensaladilla de col',
        },
        {
          name: "Chicharron's Burguer",
          price: 5.5,
          description:
            'Pan rústico, Carne picada & chicharrones, A elegir: queso semicurado o queso de cabra, Lechuga, tomate y cebolla pochada',
        },
        {
          name: 'Buey Burguer',
          price: 5.5,
          description:
            'Pan de sésamo, Carne de Buey, bacon, Queso, Cebolla blanca, lechuga y tomate',
        },
        {
          name: 'Burguer completa',
          price: 4.8,
          description:
            'Pan de sésamo, Carne de vacuno, Queso, Cebolla blanca, lechuga y tomate',
        },
      ],
    },
    {
      name: 'Sandwiches',
      items: [
        {
          name: 'Sandwich Paluba',
          price: 5,
          description:
            'Primer piso de ensaladilla de pollo desmenuzado. Segundo piso de queso, jamón york y huevo',
        },
        {
          name: 'Sandwich Club',
          price: 5,
          description:
            'Dos pisos de pollo, jamón york, bacon, queso Edam, lechuga, tomate y mayonesa',
        },
        {
          name: 'Sandwich Vegetal',
          price: 3.5,
          description: 'Atún, pico de gallo, lechuga y salsa césar',
        },
      ],
    },
    {
      name: 'Viva México 🇲🇽',
      items: [
        {
          name: 'Tacos de lagarto ibérico',
          price: 5,
          description:
            '3 x Tortilla de trigo, lagarto ibérico, queso chedar y cilantro',
        },
        {
          name: 'Tacos de carne',
          price: 4.5,
          description: '3 x Tortilla de trigo, carne, pico de gallo y lima',
        },
        {
          name: 'Tacos de pollo',
          price: 4.5,
          description:
            '3 x Tortilla de trigo, pollo, mix de quesos y salsa Garden',
        },
        {
          name: 'Pulled Pork Tacos',
          price: 5,
          description:
            '3 x Tortilla de maíz, pulled pork, aguacate, cebolla encurtida y pepinillos',
        },
        {
          name: 'Tacos de langostinos',
          price: 5,
          description:
            '2 x Tortilla de maíz, pico de gallo, langostinos en tempura, salsa brava y cebolla encurtida',
        },
      ],
    },
    {
      name: 'Más México',
      items: [
        {
          name: 'Fajita de pollo',
          price: 6,
          description:
            'Pollo, pimientos, tortillas de trigo, crema agria, queso y guacamole',
        },
        {
          name: 'Burrito',
          price: 5.5,
          description:
            'Tortilla de trigo y Tomate, arroz salvaje, pollo, maíz, mix de quesos y salsa Garden. Se acompaña con salsa alioli',
        },
        {
          name: 'Enchilada de Pollo',
          price: 5,
          description:
            'Tortilla de trigo y tomate,  salsa mojo picón, mix de quesos, pollo, pico de gallo, crema agria y cebolla roja',
        },
      ],
    },
    {
      name: 'Quesadillas',
      items: [
        {
          name: 'Quesadilla de carne',
          price: 4.5,
          description: 'Tortilla de trigo, carne y mix de quesos',
        },
        {
          name: 'Quesadilla de pollo',
          price: 4.5,
          description: 'Tortilla de trigo, pollo, maíz y mix de quesos',
        },
        {
          name: 'Quesadilla BBQ',
          price: 4.5,
          description:
            'Tortilla de trigo, bacon, mix de quesos y salsa barbacoa',
        },
      ],
    },
    {
      name: "Hot Dog's",
      items: [
        {
          name: 'Hot Dog XL',
          price: 3,
          description: 'Con pico de gallo o queso y cebolla frita',
        },
      ],
    },
    {
      name: 'Postres',
      items: [
        {
          name: 'Arroz con leche',
          price: 3.5,
        },
        {
          name: 'Panacota',
          price: 3.5,
        },
        {
          name: 'Coulant de chocolate',
          price: 3.5,
        },
      ],
    },
  ],
};
