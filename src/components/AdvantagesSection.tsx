import { CheckCircle, Users, Cog, Trophy, Timer, ShieldCheck } from "lucide-react";

const advantages = [
  {
    icon: Users,
    title: "Опытная команда",
    description: "Более 15 лет в сфере покраски железнодорожного транспорта",
    stat: "500+",
    statLabel: "специалистов",
  },
  {
    icon: Cog,
    title: "Современное оборудование",
    description: "Используем только профессиональное оборудование ведущих производителей",
    stat: "2024",
    statLabel: "год обновления",
  },
  {
    icon: Trophy,
    title: "Лидер отрасли",
    description: "Входим в ТОП-5 компаний по покраске вагонов в России",
    stat: "№3",
    statLabel: "в рейтинге РЖД",
  },
  {
    icon: Timer,
    title: "Быстрые сроки",
    description: "Оптимизированные процессы позволяют сократить время работ",
    stat: "72ч",
    statLabel: "минимальный срок",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия качества",
    description: "Предоставляем расширенную гарантию на все виды работ",
    stat: "5 лет",
    statLabel: "гарантии",
  },
  {
    icon: CheckCircle,
    title: "Полная сертификация",
    description: "Все необходимые лицензии и сертификаты соответствия",
    stat: "ISO",
    statLabel: "9001:2015",
  },
];

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-4">
            Почему выбирают нас
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем лучшие условия и гарантируем высокое качество работ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-lg p-6 hover:shadow-industrial transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <advantage.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-montserrat font-semibold text-lg text-foreground mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {advantage.description}
                  </p>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-accent">{advantage.stat}</span>
                    <span className="text-sm text-muted-foreground">{advantage.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-center">
          <h3 className="font-montserrat font-bold text-2xl text-primary-foreground mb-4">
            Более 10 000 вагонов покрашено за последние 5 лет
          </h3>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            Мы работаем с крупнейшими железнодорожными операторами России и стран СНГ, 
            обеспечивая высочайшее качество покрасочных работ
          </p>
        </div>
      </div>
    </section>
  );
}