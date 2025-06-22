import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2 } from 'lucide-react';

const SoundDistanceProblem = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [soundWave, setSoundWave] = useState(0);
  const [showDiagram, setShowDiagram] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isAnimating) {
      interval = setInterval(() => {
        setTime(prev => {
          const newTime = prev + 0.1;
          setSoundWave(newTime * 30);
          if (newTime >= 8) {
            setIsAnimating(false);
            return 0;
          }
          return newTime;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isAnimating]);

  const reset = () => {
    setIsAnimating(false);
    setSoundWave(0);
    setTime(0);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Задача о определении расстояния по звуку</h2>
        <p className="text-gray-700 leading-relaxed">
          Укажите способ нахождения расстояния от берега (речь идет о конкретной точке на берегу) до корабля, находящегося далеко в море (рис. 13.8, а). Используйте рисунок 13.8, б.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Анимированная сцена корабля */}
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-center">а) Корабль в море</h3>
          <div className="relative h-64 bg-gradient-to-b from-sky-200 to-blue-400 rounded-lg overflow-hidden">
            {/* Небо */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-sky-100 to-sky-200"></div>
            
            {/* Волны */}
            <div className="absolute bottom-0 left-0 right-0 h-32">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-blue-300 opacity-60"
                  style={{
                    left: `${i * 12.5}%`,
                    bottom: '50%',
                    width: '25%',
                    height: '8px',
                    borderRadius: '50%',
                    transform: `translateY(${Math.sin(time * 3 + i) * 5}px)`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Корабль */}
            <div 
              className="absolute transition-all duration-1000"
              style={{ 
                left: '70%', 
                top: '35%',
                transform: `translateY(${Math.sin(time * 2) * 3}px)`
              }}
            >
              <div className="relative">
                {/* Корпус корабля */}
                <div className="w-12 h-6 bg-gray-800 rounded-b-lg"></div>
                {/* Мачты */}
                <div className="absolute left-2 -top-8 w-1 h-8 bg-gray-600"></div>
                <div className="absolute left-6 -top-6 w-1 h-6 bg-gray-600"></div>
                <div className="absolute left-9 -top-10 w-1 h-10 bg-gray-600"></div>
                {/* Паруса */}
                <div className="absolute left-1 -top-8 w-3 h-6 bg-white opacity-80 rounded-r"></div>
                <div className="absolute left-5 -top-6 w-3 h-4 bg-white opacity-80 rounded-r"></div>
              </div>
            </div>

            {/* Звуковые волны */}
            {isAnimating && (
              <>
                {[1, 2, 3].map((wave, i) => (
                  <div
                    key={wave}
                    className="absolute border-2 border-yellow-400 rounded-full opacity-60"
                    style={{
                      left: '76%',
                      top: '41%',
                      width: `${soundWave + i * 50}px`,
                      height: `${soundWave + i * 50}px`,
                      transform: 'translate(-50%, -50%)',
                      opacity: Math.max(0, 0.8 - (soundWave + i * 50) / 200)
                    }}
                  ></div>
                ))}
              </>
            )}

            {/* Берег */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-amber-200 to-amber-300">
              <div className="absolute top-1/2 left-2 w-2 h-8 bg-red-500 rounded-t transform -translate-y-1/2">
                <div className="absolute -top-1 left-1/2 w-3 h-2 bg-red-600 transform -translate-x-1/2 rounded"></div>
              </div>
              {/* Точка D */}
              <div className="absolute top-1/3 right-1 w-3 h-3 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">D</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={() => setIsAnimating(!isAnimating)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {isAnimating ? <Pause size={16} /> : <Play size={16} />}
              <span>{isAnimating ? 'Пауза' : 'Запустить звук'}</span>
              <Volume2 size={16} />
            </button>
            <button
              onClick={reset}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              <RotateCcw size={16} />
              <span>Сброс</span>
            </button>
          </div>

          {isAnimating && (
            <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
              <p className="text-sm text-gray-700">
                ⏱️ Время: <span className="font-bold">{time.toFixed(1)}с</span>
                <br />
                🔊 Звук распространяется со скоростью 340 м/с
              </p>
            </div>
          )}
        </div>

        {/* Интерактивная диаграмма */}
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-center">б) Схема решения</h3>
          
          <div className="relative h-64 bg-gray-50 rounded-lg overflow-hidden">
            <svg viewBox="0 0 300 200" className="w-full h-full">
              {/* Треугольник */}
              <polygon
                points="50,150 250,150 250,50"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                className="transition-all duration-1000"
              />
              
              {/* Точки */}
              <circle cx="50" cy="150" r="4" fill="#EF4444" />
              <circle cx="250" cy="150" r="4" fill="#EF4444" />
              <circle cx="250" cy="50" r="4" fill="#EF4444" />
              <circle cx="250" cy="100" r="3" fill="#10B981" />
              
              {/* Подписи точек */}
              <text x="45" y="165" className="text-sm font-bold fill-gray-700">C</text>
              <text x="255" y="165" className="text-sm font-bold fill-gray-700">B</text>
              <text x="255" y="45" className="text-sm font-bold fill-gray-700">A</text>
              <text x="255" y="95" className="text-sm font-bold fill-gray-700">E</text>
              <text x="35" y="140" className="text-sm font-bold fill-gray-700">D</text>
              
              {/* Размеры */}
              <line x1="60" y1="155" x2="240" y2="155" stroke="#666" strokeWidth="1" strokeDasharray="2,2" />
              <text x="145" y="170" className="text-xs fill-gray-600">расстояние до корабля</text>
              
              <line x1="255" y1="60" x2="255" y2="140" stroke="#666" strokeWidth="1" strokeDasharray="2,2" />
              <text x="270" y="105" className="text-xs fill-gray-600">h</text>

              {/* Анимированная линия звука */}
              {showDiagram && (
                <line 
                  x1="50" 
                  y1="150" 
                  x2="250" 
                  y2="50" 
                  stroke="#F59E0B" 
                  strokeWidth="2" 
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
              )}
            </svg>
          </div>

          <button
            onClick={() => setShowDiagram(!showDiagram)}
            className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            {showDiagram ? 'Скрыть решение' : 'Показать путь звука'}
          </button>

          {showDiagram && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Решение:</h4>
              <div className="text-sm text-gray-700 space-y-2">
                <p>1. Звук от корабля (A) до наблюдателя (D)</p>
                <p>2. Измеряем время прохождения звука</p>
                <p>3. Расстояние = скорость звука × время</p>
                <p className="font-semibold text-green-700">
                  📐 Используем теорему Пифагора для точного расчета
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">💡 Принцип решения:</h4>
        <p className="text-sm text-gray-700">
          Корабль подает звуковой сигнал, наблюдатель на берегу засекает время от вспышки до звука. 
          Зная скорость звука (≈340 м/с), можно вычислить расстояние. Для точности учитывается 
          высота наблюдения и используется геометрия прямоугольного треугольника.
        </p>
      </div>
    </div>
  );
};

export default SoundDistanceProblem;