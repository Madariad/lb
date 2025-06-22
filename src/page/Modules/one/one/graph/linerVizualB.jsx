import { useState, useEffect } from 'react';

export default function SimpleLinearSystemVisualizer() {
  // Параметры для первой прямой (синяя): y = m1*x + b1
  const [m1, setM1] = useState(2);
  const [b1, setB1] = useState(0);
  
  // Параметры для второй прямой (красная): y = m2*x + b2
  const [m2, setM2] = useState(-1);
  const [b2, setB2] = useState(-2);
  
  // Решение системы
  const [solution, setSolution] = useState({ x: 0, y: 0, exists: false });
  
  // Адаптивные настройки размера
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  // Настройки сетки
  const getGridSettings = () => {
    const baseSize = screenWidth < 640 ? 20 : screenWidth < 768 ? 25 : 30;
    
    return {
      gridSize: 5, // Количество делений от центра
      cellSize: baseSize, // Размер ячейки в пикселях
    };
  };
  
  const { gridSize, cellSize } = getGridSettings();
  const width = cellSize * (2 * gridSize + 1);
  const height = cellSize * (2 * gridSize + 1);
  
  // Обработка изменения размера экрана
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Пересчет решения при изменении параметров
  useEffect(() => {
    // Проверка на параллельность прямых
    if (m1 === m2) {
      if (b1 === b2) {
        // Совпадающие прямые - бесконечное множество решений
        setSolution({ exists: true, infinite: true });
      } else {
        // Параллельные прямые - нет решений
        setSolution({ exists: false });
      }
      return;
    }
    
    // Расчет точки пересечения
    const x = (b2 - b1) / (m1 - m2);
    const y = m1 * x + b1;
    setSolution({ x, y, exists: true, infinite: false });
  }, [m1, b1, m2, b2]);
  
  // Генерация точек для каждой прямой
  const getLinePoints = (m, b) => {
    const points = [];
    const extendedGridSize = gridSize * 1.5; // Немного выходим за границы сетки
    
    for (let x = -extendedGridSize; x <= extendedGridSize; x += 0.1) {
      const y = m * x + b;
      points.push({ x, y });
    }
    return points;
  };
  
  // Преобразование координат сетки в координаты SVG
  const transformX = x => (x + gridSize) * cellSize;
  const transformY = y => height - (y + gridSize) * cellSize;
  
  // Генерация SVG-пути из точек
  const createPath = points => {
    if (points.length === 0) return "";
    
    return points.reduce((path, point, i) => {
      const command = i === 0 ? "M" : "L";
      return `${path} ${command} ${transformX(point.x)} ${transformY(point.y)}`;
    }, "");
  };
  
  const formatNumber = num => {
    return parseFloat(num.toFixed(2));
  };

  // Сброс к начальным значениям из изображения
  const resetToImageExample = () => {
    setM1(2);  // для прямой, проходящей через A(1, 2) и C(0, 3)
    setB1(3);  // y = 2x + 3 для первой прямой (через точку C)
    setM2(-2); // для прямой, проходящей через B(2, 0) и D(-1, -2)
    setB2(4);  // y = -2x + 4 для второй прямой (через точку B y = -2*2 + 4 = 0)
  };
  
  // Устанавливаем начальные значения при первой загрузке
  useEffect(() => {
    resetToImageExample();
  }, []);
  
  return (
    <div className="flex flex-col items-center w-full max-w-full">
      <h2 className="text-xl font-bold mb-4">Система линейных уравнений</h2>
      
      <div className="flex flex-wrap gap-4 w-full mb-4 justify-center">
        <div className="bg-gray-50 p-3 rounded shadow">
          <h3 className="text-base font-semibold mb-2">Первая прямая (синяя)</h3>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-20">Наклон:</span>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.1"
                value={m1}
                onChange={(e) => setM1(parseFloat(e.target.value))}
                className="w-32"
              />
              <span className="w-10 text-right">{formatNumber(m1)}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-20">Сдвиг:</span>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.1"
                value={b1}
                onChange={(e) => setB1(parseFloat(e.target.value))}
                className="w-32"
              />
              <span className="w-10 text-right">{formatNumber(b1)}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-3 rounded shadow">
          <h3 className="text-base font-semibold mb-2">Вторая прямая (красная)</h3>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-20">Наклон:</span>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.1"
                value={m2}
                onChange={(e) => setM2(parseFloat(e.target.value))}
                className="w-32"
              />
              <span className="w-10 text-right">{formatNumber(m2)}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-20">Сдвиг:</span>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.1"
                value={b2}
                onChange={(e) => setB2(parseFloat(e.target.value))}
                className="w-32"
              />
              <span className="w-10 text-right">{formatNumber(b2)}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-end">
          <button 
            onClick={resetToImageExample}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Сбросить к примеру
          </button>
        </div>
      </div>
      
      <div className="bg-white border border-gray-300 rounded p-2 mb-4 w-full overflow-x-auto">
        <div className="flex justify-center">
          <svg 
            width={width} 
            height={height} 
            viewBox={`0 0 ${width} ${height}`} 
            className="bg-white"
          >
            {/* Сетка */}
            {Array.from({ length: 2 * gridSize + 1 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * cellSize}
                y1={0}
                x2={i * cellSize}
                y2={height}
                stroke="#e5e5e5"
                strokeWidth="1"
              />
            ))}
            {Array.from({ length: 2 * gridSize + 1 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1={0}
                y1={i * cellSize}
                x2={width}
                y2={i * cellSize}
                stroke="#e5e5e5"
                strokeWidth="1"
              />
            ))}
            
            {/* Оси */}
            <line
              x1={0}
              y1={gridSize * cellSize}
              x2={width}
              y2={gridSize * cellSize}
              stroke="#666"
              strokeWidth="2"
            />
            <line
              x1={gridSize * cellSize}
              y1={0}
              x2={gridSize * cellSize}
              y2={height}
              stroke="#666"
              strokeWidth="2"
            />
            
            {/* Подписи к осям */}
            <text x={width - 15} y={gridSize * cellSize - 5} fill="#666" fontSize="14">x</text>
            <text x={gridSize * cellSize + 5} y={15} fill="#666" fontSize="14">y</text>
            
            {/* Числа на сетке */}
            {Array.from({ length: 2 * gridSize + 1 }).map((_, i) => {
              const num = i - gridSize;
              if (num !== 0) {
                return (
                  <g key={`num-${i}`}>
                    <text
                      x={transformX(num)}
                      y={transformY(0) + 15}
                      fill="#666"
                      fontSize="10"
                      textAnchor="middle"
                    >
                      {num}
                    </text>
                    <text
                      x={transformX(0) - 15}
                      y={transformY(num) + 5}
                      fill="#666"
                      fontSize="10"
                      textAnchor="middle"
                    >
                      {num}
                    </text>
                  </g>
                );
              }
              return null;
            })}
            
            {/* Прямые */}
            <path
              d={createPath(getLinePoints(m1, b1))}
              stroke="blue"
              strokeWidth="2"
              fill="none"
            />
            <path
              d={createPath(getLinePoints(m2, b2))}
              stroke="red"
              strokeWidth="2"
              fill="none"
            />
            
            {/* Ключевые точки для примера из изображения */}
            <circle cx={transformX(1)} cy={transformY(2)} r="4" fill="blue" />
            <text x={transformX(1) + 5} y={transformY(2) - 5} fill="blue" fontSize="12">A</text>
            
            <circle cx={transformX(0)} cy={transformY(3)} r="4" fill="blue" />
            <text x={transformX(0) - 15} y={transformY(3)} fill="blue" fontSize="12">C</text>
            
            <circle cx={transformX(2)} cy={transformY(0)} r="4" fill="red" />
            <text x={transformX(2) + 5} y={transformY(0) - 5} fill="red" fontSize="12">B</text>
            
            <circle cx={transformX(-1)} cy={transformY(-2)} r="4" fill="red" />
            <text x={transformX(-1) - 15} y={transformY(-2)} fill="red" fontSize="12">D</text>
            
            {/* Точка пересечения */}
            {solution.exists && !solution.infinite && Math.abs(solution.x) <= gridSize && Math.abs(solution.y) <= gridSize && (
              <circle
                cx={transformX(solution.x)}
                cy={transformY(solution.y)}
                r="4"
                fill="green"
              />
            )}
          </svg>
        </div>
      </div>
      
      <div className="text-center w-full mb-4">
        {solution.infinite ? (
          <div className="bg-blue-50 p-2 rounded border border-blue-200">
            <p className="font-medium">
              Прямые совпадают. Система имеет бесконечно много решений.
            </p>
          </div>
        ) : solution.exists ? (
          <div className="bg-green-50 p-2 rounded border border-green-200">
            <p className="font-medium">
              Решение системы: ({formatNumber(solution.x)}, {formatNumber(solution.y)})
            </p>
          </div>
        ) : (
          <div className="bg-red-50 p-2 rounded border border-red-200">
            <p className="font-medium text-red-600">
              Прямые параллельны. Система не имеет решений.
            </p>
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 p-3 rounded w-full">
        <h3 className="font-semibold mb-2">Уравнения прямых:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <span className="font-medium text-blue-600">Синяя прямая:</span> y = {formatNumber(m1)}x + {formatNumber(b1)}
          </div>
          <div>
            <span className="font-medium text-red-600">Красная прямая:</span> y = {formatNumber(m2)}x + {formatNumber(b2)}
          </div>
        </div>
      </div>
    </div>
  );
}