import { PropsWithClassName } from '@/shared/type/react';
import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren<
  PropsWithClassName<{
    /**
     * 컨텐츠 클릭 시 이동되는 컨텐츠 헤더 제목
     *
     * @default ""
     */
    title?: string;
  }>
>;
