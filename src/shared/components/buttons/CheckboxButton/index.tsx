'use client';

import { useState } from 'react';
import { Props } from './type';
import CheckIcon from './icon/check-icon.svg';

export const CheckboxButton = ({ defaultClick = true, onClick }: Props) => {
  const [clickState, setClickState] = useState(defaultClick);

  return (
    <button
      className="relative flex items-center justify-center w-[20px] h-[20px]"
      onClick={() => {
        setClickState((state) => !state);
        onClick && onClick(clickState);
      }}
    >
      {clickState ? (
        <div
          className="w-full h-full rounded-full border-primary-400 border-solid
                    flex items-center justify-center"
        >
          <CheckIcon />
        </div>
      ) : (
        <div className="w-full h-full border-[1.6px] rounded-full border-secondary-500 border-solid"></div>
      )}
    </button>
  );
};
