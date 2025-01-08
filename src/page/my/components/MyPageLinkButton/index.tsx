'use client';

import { Props } from './type';
import RightArrowIcon from '@/shared/icon/right-arrow-icon.svg';

export const MyPageLinkButton = ({ name, onClick }: Props) => {
  return (
    <button
      className="w-full h-full flex justify-between items-center"
      onClick={() => {
        onClick && onClick();
      }}
    >
      <span className="text-[12px] text-secondary-900 font-normal">{name}</span>
      <RightArrowIcon />
    </button>
  );
};
