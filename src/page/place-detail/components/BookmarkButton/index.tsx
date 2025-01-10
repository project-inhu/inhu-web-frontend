'use client';

import BookmarkIcon from '@/shared/icon/bookmark-icon.svg';
import EmptyBookmarkIcon from '@/shared/icon/empty-bookmark-icon.svg';
import { useState } from 'react';
import { DefaultButton } from '@/shared/components/buttons/DefaultButton';

export const BookmarkButton = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const bookmarkBtnClickEvent = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <DefaultButton active={false} onClick={bookmarkBtnClickEvent}>
      {isBookmarked ? (
        <BookmarkIcon className="w-[24px] fill-secondary-900" />
      ) : (
        <EmptyBookmarkIcon className="w-[22px]" />
      )}
    </DefaultButton>
  );
};
