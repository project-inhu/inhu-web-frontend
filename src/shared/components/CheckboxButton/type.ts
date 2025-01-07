export type Props = {
  /**
   * 기본 클릭 상태
   *
   * @default false
   */
  defaultClick?: boolean;

  /**
   * 클릭 이벤트
   */
  onClick?: (state: boolean) => void;
};
