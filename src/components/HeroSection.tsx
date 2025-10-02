import { ArrowDown, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wagons.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 animate-fade-in">
          Профессиональная покраска
          <span className="block text-accent mt-2">железнодорожных вагонов</span>
        </h1>
        
        <p className="font-inter text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
          Современное оборудование, сертифицированные материалы и опытная команда специалистов. 
          Гарантия качества на все виды работ.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-2">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Рассчитать стоимость
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
            Наши работы
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-delay-3">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
            <Shield className="w-12 h-12 text-accent mx-auto mb-3" />
            <h3 className="font-montserrat font-semibold text-primary-foreground mb-2">
              Гарантия 5 лет
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              На все виды покрасочных работ
            </p>
          </div>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
            <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
            <h3 className="font-montserrat font-semibold text-primary-foreground mb-2">
              От 3 дней
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Полный цикл покраски вагона
            </p>
          </div>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
            <Award className="w-12 h-12 text-accent mx-auto mb-3" />
            <h3 className="font-montserrat font-semibold text-primary-foreground mb-2">
              Сертификация РЖД
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Лицензированная компания
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-primary-foreground/60" />
      </div>
    </section>
  );
}