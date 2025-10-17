import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const advantages = [
    {
      icon: "Shield",
      title: "Надёжность",
      description: "Профессиональный подход и гарантия качества на все виды работ",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "Clock",
      title: "Оперативность",
      description: "Быстрое реагирование на запросы и выполнение заказов в срок",
      color: "from-pink-500 to-orange-500"
    },
    {
      icon: "Users",
      title: "Опыт",
      description: "Более 10 лет успешной работы с клиентами по всей России",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: "Award",
      title: "Качество",
      description: "Современное оборудование и высокая квалификация специалистов",
      color: "from-yellow-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 overflow-hidden">
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 blob-shape"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 blob-shape" style={{ animationDelay: '2s' }}></div>
      
      <section className="container mx-auto px-4 py-32 text-center relative z-10">
        <div className="floating">
          <h1 className="text-7xl md:text-8xl font-bold mb-8 gradient-text animate-fade-in">
            Туванский центр
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Творческие решения для смелых проектов
        </p>
        <Button 
          size="lg" 
          className="text-lg px-10 py-7 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:scale-110 transition-transform duration-300 shadow-2xl animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Начать проект
        </Button>
      </section>

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 gradient-text">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className="p-8 text-center hover:scale-105 hover:-rotate-2 transition-all duration-500 border-0 shadow-xl bg-white/80 backdrop-blur-sm animate-fade-in group"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${advantage.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    <Icon name={advantage.icon} size={36} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-600/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-[3rem] p-16 shadow-2xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
              Давайте создадим что-то уникальное
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Расскажите о своей идее, и мы воплотим её в реальность
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 rounded-full border-4 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300 font-semibold"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900 text-white py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold">
            © 2024 Туванский центр. Креативность без границ.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;