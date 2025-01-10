'use client';

import { Props } from './type';
import { cn } from '@/shared/helper/utils';

export const DefaultButton = ({
  children,
  onClick,
  type = 'button',
  active = true,
}: Props) => {
  return (
    <button
      className={cn(
        'rounded-[12px] w-full h-full text-medium-16-140 flex justify-center items-center',
        active ? 'bg-primary-400' : 'bg-secondary-200',
        active ? 'text-white' : 'text-secondary-800'
      )}
      type={type}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {children}
    </button>
  );
};
