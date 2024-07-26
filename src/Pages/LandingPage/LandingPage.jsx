import React from "react";
import { HeroSection } from "../../Components/HeroSection/HeroSection";
import { ContactForm } from "../../Components/ContactForm/ContactForm";
import { Experiences } from "../../Components/Experiences/Experiences";
import { Skills } from "../../Components/Skills/Skills";

function LandingPage() {
  return (
    <div className="">
      <HeroSection />
      <Skills />
      <Experiences />
      <ContactForm />
    </div>
  );
}

export default LandingPage;
