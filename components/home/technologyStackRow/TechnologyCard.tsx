import React from "react";

interface ITechnologyCardProps {
  objTechnology: {
    id: number;
    imgSrc: string;
    title: string;
  };
}

export default function TechnologyCard(props: ITechnologyCardProps) {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <img
        src={props.objTechnology.imgSrc}
        alt={props.objTechnology.title}
        className="w-auto h-[70px] object-contain grayscale hover:grayscale-0 hover:cursor-pointer"
      />
    </div>
  );
}
