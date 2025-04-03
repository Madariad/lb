import React from 'react';

const featuresData = [
    {
        title: "Интерактивные тренировки",
        description:
            "Получайте мгновенную обратную связь и улучшайте свои навыки с помощью динамичных заданий.",
        icon: "https://img.icons8.com/fluency/48/000000/exercise.png",
    },
    {
        title: "Видео уроки",
        description:
            "Просматривайте подробные видеоуроки от экспертов и шаг за шагом осваивайте новые темы.",
        icon: "https://img.icons8.com/fluency/48/000000/film-reel.png",
    },
    {
        title: "Проверка знаний",
        description:
            "Закрепляйте пройденный материал с помощью регулярных тестов и оцените свой прогресс.",
        icon: "https://img.icons8.com/fluency/48/000000/checklist.png",
    },
    {
        title: "Круглосуточная поддержка",
        description:
            "Наша команда всегда готова прийти на помощь, обеспечивая поддержку в любое время дня и ночи.",
        icon: "https://img.icons8.com/fluency/48/000000/customer-support.png",
    },
];

const InfoSection = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white mb-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Почему выбирают нас
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuresData.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white text-sky-600 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center shadow-lg transition transform hover:scale-105"
                        >
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="h-16 w-16 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
