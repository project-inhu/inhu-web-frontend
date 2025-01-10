import { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config';

type Font = ResolvableTo<
  KeyValuePair<
    string,
    | string
    | [fontSize: string, lineHeight: string]
    | [
        fontSize: string,
        configuration: Partial<{
          lineHeight: string;
          letterSpacing: string;
          fontWeight: string | number;
        }>
      ]
  >
>;

export const FONTS: Font = {
  'regular-10-120': [
    '10px',
    {
      fontWeight: 400,
      lineHeight: '1.2',
    },
  ],
  'regular-10-140': [
    '10px',
    {
      fontWeight: 400,
      lineHeight: '1.4',
    },
  ],
  'regular-12-120': [
    '12px',
    {
      fontWeight: 400,
      lineHeight: '1.2',
    },
  ],
  'regular-12-140': [
    '12px',
    {
      fontWeight: 400,
      lineHeight: '1.4',
    },
  ],
  'regular-13-120': [
    '13px',
    {
      fontWeight: 400,
      lineHeight: '1.2',
    },
  ],
  'regular-14-120': [
    '14px',
    {
      fontWeight: 400,
      lineHeight: '1.2',
    },
  ],
  'regular-14-140': [
    '14px',
    {
      fontWeight: 400,
      lineHeight: '1.4',
    },
  ],
  'medium-12-120': [
    '12px',
    {
      fontWeight: 500,
      lineHeight: '1.2',
    },
  ],
  'medium-14-120': [
    '14px',
    {
      fontWeight: 500,
      lineHeight: '1.2',
    },
  ],
  'medium-15-140': [
    '15px',
    {
      fontWeight: 500,
      lineHeight: '1.4',
    },
  ],
  'medium-16-120': [
    '16px',
    {
      fontWeight: 500,
      lineHeight: '1.2',
    },
  ],
  'medium-16-140': [
    '16px',
    {
      fontWeight: 500,
      lineHeight: '1.4',
    },
  ],
  'medium-18-120': [
    '18px',
    {
      fontWeight: 500,
      lineHeight: '1.2',
    },
  ],
  'medium-20-120': [
    '20px',
    {
      fontWeight: 500,
      lineHeight: '1.2',
    },
  ],
  'semibold-18-120': [
    '18px',
    {
      fontWeight: 600,
      lineHeight: '1.2',
    },
  ],
  'semibold-18-140': [
    '18px',
    {
      fontWeight: 600,
      lineHeight: '1.4',
    },
  ],
  'semibold-20-140': [
    '20px',
    {
      fontWeight: 600,
      lineHeight: '1.4',
    },
  ],
};
