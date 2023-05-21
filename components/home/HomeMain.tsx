/* eslint-disable @next/next/no-img-element */
import { objHomePageHero } from "@/data/data";
import Hero from "../common/Hero";
import ContactRow from "../contact/contactRow/ContactRow";
import CarouselRow from "./carouselRow/CarouselRow";
import FeaturesRow from "./featuresRow/FeaturesRow";
import FiguresRow from "./figuresRow/FiguresRow";
import TestimonialRow from "./testimonialsRow/TestimonialsRow";
import TechnologyStackRow from "./technologyStackRow/TechnologyStackRow";

export default function HomeMain() {
  return (
    <>
      <Hero {...objHomePageHero} />
      <FeaturesRow />
      <TechnologyStackRow />
      <FiguresRow />
      {/* <CarouselRow /> */}
      <TestimonialRow />
      <ContactRow />
    </>
  );
}
