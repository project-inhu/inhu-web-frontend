'use client';

import { PlaceTabButton } from '@/page/place-detail/components/PlaceTabButton';
import { useGetPlaceTabType } from '@/page/place-detail/hooks/useGetPlaceTabType';
import { PLACE_TAB_TYPE } from '@/page/place-detail/type';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const PlaceTab = () => {
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { type } = useGetPlaceTabType();

  const infoBtnClickEvent = () => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', PLACE_TAB_TYPE.INFO);

    router.push(path + '?' + params.toString());
  };

  const menuBtnClickEvent = () => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', PLACE_TAB_TYPE.MENU);

    router.push(path + '?' + params.toString());
  };

  const reviewBtnClickEvent = () => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', PLACE_TAB_TYPE.REVIEW);

    router.push(path + '?' + params.toString());
  };

  return (
    <div className="flex">
      <div className="h-[37px] flex-1">
        <PlaceTabButton
          active={type === PLACE_TAB_TYPE.INFO}
          onClick={infoBtnClickEvent}
        >
          가게정보
        </PlaceTabButton>
      </div>
      <div className="h-[37px] flex-1">
        <PlaceTabButton
          active={type === PLACE_TAB_TYPE.MENU}
          onClick={menuBtnClickEvent}
        >
          메뉴
        </PlaceTabButton>
      </div>
      <div className="h-[37px] flex-1">
        <PlaceTabButton
          active={type === PLACE_TAB_TYPE.REVIEW}
          onClick={reviewBtnClickEvent}
        >
          리뷰
        </PlaceTabButton>
      </div>
    </div>
  );
};
