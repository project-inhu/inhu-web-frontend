import { Header } from './components/Header';

export const PlaceDetailPage = () => {
  return (
    <div className="relative max-w-[600px] w-full h-[100vh] flex flex-col mx-auto">
      <div className="flex-1 overflow-y-scroll scrollbar-hide pb-[37px]">
        <Header />
      </div>
    </div>
  );
};
