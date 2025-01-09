'use client';

import LeftArrowIcon from '@/shared/icon/left-arrow-icon.svg';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  const btnClickEvent = () => {
    router.back();
  };

  return (
    <button className="w-full h-full" onClick={btnClickEvent}>
      <LeftArrowIcon className="w-[24px] fill-black" />
    </button>
  );
};
