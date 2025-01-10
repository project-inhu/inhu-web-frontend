import { Props } from './type';

export const PlaceTag = ({ name }: Props) => {
  return (
    <div className="flex justify-center items-center rounded-[11px] py-[3px] px-[8px] text-regular-10-120 bg-primary-400">
      <span className="text-white">{name}</span>
    </div>
  );
};
