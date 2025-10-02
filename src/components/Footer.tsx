import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="КБС-ЛОГИСТИК Logo" className="w-12 h-12 object-contain" />
              <span className="font-montserrat font-bold text-xl text-[#FF6B35]">FLIPACLIP</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Профессиональная покраска железнодорожных вагонов с гарантией качества
            </p>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">ООО «КБС-ЛОГИСТИК»</h3>
            <div className="text-sm text-primary-foreground/80 space-y-1">
              <p>ИНН: 9725091562</p>
              <p>ОГРН: 1227700468192</p>
              <p>КПП: 772501001</p>
              <p>Генеральный директор: Чепец Петр Петрович</p>
              <p>Для прямых обращений: p.chepec@kbslogistic.ru</p>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>115054, г. Москва, Дубининская ул., д. 57, стр. 2, помещ. 12Т</span>
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
    </footer>
  );
}