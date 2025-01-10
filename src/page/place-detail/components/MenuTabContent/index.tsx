import { MenuCard } from '@/widget/menu/MenuCard';

export const MenuTabContent = () => {
  const menuCardClickEvent = () => {
    alert('준비중입니다.');
  };

  return (
    <>
      <div className="my-[24px] mx-[20px] flex flex-col gap-[16px]">
        {Array(10)
          .fill(0)
          .map(() => (
            <MenuCard onClick={menuCardClickEvent} />
          ))}
      </div>
    </>
  );
};
