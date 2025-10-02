import { Paintbrush, Shield, Wrench, Droplets, FileCheck, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Paintbrush,
    title: "Полная покраска вагонов",
    description: "Комплексная покраска грузовых и пассажирских вагонов с применением современных технологий",
    features: ["Пескоструйная обработка", "Грунтование", "Финишное покрытие"],
  },
  {
    icon: Shield,
    title: "Антикоррозийная защита",
    description: "Многослойная защита от коррозии с использованием специальных составов",
    features: ["Цинковое покрытие", "Эпоксидная грунтовка", "Защитный лак"],
  },
  {
    icon: Wrench,
    title: "Ремонт покрытия",
    description: "Локальный и капитальный ремонт лакокрасочного покрытия",
    features: ["Устранение сколов", "Восстановление цвета", "Полировка"],
  },
  {
    icon: Droplets,
    title: "Специальные покрытия",
    description: "Нанесение специализированных покрытий для различных типов грузов",
    features: ["Химстойкие", "Термостойкие", "Антистатические"],
  },
  {
    icon: FileCheck,
    title: "Техническая документация",
    description: "Полный пакет документов и сертификатов соответствия",
    features: ["Акты выполненных работ", "Гарантийные талоны", "Сертификаты"],
  },
  {
    icon: Truck,
    title: "Выездные работы",
    description: "Покраска вагонов на территории заказчика по всей России",
    features: ["Мобильные бригады", "Своё оборудование", "Быстрый выезд"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг по покраске и защите железнодорожных вагонов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-industrial transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="font-montserrat text-xl">{service.title}</CardTitle>
                <CardDescription className="font-inter">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}