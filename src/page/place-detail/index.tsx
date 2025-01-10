'use client';

import { CategoryChipSmall } from '@/shared/components/chips/CategoryChipSmall';
import { Header } from './components/Header';
import MapIcon from '@/shared/icon/map-icon.svg';
import { HorizontalDivider } from '@/shared/components/dividers/HorizontalDivider';
import { PlaceTab } from './components/PlaceTab';
import { BookmarkButton } from '@/page/place-detail/components/BookmarkButton';
import { CreateReviewButton } from '@/page/place-detail/components/CreateReviewButton';
import { useGetPlaceTabType } from '@/page/place-detail/hooks/useGetPlaceTabType';
import { InfoTabContent } from '@/page/place-detail/components/InfoTabContent';
import { PLACE_TAB_TYPE } from '@/page/place-detail/type';
import { MenuTabContent } from '@/page/place-detail/components/MenuTabContent';
import { ReviewTabContent } from '@/page/place-detail/components/ReviewTabContent';

export const PlaceDetailPage = () => {
  const { type } = useGetPlaceTabType();

  return (
    <div className="relative max-w-[600px] w-full h-[100vh] flex flex-col mx-auto">
      <Header />
      <main className="flex-1 overflow-y-scroll scrollbar-hide">
        <div className="relative w-full aspect-w-4 aspect-h-3 test-border">
          컨텐츠 이미지 영역
        </div>
        <article className="m-[20px]">
          <header>
            <h2 className="text-medium-20-120">
              투썸 플레이스 인천 인하대 후문점
            </h2>
          </header>
          <main className="mt-[6px] flex flex-col">
            <div className="flex">
              <div className="map-icon-area mr-[4px]">
                <MapIcon className="w-[14px] fill-secondary-500" />
              </div>
              <div>
                <h3 className="text-secondary-500 font-normal">
                  인천광역시 미추홀구 인하로 75 2층,3층
                </h3>
              </div>
            </div>
            <div className="mt-[10px] gap-[4px] h-[20px] flex">
              <CategoryChipSmall>카테고리1</CategoryChipSmall>
              <CategoryChipSmall>카테고리2</CategoryChipSmall>
              <div className="py-[4px] px-[8px] font-normal text-[10px] text-secondary-900">
                (999+)
              </div>
            </div>
          </main>
        </article>
        <HorizontalDivider />
        <div className="place-tab-area mt-[10px]">
          <PlaceTab />
        </div>
        {type === PLACE_TAB_TYPE.INFO && <InfoTabContent />}
        {type === PLACE_TAB_TYPE.MENU && <MenuTabContent />}
        {type === PLACE_TAB_TYPE.REVIEW && <ReviewTabContent />}
      </main>
      <footer className="flex items-center gap-[16px] h-[60px] bottom-0 w-full py-[px] px-[16px] shadow-[2px_0px_12px_0px_rgba(0,0,0,0.12)]">
        <div className="w-[42px] h-[42px]">
          <BookmarkButton />
        </div>
        <div className="flex-1 h-[42px]">
          <CreateReviewButton />
        </div>
      </footer>
    </div>
  );
};
