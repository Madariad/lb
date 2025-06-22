import { useState, useEffect } from 'react';

export default function AdaptiveLinearEquationsVisualizer() {
  // Параметры для первой прямой: y = m1*x + b1
  const [m1, setM1] = useState(0.5);
  const [b1, setB1] = useState(1);
  
  // Параметры для второй прямой: y = m2*x + b2
  const [m2, setM2] = useState(1);
  const [b2, setB2] = useState(-1);
  
  // Решение системы (если существует)
  const [solution, setSolution] = useState({ x: 0, y: 0, exists: false });
  
  // Адаптивные настройки размера
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  // Настройки сетки
  const getGridSettings = () => {
    const baseSize = screenWidth < 640 ? 25 : screenWidth < 768 ? 30 : 35;
    
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
      setSolution({ exists: false });
      return;
    }
    
    // Расчет точки пересечения
    const x = (b2 - b1) / (m1 - m2);
    const y = m1 * x + b1;
    setSolution({ x, y, exists: true });
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
  
  // Получение системы уравнений в стандартной форме
  const getStandardForm = (m, b) => {
    const a = m;
    const c = -b;
    
    let equation = '';
    if (a !== 0) {
      equation += a === 1 ? 'x' : a === -1 ? '-x' : `${formatNumber(a)}x`;
    }
    
    if (a !== 0 && b !== 0) {
      equation += b > 0 ? ' + ' : ' - ';
    }
    
    if (b !== 0) {
      equation += `${Math.abs(formatNumber(b))}`;
    }
    
    if (a === 0 && b === 0) {
      equation = '0';
    }
    
    return `${equation} = 0`;
  };
  
  // Начальные значения для отображения графика, как на изображении
  useEffect(() => {
    // Установка начальных значений для воспроизведения графика с изображения
    setM1(0.5);
    setB1(1);
    setM2(1);
    setB2(-1);
  }, []);
  
  return (
    <div className="flex flex-col items-center w-full max-w-full">
      <h2 className="text-xl font-bold mb-4">Система линейных уравнений</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-4">
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Уравнение 1: y = {formatNumber(m1)}x + {formatNumber(b1)}</h3>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-20 sm:w-24">m₁:</span>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.1"
                value={m1}
                onChange={(e) => setM1(parseFloat(e.target.value))}
                className="flex-grow"
              />
              <span className="w-12 text-right">{formatNumber(m1)}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-20 sm:w-24">b₁:</span>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.1"
                value={b1}
                onChange={(e) => setB1(parseFloat(e.target.value))}
                className="flex-grow"
              />
              <span className="w-12 text-right">{formatNumber(b1)}</span>
            </div>
            <div className="text-sm mt-2 text-gray-700">
              Стандартная форма: {getStandardForm(-m1, b1)}
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Уравнение 2: y = {formatNumber(m2)}x + {formatNumber(b2)}</h3>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-20 sm:w-24">m₂:</span>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.1"
                value={m2}
                onChange={(e) => setM2(parseFloat(e.target.value))}
                className="flex-grow"
              />
              <span className="w-12 text-right">{formatNumber(m2)}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-20 sm:w-24">b₂:</span>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.1"
                value={b2}
                onChange={(e) => setB2(parseFloat(e.target.value))}
                className="flex-grow"
              />
              <span className="w-12 text-right">{formatNumber(b2)}</span>
            </div>
            <div className="text-sm mt-2 text-gray-700">
              Стандартная форма: {getStandardForm(-m2, b2)}
            </div>
          </div>
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
            
            {/* Точка пересечения (если существует) */}
            {solution.exists && (
              <>
                <circle
                  cx={transformX(solution.x)}
                  cy={transformY(solution.y)}
                  r="5"
                  fill="green"
                />
                {/* Отображаем координаты только когда они в пределах сетки */}
                {Math.abs(solution.x) <= gridSize && Math.abs(solution.y) <= gridSize && (
                  <text
                    x={transformX(solution.x) + 10}
                    y={transformY(solution.y) - 10}
                    fill="green"
                    fontSize="12"
                  >
                    ({formatNumber(solution.x)}, {formatNumber(solution.y)})
                  </text>
                )}
              </>
            )}
          </svg>
        </div>
      </div>
      
      <div className="text-center w-full">
        {solution.exists ? (
          <div className="bg-green-50 p-3 rounded border border-green-200">
            <p className="font-medium">
              Решение системы: ({formatNumber(solution.x)}, {formatNumber(solution.y)})
            </p>
          </div>
        ) : (
          <div className="bg-red-50 p-3 rounded border border-red-200">
            <p className="font-medium text-red-600">
              Прямые параллельны. Система не имеет решений.
            </p>
          </div>
        )}
        
        <div className="mt-4 text-left bg-gray-50 p-4 rounded">
          <h3 className="font-semibold mb-2">Система уравнений:</h3>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl">{`{`}</span>
            <div>
              <div>y = {formatNumber(m1)}x + {formatNumber(b1)}</div>
              <div>y = {formatNumber(m2)}x + {formatNumber(b2)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}