import { BottomTab } from '@/shared/components/BottomTab';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '인후',
  description: '인하대 후문 박살내기',
  keywords: ['인후', '인하대후문'],
  openGraph: {
    images: [
      {
        url: 'https://inhu.kr/opengraph.png',
        alt: '인후',
      },
    ],
  },
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative max-w-[600px] w-full h-[100vh] flex flex-col mx-auto">
      <div className="flex-1 overflow-y-scroll scrollbar-hide pb-[37px]">
        {children}
      </div>
      <BottomTab />
    </div>
  );
}
