import React, { useState, useEffect, useRef } from 'react';

const InteractiveGeometry = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationTime, setAnimationTime] = useState(0);
  const [selectedTheorem, setSelectedTheorem] = useState('congruence');
  const [showCalculations, setShowCalculations] = useState(false);
  const animationRef = useRef();
  
  // Базовые параметры
  const [baseTriangle] = useState({
    size: 80,
    centerX: 150,
    centerY: 150
  });

  const [baseQuad] = useState({
    width: 60,
    height: 80,
    centerX: 450,
    centerY: 150
  });

  // Текущие анимированные параметры
  const [currentParams, setCurrentParams] = useState({
    triangleRotation: 0,
    triangleScale: 1,
    triangleDOffset: 0.3,
    quadRotation: 0,
    quadScaleX: 1,
    quadScaleY: 1,
    quadSkew: 0,
    colorHue: 200
  });

  // Теоремы и их описания
  const theorems = {
    congruence: {
      title: "Равенство треугольников",
      description: "Два треугольника равны, если соответствующие стороны и углы равны",
      formula: "△ABC ≅ △A'B'C' ⟺ AB = A'B', BC = B'C', AC = A'C'",
      properties: [
        "SSS: равенство по трем сторонам",
        "SAS: равенство по двум сторонам и углу между ними", 
        "ASA: равенство по двум углам и стороне между ними",
        "RHS: равенство прямоугольных треугольников"
      ]
    },
    similarity: {
      title: "Подобие треугольников",
      description: "Треугольники подобны, если их соответствующие углы равны",
      formula: "△ABC ~ △A'B'C' ⟺ ∠A = ∠A', ∠B = ∠B', ∠C = ∠C'",
      properties: [
        "AA: подобие по двум углам",
        "SSS: подобие по трем сторонам (пропорциональность)",
        "SAS: подобие по двум сторонам и углу между ними",
        "Коэффициент подобия k = AB/A'B' = BC/B'C'"
      ]
    },
    quadrilateral: {
      title: "Свойства четырехугольников",
      description: "Четырехугольник - многоугольник с четырьмя вершинами и сторонами",
      formula: "Сумма углов: ∠A + ∠B + ∠C + ∠D = 360°",
      properties: [
        "Параллелограмм: противоположные стороны параллельны",
        "Ромб: все стороны равны",
        "Прямоугольник: все углы 90°",
        "Квадрат: все стороны равны и углы 90°"
      ]
    },
    transforms: {
      title: "Геометрические преобразования",
      description: "Преобразования сохраняют или изменяют геометрические свойства",
      formula: "T: R² → R², где T(x,y) = (x',y')",
      properties: [
        "Поворот: R(θ) сохраняет расстояния и углы",
        "Масштабирование: S(k) изменяет размеры в k раз",
        "Сдвиг: τ(a,b) перемещает на вектор (a,b)",
        "Отражение: σ изменяет ориентацию"
      ]
    }
  };

  // Анимационный цикл
  useEffect(() => {
    if (isAnimating) {
      const animate = (timestamp) => {
        const time = timestamp * 0.001;
        setAnimationTime(time);
        
        const slowWave = Math.sin(time * 0.5);
        const mediumWave = Math.sin(time * 1.2);
        const fastWave = Math.sin(time * 2.0);
        const verySlowWave = Math.sin(time * 0.3);
        
        setCurrentParams({
          triangleRotation: time * 30,
          triangleScale: 0.8 + 0.4 * (slowWave * 0.5 + 0.5),
          triangleDOffset: 0.2 + 0.4 * (mediumWave * 0.5 + 0.5),
          quadRotation: -time * 20,
          quadScaleX: 0.7 + 0.6 * (fastWave * 0.5 + 0.5),
          quadScaleY: 0.8 + 0.5 * (verySlowWave * 0.5 + 0.5),
          quadSkew: 30 * slowWave,
          colorHue: 200 + 160 * (mediumWave * 0.5 + 0.5)
        });
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAnimating]);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setAnimationTime(0);
    setCurrentParams({
      triangleRotation: 0,
      triangleScale: 1,
      triangleDOffset: 0.3,
      quadRotation: 0,
      quadScaleX: 1,
      quadScaleY: 1,
      quadSkew: 0,
      colorHue: 200
    });
  };

  // Вычисления для информационных панелей
  const getTriangleCalculations = () => {
    const points = getTrianglePoints();
    const sideAB = Math.sqrt(Math.pow(points.B.x - points.A.x, 2) + Math.pow(points.B.y - points.A.y, 2));
    const sideBC = Math.sqrt(Math.pow(points.C.x - points.B.x, 2) + Math.pow(points.C.y - points.B.y, 2));
    const sideAC = Math.sqrt(Math.pow(points.C.x - points.A.x, 2) + Math.pow(points.A.y - points.C.y, 2));
    const perimeter = sideAB + sideBC + sideAC;
    const area = Math.abs((points.A.x * (points.B.y - points.C.y) + points.B.x * (points.C.y - points.A.y) + points.C.x * (points.A.y - points.B.y)) / 2);
    
    return { sideAB, sideBC, sideAC, perimeter, area };
  };

  const getQuadCalculations = () => {
    const points = getQuadPoints();
    const diagonal1 = Math.sqrt(Math.pow(points.C.x - points.A.x, 2) + Math.pow(points.C.y - points.A.y, 2));
    const diagonal2 = Math.sqrt(Math.pow(points.D.x - points.B.x, 2) + Math.pow(points.D.y - points.B.y, 2));
    
    // Примерная площадь через диагонали
    const area = (diagonal1 * diagonal2 * Math.sin(currentParams.quadRotation * Math.PI / 180)) / 2;
    
    return { diagonal1, diagonal2, area: Math.abs(area) };
  };

  // Вычисление координат треугольника с анимацией
  const getTrianglePoints = () => {
    const { size, centerX, centerY } = baseTriangle;
    const { triangleRotation, triangleScale, triangleDOffset } = currentParams;
    
    const scaledSize = size * triangleScale;
    const rad = triangleRotation * Math.PI / 180;
    
    const basePoints = [
      { x: 0, y: -scaledSize * 0.8 },
      { x: -scaledSize * 0.7, y: scaledSize * 0.6 },
      { x: scaledSize * 0.7, y: scaledSize * 0.6 }
    ];
    
    const points = basePoints.map(point => ({
      x: centerX + (point.x * Math.cos(rad) - point.y * Math.sin(rad)),
      y: centerY + (point.x * Math.sin(rad) + point.y * Math.cos(rad))
    }));
    
    const D = {
      x: centerX + (triangleDOffset * scaledSize * Math.cos(rad + animationTime)),
      y: centerY + (triangleDOffset * scaledSize * Math.sin(rad + animationTime))
    };
    
    return { A: points[0], B: points[1], C: points[2], D };
  };

  // Вычисление координат четырехугольника с анимацией
  const getQuadPoints = () => {
    const { width, height, centerX, centerY } = baseQuad;
    const { quadRotation, quadScaleX, quadScaleY, quadSkew } = currentParams;
    
    const scaledWidth = width * quadScaleX;
    const scaledHeight = height * quadScaleY;
    const rad = quadRotation * Math.PI / 180;
    const skewRad = quadSkew * Math.PI / 180;
    
    const basePoints = [
      { x: 0, y: -scaledHeight * 0.6 },
      { x: -scaledWidth * 0.5 + Math.tan(skewRad) * scaledHeight * 0.3, y: scaledHeight * 0.3 },
      { x: 0, y: scaledHeight * 0.6 },
      { x: scaledWidth * 0.5 + Math.tan(skewRad) * scaledHeight * 0.3, y: scaledHeight * 0.3 }
    ];
    
    const points = basePoints.map(point => ({
      x: centerX + (point.x * Math.cos(rad) - point.y * Math.sin(rad)),
      y: centerY + (point.x * Math.sin(rad) + point.y * Math.cos(rad))
    }));
    
    return { A: points[0], B: points[1], C: points[2], D: points[3] };
  };

  const trianglePoints = getTrianglePoints();
  const quadPoints = getQuadPoints();
  const triangleCalc = getTriangleCalculations();
  const quadCalc = getQuadCalculations();

  // Цвета с анимацией
  const getAnimatedColor = (baseHue, offset = 0) => {
    const hue = (currentParams.colorHue + offset) % 360;
    return `hsl(${hue}, 70%, 50%)`;
  };

  const AnimatedLine = ({ x1, y1, x2, y2, colorOffset = 0, isDiagonal = false }) => {
    const color = getAnimatedColor(200, colorOffset);
    const width = isAnimating ? (isDiagonal ? 3 : 2.5) : 2;
    
    return (
      <line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={color}
        strokeWidth={width}
        className="transition-all duration-75"
        style={{
          filter: isAnimating ? `drop-shadow(0 0 ${isDiagonal ? 8 : 5}px ${color})` : 'none',
          strokeDasharray: isAnimating && isDiagonal ? '5,5' : 'none',
          strokeDashoffset: isAnimating ? -animationTime * 10 : 0
        }}
      />
    );
  };

  const AnimatedPoint = ({ x, y, label, colorOffset = 0 }) => {
    const color = getAnimatedColor(200, colorOffset);
    const radius = isAnimating ? 5 + Math.sin(animationTime * 3) * 1.5 : 4;
    
    return (
      <g>
        <circle
          cx={x} cy={y} r={radius}
          fill={color}
          className="transition-all duration-75"
          style={{
            filter: isAnimating ? `drop-shadow(0 0 10px ${color})` : 'none'
          }}
        />
        <text
          x={x} y={y - 15}
          textAnchor="middle"
          className="text-sm font-bold fill-gray-800 select-none"
          style={{
            fontSize: isAnimating ? `${12 + Math.sin(animationTime * 2) * 2}px` : '12px',
            textShadow: isAnimating ? `0 0 5px ${color}` : 'none'
          }}
        >
          {label}
        </text>
      </g>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-lg">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        📐 Интерактивная геометрия: Теория и практика
      </h2>

      {/* Панель управления */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={toggleAnimation}
          className={`px-8 py-3 text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 ${
            isAnimating 
              ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600' 
              : 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600'
          }`}
        >
          {isAnimating ? '⏸️ СТОП' : '▶️ АНИМАЦИЯ'}
        </button>
        
        <button
          onClick={resetAnimation}
          className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold rounded-lg shadow-lg hover:from-gray-700 hover:to-gray-800 transition-all transform hover:scale-105"
        >
          🔄 СБРОС
        </button>

        <button
          onClick={() => setShowCalculations(!showCalculations)}
          className="px-6 py-3 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold rounded-lg shadow-lg hover:from-orange-700 hover:to-yellow-700 transition-all transform hover:scale-105"
        >
          {showCalculations ? '📊 СКРЫТЬ РАСЧЕТЫ' : '🧮 ПОКАЗАТЬ РАСЧЕТЫ'}
        </button>
      </div>

      {/* Выбор теоремы */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-3 text-center">📚 Изучаемые теоремы:</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {Object.entries(theorems).map(([key, theorem]) => (
            <button
              key={key}
              onClick={() => setSelectedTheorem(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedTheorem === key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {theorem.title}
            </button>
          ))}
        </div>
      </div>

      {/* Информация о выбранной теореме */}
      <div className="mb-6 bg-black bg-opacity-50 rounded-lg p-4">
        <h4 className="text-lg font-bold text-white mb-2">
          📖 {theorems[selectedTheorem].title}
        </h4>
        <p className="text-gray-300 mb-3">{theorems[selectedTheorem].description}</p>
        <div className="bg-gray-800 p-3 rounded-lg mb-3">
          <p className="text-yellow-300 font-mono text-sm">
            🔢 {theorems[selectedTheorem].formula}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {theorems[selectedTheorem].properties.map((prop, index) => (
            <div key={index} className="text-sm text-gray-400">
              • {prop}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* SVG с анимированными фигурами */}
        <div className="lg:col-span-2">
          <div className="flex justify-center">
            <svg
              width="600"
              height="300"
              className="border-2 border-purple-400 rounded-lg shadow-2xl"
              style={{
                background: isAnimating 
                  ? `radial-gradient(circle, hsl(${currentParams.colorHue}, 20%, 5%) 0%, hsl(${currentParams.colorHue + 180}, 20%, 10%) 100%)`
                  : 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
              }}
            >
              {isAnimating && (
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              )}

              {/* Треугольник */}
              <g filter={isAnimating ? "url(#glow)" : ""}>
                <AnimatedLine
                  x1={trianglePoints.A.x} y1={trianglePoints.A.y}
                  x2={trianglePoints.B.x} y2={trianglePoints.B.y}
                  colorOffset={0}
                />
                <AnimatedLine
                  x1={trianglePoints.B.x} y1={trianglePoints.B.y}
                  x2={trianglePoints.C.x} y2={trianglePoints.C.y}
                  colorOffset={0}
                />
                <AnimatedLine
                  x1={trianglePoints.C.x} y1={trianglePoints.C.y}
                  x2={trianglePoints.A.x} y2={trianglePoints.A.y}
                  colorOffset={0}
                />
                
                <AnimatedLine
                  x1={trianglePoints.A.x} y1={trianglePoints.A.y}
                  x2={trianglePoints.D.x} y2={trianglePoints.D.y}
                  colorOffset={60}
                  isDiagonal={true}
                />
                <AnimatedLine
                  x1={trianglePoints.B.x} y1={trianglePoints.B.y}
                  x2={trianglePoints.D.x} y2={trianglePoints.D.y}
                  colorOffset={60}
                  isDiagonal={true}
                />
                <AnimatedLine
                  x1={trianglePoints.C.x} y1={trianglePoints.C.y}
                  x2={trianglePoints.D.x} y2={trianglePoints.D.y}
                  colorOffset={60}
                  isDiagonal={true}
                />

                <AnimatedPoint x={trianglePoints.A.x} y={trianglePoints.A.y} label="A" colorOffset={0} />
                <AnimatedPoint x={trianglePoints.B.x} y={trianglePoints.B.y} label="B" colorOffset={20} />
                <AnimatedPoint x={trianglePoints.C.x} y={trianglePoints.C.y} label="C" colorOffset={40} />
                <AnimatedPoint x={trianglePoints.D.x} y={trianglePoints.D.y} label="D" colorOffset={60} />
              </g>

              {/* Четырехугольник */}
              <g filter={isAnimating ? "url(#glow)" : ""}>
                <AnimatedLine
                  x1={quadPoints.A.x} y1={quadPoints.A.y}
                  x2={quadPoints.B.x} y2={quadPoints.B.y}
                  colorOffset={120}
                />
                <AnimatedLine
                  x1={quadPoints.B.x} y1={quadPoints.B.y}
                  x2={quadPoints.C.x} y2={quadPoints.C.y}
                  colorOffset={120}
                />
                <AnimatedLine
                  x1={quadPoints.C.x} y1={quadPoints.C.y}
                  x2={quadPoints.D.x} y2={quadPoints.D.y}
                  colorOffset={120}
                />
                <AnimatedLine
                  x1={quadPoints.D.x} y1={quadPoints.D.y}
                  x2={quadPoints.A.x} y2={quadPoints.A.y}
                  colorOffset={120}
                />

                <AnimatedLine
                  x1={quadPoints.A.x} y1={quadPoints.A.y}
                  x2={quadPoints.C.x} y2={quadPoints.C.y}
                  colorOffset={180}
                  isDiagonal={true}
                />
                <AnimatedLine
                  x1={quadPoints.B.x} y1={quadPoints.B.y}
                  x2={quadPoints.D.x} y2={quadPoints.D.y}
                  colorOffset={180}
                  isDiagonal={true}
                />

                <AnimatedPoint x={quadPoints.A.x} y={quadPoints.A.y} label="A" colorOffset={120} />
                <AnimatedPoint x={quadPoints.B.x} y={quadPoints.B.y} label="B" colorOffset={140} />
                <AnimatedPoint x={quadPoints.C.x} y={quadPoints.C.y} label="C" colorOffset={160} />
                <AnimatedPoint x={quadPoints.D.x} y={quadPoints.D.y} label="D" colorOffset={180} />
              </g>
            </svg>
          </div>
        </div>

        {/* Информационная панель */}
        <div className="space-y-4">
          {/* Статус анимации */}
          <div className="bg-black bg-opacity-50 rounded-lg p-4">
            <h4 className="text-white font-bold mb-2">⚙️ Параметры анимации</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div>⏱️ Время: {animationTime.toFixed(1)}с</div>
              <div>🔄 Поворот △: {currentParams.triangleRotation.toFixed(0)}°</div>
              <div>📏 Масштаб △: {currentParams.triangleScale.toFixed(2)}</div>
              <div>🔄 Поворот ◇: {currentParams.quadRotation.toFixed(0)}°</div>
              <div>📐 Наклон ◇: {currentParams.quadSkew.toFixed(1)}°</div>
              <div>🌈 Цветовой сдвиг: {currentParams.colorHue.toFixed(0)}°</div>
            </div>
          </div>

          {/* Расчеты */}
          {showCalculations && (
            <>
              <div className="bg-blue-900 bg-opacity-50 rounded-lg p-4">
                <h4 className="text-white font-bold mb-2">📐 Треугольник ABC</h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <div>AB = {triangleCalc.sideAB.toFixed(1)} px</div>
                  <div>BC = {triangleCalc.sideBC.toFixed(1)} px</div>
                  <div>AC = {triangleCalc.sideAC.toFixed(1)} px</div>
                  <div>Периметр = {triangleCalc.perimeter.toFixed(1)} px</div>
                  <div>Площадь = {triangleCalc.area.toFixed(1)} px²</div>
                </div>
              </div>

              <div className="bg-purple-900 bg-opacity-50 rounded-lg p-4">
                <h4 className="text-white font-bold mb-2">◇ Четырехугольник ABCD</h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <div>Диагональ AC = {quadCalc.diagonal1.toFixed(1)} px</div>
                  <div>Диагональ BD = {quadCalc.diagonal2.toFixed(1)} px</div>
                  <div>Площадь ≈ {quadCalc.area.toFixed(1)} px²</div>
                  <div>Тип: {Math.abs(currentParams.quadSkew) < 5 ? 'Прямоугольник' : 'Параллелограмм'}</div>
                </div>
              </div>
            </>
          )}

          {/* Математические формулы */}
          <div className="bg-green-900 bg-opacity-50 rounded-lg p-4">
            <h4 className="text-white font-bold mb-2">🧮 Активные формулы</h4>
            <div className="space-y-2 text-xs text-gray-300 font-mono">
              <div>🔄 R(θ) = [cos θ  -sin θ]</div>
              <div className="ml-8">[sin θ   cos θ]</div>
              <div>📏 S = ½|x₁(y₂-y₃)+x₂(y₃-y₁)+x₃(y₁-y₂)|</div>
              <div>📐 d = √[(x₂-x₁)² + (y₂-y₁)²]</div>
              <div>🌈 HSL(h,s,l) = ({currentParams.colorHue.toFixed(0)}°,70%,50%)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-300">
        <p className="text-sm">
          🎓 Образовательная анимация геометрических преобразований | 
          📊 Реальные расчеты в реальном времени | 
          🔬 Интерактивное изучение математики
        </p>
      </div>
    </div>
  );
};

export default InteractiveGeometry;