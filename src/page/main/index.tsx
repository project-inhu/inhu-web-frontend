'use client';

import { CheckboxButton } from '@/shared/components/CheckboxButton';
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
      <CheckboxButton
        onClick={(data) => {
          console.log(data);
        }}
      />
    </div>
  );
};
