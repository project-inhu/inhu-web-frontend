import { redirect } from 'next/navigation';

export const MyPage = () => {
  redirect('/login');

  return (
    <div>
      <header>마이페이지입니다.</header>
    </div>
  );
};
