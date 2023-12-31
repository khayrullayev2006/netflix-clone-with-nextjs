"use client";
import React, { useEffect, useState } from "react";
import { MovieProps } from "@/types";
import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";

interface Props {
  movies: MovieProps[];
}

const Banner = ({ movies }: Props) => {
  const [randomMovie, setRandomMovie] = useState<MovieProps | null>(null);

  useEffect(() => {
    const movie = movies[Math.floor(Math.random() * movies.length)];
    setRandomMovie(movie);
  }, []);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 lg:pl-24">
      <div className="absolute top-0 left-0 h-[95vh] w-full -z-10">
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/${
            randomMovie?.backdrop_path || randomMovie?.poster_path
          }`}
          alt="Banner"
          fill
          objectFit="cover"
        />
        <div className="absolute w-full z-20 h-56 bg-gradient-to-t from-black to-transparent bottom-0 " />
        <div className="absolute w-full h-full z-20 bg-gradient-to-r from-black to-transparent bottom-0 " />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold line-clamp-1">
        {randomMovie?.title || randomMovie?.name || randomMovie?.original_name}
      </h1>

      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl line-clamp-2">
        {randomMovie?.overview}
      </p>
      <div className={"flex space-x-3"}>
        <button className="cursor-pointer flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-white text-black">
          <AiFillPlayCircle className="h-4 w-4 text-black md:h-7 md:w-7 cursor-pointer" />
          Play
        </button>
        <button className="cursor-pointer flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-[gray]/70">
          <IoMdInformationCircleOutline className="h-5 w-5  md:h-8 md:w-8 cursor-pointer" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default Banner;
