import { BottomTabButton } from './components/BottomTabButton';
import HomeIcon from '@/shared/icon/home-icon.svg';
import MapIcon from '@/shared/icon/map-icon.svg';
import BookmarkIcon from '@/shared/icon/bookmark-icon.svg';
import MypageIcon from '@/shared/icon/mypage-icon.svg';

export const BottomTab = () => {
  return (
    <nav className="flex border-t-[1px] border-solid border-secondary-200">
      <div className="w-[25%] h-[56px]">
        <BottomTabButton name="홈">
          <HomeIcon />
        </BottomTabButton>
      </div>
      <div className="w-[25%] h-[56px]">
        <BottomTabButton name="지도">
          <MapIcon />
        </BottomTabButton>
      </div>
      <div className="w-[25%] h-[56px]">
        <BottomTabButton name="북마크">
          <BookmarkIcon />
        </BottomTabButton>
      </div>
      <div className="w-[25%] h-[56px]">
        <BottomTabButton name="마이페이지">
          <MypageIcon />
        </BottomTabButton>
      </div>
    </nav>
  );
};
