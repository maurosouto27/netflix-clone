import { IMovie } from "../@types/movie";

interface Props {
  movie: IMovie;
}

interface RowProps {
  label: string;
  data: string | number;
}

const Row = ({ label, data }: RowProps) => (
  <div className="flex justify-between items-center hover:bg-gray-700 duration-300 p-3">
    <span className="text-left">{label}</span>
    <span className="text-right font-bold">{data}</span>
  </div>
);

const MovieInfo = ({
  movie: {
    title,
    name,
    original_language,
    original_title,
    overview,
    adult,
    popularity,
    vote_average,
    vote_count,
    release_date = "",
    first_air_date = "",
    original_name,
  },
}: Props) => {
  const date = new Date(release_date || first_air_date);
  return (
    <article className="text-white flex flex-col gap-10 mb-5 w-full">
      <h1 className="text-xl sm:text-2xl md:text-6xl font-bold">
        {title || name}
      </h1>
      <p className="text-base sm:text-xl md:text-xl font-medium">{overview}</p>
      <div className="flex flex-col text-xl">
        <Row label="Release Date" data={date.toLocaleDateString()} />
        <div className="h-[1px] bg-white w-full" />
        <Row label="Popularity" data={popularity} />
        <div className="h-[1px] bg-white w-full" />
        <Row label="Votes" data={vote_count} />
        <div className="h-[1px] bg-white w-full" />
        <Row label="Average Vote" data={vote_average} />
        <div className="h-[1px] bg-white w-full" />
        <Row label="Original Language" data={original_language} />
        <div className="h-[1px] bg-white w-full" />
        <Row
          label="Original Title"
          data={original_title || original_name || ""}
        />
        <div className="h-[1px] bg-white w-full" />
        <Row label="+18" data={adult ? "Yes" : "No"} />
      </div>
    </article>
  );
};

export default MovieInfo;
