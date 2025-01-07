'use client';

import { BottomTabButton } from './components/BottomTabButton';
import HomeIcon from '@/shared/icon/home-icon.svg';
import MapIcon from '@/shared/icon/map-icon.svg';
import BookmarkIcon from '@/shared/icon/bookmark-icon.svg';
import MypageIcon from '@/shared/icon/mypage-icon.svg';
import { usePathname, useRouter } from 'next/navigation';

export const BottomTab = () => {
  const path = usePathname();
  const router = useRouter();

  const homeBtnClickEvent = () => {
    router.replace('/main');
  };

  const mapBtnClickEvent = () => {
    router.replace('/main/map');
  };

  const bookmarkBtnClickEvent = () => {
    router.replace('/main/bookmark');
  };

  const mypageBtnClickEvent = () => {
    router.replace('/main/mypage');
  };

  return (
    <nav className="flex border-t-[1px] border-solid border-secondary-200">
      <div className="w-[25%] h-[56px]">
        <BottomTabButton
          name="홈"
          isActivated={path === '/main'}
          onClick={homeBtnClickEvent}
        >
          <HomeIcon />
        </BottomTabButton>
      </div>
      <div className="w-[25%] h-[56px]">
        <BottomTabButton
          name="지도"
          isActivated={path === '/main/map'}
          onClick={mapBtnClickEvent}
        >
          <MapIcon />
        </BottomTabButton>
      </div>
      <div className="w-[25%] h-[56px]">
        <BottomTabButton
          name="북마크"
          isActivated={path === '/main/bookmark'}
          onClick={bookmarkBtnClickEvent}
        >
          <BookmarkIcon />
        </BottomTabButton>
      </div>
      <div className="w-[25%] h-[56px]">
        <BottomTabButton
          name="마이페이지"
          isActivated={path === '/main/mypage'}
          onClick={mypageBtnClickEvent}
        >
          <MypageIcon />
        </BottomTabButton>
      </div>
    </nav>
  );
};
