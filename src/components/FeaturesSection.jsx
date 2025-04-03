import React from 'react';


const featuresData = [
    {
      title: "Интерактивные тесты",
      description: "Наша платформа предлагает интерактивные тесты для проверки знаний в реальном времени. Формат заданий разнообразен: вопросы с выбором ответов, истинно-ложные утверждения и открытые вопросы.",
      icon: "https://img.icons8.com/fluency/48/000000/task.png",
    },
    {
        title: "Интеграция с GeoGebra",
        description:
          "Прямой доступ к интерактивным инструментам для построения графиков и динамических моделей.",
        icon: "https://1.bp.blogspot.com/-KJwMU1ARNTE/YTJcFHhJhWI/AAAAAAAAXR4/clQodaIwShwZGe1N8lIbnisbPRpI-fwCwCLcBGAsYHQ/s600/geogebra-3.png",
      },
    {
      title: "Аналитика и контроль",
      description:
        "Мгновенная проверка знаний и аналитика успеваемости для повышения эффективности обучения.",
      icon: "https://img.icons8.com/fluency/48/000000/combo-chart.png",
    },
    {
      title: "Адаптивный дизайн",
      description:
        "Современный, интуитивно понятный интерфейс, адаптирующийся под любые устройства.",
      icon: "https://img.icons8.com/fluency/48/000000/smartphone-tablet.png",
    },
  ];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-100" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Особенности платформы
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="h-16 w-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
