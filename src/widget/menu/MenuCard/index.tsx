export const MenuCard = () => {
  return (
    <article className="w-full flex gap-[22px] cursor-pointer">
      <div className="img-area w-[100px] h-[100px] overflow-hidden rounded-[8px] border-solid border-secondary-300 border-[1px] bg-secondary-300"></div>
      <div className="content-area flex flex-col justify-center flex-1">
        <h3 className="text-regular-14-120 line-clamp-2">메뉴 이름적는 곳</h3>
        <p className="mt-[6px] text-regular-12-120 text-secondary-600 line-clamp-2">
          메뉴의 간단한 설명메뉴의 간단한 설명메뉴의 간단한 설명메뉴의 간단한
          설명메뉴의 간단한 설명메뉴의 간단한 설명메뉴의 간단한 설명메뉴의
          간단한 설명메뉴의 간단한 설명메뉴의 간단한 설명메뉴의 간단한
          설명메뉴의 간단한 설명메뉴의 간단한 설명
        </p>
        <p className="mt-[12px] text-regular-12-120">10000원</p>
      </div>
    </article>
  );
};
