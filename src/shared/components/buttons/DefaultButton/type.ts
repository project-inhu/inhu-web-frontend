import { StrictPropsWithChildren } from '@/shared/type/react';
import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren<{
  /**
   * 버튼 이름
   *
   * @default ""
   */
  name?: string;

  /**
   * 클릭 이벤트
   */
  onClick?: () => void;

  /**
   * 타입
   *
   * @default button
   */
  type?: 'submit' | 'button';

  /**
   * 활성화 여부
   *
   * @default true
   */
  active?: boolean;
}>;
