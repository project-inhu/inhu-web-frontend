import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
});

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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={`${pretendard.className}`}>{children}</body>
    </html>
  );
}
