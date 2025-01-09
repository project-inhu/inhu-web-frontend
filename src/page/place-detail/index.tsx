import { CategoryChip } from '@/shared/components/chips/CategoryChipSmall';
import { Header } from './components/Header';
import MapIcon from '@/shared/icon/map-icon.svg';
import { HorizontalDivider } from '@/shared/components/dividers/HorizontalDivider';
import { PlaceTab } from './components/PlaceTab';

export const PlaceDetailPage = () => {
  return (
    <div className="relative max-w-[600px] w-full h-[100vh] flex flex-col mx-auto">
      <Header />
      <main className="flex-1 overflow-y-scroll scrollbar-hide pb-[37px]">
        <div className="relative w-full aspect-w-4 aspect-h-3 test-border">
          컨텐츠 이미지 영역
        </div>
        <article className="m-[20px]">
          <header>
            <h2 className="font-medium text-[20px]">상호명</h2>
          </header>
          <main className="mt-[6px] flex flex-col">
            <div className="flex">
              <div className="map-icon-area mr-[4px]">
                <MapIcon className="w-[14px] fill-secondary-500" />
              </div>
              <div>
                <h3 className="text-secondary-500 font-normal line-clamp-2">
                  상호 주소가상호 주소가상호 주소가상호 주소가상호 주소가상호
                  주소가상호 주소가상호 주소가상호 주소가상호 주소가상호
                  주소가상호 주소가상호 주소가
                </h3>
              </div>
            </div>
            <div className="mt-[10px] gap-[4px] h-[20px] flex">
              <CategoryChip>카테고리1</CategoryChip>
              <CategoryChip>카테고리2</CategoryChip>
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
      </main>
    </div>
  );
};
