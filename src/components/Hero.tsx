import { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar-grid.jpg";

const Hero = () => {
  const [currentKPI, setCurrentKPI] = useState(0);
  
  const kpis = [
    { value: "500+", label: "MW Pipeline", suffix: "" },
    { value: "25+", label: "Smart Cities", suffix: "" },
    { value: "98.7%", label: "Uptime Guarantee", suffix: "" },
    { value: "$250M+", label: "Project Value", suffix: "" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKPI((prev) => (prev + 1) % kpis.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Smart City Consortium Smart Solar Mini-Grid"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-emerald/20 backdrop-blur-sm border border-emerald/30 rounded-full">
            <span className="text-emerald font-semibold">Leading Kenya EPC/IPP</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-executive text-white mb-6 animate-fade-up">
            Powering Kenya's
            <br />
            <span className="text-emerald">Smart City Future</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-subhero text-white/90 mb-12 max-w-3xl mx-auto animate-fade-up [animation-delay:200ms]">
            Executive-grade solar mini-grid solutions delivering guaranteed performance, 
            proven ESG impact, and transformative smart-city infrastructure across Kenya.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-up [animation-delay:400ms]">
            <Button size="lg" className="btn-executive group">
              Explore Flagship Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="btn-outline-executive group">
              <Play className="mr-2 h-5 w-5" />
              Watch Project Overview
            </Button>
          </div>

          {/* KPI Counter */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-up [animation-delay:600ms]">
            {kpis.map((kpi, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-500 ${
                  index === currentKPI ? 'scale-110' : 'scale-100 opacity-70'
                }`}
              >
                <div className="text-4xl lg:text-5xl font-bold text-emerald mb-2 animate-counter">
                  {kpi.value}
                </div>
                <div className="text-white/80 font-medium">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
