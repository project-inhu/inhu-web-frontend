'use client';

import { useRouter } from 'next/navigation';
import CloseIcon from '../../icon/close-icon.svg';

export const CloseButton = () => {
  const router = useRouter();

  const btnClickEvent = () => {
    router.back();
  };

  return (
    <button className="w-full h-full" onClick={btnClickEvent}>
      <CloseIcon />
    </button>
  );
};
