import KakaoLoginIcon from '../icon/kakao-login-icon.svg';

export const KakaoLoginButton = () => {
  return (
    <button className="relative bg-[#FEE500] w-full h-full rounded-[6px] flex items-center justify-center">
      <div className="">
        <KakaoLoginIcon />
      </div>
      <div className="w-[228px]">카카오로 시작하기</div>
    </button>
  );
};
