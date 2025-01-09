import {
  PropsWithClassName,
  StrictPropsWithChildren,
} from '@/shared/type/react';

export type Props = StrictPropsWithChildren<
  PropsWithClassName<{
    /**
     * 색상
     *
     * @default secondary
     */
    type?: 'secondary' | 'primary';
  }>,
  string
>;
