import ImgCarousel from '@/shared/components/ImgCarousel';

export const PlaceImgCarousel = () => {
  return (
    <ImgCarousel
      imgList={[
        'https://png.pngtree.com/thumb_back/fh260/background/20210910/pngtree-dining-room-at-night-image_842471.jpg',
        'https://img.hani.co.kr/imgdb/resize/2020/1023/160334459702_20201023.JPG',
      ]}
      aspectRatio="4 / 3"
    />
  );
};
