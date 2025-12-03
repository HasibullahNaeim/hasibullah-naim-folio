import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const navLinks = [{
  href: "#home",
  label: "Home"
}, {
  href: "#about",
  label: "About"
}, {
  href: "#projects",
  label: "Projects"
}, {
  href: "#skills",
  label: "Skills"
}, {
  href: "#contact",
  label: "Contact"
}];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-card/95 backdrop-blur-md shadow-card" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors">
            ​<span className="text-primary">​</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
                {link.label}
              </a>)}
            <Button asChild size="sm">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md shadow-card animate-fade-in">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map(link => <a key={link.href} href={link.href} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>)}
              <Button asChild className="w-full">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Hire Me
                </a>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;