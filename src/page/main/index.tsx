'use client';

import { PlaceSection } from '@/page/main/components/PlaceSection';
import { MainBanner } from '@/shared/components/MainBanner';
import MainLogo from '@/shared/icon/logo.svg';

export const MainPage = () => {
  return (
    <div>
      <header className="px-[20px]">
        <h1 className="logo-area">
          <MainLogo className="w-[80px] mt-[12px]" />
        </h1>
        <div className="banner-area w-full mt-[16px] aspect-w-5 aspect-h-2">
          <MainBanner></MainBanner>
        </div>
      </header>
      <main className="flex-1">
        <PlaceSection className="mt-[28px]" title="인하대 후문에 새로 생긴 곳">
          인하대 후문에
          <br />
          새로 생긴 곳이에요!
        </PlaceSection>
        <PlaceSection className="mt-[36px]" title="추천드리는 장소">
          추천드리는 장소예요!
        </PlaceSection>
        <PlaceSection className="mt-[36px]" title="인하프로러들의 장소">
          인후프로러들의 여긴 어때요?
        </PlaceSection>
      </main>
    </div>
  );
};
