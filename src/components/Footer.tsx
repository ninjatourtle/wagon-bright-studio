import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.svg";
export default function Footer() {
  return <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="КБС-ЛОГИСТИК Logo" className="w-12 h-12 object-contain" />
              <span className="font-montserrat font-bold text-xl text-[#f97415]">FLIPACLIP</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Профессиональная покраска железнодорожных вагонов с гарантией качества
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>г. Москва, Варшавское шоссе, д. 56, стр. 2</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>+7 (495) 157-83-02</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@kbslogistic.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@flipaclip.ru</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="text-center">
            <p className="text-sm text-primary-foreground/60">
              © 2025 ООО «КБС-ЛОГИСТИК». Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>;
}