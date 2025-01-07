import { MainBanner } from '@/shared/components/MainBanner';
import MainLogo from '@/shared/icon/logo.svg';

export const MainPage = () => {
  return (
    <div>
      <header className="px-[20px]">
        <div className="logo-area">
          <MainLogo className="w-[80px] mt-[12px]" />
        </div>
        <div className="banner-area w-full mt-[16px] aspect-w-5 aspect-h-2">
          <MainBanner></MainBanner>
        </div>
      </header>
      <main className="flex-1"></main>
    </div>
  );
};
