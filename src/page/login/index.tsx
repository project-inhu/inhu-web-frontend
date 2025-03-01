'use client';

import { CloseButton } from './components/CloseButton/index';
import { KakaoLoginButton } from './components/KakaoLoginButton/index';
import Logo from '@/shared/icon/logo.svg';
import { useRouter } from 'next/navigation';

export const LoginPage = () => {
  const router = useRouter();

  const lookAroundBtnClickEvent = () => {
    router.push('/main');
  };

  return (
    <div className="max-w-[600px] w-full mx-auto relative h-[100vh] flex justify-center flex-col">
      <div className="absolute right-[20px] top-[20px] w-[16px] h-[16px]">
        <CloseButton />
      </div>
      <div className="logo-area border-2 flex items-center justify-center flex-1">
        <div>
          <Logo className="w-[160px]" />
        </div>
      </div>
      <div className="login-button-area border-2 h-[91px] mb-[57px] mx-auto w-full flex items-center flex-col">
        <div className="max-w-[300px] h-[45px] w-full">
          <KakaoLoginButton />
        </div>
        <div className="relative max-w-[300px] w-full mt-[24px] flex items-center justify-center">
          <button className="w-full h-full" onClick={lookAroundBtnClickEvent}>
            조금 더 둘러볼래요
          </button>
        </div>
      </div>
    </div>
  );
};
