import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FlagshipProject from "@/components/FlagshipProject";
import Portfolio from "@/components/Portfolio";
import Capabilities from "@/components/Capabilities";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FlagshipProject />
      <Portfolio />
      <Capabilities />
    </div>
  );
};

export default Index;