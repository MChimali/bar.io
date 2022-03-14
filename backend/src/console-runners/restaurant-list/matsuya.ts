import { RestaurantApiModel } from 'pods/restaurant';

export const restaurant: RestaurantApiModel = {
  id: undefined,
  name: 'Matsuya',
  urlName: 'matsuya',
  phone: '951 46 79 38',
  address: 'Av. Pío Baroja, 10, 29017 Málaga',
  locationUrl:
    'https://www.google.com/maps/place/Restaurante+Japon%C3%A9s+-+MATSUYA+JAPON%C3%89S/@36.7202471,-4.3640262,15z/data=!3m1!5s0xd725836e42489f5:0xe05bc4167222c644!4m12!1m6!3m5!1s0x0:0x2e488a598c96b84c!2sRestaurante+Japon%C3%A9s+-+MATSUYA+JAPON%C3%89S!8m2!3d36.7202471!4d-4.3640262!3m4!1s0x0:0x2e488a598c96b84c!8m2!3d36.7202471!4d-4.3640262',
  communitySourceUrl: '',
  official: false,
  description: '',
  menuDate: new Date('2022-03-14'),
  theme: 'asian',
  menu: [
    {
      name: 'Entrantes',
      items: [
        {
          name: '1 Ensaladas de algas y pepino aliñados',
          price: 4.50
        },
        {
          name: '2 Ensaladas de algas de wakame',
          price: 5.95
        },
        {
          name: '3 Ensalada de la matsuya',
          price: 6.50
        },
        {
          name: '4 Ensalada de algas kaiso variado',
          price: 6.50
        },
        {
          name: '4a Endamame',
          price: 3
        },
        {
          name: '5 Sopa de miso',
          price: 2.80
        },
        {
          name: '6 Sopa de marisco',
          price: 3.50
        },
        {
          name: '7 Mini rollo (4 und)',
          price: 4
        },
        {
          name: '8 Roll gambas',
          price: 4.50
        },
        {
          name: '9 Empanadillas (4 und)',
          price: 4.20
        },
        {
          name: '10 Empanadillas de gambas (4 und)',
          price: 4.50
        },
        {
          name: '11 XiuMai (4 und)',
          price: 4.20
        },
        {
          name: '12 Tataki Atún',
          price: 7.50
        }
      ]
    },
    {
      name: 'Pinchitos',
      items: [
        {
          name: '13 Pinchitos de pollo',
          price: 3.20
        },
        {
          name: '14 Pinchitos de pato',
          price: 4.20
        },
        {
          name: '15 Pinchitos de ternera con queso',
          price: 4.50
        },
        {
          name: '16 Pinchitos de gambas',
          price: 4.70
        },
        {
          name: '17 Pinchitos de setas Japonesa',
          price: 3.10
        },
        {
          name: '18 Pinchitos de salmón',
          price: 4.10
        },
      ]
    },
    {
      name: 'Nigiri sushi (2 und)',
      items: [
        {
          name: '19 Sushi salmón',
          price: 3
        },
        {
          name: '20 Sushi salmón y aguacate',
          price: 3.20
        },
        {
          name: '21 Sushi atún',
          price: 3.70
        },
        {
          name: '22 Sushi dorada',
          price: 3
        },
        {
          name: '23 Sushi lubina',
          price: 3
        },
        {
          name: '24 Sushi gambas cocidas',
          price: 3
        },
        {
          name: '25 Sushi gambas dulces',
          price: 3.10
        },
        {
          name: '26 Sushi pez mantequilla',
          price: 3.10
        },
        {
          name: '27 Sushi pulpo',
          price: 3
        },
        {
          name: '28 Sushi anguila',
          price: 4.10
        },
        {
          name: '29 Sushi caballa',
          price: 2.10
        },
        {
          name: '30 Sushi tortilla',
          price: 3
        },
        {
          name: '31 Sushi pez limón',
          price: 4
        },
        {
          name: '32 Sushi vieiras',
          price: 4.10
        },
        {
          name: '33 Sushi tofu frito',
          price: 3
        },
        {
          name: '34 Sushi cangrejo',
          price: 2.50
        },
        {
          name: '35 Sushi concha rojas',
          price: 4.10
        },
        {
          name: '36 Hueva pez volador',
          price: 5.20
        },
        {
          name: '37 Huevas de salmón',
          price: 5.50
        },
        {
          name: '38 Hueva de erizo de mar',
          price: 6.20
        },
        {
          name: '39 Sushi mixto (7 sushi, 6 maki)',
          price: 12.50
        },
        {
          name: '40 Sushi en barco (14 sushi, 6 maki)',
          price: 24.50
        },
        {
          name: '41 Sushi en barco (10 sushi, 6 maki, 8 uramaki)',
          price: 25.50
        },
        {
          name: 'Sushi flameado',
          price: 4.95
        },
      ],
    },
    {
      name: 'Maki',
      items: [
        {
          name: 'Uramaqui especial queso',
          price: 8.95,
        },
        {
          name: 'Uramaqui especial anguila',
          price: 13.95,
        },
        {
          name: 'Uramaqui salmón flameado',
          price: 12.95,
        },
        {
          name: '42 Maki de pepino (6 und)',
          price: 4.10,
        },
        {
          name: '43 Maki de robo amarillo (6 und)',
          price: 3.50,
        },
        {
          name: '44 Maki de aguacate (6 und)',
          price: 4.10,
        },
        {
          name: '45 Maki de salmón (6 und)',
          price: 5.10,
        },
        {
          name: '46 Maki de salmón y aguacate (8 und)',
          price: 6.50,
        },
        {
          name: '47 Maki frito matsuya (8 und)',
          price: 10.50,
        },
        {
          name: '48 Maki de atún (6 und)',
          price: 6,
        },
        {
          name: '49 Maki de anguila (6 und)',
          price: 6.20,
        },
        {
          name: '50 Maki de langostino de tempura (8 und)',
          price: 7.50,
        },
        {
          name: '50a Maki de pato (8 und)',
          price: 7.50,
        },
        {
          name: '51 Maki especial de cebolla frita (8 und)',
          price: 8.50,
        },
        {
          name: '52 Maki de california (8 und)',
          price: 9.50,
        },
        {
          name: '53 Maki de langostinos tempura en dos sabores (8 und)',
          price: 11.50,
        },
        {
          name: '54 Maki de atún picante',
          price: 8.95,
        },
        {
          name: '55 Maki mixto (20 und)',
          price: 18.50,
        },
        {
          name: '56 Temaki anguila con aguacate (1 und)',
          price: 4.20,
        },
        {
          name: '57 Temaki atún con aguacate (1 und)',
          price: 4.10,
        },
        {
          name: '58 Temaki salmón con aguacate (1 und)',
          price: 4.10,
        },
      ],
    },
    {
      name: 'Sashimi',
      items: [
        {
          name: '59 Sashimi de salmón (5 und)',
          price: 5,
        },
        {
          name: '60 Sashimi de atún (5 und)',
          price: 6.10,
        },
        {
          name: '61 Sashimi de caballa (5 und)',
          price: 3.10,
        },
        {
          name: '62 Sashimi de dorada (5 und)',
          price: 4.55,
        },
        {
          name: '63 Sashimi de pulpo (5 und)',
          price: 4.10,
        },
        {
          name: '64 Sashimi de pez limón (5 und)',
          price: 6,
        },
        {
          name: '65 Sashimi de pez mantequilla (5 und)',
          price: 5,
        },
        {
          name: '66 Sashimi de anguila (5 und)',
          price: 6.50,
        },
        {
          name: '67 Sashimi de gambas dulces (5 und)',
          price: 3.50,
        },
        {
          name: '68 Sashimi de concha rojas (5 und)',
          price: 7.20,
        },
        {
          name: '69 Sashimi de misto (18 und)',
          price: 16.50,
        },
        {
          name: '70 Sashimi de barco (30 und)',
          price: 27.50,
        },
        {
          name: '71 Sushi, Maki y Sashimi mixto',
          price: 25.50,
        },
      ]
    },
    {
      name: 'Tempura',
      items: [
        {
          name: '72 Tempura de verdura',
          price: 9.95,
        },
        {
          name: '73 Tempura de langostino',
          price: 11.50,
        },
        {
          name: '74 Tempura de langostino y verduras',
          price: 10.50,
        },
        {
          name: '75 Pollo frito con pan rallado',
          price: 9.95,
        },
        {
          name: '76 Cerdo frito con pan rallado',
          price: 10.50,
        },
        {
          name: '77 Pato frito con pan rallado',
          price: 12.50,
        },
      ]
    },
    {
      name: 'Arroz y Tallarines',
      items: [
        {
          name: '78 Arroz blanco',
          price: 2.50,
        },
        {
          name: '79 Arroz frito',
          price: 3.50,
        },
        {
          name: '80 Arroz sushi',
          price: 4.10,
        },
        {
          name: '81 Tallarines frito',
          price: 6.20,
        },
        {
          name: '81a Tallarines frito con gambas',
          price: 7.50,
        },
        {
          name: '82 Tallarines udon frito',
          price: 6.50,
        },
        {
          name: '83 Sopa de udon con mariscos',
          price: 9.50,
        },
        {
          name: '84 Sopa de udon con ternera',
          price: 9.20,
        },
        {
          name: '85 Ternera con salsa reveulto sobre arroz',
          price: 8.50,
        },
        {
          name: '86 Cerdo con salsa revuelto sobre arroz',
          price: 8.50
        },
      ]
    },
    {
      name: 'Teppanyaki',
      items: [
        {
          name: '87 Verdura mixta',
          price: 6
        },
        {
          name: '88 Teriyaki de pollo',
          price: 8.50,
        },
        {
          name: '89 Rollo de entrecot',
          price: 14.50,
        },
        {
          name: '90 Ternera mangolia - entrecot',
          price: 13.50,
        },
        {
          name: '91 Solomillo de ternera',
          price: 17.50,
        },
        {
          name: '92 Cerdo mangolia - solomillo',
          price: 11.50,
        },
        {
          name: '93 Langostinos (6 und)',
          price: 15.50,
        },
        {
          name: '94 Salmón',
          price: 10.50,
        },
        {
          name: '95 Atún',
          price: 15.50,
        },
        {
          name: '96 Vieiras',
          price: 15.50,
        },
        {
          name: '97 Pescado blanco',
          price: 8.50,
        },
        {
          name: '98 Pato magret',
          price: 13.50,
        },
      ]
    },
    {
      name: 'Menús',
      items: [
        {
          name: 'Menú degustación',
          price: 14.50,
          description: `Sopa miso, ensalda y mini rollo sushi(6)
          plato a elegir: Teriyaki de pollo y arroz/ salmón y arroz,
           Postr: helado de te,Mochi/café o Té Japonés`
        },
        {
          name: 'Menú Pareja',
          price: 46.50,
          description: `Ensalda y mini rollo (2)
          Empanadilla a la plancha (4)
          Sushi (4), Maki (8), Sashimi (6)
          Tempura langostino
          Tallarines frito con gambas
          Ternera mangolia
          Postre: Helado de té, Mochi, Café o Té Japonés`
        },
        {
          name: 'Menú del Día (A+B+C) Solo por medio día',
          price: 9.50,
          description: `A Plato: Sopa, ensalada y mini rollo
          B Plato a elegir:
          * Maki y sushi mixto (12)
          * Maki mixto (14)
          * Sashimi Mixto (8)
          * Teriyaki de pollo y arroz
          * Percado blanco y tallarines
          * Verdura mixta y arroz
          C Postre: Helado, Flan, Café o Té Japonés`
        }
      ]
    },
    {
      name: 'Vinos Tinto',
      items: [
        {
          name: 'Catania (Ribera del Duero)',
          price: 10, // No se entiende
        },
        {
          name: 'Cune Crianza (Rioja)',
          price: 15.90, // No se entiend
        },
        {
          name: 'Cune 3/8 Crianza (Rioja)',
          price: 9.50,
        },
        {
          name: 'Marqués de Cáceres Crianza (Rioja)',
          price: 18.90,
        },
        {
          name: 'Marqués de Cáceres 3/8 Crianza (Rioja)',
          price: 10.95,
        },
        {
          name: 'Muga Crianza (Rioja)',
          price: 29.80,
        },
        {
          name: 'Muga Reserva (Rioja)',
          price: 39.90,
        },
        {
          name: 'Protos Crianza (Ribera del Duero) (Rioja)',
          price: 24.90,
        },
        {
          name: 'Protos Reserva (Ribera del Duero) (Rioja)',
          price: 39.75,
        },
        {
          name: 'Finca (Ribera del Duero) (Rioja)',
          price: 98.90,
        },
      ],
    },
    {
      name: 'Vinos Rosado',
      items: [
        {
          name: 'René Barbier (Vino de la casa) (Penedés)',
          price: 10.50,
        },
        {
          name: 'Lambrusco (Penedés)',
          price: 10.95,
        },
        {
          name: 'Marqués de Cáceres 3/8 (Rioja)',
          price: 9.90,
        },
        {
          name: 'Marqués de Cáceres (Rioja)',
          price: 14.50,
        },
        {
          name: 'Peñascal',
          price: 12.95,
        },
        {
          name: 'Mateus Rose (Portugal)',
          price: 14.50,
        },
      ],
    },
    {
      name: 'Vinos Blancos',
      items: [
        {
          name: 'René Barbier (Vino de la casa) (Penedés)',
          price: 10.50,
        },
        {
          name: 'Mozaret (Rueda)',
          price: 12.95,
        },
        {
          name: 'Mantel Blanco Sauvignon (Rueda)',
          price: 18.90,
        },
        {
          name: 'Marqués de Cáceres (Rioja)',
          price: 14.95,
        },
        {
          name: 'Marqués de Cáceres 3/8 (Rioja)',
          price: 8.95,
        },
        {
          name: 'Viñasol (Penedés)',
          price: 14.50,
        },
        {
          name: 'Viñasol 3/8 (Penedés)',
          price: 8.25,
        },
        {
          name: 'Barbadillo (Tierra de Cádiz)',
          price: 13.50,
        },
        {
          name: 'Diamante (Rioja)',
          price: 12.95,
        },
      ],
    },
    {
      name: 'Cavas y Champagne',
      items: [
        {
          name: 'Moet Chandon Brutimperial (Francia)',
          price: 57.90,
        },
        {
          name: 'Jane Ventura Brut Nature (Penedés)',
          price: 30.90,
        },
        {
          name: 'Faustino Brut Reserva (Rioja)',
          price: 14.95,
        },
        {
          name: 'Faustino Semi-Seco (Rioja)',
          price: 14.95,
        },
        {
          name: 'Codorniu Benjamin (Penedés)',
          price: 8.95,
        },
      ]
    },
    {
      name: 'Bebidas japonesas',
      items: [
        {
          name: 'Cerveza Japonesas Sapporo AIC 4.5%',
          price: 3,
        },
        {
          name: 'Cerveza Japonesa Asahi AIC 5%',
          price: 3,
        },
        {
          name: 'Cerveza Japonesa Kirin',
          price: 3.30,
        },
        {
          name: 'Sake Vino de Arroz (Jarrita)',
          price: 8.30,
        },
        {
          name: 'Sake Japonés Botella (Gyumnmai) 135 ml',
          price: 12.70,
        },
        {
          name: 'Sake Japonés Botella (Seco) 300ml',
          price: 15.70,
        },
        {
          name: 'Sushi Wine (vino blanco especial para sushi) 250ml',
          price: 10.90,
        },
        {
          name: 'Sushi Wine 375 ml',
          price: 18,
        },
        {
          name: 'Umeshu (Licor de Ciruela Dulce)',
          price: 4,
        },
        {
          name: 'Souchu (Aguardiente de cebada)',
          price: 4,
        },
      ],
    },
    {
      name: 'Bebidas',
      items: [
        {
          name: 'Refresco 330ml',
          price: 2,
        },
        {
          name: 'Zumo',
          price: 1.80,
        },
        {
          name: 'Nestea 330ml',
          price: 2,
        },
        {
          name: 'Aguarius 330ml',
          price: 2,
        },
        {
          name: 'Alhambra especial',
          price: 1.90,
        },
        {
          name: 'Cerveza Sin Alcohol',
          price: 1.90,
        },
        {
          name: 'Heineken',
          price: 3,
        },
        {
          name: 'Tinto de Verano',
          price: 2,
        },
        {
          name: 'Sangría de Vino Jarra',
          price: 13.50,
        },
        {
          name: 'Sangría de Cava Jarra',
          price: 15.80,
        },
      ],
    },
    {
      name: 'Copas',
      items: [
        {
          name: 'Martini',
          price: 3.30
        },
        {
          name: 'Pacharán',
          price: 3.30,
        },
        {
          name: 'Licor de Hierbas',
          price: 3.50,
        },
        {
          name: 'Baileys',
          price: 3.50,
        },
        {
          name: 'Magno',
          price: 3.70,
        },
        {
          name: 'Carlos I',
          price: 7,
        },
        {
          name: 'Combinado',
          price: 6,
        },
        {
          name: 'Reserva',
          price: 3,
        },
      ]
    }
  ],
};
