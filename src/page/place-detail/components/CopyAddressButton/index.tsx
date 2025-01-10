'use client';

export const CopyAddressButton = () => {
  const clickBtnEvent = () => {
    return alert('아직 준비중입니다.');
  };

  return (
    <button
      className="w-full h-full bg-secondary-100 rounded-[17px] text-regular-12-120 text-secondary-900"
      onClick={clickBtnEvent}
    >
      주소 복사하기
    </button>
  );
};
