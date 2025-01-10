import MainLayout from '@/app/main/layout';
import { MainPage } from '@/page/main';
import { redirect } from 'next/navigation';

export default function Home() {
  return (
    <MainLayout>
      <MainPage />
    </MainLayout>
  );
}
