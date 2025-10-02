import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 30 минут",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      content: "+7 (495) 157-83-02",
      subContent: "",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@kbslogistic.ru",
      subContent: "info@flipaclip.ru",
    },
    {
      icon: MapPin,
      title: "Адрес",
      content: "г. Москва, Дубининская ул., д. 57,",
      subContent: "стр. 2, помещ. 12Т",
    },
    {
      icon: Clock,
      title: "Режим работы",
      content: "Пн-Пт: 09:00 - 18:00",
      subContent: "Сб-Вс: по договоренности",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-4">
            Свяжитесь с нами
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку и получите бесплатную консультацию специалиста
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-industrial">
            <CardContent className="p-8">
              <h3 className="font-montserrat font-semibold text-2xl text-foreground mb-6">
                Отправить заявку
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Опишите вашу задачу"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="resize-none"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-4">
            <Card className="shadow-industrial">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-semibold text-2xl text-foreground mb-6">
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-accent-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-montserrat font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-foreground text-base">{info.content}</p>
                        {info.subContent && (
                          <p className="text-muted-foreground text-sm">{info.subContent}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h4 className="font-montserrat font-semibold text-xl mb-2">
                  Срочная консультация?
                </h4>
                <p className="mb-4 text-primary-foreground/90">
                  Позвоните нам прямо сейчас и получите ответы на все вопросы
                </p>
                <Button variant="outline" size="lg" className="bg-primary-foreground/20 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/30">
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}