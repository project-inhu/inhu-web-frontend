import KakaoLoginIcon from '../icon/kakao-login-icon.svg';

export const KakaoLoginButton = () => {
  const kakaoBtnClickEvent = () => {
    alert('아직 구현 안했지롱');
  };

  return (
    <button
      className="relative bg-[#FEE500] w-full h-full rounded-[6px] flex items-center justify-center"
      onClick={kakaoBtnClickEvent}
    >
      <div>
        <KakaoLoginIcon />
      </div>
      <div className="w-[228px]">카카오로 시작하기</div>
    </button>
  );
};
