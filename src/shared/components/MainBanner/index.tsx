import ImgCarousel from '@/shared/components/ImgCarousel';

export const MainBanner = () => {
  const imgList = ['/banner/banner-1.svg', '/banner/banner-2.svg'];

  return (
    <aside className="w-full h-full flex justify-center items-center rounded-[10px] bg-[#FFEDED]">
      <ImgCarousel imgList={imgList} aspectRatio="5 / 2" auto={true} />
    </aside>
  );
};
