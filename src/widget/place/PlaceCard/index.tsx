import { PlaceTag } from '@/widget/place/PlaceTag';
import MapIcon from '@/shared/icon/map-icon.svg';
import { Props } from './type';

export const PlaceCard = ({ onClick }: Props) => {
  return (
    <article
      className="relative w-[120px] cursor-pointer inline-block"
      onClick={() => {
        onClick && onClick();
      }}
    >
      <div className="img-area w-full aspect-h-1 aspect-w-1 bg-secondary-300 rounded-[8px]"></div>
      <header className="absolute top-[5px] right-[5px]">
        <PlaceTag name="식당" />
      </header>
      <main>
        <h1 className="place-name-area text-medium-14-120 mt-[8px] line-clamp-2">
          상호명 이름
        </h1>
        <div className="flex mt-[7px] items-center">
          <div className="w-[12px] h-[12px]">
            <MapIcon className="w-[12px] fill-secondary-500" />
          </div>
          <span className="text-secondary-500 text-regular-12-120 font-normal line-clamp-1">
            상호 주소는 한 줄만 보여요상호 주소는 한 줄만 보여요상호 주소는 한
            줄만 보여요상호 주소는 한 줄만 보여요상호 주소는 한 줄만 보여요
          </span>
        </div>
      </main>
    </article>
  );
};
