import { useEffect, useRef, useState } from 'react';
import { Props } from './type';
import BottomArrowIcon from '@/shared/icon/bottom-arrow-icon.svg';
import TopArrowIcon from '@/shared/icon/top-arrow-icon.svg';
import { cn } from '@/shared/helper/utils';

export const ReviewContent = ({ contents }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);

  const [isViewAll, setIsViewAll] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (divRef.current) {
      const element = divRef.current;
      setIsOverflowing(element.scrollHeight > element.clientHeight);
    }
  }, [contents]);

  const viewMoreBtnClickEvent = () => {
    setIsViewAll(!isViewAll);
  };

  return (
    <>
      <div
        ref={divRef}
        className={cn(
          'text-regular-12-140 duration-100 transition-all',
          isViewAll ? '' : 'line-clamp-2'
        )}
      >
        {contents}
      </div>
      {isOverflowing && (
        <button
          className="flex items-center text-regular-12-120 text-secondary-500"
          onClick={viewMoreBtnClickEvent}
        >
          {!isViewAll && (
            <>
              더보기
              <BottomArrowIcon className="w-[24px]" />
            </>
          )}
          {isViewAll && (
            <>
              접기
              <TopArrowIcon className="w-[24px]" />
            </>
          )}
        </button>
      )}
    </>
  );
};
