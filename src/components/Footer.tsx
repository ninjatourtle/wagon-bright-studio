import { Train, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Train className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="font-montserrat font-bold text-xl">РЖД Покраска</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Профессиональная покраска железнодорожных вагонов с гарантией качества
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="hover:text-accent transition-colors cursor-pointer">Покраска вагонов</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Антикоррозийная защита</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Ремонт покрытия</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Выездные работы</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Информация</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="hover:text-accent transition-colors cursor-pointer">О компании</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Сертификаты</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Клиенты</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Вакансии</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>г. Москва, ул. Промышленная, 42</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>+7 (800) 555-35-35</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@rzd-pokraska.ru</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 РЖД Покраска. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}