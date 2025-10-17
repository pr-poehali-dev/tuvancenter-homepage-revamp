import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Palette",
      title: "Мастер-классы",
      description: "Обучение традиционным ремёслам и искусству"
    },
    {
      icon: "Users",
      title: "Культурные программы",
      description: "Фольклорные выступления и этнографические программы"
    },
    {
      icon: "BookOpen",
      title: "Образовательные курсы",
      description: "Изучение тувинской культуры и традиций"
    }
  ];

  const activities = [
    {
      image: "https://cdn.poehali.dev/projects/8d81f5ba-78a9-48d7-94d8-a38e6ae04c3e/files/8815e95b-5327-43ec-b436-a8c8dea451f5.jpg",
      title: "Традиционные ремесла",
      description: "Изготовление изделий в технике народного творчества"
    },
    {
      image: "https://cdn.poehali.dev/projects/8d81f5ba-78a9-48d7-94d8-a38e6ae04c3e/files/a9fdc93b-94b4-42e6-b1af-76ec99ca1af3.jpg",
      title: "Культурное наследие",
      description: "Сохранение и развитие национальных традиций"
    },
    {
      image: "https://cdn.poehali.dev/projects/8d81f5ba-78a9-48d7-94d8-a38e6ae04c3e/files/95670cdc-da4e-4712-b83d-cdf6d1bb1f1d.jpg",
      title: "Этнографические программы",
      description: "Погружение в традиционную тувинскую культуру"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Центр развития</h1>
              <p className="text-sm text-gray-600">Тувинской традиционной культуры</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-gray-700 hover:text-primary transition">О центре</a>
            <a href="#" className="text-gray-700 hover:text-primary transition">Мероприятия</a>
            <a href="#" className="text-gray-700 hover:text-primary transition">Контакты</a>
          </nav>
          <Button className="hidden md:block">Записаться</Button>
        </div>
      </header>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Сохраняем и развиваем
                <span className="text-primary block mt-2">традиции предков</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Центр развития тувинской традиционной культуры и ремесел — место, где древние традиции встречаются с современностью
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  Наши программы
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/8d81f5ba-78a9-48d7-94d8-a38e6ae04c3e/files/a9fdc93b-94b4-42e6-b1af-76ec99ca1af3.jpg"
                alt="Тувинская культура"
                className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" size={32} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">15+</p>
                    <p className="text-gray-600">лет опыта</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши направления</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем широкий спектр культурных и образовательных программ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша деятельность</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Познакомьтесь с нашими программами и мероприятиями
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Присоединяйтесь к нам</h2>
          <p className="text-xl mb-8 opacity-90">
            Станьте частью сообщества, сохраняющего и развивающего тувинскую культуру
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-primary">
              Расписание мероприятий
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">О центре</h3>
            <p className="text-gray-400 leading-relaxed">
              Центр развития тувинской традиционной культуры и ремесел
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (XXX) XXX-XX-XX
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@tuvancenter.ru
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="text-white hover:text-primary">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-primary">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Центр развития тувинской традиционной культуры и ремесел. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
