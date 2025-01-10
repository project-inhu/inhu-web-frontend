'use client';

import { DefaultButton } from '@/shared/components/buttons/DefaultButton';

export const CreateReviewButton = () => {
  const btnClickEvent = () => {
    alert('준비중입니다.');
  };

  return <DefaultButton onClick={btnClickEvent}>리뷰 쓰기</DefaultButton>;
};
