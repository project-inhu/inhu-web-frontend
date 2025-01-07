import { BottomTabButton } from './components/BottomTabButton';
import HomeIcon from '@/shared/icon/home-icon.svg';

export const BottomTab = () => {
  return (
    <nav className="flex border-t-[1px] border-solid border-secondary-200">
      <div className="w-[25%] h-[56px]">
        <BottomTabButton name="홈">
          <HomeIcon />
        </BottomTabButton>
      </div>
      <div className="w-[25%] h-[56px]">
        <BottomTabButton name="홈">
          <HomeIcon />
        </BottomTabButton>
      </div>
      <div className="w-[25%] h-[56px]">
        <BottomTabButton name="홈">
          <HomeIcon />
        </BottomTabButton>
      </div>
      <div className="w-[25%] h-[56px]">
        <BottomTabButton name="홈">
          <HomeIcon />
        </BottomTabButton>
      </div>
    </nav>
  );
};
