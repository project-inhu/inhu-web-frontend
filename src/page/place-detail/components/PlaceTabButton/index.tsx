import { cn } from '@/shared/helper/utils';
import { Props } from './type';

export const PlaceTabButton = ({ active, children, onClick }: Props) => {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
      className={cn(
        'w-full h-full text-[14px] font-medium',
        active
          ? 'text-primary-400 border-b-[2px] border-solid border-primary-400'
          : 'text-secondary-300 border-b-[1px] border-solid border-secondary-300'
      )}
    >
      {children}
    </button>
  );
};
