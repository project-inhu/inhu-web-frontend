import ProfileImgIcon from '@/shared/icon/default-profile-icon.svg';

export const ProfileImg = () => {
  return (
    <div className="relative w-full h-full rounded-full overflow-hidden border-solid border-[2px] border-secondary-200 bg-secondary-50">
      <div>
        <ProfileImgIcon
          className="absolute bottom-0 left-[50%] translate-x-[-50%]"
          style={{
            width: '75%',
          }}
        />
      </div>
    </div>
  );
};
