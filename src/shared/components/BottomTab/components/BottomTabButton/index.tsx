'use client';

import { cn } from '@/shared/helper/utils';
import { Props } from './type';

export const BottomTabButton = ({
  children,
  name,
  onClick,
  isActivated = false,
}: Props) => {
  return (
    <button
      className={cn('w-full h-full flex flex-col justify-center items-center')}
      onClick={() => {
        onClick && onClick();
      }}
    >
      <div
        className={cn(isActivated ? 'fill-primary-400' : 'fill-secondary-500')}
      >
        {children}
      </div>
      <p
        className={cn(
          'mt-[6px]',
          isActivated ? 'text-primary-400' : 'text-secondary-500'
        )}
      >
        {name}
      </p>
    </button>
  );
};
