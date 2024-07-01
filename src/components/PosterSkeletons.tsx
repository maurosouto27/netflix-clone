const PosterSkeleton = () => (
  <div className="animate-pulse bg-gray-700 h-60 sm:h-72 md:h-[500px] lg:h-[600px] flex-1 rounded-lg flex-wrap " />
);

const PosterSkeletons = () => (
  <div className="py-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5 sm:gap-7">
    <PosterSkeleton />
    <PosterSkeleton />
    <PosterSkeleton />
    <PosterSkeleton />
    <PosterSkeleton />
    <PosterSkeleton />
    <PosterSkeleton />
    <PosterSkeleton />
    <PosterSkeleton />
    <PosterSkeleton />
    <PosterSkeleton />
    <PosterSkeleton />
  </div>
);

export default PosterSkeletons;
