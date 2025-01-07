import { BottomTab } from '@/shared/components/BottomTab';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[600px] w-full h-[100vh] flex flex-col mx-auto">
      <div className="flex-1">{children}</div>
      <BottomTab />
    </div>
  );
}
