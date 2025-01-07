import { ReactNode } from 'react';

/**
 * 자식 요소를 가지는 컴포넌트의 Props 정의
 */
export type StrictPropsWithChildren<T = unknown, U = ReactNode> = T & {
  /**
   * 자식 요소
   */
  children: U;
};

/**
 * className을 가지는 컴포넌트
 */
export type PropsWithClassName<T = unknown> = T & {
  /**
   * 클래스
   *
   * @default ""
   */
  className?: string;
};
