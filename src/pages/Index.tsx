import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const advantages = [
    {
      icon: "Shield",
      title: "Надёжность",
      description: "Профессиональный подход и гарантия качества на все виды работ"
    },
    {
      icon: "Clock",
      title: "Оперативность",
      description: "Быстрое реагирование на запросы и выполнение заказов в срок"
    },
    {
      icon: "Users",
      title: "Опыт",
      description: "Более 10 лет успешной работы с клиентами по всей России"
    },
    {
      icon: "Award",
      title: "Качество",
      description: "Современное оборудование и высокая квалификация специалистов"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-8 text-foreground animate-fade-in">
          Туванский центр
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Современные решения для вашего бизнеса с заботой о качестве и комфорте
        </p>
        <Button 
          size="lg" 
          className="text-lg px-8 py-6 rounded-full animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Связаться с нами
        </Button>
      </section>

      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-foreground">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня и получите профессиональную консультацию
          </p>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full">
            Написать нам
          </Button>
        </div>
      </section>

      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            © 2024 Туванский центр. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
