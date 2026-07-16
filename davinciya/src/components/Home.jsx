import React from "react";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import MarqueeSection from "../components/MarqueeSection";
import AboutSection from "../components/AboutSection";
import WhyChoose from "../components/WhyChoose";
import GallerySection from "../components/Gallery";
import HowItWorks from "../components/HowItWorks";
import CategoriesSlider from "./CategorySlider";
export default function Home() {
  return (
    <>
      <CategoriesSlider/>
      <Hero />
      <ServicesSection />
      <MarqueeSection />
      <AboutSection />
      <WhyChoose />
      <GallerySection />
      <HowItWorks />
    </>
  );
}