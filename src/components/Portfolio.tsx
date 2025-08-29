import { useState } from "react";
import { ExternalLink, MapPin, Zap, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "smart-city", label: "Smart Cities" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
    { id: "community", label: "Community" }
  ];

  const projects = [
    {
      id: 1,
      title: "Nexus Technopolis Smart Grid",
      location: "Athi Plains District",
      capacity: "50 MW",
      status: "Under Construction",
      category: "smart-city",
      completion: "Q1 2025",
      impact: "150,000 people",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop",
      description: "Flagship smart-city solar mini-grid with advanced energy management systems and IoT integration."
    },
    {
      id: 2,
      title: "Nairobi Industrial Park",
      location: "Nairobi County",
      capacity: "25 MW",
      status: "Operational",
      category: "industrial",
      completion: "Completed",
      impact: "500+ businesses",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
      description: "Industrial-scale solar installation serving manufacturing and logistics hub."
    },
    {
      id: 3,
      title: "Eldoret Smart Community",
      location: "Uasin Gishu County",
      capacity: "15 MW",
      status: "Commissioning",
      category: "community",
      completion: "Q2 2024",
      impact: "75,000 people",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
      description: "Community-focused mini-grid with integrated social infrastructure and local capacity building."
    },
    {
      id: 4,
      title: "Kisumu Commercial District",
      location: "Kisumu County",
      capacity: "35 MW",
      status: "Development",
      category: "commercial",
      completion: "Q3 2024",
      impact: "200+ enterprises",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop",
      description: "Mixed-use commercial development with integrated renewable energy and smart building systems."
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Operational": return "bg-emerald/10 text-emerald border-emerald/20";
      case "Under Construction": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "Commissioning": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Development": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      default: return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-2 bg-emerald/10 text-emerald border-emerald/20">
              Project Portfolio
            </Badge>
            <h2 className="text-hero text-navy-deep mb-6">
              Proven Track Record
              <br />
              <span className="text-emerald">Across Kenya</span>
            </h2>
            <p className="text-subhero max-w-3xl mx-auto">
              From smart cities to industrial complexes, our portfolio demonstrates 
              consistent delivery of high-performance solar mini-grid solutions.
            </p>
          </div>

          {/* Portfolio Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald mb-2">125+</div>
              <div className="text-muted-foreground">MW Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald mb-2">15+</div>
              <div className="text-muted-foreground">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald mb-2">500K+</div>
              <div className="text-muted-foreground">People Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald mb-2">99.1%</div>
              <div className="text-muted-foreground">Avg. Uptime</div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "btn-executive" : "btn-outline-executive"}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="card-executive overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-navy-deep mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-emerald" />
                      <span className="text-sm text-muted-foreground">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-emerald" />
                      <span className="text-sm text-muted-foreground">{project.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-emerald" />
                      <span className="text-sm text-muted-foreground">{project.completion}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald" />
                      <span className="text-sm text-muted-foreground">{project.impact}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group">
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button size="lg" className="btn-executive">
              View Complete Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;