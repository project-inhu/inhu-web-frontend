import { ReviewCard } from '@/widget/review/ReviewCard';

export const ReviewTabContent = () => {
  return (
    <div className="p-[20px] flex flex-col gap-[20px]">
      {Array(10)
        .fill(0)
        .map((data, i) => (
          <ReviewCard key={i} />
        ))}
    </div>
  );
};
