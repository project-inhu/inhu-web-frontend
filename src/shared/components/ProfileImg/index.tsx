import ProfileImgIcon from '@/shared/icon/default-profile-icon.svg';
import { Props } from './type';
import Image from 'next/image';
import { COLORS } from '@/shared/styles/colors';

export const ProfileImg = ({ src, border = '2px' }: Props) => {
  return (
    <div
      className="relative w-full h-full rounded-full overflow-hidden bg-secondary-50"
      style={{ border: `${border} solid ${COLORS.secondary[200]}` }}
    >
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
