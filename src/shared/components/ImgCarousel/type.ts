import { PropsWithClassName } from '@/shared/type/react';

export type Props = PropsWithClassName<{
  /**
   * 캐러셀 이미지 배열
   */
  imgList: string[];

  /**
   * 캐러셀 이미지 alt
   *
   * @default "캐러셀 이미지"
   * @example "컨텐츠 이미지"
   */
  imgAlt?: string;

  /**
   * 케러셀 무한 반복 여부
   *
   * @default true
   */
  infiniteLoop?: boolean;

  /**
   * 이미지 클릭 이벤트
   */
  onClickImg?: (imgPath: string, i: number) => void;

  /**
   * 이미지 가로 세로 비율
   *
   * @default "1 / 1"
   * @example "390 / 336" 배너 커러셀
   */
  aspectRatio?: string;

  /**
   * 자동으로 회전 여부
   *
   * @default false
   */
  auto?: boolean;
}>;
