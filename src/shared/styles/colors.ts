export const COLORS = {
  primary: {
    '50': '#F2F7FD',
    '100': '#E4EDFA',
    '200': '#C2D9F5',
    '300': '#8DBAEC',
    '400': '#5097E0',
    '500': '#297ACE',
    '600': '#1C63B7',
    '700': '#174B8D',
    '800': '#174175',
    '900': '#183862',
    '950': '#102341',
  },
  secondary: {
    '50': '#F7F7F7',
    '100': '#F0F0F0',
    '200': '#E3E3E3',
    '300': '#D1D1D1',
    '400': '#BDBDBD',
    '500': '#AAAAAA',
    '600': '#969696',
    '700': '#818181',
    '800': '#6A6A6A',
    '900': '#585858',
    '950': '#333333',
  },
} as const;

export type PrimaryColorKey = keyof (typeof COLORS)['primary'];
export type PrimaryColor = (typeof COLORS)['primary'][PrimaryColorKey];

export type SecondaryColorKey = keyof (typeof COLORS)['secondary'];
export type SecondaryColor = (typeof COLORS)['secondary'][SecondaryColorKey];
