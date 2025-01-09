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
        <PlaceSection className="mt-[28px]">
          인하대 후문에
          <br />
          새로 생긴 곳이에요!
        </PlaceSection>
        <PlaceSection className="mt-[36px]">추천드리는 장소예요!</PlaceSection>
        <PlaceSection className="mt-[36px]">
          인후프로러들의 여긴 어때요?
        </PlaceSection>
      </main>
    </div>
  );
};
