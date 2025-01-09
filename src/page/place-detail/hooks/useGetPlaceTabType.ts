import { PLACE_TAB_TYPE, PlaceTabType } from '@/page/place-detail/type';
import { useSearchParams } from 'next/navigation';

export const useGetPlaceTabType = () => {
  const searchParams = useSearchParams();

  const type: PlaceTabType = (() => {
    const type: string = searchParams.get('tab') || PLACE_TAB_TYPE.INFO;

    if (
      !Object.keys(PLACE_TAB_TYPE)
        .map((key) => PLACE_TAB_TYPE[key as keyof typeof PLACE_TAB_TYPE])
        .includes(type as any) // TODO: 타입 강화 해야함
    ) {
      return PLACE_TAB_TYPE.INFO;
    }

    return type as PlaceTabType;
  })();

  return { type };
};
