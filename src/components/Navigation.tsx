import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [supportsBlur, setSupportsBlur] = useState(false);

  useEffect(() => {
    try {
      const ua = navigator.userAgent || "";
      const isWindows = ua.includes("Windows");
      const isChrome = ua.includes("Chrome") && !ua.includes("Edg/");
      const hasSupport = typeof CSS !== "undefined" && "supports" in CSS && CSS.supports("backdrop-filter: blur(2px)");
      setSupportsBlur(hasSupport && !(isWindows && isChrome));
    } catch {
      setSupportsBlur(false);
    }
  }, []);
  const navGroups = {
    projects: {
      label: "Projects",
      items: [{
        label: "Flagship Project",
        href: "#flagship"
      }, {
        label: "Portfolio",
        href: "#portfolio"
      }]
    },
    services: {
      label: "Services",
      items: [{
        label: "Capabilities",
        href: "#capabilities"
      }, {
        label: "Compliance",
        href: "#compliance"
      }]
    },
    company: {
      label: "Company",
      items: [{
        label: "About",
        href: "#about"
      }, {
        label: "Insights",
        href: "#insights"
      }]
    },
    investors: {
      label: "Investors",
      items: [{
        label: "Overview",
        href: "#investors"
      }, {
        label: "Data Room",
        href: "#dataroom"
      }]
    }
  };
  const standaloneItems = [{
    label: "Home",
    href: "#home"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 bg-navy-deep/95 border-b border-white/10", supportsBlur && "backdrop-blur-md")}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              Smart City <span className="text-emerald">Consortium</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Standalone Items */}
            {standaloneItems.map(item => <a key={item.label} href={item.href} className="text-white/80 hover:text-emerald transition-colors duration-200 font-medium">
                {item.label}
              </a>)}
            
            {/* Dropdown Menus */}
            {Object.entries(navGroups).map(([key, group]) => <DropdownMenu key={key}>
                <DropdownMenuTrigger className="flex items-center text-white/80 hover:text-emerald transition-colors duration-200 font-medium">
                  {group.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className={cn("bg-navy-deep/95 border border-white/10 z-[60]", supportsBlur && "backdrop-blur-md")}>
                  {group.items.map(item => <DropdownMenuItem key={item.label} className="text-white/80 hover:text-emerald hover:bg-white/5">
                      <a href={item.href} className="w-full">
                        {item.label}
                      </a>
                    </DropdownMenuItem>)}
                </DropdownMenuContent>
              </DropdownMenu>)}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" className="border-white/20 hover:border-emerald text-green-500">
              Data Room
            </Button>
            <Button className="btn-executive">Request RFP</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white hover:bg-white/10">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("lg:hidden overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-screen pb-6" : "max-h-0")}>
          <div className="flex flex-col space-y-2">
            {/* Standalone Items */}
            {standaloneItems.map(item => <a key={item.label} href={item.href} className="text-white/80 hover:text-emerald transition-colors duration-200 font-medium py-2" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>)}
            
            {/* Accordion Groups */}
            <Accordion type="multiple" className="w-full">
              {Object.entries(navGroups).map(([key, group]) => <AccordionItem key={key} value={key} className="border-white/10">
                  <AccordionTrigger className="text-white/80 hover:text-emerald py-2 hover:no-underline">
                    {group.label}
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <div className="flex flex-col space-y-2 pl-4">
                      {group.items.map(item => <a key={item.label} href={item.href} className="text-white/60 hover:text-emerald transition-colors duration-200 font-medium py-1" onClick={() => setIsOpen(false)}>
                          {item.label}
                        </a>)}
                    </div>
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
            
            {/* Mobile CTAs */}
            <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-white/10">
              <Button variant="outline" className="text-white border-white/20 hover:border-emerald hover:text-emerald w-full">
                Data Room
              </Button>
              <Button className="btn-executive w-full">Request RFP</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;
