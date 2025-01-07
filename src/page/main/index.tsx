'use client';

import { MainBanner } from '@/shared/components/MainBanner';
import MainLogo from '@/shared/icon/logo.svg';
import { PlaceCard } from '@/widget/place/PlaceCard';
import ScrollContainer from 'react-indiana-drag-scroll';

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
        <section className="w-full mt-[28px]">
          <h2 className="ml-[20px] font-semibold text-[20px]">
            인하대 후문에
            <br />
            새로 생긴 곳이에요!
          </h2>
          <div className="mt-[12px]">
            <ScrollContainer className="flex">
              <div className="flex gap-[8px] [&>*:first-child]:ml-[20px] [&>*:last-child]:mr-[20px]">
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
              </div>
            </ScrollContainer>
          </div>
        </section>
      </main>
    </div>
  );
};
