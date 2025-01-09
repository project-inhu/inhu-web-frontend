'use client';

import { cn } from '@/shared/helper/utils';
import { Props } from './type';
import { PlaceCard } from '@/widget/place/PlaceCard';
import ScrollContainer from 'react-indiana-drag-scroll';
import RightArrowIcon from '@/shared/icon/right-arrow-icon.svg';
import { useRouter } from 'next/navigation';

export const PlaceSection = ({ className = '', children }: Props) => {
  const router = useRouter();

  const placeCardClickEvent = () => {
    router.push('/place/1');
  };

  return (
    <section className={cn('w-full', className)}>
      <h2 className="relative mx-[20px] font-semibold text-[20px]">
        {children}
        <button className="absolute bottom-[50%] translate-y-[50%] right-0">
          <div className="flex items-center">
            <span className="text-[12px] text-secondary-500">전체보기</span>
            <RightArrowIcon className="w-[24px]" />
          </div>
        </button>
      </h2>
      <div className="mt-[12px]">
        <ScrollContainer className="flex">
          <div className="flex gap-[8px] [&>*:first-child]:ml-[20px] [&>*:last-child]:mr-[20px]">
            {Array(5)
              .fill(0)
              .map((elem, i) => (
                <PlaceCard key={i} onClick={placeCardClickEvent} />
              ))}
          </div>
        </ScrollContainer>
      </div>
    </section>
  );
};
