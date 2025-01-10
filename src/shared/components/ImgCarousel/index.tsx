import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Props } from './type';
import { cn } from '@/shared/helper/utils';
import Image from 'next/image';

const ImgCarousel = ({
  imgList,
  className = '',
  infiniteLoop = true,
  imgAlt = '캐러셀 이미지',
  aspectRatio = '1 / 1',
  onClickImg,
}: Props) => {
  return (
    <Carousel
      className={cn(className)}
      infiniteLoop={infiniteLoop}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      emulateTouch={true}
      swipeScrollTolerance={10}
      preventMovementUntilSwipeScrollTolerance={true}
    >
      {imgList.map((path, i) => (
        <div
          key={`carousel-img-${i}`}
          className="relative"
          onClick={() => {
            onClickImg && onClickImg(path, i);
          }}
          style={{ aspectRatio }}
        >
          <Image src={path} alt={imgAlt} fill style={{ objectFit: 'cover' }} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImgCarousel;
