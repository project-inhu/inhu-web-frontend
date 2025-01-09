'use client';

import { useSearchParams } from 'next/navigation';
import { BackButton } from '../../components/BackButton';

export const Header = () => {
  const searchPrams = useSearchParams();

  const title = searchPrams.get('title') || '';

  return (
    <header className="relative h-[58px] w-full flex items-center justify-center">
      <h1 className="text-[18px] font-medium">{title}</h1>
      <div className="absolute w-[24px] h-[24px] left-[16px]">
        <BackButton />
      </div>
    </header>
  );
};
