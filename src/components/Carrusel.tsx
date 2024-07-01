import { useContext, useMemo } from "react";
import Slider, { Settings } from "react-slick";
import { LeftButton, RightButton } from "./CarruselButtons";
import { MoviesContext } from "../contexts/MoviesContext";
import { BACKDROP_SIZES } from "../constants";
import useDeviceWidth from "../hooks/useDeviceWidth";
import { CarruselSkeleton } from "./Skeletons";
import CarruselItem from "./CarruselItem";
import { IMovie } from "../@types/movie";
import Title from "./Title";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  sectionTitle: string;
  movies: IMovie[];
}

const Carrusel = ({ movies, sectionTitle }: Props) => {
  const {
    isLoading,
    config: { secure_base_url },
  } = useContext(MoviesContext);
  const device = useDeviceWidth();

  const carruselSettings: Settings = useMemo(() => {
    return {
      arrows: device !== "phone",
      initialSlide: 0,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <RightButton />,
      prevArrow: <LeftButton />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
  }, [device]);

  if (isLoading) {
    return <CarruselSkeleton />;
  }

  if (!movies.length) {
    return null;
  }

  return (
    <section className="py-3">
      <Title title={sectionTitle} />
      <div className="slider-container">
        <Slider {...carruselSettings}>
          {movies.map(
            ({
              id,
              title,
              name,
              backdrop_path,
              release_date,
              first_air_date,
            }) => {
              if (!backdrop_path) return null;

              return (
                <CarruselItem
                  key={id}
                  src={`${secure_base_url}${BACKDROP_SIZES[device]}${backdrop_path}`}
                  title={title || name || ""}
                  id={id}
                  releaseDate={release_date || first_air_date || ""}
                />
              );
            }
          )}
        </Slider>
      </div>
    </section>
  );
};

export default Carrusel;
