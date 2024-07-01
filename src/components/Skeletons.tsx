interface Props {
  className?: string;
}

const BackdropSkeleton = ({ className }: Props) => (
  <div className={`bg-gray-700 animate-pulse rounded-md flex-1 ${className}`} />
);

export const CarruselSkeleton = () => (
  <section className="flex flex-col gap-3 py-3">
    <div className=" bg-gray-700 animate-pulse rounded-lg h-7 w-1/2 md:w-2/6 xl:w-1/6" />
    <div className="flex gap-3 h-32 md:h-40 xl:h-64">
      <BackdropSkeleton />
      <BackdropSkeleton />
      <BackdropSkeleton className="hidden sm:block" />
      <BackdropSkeleton className="hidden md:block" />
      <BackdropSkeleton className="hidden lg:block" />
    </div>
  </section>
);
