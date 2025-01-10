import MapIcon from '@/shared/icon/map-icon.svg';
import { CopyAddressButton } from '@/page/place-detail/components/CopyAddressButton';

export const InfoTabContent = () => {
  return (
    <>
      <div className="m-[20px] flex flex-col gap-[16px] text-regular-13-120">
        <div className="w-full flex">
          <p className="w-[88px]">상호명</p>
          <p className="flex-1">
            투썸 플레이스 인하대 인천점투썸 플레이스 인하대 인천점투썸 플레이스
            인하대 인천점투썸 플레이스 인하대 인천점
          </p>
        </div>

        <div className="w-full flex">
          <p className="w-[88px]">운영 시간</p>
          <p className="flex-1">
            평일 - 평일 운영시간을 볼 수 있어요.
            <br />
            주말 - 주말 운영시간을 볼 수 있어요.
          </p>
        </div>

        <div className="w-full flex">
          <p className="w-[88px]">운영 요일</p>
          <p className="flex-1">운영하는 요일과 휴무일을 볼 수 있어요.</p>
        </div>

        <div className="w-full flex">
          <p className="w-[88px]">전화번호</p>
          <p className="flex-1">010-xxx-xxx</p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-secondary-100"></div>
      <div className="m-[20px]">
        <div className="test-border h-[188px]"></div>
        <div className="mt-[8px] flex text-regular-12-120 text-secondary-500">
          <MapIcon className="w-[14px] fill-secondary-500 mr-[4px]" />
          <span>상호주소가 들어갈 자리예요.</span>
        </div>
        <div className="relative mt-[8px] w-[88px] h-[30px]">
          <CopyAddressButton />
        </div>
      </div>
    </>
  );
};
