'use client';

import { useState } from 'react';
import { Props } from './type';

export const RadioButton = ({ defaultClick = true, onClick }: Props) => {
  const [clickState, setClickState] = useState(defaultClick);

  return (
    <button
      className="relative flex items-center justify-center p-[0.4px] w-[20px] h-[20px]"
      onClick={() => {
        setClickState((state) => !state);
        onClick && onClick(clickState);
      }}
    >
      {clickState ? (
        <div
          className="w-full h-full border-[1.6px] rounded-full border-primary-400 border-solid
                    flex items-center justify-center"
        >
          <div className="w-[12px] h-[12px] rounded-full bg-primary-400"></div>
        </div>
      ) : (
        <div className="w-full h-full border-[1.6px] rounded-full border-secondary-500 border-solid"></div>
      )}
    </button>
  );
};
