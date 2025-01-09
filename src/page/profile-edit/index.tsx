'use client';

import { BackButton } from '@/page/profile-edit/components/BackButton';
import { DefaultButton } from '@/shared/components/buttons/DefaultButton';
import { ProfileImg } from '@/shared/components/ProfileImg';
import { useRouter } from 'next/navigation';

export const ProfileEdit = () => {
  const router = useRouter();

  const profileImgEditBtnClickEvent = () => {
    alert('준비중입니다!');
  };

  const SaveBtnClickEvent = () => {
    router.push('/main/mypage');
  };

  return (
    <div className="relative max-w-[600px] w-full h-[100vh] flex flex-col mx-auto">
      <div className="flex-1 overflow-y-scroll scrollbar-hide pb-[37px]">
        <div>
          <header className="relative h-[58px] w-full flex items-center justify-center">
            <h1 className="text-[18px] font-medium">프로필 설정</h1>
            <div className="absolute w-[24px] h-[24px] left-[16px]">
              <BackButton />
            </div>
          </header>
          <main>
            <div className="profile-img-area mt-[37px] flex flex-col items-center">
              <div className="w-[200px] h-[200px]">
                <ProfileImg
                  border="5px"
                  src={
                    'https://s3.ap-northeast-2.amazonaws.com/liket-for-dev/profile-img/ff6de973-31c7-4fec-ba76-ae1fd031378e.jpeg'
                  }
                />
              </div>
              <div className="relative w-[200px] h-[38px] flex justify-center items-center mt-[8px]">
                <button
                  className="font-normal text-[16px] text-primary-400 w-full h-full"
                  onClick={profileImgEditBtnClickEvent}
                >
                  프로필 사진 변경하기
                </button>
              </div>
            </div>
            <form className="relative input-area flex flex-col gap-[18px] mx-[20px]">
              <div className="relative w-full">
                <p className="text-secondary-700 text-[14px]">
                  닉네임<span className="text-error-red">*</span>
                </p>
                <div className="mt-[8px] w-full h-[46px]">
                  <input
                    type="text"
                    className="w-full h-full pl-[16px] text-[14px] border-[1px] border-solid border-secondary-200 rounded-[4px]"
                    placeholder="최대 10글자까지 입력할 수 있어요."
                  />
                </div>
              </div>
              <div className="relative w-full">
                <p className="text-secondary-700 text-[14px]">
                  이메일<span className="text-error-red">*</span>
                </p>
                <div className="mt-[8px] w-full h-[46px] border-[1px]">
                  <input
                    type="text"
                    className="w-full h-full pl-[16px] bg-secondary-100 font-medium text-secondary-900 text-[15px]"
                    value={'test1234@gmail.com'}
                    disabled
                  />
                </div>
              </div>
            </form>
          </main>
          <footer className="absolute w-full bottom-[20px] px-[20px]">
            <div className="w-full h-[48px]">
              <DefaultButton
                name="변경사항 저장하기"
                onClick={SaveBtnClickEvent}
              />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
