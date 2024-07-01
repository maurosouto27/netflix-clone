interface Props {
  id: number;
  title: string;
  src: string;
  releaseDate: string;
}

const CarruselItem = ({ id, src, releaseDate, title }: Props) => {
  const date = new Date(releaseDate);

  return (
    <div className="relative mx-1 sm:mx-2 group cursor-pointer duration-300 hover:scale-105">
      <img
        className="w-full h-full object-cover rounded sm:rounded-md"
        key={id}
        src={src}
        alt={title}
      />

      <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 duration-300 bg-gradient-to-t from-black">
        <div className="flex justify-between items-end p-1 text-sm sm:p-3 sm:text-base md:text-lg lg:text-xl">
          <h3 className="text-white">{title}</h3>
          <span className="text-white hidden md:block">
            {date.getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarruselItem;
