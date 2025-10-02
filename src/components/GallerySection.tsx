import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import paintingProcess from "@/assets/painting-process.jpg";
import finishedWagon from "@/assets/finished-wagon.jpg";
import teamWork from "@/assets/team-work.jpg";

const galleryItems = [
  {
    id: 1,
    image: paintingProcess,
    title: "Процесс покраски",
    category: "Технология",
    description: "Нанесение защитного покрытия методом безвоздушного распыления",
  },
  {
    id: 2,
    image: finishedWagon,
    title: "Готовый вагон",
    category: "Результат",
    description: "Грузовой вагон после полного цикла покрасочных работ",
  },
  {
    id: 3,
    image: teamWork,
    title: "Команда специалистов",
    category: "Процесс",
    description: "Контроль качества покрытия нашими экспертами",
  },
  {
    id: 4,
    image: paintingProcess,
    title: "Подготовка поверхности",
    category: "Технология",
    description: "Пескоструйная обработка перед нанесением грунта",
  },
  {
    id: 5,
    image: finishedWagon,
    title: "Пассажирский вагон",
    category: "Результат",
    description: "Покраска пассажирского вагона в корпоративные цвета",
  },
  {
    id: 6,
    image: teamWork,
    title: "Финальная проверка",
    category: "Процесс",
    description: "Приемка работ представителями заказчика",
  },
];

const categories = ["Все", "Технология", "Процесс", "Результат"];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "Все" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-4">
            Наши работы
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Примеры выполненных проектов по покраске железнодорожных вагонов
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="min-w-[100px]"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-accent text-sm font-semibold">{item.category}</span>
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/80">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0">
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto"
                />
                <div className="p-6 bg-background">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-accent text-sm font-semibold">{selectedImage.category}</span>
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl mb-2">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}