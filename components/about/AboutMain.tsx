import { objAboutPageHero, objInfrastructureRow } from "@/data/data";
import Hero from "../common/Hero";
import Row from "../common/row/Row";
import FeaturesRow from "../home/featuresRow/FeaturesRow";
import TechnologyStackRow from "../home/technologyStackRow/TechnologyStackRow";
import FounderRow from "./founderRow/FounderRow";

export default function AboutMain() {
  return (
    <>
      <Hero {...objAboutPageHero} />
      <FounderRow />
      <TechnologyStackRow />
      <FeaturesRow />
      <Row {...objInfrastructureRow} containerWrapperClassName="bg-white" />
      {/* <Row {...objQualityRow} /> */}
      {/* <CarouselRow /> */}
    </>
  );
}
