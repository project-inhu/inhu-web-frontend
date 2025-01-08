import { useState } from 'react';
import { Props } from './type';
import { cn } from '@/shared/helper/utils';

export const DefaultButton = ({
  name = '',
  onClick,
  type = 'button',
  active = true,
}: Props) => {
  return (
    <button
      className={cn(
        'rounded-[12px] w-full h-full',
        active ? 'bg-primary-400' : 'bg-secondary-200',
        active ? 'text-white' : 'text-secondary-800'
      )}
      type={type}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {name}
    </button>
  );
};
