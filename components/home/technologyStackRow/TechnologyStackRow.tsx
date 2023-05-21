import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import React from "react";
import TechnologyCard from "./TechnologyCard";
import { lstTechnologies } from "@/data/data";

export default function TechnologyStackRow() {
  return (
    <ContainerWrapper>
      <Title title="Technologies We Work With" />
      <div className="grid grid-cols-4 lg:grid-cols-7 gap-8 place-items-center">
        {lstTechnologies.map((technology) => (
          <TechnologyCard objTechnology={technology} key={technology.id} />
        ))}
      </div>
    </ContainerWrapper>
  );
}
