import ProfileImgIcon from '@/shared/icon/default-profile-icon.svg';
import { Props } from './type';
import Image from 'next/image';

export const ProfileImg = ({ src }: Props) => {
  return (
    <div className="relative w-full h-full rounded-full overflow-hidden border-solid border-[2px] border-secondary-200 bg-secondary-50">
      {!src && (
        <ProfileImgIcon
          className="absolute bottom-0 left-[50%] translate-x-[-50%]"
          style={{
            width: '75%',
          }}
        />
      )}
      {src && (
        <Image
          src={src}
          alt="프로필 이미지"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      )}
    </div>
  );
};
