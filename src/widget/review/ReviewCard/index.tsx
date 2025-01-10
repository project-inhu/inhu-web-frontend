import { ProfileImg } from '@/shared/components/ProfileImg';
import { Props } from './type';
import ScrollContainer from 'react-indiana-drag-scroll';
import { CategoryChipSmall } from '@/shared/components/chips/CategoryChipSmall';
import { useState } from 'react';
import { ReviewContent } from '@/widget/review/ReviewCard/components/ReviewContents';

export const ReviewCard = ({}: Props) => {
  const [isFullContents, setIsFullContents] = useState(false);

  const review = {
    author: {
      nickname: '닉네임',
    },
    imgList: ['1', '2', '3', '4', '5'],
    contents:
      '리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다.리뷰 내용이 들어갑니다. ',
    categoryList: [
      {
        name: '카테고리1',
      },
      {
        name: '카테고리2',
      },
    ],
  };

  return (
    <article className="w-full flex flex-col rounded-[8px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.12)] pb-[12px]">
      <header className="relative flex mt-[12px] items-center">
        <div className="w-[40px] h-[40px] mr-[16px] ml-[20px]">
          <ProfileImg />
        </div>
        <div>
          <p className="text-medium-16-140">{review.author.nickname}</p>
        </div>
        <div className="absolute right-[12px] top-[50%] translate-y-[-50%] text-regular-12-120 text-secondary-500">
          2024.12.31
        </div>
      </header>
      <main>
        {review.imgList.length !== 0 && (
          <ScrollContainer className="flex mt-[16px]">
            <div className="flex gap-[8px] [&>*:first-child]:ml-[20px] [&>*:last-child]:mr-[20px]">
              {review.imgList.map((elem, i) => (
                <div
                  key={i}
                  className="w-[120px] h-[120px] rounded-[8px] overflow-hidden border-[1px] border-secondary-300 border-solid bg-secondary-300"
                ></div>
              ))}
            </div>
          </ScrollContainer>
        )}
      </main>
      <div className="px-[20px] flex gap-[4px] mt-[16px] mb-[8px]">
        {review.categoryList.map((category, i) => (
          <CategoryChipSmall key={i}>{category.name}</CategoryChipSmall>
        ))}
      </div>
      <div className="text-regular-12-140 ml-[20px] mr-[15px]">
        <ReviewContent contents={review.contents} />
      </div>
    </article>
  );
};
