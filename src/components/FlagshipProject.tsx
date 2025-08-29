import { useState } from "react";
import { MapPin, Zap, Users, Leaf, TrendingUp, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FlagshipProject = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Project Overview" },
    { id: "technical", label: "Technical Specs" },
    { id: "impact", label: "ESG Impact" },
    { id: "milestones", label: "Milestones" }
  ];

  const keyMetrics = [
    { icon: Zap, value: "50 MW", label: "Installed Capacity" },
    { icon: Users, value: "150,000+", label: "People Served" },
    { icon: Leaf, value: "75,000 tCO₂", label: "Annual Emissions Saved" },
    { icon: TrendingUp, value: "99.2%", label: "System Availability" }
  ];

  const guarantees = [
    { icon: Shield, title: "Performance Guarantee", description: "Minimum 98.5% system availability with liquidated damages protection" },
    { icon: Clock, title: "On-Time Delivery", description: "Phased delivery with milestone-based performance bonds" },
    { icon: Award, title: "Quality Assurance", description: "Tier-1 components with comprehensive O&M warranty" }
  ];

  return (
    <section id="flagship" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-2 bg-emerald/10 text-emerald border-emerald/20">
              Flagship Smart-City Mini-Grid
            </Badge>
            <h2 className="text-hero text-navy-deep mb-6">
              Nexus Technopolis
              <br />
              <span className="text-emerald">Smart Energy Hub</span>
            </h2>
            <p className="text-subhero max-w-3xl mx-auto">
              Kenya's most advanced smart-city solar mini-grid, delivering resilient, 
              sustainable energy infrastructure with proven performance guarantees.
            </p>
          </div>

          {/* Location & Status */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
            <div className="flex items-center gap-3 text-navy-deep">
              <MapPin className="h-6 w-6 text-emerald" />
              <span className="text-xl font-semibold">Nexus Technopolis, Athi Plains District</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald rounded-full animate-pulse"></div>
              <span className="text-emerald font-semibold">Phase 2 - Construction Underway</span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="card-executive p-6 text-center">
                <CardContent className="p-0">
                  <metric.icon className="h-10 w-10 text-emerald mx-auto mb-4" />
                  <div className="text-3xl font-bold text-navy-deep mb-2">{metric.value}</div>
                  <div className="text-muted-foreground font-medium">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={activeTab === tab.id ? "btn-executive" : "btn-outline-executive"}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-executive p-8 lg:p-12">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-navy-deep mb-4">Project Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The Nexus Smart Energy Hub represents the future of urban energy infrastructure in Africa. 
                    This flagship 50MW solar mini-grid with integrated smart city technologies demonstrates 
                    our capability to deliver executive-grade renewable energy solutions at scale.
                  </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-navy-deep mb-4">Smart Grid Features</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald rounded-full"></div>
                        Advanced energy management systems
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald rounded-full"></div>
                        Real-time demand response capabilities
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald rounded-full"></div>
                        Integrated battery storage (20MWh)
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-navy-deep mb-4">Infrastructure Integration</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald rounded-full"></div>
                        IoT-enabled monitoring systems
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald rounded-full"></div>
                        Smart building integration
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald rounded-full"></div>
                        EV charging infrastructure ready
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "technical" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-navy-deep mb-6">Technical Specifications</h3>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-navy-deep mb-4">Solar Array</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>50 MW DC capacity</li>
                      <li>Tier-1 monocrystalline panels</li>
                      <li>25-year performance warranty</li>
                      <li>Bifacial technology</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-navy-deep mb-4">Energy Storage</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>20 MWh lithium-ion BESS</li>
                      <li>4-hour discharge duration</li>
                      <li>Advanced BMS integration</li>
                      <li>Fire suppression systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-navy-deep mb-4">Grid Infrastructure</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>33/11 kV substation</li>
                      <li>Smart inverter technology</li>
                      <li>SCADA integration</li>
                      <li>Remote monitoring capabilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "impact" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-navy-deep mb-6">Environmental & Social Impact</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-navy-deep mb-4">Environmental Benefits</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>75,000 tCO₂ annual emissions reduction</li>
                      <li>Zero water consumption for operations</li>
                      <li>Minimal land use footprint</li>
                      <li>Biodiversity conservation measures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-navy-deep mb-4">Community Impact</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>300+ direct jobs created</li>
                      <li>Local contractor development program</li>
                      <li>Technical skills training initiatives</li>
                      <li>Community energy access programs</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "milestones" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-navy-deep mb-6">Project Milestones</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-emerald rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-navy-deep">Phase 1 Completion</div>
                      <div className="text-muted-foreground">15 MW commissioned - Q2 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 border-2 border-emerald bg-emerald/20 rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-navy-deep">Phase 2 Construction</div>
                      <div className="text-muted-foreground">35 MW build-out - Q4 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 border-2 border-muted rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-muted-foreground">Full Commercial Operation</div>
                      <div className="text-muted-foreground">Complete system integration - Q1 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Performance Guarantees */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-navy-deep text-center mb-12">Performance Guarantees</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {guarantees.map((guarantee, index) => (
                <Card key={index} className="card-executive p-6 text-center">
                  <CardContent className="p-0">
                    <guarantee.icon className="h-12 w-12 text-emerald mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-navy-deep mb-3">{guarantee.title}</h4>
                    <p className="text-muted-foreground">{guarantee.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipProject;