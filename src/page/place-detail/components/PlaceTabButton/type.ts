import { StrictPropsWithChildren } from '@/shared/type/react';

export type Props = StrictPropsWithChildren<
  {
    /**
     * 활성 상태 여부
     */
    active: boolean;

    /**
     * 클릭 이벤트
     */
    onClick?: () => void;
  },
  string
>;
