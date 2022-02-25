export type ThemeName =
  | 'default'
  | 'fish'
  | 'meat'
  | 'italian'
  | 'brewery'
  | 'tapas'
  | 'asian';

interface ConstTheme {
  secondaryColor: string;
}

type ContsThemeRecord = Record<ThemeName, ConstTheme>;

export const varsRestaurantType: ContsThemeRecord = {
  default: { secondaryColor: '#C5B100' },
  fish: { secondaryColor: '#35A7CB' },
  meat: { secondaryColor: '#EB1B1B' },
  italian: { secondaryColor: '#EB1B1B' },
  brewery: { secondaryColor: '#862447' },
  tapas: { secondaryColor: '#EB1B1B' },
  asian: { secondaryColor: '#6E0095' },
};
