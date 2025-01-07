'use client';

import { RadioButton } from '@/shared/components/RadioButton';
import HomeIcon from '@/shared/icon/home-icon.svg';

export const MainPage = () => {
  return (
    <div>
      <RadioButton
        onClick={(data) => {
          console.log(data);
        }}
      />
    </div>
  );
};
