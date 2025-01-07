import { StrictPropsWithChildren } from '@/shared/type/react';

export type Props = StrictPropsWithChildren<{
  /**
   * 버튼 이름
   */
  name: string;

  /**
   * 클릭 이벤트
   */
  onClick?: () => void;

  /**
   * 활성 상태 여부
   *
   * @default false
   */
  isActivated?: boolean;
}>;
