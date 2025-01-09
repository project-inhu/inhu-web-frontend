export const PLACE_TAB_TYPE = {
  INFO: 'info',
  MENU: 'menu',
  REVIEW: 'review',
} as const;

export type PlaceTabType = (typeof PLACE_TAB_TYPE)[keyof typeof PLACE_TAB_TYPE];
