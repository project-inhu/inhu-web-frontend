import { cn } from '@/shared/helper/utils';
import { Props } from './type';

export const CategoryChip = ({ className = '', children }: Props) => {
  return (
    <div className="border-solid w-fit py-[4px] px-[8px] h-fit rounded-[4px] text-secondary-900 bg-secondary-100 flex">
      <div
        className={cn(
          'font-normal text-[10px] w-fit leading-[12px]',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
