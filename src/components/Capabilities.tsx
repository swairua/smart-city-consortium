import { CheckCircle, Award, Shield, Zap, Cog, Users, Globe, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Capabilities = () => {
  const coreCapabilities = [
    {
      icon: Zap,
      title: "EPC Excellence",
      description: "End-to-end engineering, procurement, and construction services with proven project delivery track record.",
      features: ["Project Development", "System Design", "Construction Management", "Commissioning"]
    },
    {
      icon: Cog,
      title: "IPP Operations",
      description: "Independent power producer capabilities with long-term asset ownership and performance optimization.",
      features: ["Asset Ownership", "O&M Services", "Performance Optimization", "Revenue Management"]
    },
    {
      icon: Globe,
      title: "Smart City Integration",
      description: "Advanced IoT and smart grid technologies for next-generation urban energy infrastructure.",
      features: ["IoT Integration", "Smart Grid Systems", "Energy Management", "Data Analytics"]
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Comprehensive stakeholder engagement and local capacity building for sustainable project outcomes.",
      features: ["Stakeholder Engagement", "Local Training", "Community Programs", "Skills Development"]
    }
  ];

  const certifications = [
    { name: "EPRA", description: "Energy & Petroleum Regulatory Authority License", status: "Active" },
    { name: "NCA", description: "National Construction Authority Registration", status: "Active" },
    { name: "ISO 9001", description: "Quality Management Systems", status: "Certified" },
    { name: "ISO 14001", description: "Environmental Management Systems", status: "Certified" },
    { name: "ISO 45001", description: "Occupational Health & Safety", status: "Certified" },
    { name: "E&S", description: "Environmental & Social Standards", status: "IFC Compliant" }
  ];

  const technicalSpecs = [
    { metric: "System Efficiency", value: "≥98.5%", description: "Inverter and system efficiency guarantee" },
    { metric: "Availability", value: "≥99.0%", description: "Annual system availability commitment" },
    { metric: "Performance Ratio", value: "≥85%", description: "Energy yield performance guarantee" },
    { metric: "Response Time", value: "<4 hours", description: "Emergency response and repair time" }
  ];

  return (
    <section id="capabilities" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-2 bg-emerald/10 text-emerald border-emerald/20">
              Core Capabilities
            </Badge>
            <h2 className="text-hero text-navy-deep mb-6">
              Executive-Grade
              <br />
              <span className="text-emerald">Energy Solutions</span>
            </h2>
            <p className="text-subhero max-w-3xl mx-auto">
              Comprehensive EPC and IPP capabilities backed by world-class certifications, 
              proven technical performance, and deep local market expertise.
            </p>
          </div>

          {/* Core Capabilities Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {coreCapabilities.map((capability, index) => (
              <Card key={index} className="card-executive p-6">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center">
                      <capability.icon className="h-6 w-6 text-emerald" />
                    </div>
                    <CardTitle className="text-xl text-navy-deep">{capability.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{capability.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-3">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Performance Guarantees */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-navy-deep text-center mb-12">Performance Guarantees</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalSpecs.map((spec, index) => (
                <Card key={index} className="card-executive p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-emerald mb-2">{spec.value}</div>
                    <div className="font-semibold text-navy-deep mb-2">{spec.metric}</div>
                    <div className="text-sm text-muted-foreground">{spec.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications & Compliance */}
          <div>
            <h3 className="text-2xl font-bold text-navy-deep text-center mb-12">Certifications & Compliance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-executive p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center">
                        <Award className="h-5 w-5 text-emerald" />
                      </div>
                      <div>
                        <div className="font-bold text-navy-deep">{cert.name}</div>
                        <Badge variant="outline" className="text-xs bg-emerald/10 text-emerald border-emerald/20">
                          {cert.status}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Risk Mitigation */}
          <div className="mt-20 bg-navy-deep rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">
                <Shield className="inline-block h-8 w-8 text-emerald mr-3" />
                Risk Mitigation & Guarantees
              </h3>
              <p className="text-white/80 max-w-3xl mx-auto">
                Comprehensive risk management framework protecting investor interests 
                with industry-leading guarantees and insurance coverage.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-emerald" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Performance Bonds</h4>
                <p className="text-white/70 text-sm">Milestone-based performance bonds ensuring on-time, on-budget delivery</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-emerald" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Insurance Coverage</h4>
                <p className="text-white/70 text-sm">Comprehensive insurance including construction, operational, and political risk</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-emerald" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Warranties</h4>
                <p className="text-white/70 text-sm">25-year equipment warranties with comprehensive O&M service agreements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;