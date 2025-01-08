'use client';

import { MyPageLinkButton } from '@/page/my/components/MyPageLinkButton';
import { ProfileImg } from '@/shared/components/ProfileImg';
import { useRouter } from 'next/navigation';

export const MyPage = () => {
  const router = useRouter();

  const goLoginBtnClickEvent = () => {
    router.push('/login');
  };

  const myReviewBtnClickEvent = () => {
    alert('준비중입니다!');
  };

  const myReportPlaceBtnClickEvent = () => {
    alert('준비중입니다!');
  };

  const myCouponBtnClickEvent = () => {
    alert('준비중입니다!');
  };

  const newPlaceBtnClickEvent = () => {
    alert('준비중입니다!');
  };

  const introducePlaceBtnClickEvent = () => {
    alert('준비중입니다!');
  };

  const logoutBtnClickEvent = () => {
    alert('준비중입니다.');
  };

  const withdrawalBtnClickEvent = () => {
    alert('준비중입니다.');
  };

  return (
    <div>
      <header className="h-[58px] w-full flex items-center justify-center">
        <h1 className="text-[18px] font-medium">마이페이지</h1>
      </header>
      <main>
        <div className="profile-area flex">
          <div className="profile-img-area w-[80px] h-[80px] ml-[20px] my-[20px]">
            <ProfileImg />
          </div>
          <div className="user-info-area ml-[28px] mt-[28px]">
            <div className="user-name-area">
              <h2 className="font-semibold text-[18px]">로그인이 필요해요</h2>
            </div>
            <div className="profile-edit-button-area mt-[12px]">
              <button
                className="px-[12px] py-[6px] text-[12px] text-secondary-800 rounded-[8px] bg-secondary-100"
                onClick={goLoginBtnClickEvent}
              >
                로그인 하러가기
              </button>
            </div>
          </div>
        </div>
        <div className="divider h-[6px] bg-secondary-200"></div>
        <div className="p-[20px] flex flex-col gap-[24px]">
          <div className="my-activity-area">
            <h3 className="text-[16px] font-medium mb-[12px]">나의 활동</h3>
            <div className="relative w-full h-[40px]">
              <MyPageLinkButton
                name="내가 작성한 리뷰"
                onClick={myReviewBtnClickEvent}
              />
            </div>
            <div className="relative w-full h-[40px]">
              <MyPageLinkButton
                name="내가 제보한 장소"
                onClick={myReportPlaceBtnClickEvent}
              />
            </div>
            <div className="relative w-full h-[40px]">
              <MyPageLinkButton
                name="나의 쿠폰"
                onClick={myCouponBtnClickEvent}
              />
            </div>
          </div>
          <div className="info-report-area">
            <h3 className="text-[16px] font-medium mb-[12px]">장소 제보하기</h3>
            <div className="relative w-full h-[40px]">
              <MyPageLinkButton
                name="새로운 식당, 카페, 술집이 생겼어요"
                onClick={newPlaceBtnClickEvent}
              />
            </div>
            <div className="relative w-full h-[40px]">
              <MyPageLinkButton
                name="그 외에 다른 장소를 소개하고 싶어요"
                onClick={introducePlaceBtnClickEvent}
              />
            </div>
          </div>
          <div className="account-setup-area">
            <h3 className="text-[16px] font-medium mb-[12px]">계정 설정</h3>
            <div className="relative w-full h-[40px]">
              <MyPageLinkButton name="로그아웃" onClick={logoutBtnClickEvent} />
            </div>
            <div className="relative w-full h-[40px]">
              <MyPageLinkButton
                name="회원탈퇴"
                onClick={withdrawalBtnClickEvent}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
