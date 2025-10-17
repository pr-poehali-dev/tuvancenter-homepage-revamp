import { Card } from "@/components/ui/card";

const Index = () => {
  const advantages = [
    {
      number: "1",
      title: "УЧИТЬСЯ МОЖНО ИЗ ЛЮБОЙ ТОЧКИ МИРА",
      description: "Онлайн и в удобное для вас время. Потоки стартуют каждые две недели"
    },
    {
      number: "2",
      title: "ОБРАЗОВАТЕЛЬНАЯ ЛИЦЕНЗИЯ",
      description: "Наши курсы соответствуют стандартам образования. Вы можете получить налоговый вычет после прохождения обучения!"
    },
    {
      number: "3",
      title: "ИГРОВАЯ ФОРМА ОБУЧЕНИЯ",
      description: "Уроки выстроены от простого к сложному — так, чтобы каждый смог пройти весь курс"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white rounded-3xl p-12 flex flex-col">
          <h2 className="text-5xl font-black mb-auto uppercase tracking-tight">
            КАК МЫ УЧИМ
          </h2>
          
          <div className="flex justify-center items-center flex-1 py-8">
            <img 
              src="https://cdn.poehali.dev/files/d5bef784-7a09-4b24-9799-ea58b58a27a6.jpg"
              alt="3D Brain"
              className="w-full max-w-md object-contain"
            />
          </div>
        </Card>

        <div className="flex flex-col gap-6">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="bg-white rounded-3xl p-10 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-7xl font-black text-primary">
                    {advantage.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-4 uppercase leading-tight">
                    {advantage.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;