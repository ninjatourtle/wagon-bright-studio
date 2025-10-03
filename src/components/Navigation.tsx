import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Услуги" },
    { href: "#advantages", label: "Преимущества" },
    { href: "#gallery", label: "Галерея" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-industrial"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="КБС-ЛОГИСТИК Logo" className="w-12 h-12 object-contain" />
            <span className="font-montserrat font-bold text-xl text-[#FF6B35]">
              FLIPACLIP
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="hero" size="lg" className="group">
              <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              +7 (495) 157-83-02
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background shadow-industrial">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-inter text-foreground hover:text-primary transition-colors duration-300 py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="lg" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                +7 (495) 157-83-02
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}