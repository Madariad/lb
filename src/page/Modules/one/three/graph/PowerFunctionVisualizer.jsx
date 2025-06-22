import React, { useState, useRef, useEffect } from 'react';

const PowerFunctionVisualizer = () => {
  const canvasRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState("Измените параметры и нажмите 'Построить график'");
  
  // Параметры функции y = ax^n
  const [a, setA] = useState(1);
  const [n, setN] = useState(2);
  
  // Анализ свойств функции
  const analyzeFunction = () => {
    const properties = {
      domain: "R (все действительные числа)",
      range: "",
      evenOdd: "",
      monotonicity: "",
      extrema: "",
      passThroughOrigin: a !== 0 && n > 0,
      passThroughOne: true
    };
    
    // Четность/нечетность
    if (n % 2 === 0) {
      properties.evenOdd = "Четная функция";
      if (a > 0) {
        properties.range = "[0, +∞)";
        properties.monotonicity = "Убывает на (-∞, 0], возрастает на [0, +∞)";
        properties.extrema = "Минимум в точке (0, 0)";
      } else {
        properties.range = "(-∞, 0]";
        properties.monotonicity = "Возрастает на (-∞, 0], убывает на [0, +∞)";
        properties.extrema = "Максимум в точке (0, 0)";
      }
    } else {
      properties.evenOdd = "Нечетная функция";
      properties.range = "R (все действительные числа)";
      if (a > 0) {
        properties.monotonicity = "Возрастает на всей области определения";
        properties.extrema = "Экстремумов нет";
      } else {
        properties.monotonicity = "Убывает на всей области определения";
        properties.extrema = "Экстремумов нет";
      }
    }
    
    return properties;
  };
  
  const properties = analyzeFunction();
  
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  
  const drawGrid = (ctx) => {
    ctx.strokeStyle = '#f0f0f0';
    ctx.lineWidth = 1;
    
    for (let i = 0; i <= 20; i++) {
      const pos = i * 30;
      ctx.beginPath();
      ctx.moveTo(pos, 0);
      ctx.lineTo(pos, 600);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(0, pos);
      ctx.lineTo(600, pos);
      ctx.stroke();
    }
  };
  
  const drawAxes = (ctx) => {
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    
    // X-axis
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(600, 300);
    ctx.stroke();
    
    // Y-axis
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 600);
    ctx.stroke();
    
    // Arrows
    ctx.fillStyle = '#333';
    ctx.beginPath();
    ctx.moveTo(590, 295);
    ctx.lineTo(600, 300);
    ctx.lineTo(590, 305);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(295, 10);
    ctx.lineTo(300, 0);
    ctx.lineTo(305, 10);
    ctx.fill();
    
    // Labels
    ctx.font = '16px Arial';
    ctx.fillText('x', 580, 320);
    ctx.fillText('y', 310, 20);
    ctx.fillText('0', 285, 320);
  };
  
  const drawNumbers = (ctx) => {
    ctx.font = '12px Arial';
    ctx.fillStyle = '#666';
    
    for (let i = -10; i <= 10; i++) {
      if (i !== 0) {
        const x = 300 + i * 30;
        const y = 300 - i * 30;
        
        if (i % 2 === 0) { // Показываем только четные числа для читаемости
          ctx.fillText(i.toString(), x - 5, 315);
          ctx.fillText(i.toString(), 315, y + 5);
        }
      }
    }
  };
  
  const calculateY = (x) => {
    if (n === 0) return a;
    if (n < 0 && x === 0) return undefined; // Деление на ноль
    
    return a * Math.pow(x, n);
  };
  
  const drawFunction = (ctx, animated = false, progress = 1) => {
    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 3;
    
    if (animated) {
      ctx.setLineDash([8, 4]);
      ctx.lineDashOffset = -progress * 15;
    } else {
      ctx.setLineDash([]);
    }
    
    ctx.beginPath();
    
    let started = false;
    const step = 0.05;
    const maxProgress = progress * 20 - 10; // От -10 до 10 по мере анимации
    
    for (let x = -10; x <= (animated ? maxProgress : 10); x += step) {
      const y = calculateY(x);
      
      if (y === undefined || !isFinite(y)) continue;
      
      const canvasX = 300 + x * 30;
      const canvasY = 300 - y * 30;
      
      // Ограничиваем отображение разумными пределами
      if (canvasY < -1000 || canvasY > 1600) continue;
      
      if (!started) {
        ctx.moveTo(canvasX, canvasY);
        started = true;
      } else {
        ctx.lineTo(canvasX, canvasY);
      }
    }
    
    ctx.stroke();
  };
  
  const drawSpecialPoints = (ctx) => {
    // Точка (0, 0) если функция проходит через начало координат
    if (properties.passThroughOrigin) {
      ctx.fillStyle = '#ffeb3b';
      ctx.strokeStyle = '#f39c12';
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.arc(300, 300, 6, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      
      ctx.fillStyle = '#333';
      ctx.font = 'bold 12px Arial';
      ctx.fillText('(0, 0)', 310, 295);
    }
    
    // Точка (1, a)
    const y1 = calculateY(1);
    if (isFinite(y1)) {
      const canvasY = 300 - y1 * 30;
      if (canvasY >= -50 && canvasY <= 650) {
        ctx.fillStyle = '#4CAF50';
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.arc(330, canvasY, 6, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#333';
        ctx.font = 'bold 12px Arial';
        ctx.fillText(`(1, ${a})`, 340, canvasY - 5);
      }
    }
    
    // Точка (-1, (-1)^n * a) для нечетных степеней
    if (n % 2 !== 0) {
      const yMinus1 = calculateY(-1);
      if (isFinite(yMinus1)) {
        const canvasY = 300 - yMinus1 * 30;
        if (canvasY >= -50 && canvasY <= 650) {
          ctx.fillStyle = '#9C27B0';
          ctx.strokeStyle = '#6A1B9A';
          ctx.lineWidth = 2;
          
          ctx.beginPath();
          ctx.arc(270, canvasY, 6, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
          
          ctx.fillStyle = '#333';
          ctx.font = 'bold 12px Arial';
          ctx.fillText(`(-1, ${yMinus1})`, 180, canvasY - 5);
        }
      }
    }
  };
  
  const animateFunction = async () => {
    return new Promise(resolve => {
      let progress = 0;
      const duration = 2000;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        progress = Math.min(elapsed / duration, 1);
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        clearCanvas();
        drawGrid(ctx);
        drawAxes(ctx);
        drawNumbers(ctx);
        drawFunction(ctx, true, progress);
        
        if (progress > 0.7) {
          drawSpecialPoints(ctx);
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setTimeout(resolve, 300);
        }
      };
      animate();
    });
  };
  
  const startAnimation = async () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentStep(`Построение графика функции y = ${formatFunction()}`);
    
    await animateFunction();
    
    setCurrentStep(`График построен! Анализируйте свойства функции y = ${formatFunction()}`);
    setIsAnimating(false);
  };
  
  const resetCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    clearCanvas();
    drawGrid(ctx);
    drawAxes(ctx);
    drawNumbers(ctx);
    setCurrentStep("Измените параметры и нажмите 'Построить график'");
  };
  
  useEffect(() => {
    resetCanvas();
  }, []);
  
  const formatFunction = () => {
    if (n === 0) return `${a}`;
    if (n === 1) return a === 1 ? 'x' : a === -1 ? '-x' : `${a}x`;
    if (a === 1) return `x^${n}`;
    if (a === -1) return `-x^${n}`;
    return `${a}x^${n}`;
  };
  
  const getCoeffiecientSign = (coef) => {
    return coef > 0 ? 'положительный' : coef < 0 ? 'отрицательный' : 'равен нулю';
  };
  
  const getPowerType = () => {
    if (n === 0) return 'константа';
    if (n === 1) return 'линейная';
    if (n === 2) return 'квадратичная';
    if (n === 3) return 'кубическая';
    if (n > 0 && n % 2 === 0) return 'четная степень';
    if (n > 0 && n % 2 !== 0) return 'нечетная степень';
    if (n < 0) return 'обратная степенная';
    return 'степенная';
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 animate-pulse">
          📊 Интерактивное изучение функции y = axⁿ
        </h1>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Parameter Control Panel */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Параметры функции</h2>
            
            <div className="mb-6">
              <div className="text-2xl font-bold text-center mb-4 bg-white/20 rounded-xl p-4">
                y = {formatFunction()}
              </div>
            </div>
            
            {/* Coefficient a */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-3">
                Коэффициент a = {a}
              </label>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.1"
                value={a}
                onChange={(e) => setA(parseFloat(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-300 mt-1">
                <span>-5</span>
                <span>0</span>
                <span>5</span>
              </div>
              <div className="text-sm text-center mt-2">
                a {getCoeffiecientSign(a)}
              </div>
            </div>
            
            {/* Power n */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-3">
                Степень n = {n}
              </label>
              <input
                type="range"
                min="-4"
                max="6"
                step="1"
                value={n}
                onChange={(e) => setN(parseInt(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-300 mt-1">
                <span>-4</span>
                <span>0</span>
                <span>6</span>
              </div>
              <div className="text-sm text-center mt-2">
                {getPowerType()}
              </div>
            </div>
            
            {/* Quick presets */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Быстрые настройки</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => { setA(1); setN(2); }}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-sm transition-all"
                >
                  y = x²
                </button>
                <button
                  onClick={() => { setA(-1); setN(2); }}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-sm transition-all"
                >
                  y = -x²
                </button>
                <button
                  onClick={() => { setA(1); setN(3); }}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-sm transition-all"
                >
                  y = x³
                </button>
                <button
                  onClick={() => { setA(2); setN(3); }}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-sm transition-all"
                >
                  y = 2x³
                </button>
                <button
                  onClick={() => { setA(1); setN(-1); }}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-sm transition-all"
                >
                  y = 1/x
                </button>
                <button
                  onClick={() => { setA(1); setN(0.5); }}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-sm transition-all"
                >
                  y = √x
                </button>
              </div>
            </div>
            
            {/* Control Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={startAnimation}
                disabled={isAnimating}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-500 disabled:to-gray-600 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 disabled:scale-100"
              >
                {isAnimating ? '📈 Строим график...' : '🎯 Построить график'}
              </button>
              <button
                onClick={resetCanvas}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                🔄 Очистить
              </button>
            </div>
          </div>
          
          {/* Canvas Panel */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-center mb-4">
              <div className="bg-white/20 rounded-xl p-3 inline-block">
                <div className="text-lg font-semibold">{currentStep}</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-2xl">
              <canvas
                ref={canvasRef}
                width={600}
                height={600}
                className="w-full h-auto border-2 border-gray-300 rounded-lg"
              />
            </div>
            
            <div className="mt-4 text-sm text-gray-300 text-center">
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-red-500"></div>
                  <span>График функции</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span>(0,0)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>(1,a)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>(-1,±a)</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Properties Panel */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Свойства функции</h2>
            
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-semibold text-blue-300 mb-2">Область определения:</div>
                <div className="text-sm">{properties.domain}</div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-semibold text-green-300 mb-2">Множество значений:</div>
                <div className="text-sm">{properties.range}</div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-semibold text-purple-300 mb-2">Четность/нечетность:</div>
                <div className="text-sm">{properties.evenOdd}</div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-semibold text-yellow-300 mb-2">Монотонность:</div>
                <div className="text-sm">{properties.monotonicity}</div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-semibold text-red-300 mb-2">Экстремумы:</div>
                <div className="text-sm">{properties.extrema}</div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-semibold text-orange-300 mb-2">Особые точки:</div>
                <div className="text-sm">
                  {properties.passThroughOrigin ? "Проходит через (0,0)" : "Не проходит через начало координат"}
                  <br />
                  Всегда проходит через (1, {a})
                </div>
              </div>
            </div>
            
            {/* Function behavior description */}
            <div className="mt-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-4">
              <div className="font-bold text-cyan-300 mb-2">📝 Поведение функции:</div>
              <div className="text-sm">
                {n > 0 && n % 2 === 0 && a > 0 && "График имеет форму параболы, направленной вверх."}
                {n > 0 && n % 2 === 0 && a < 0 && "График имеет форму параболы, направленной вниз."}
                {n > 0 && n % 2 !== 0 && a > 0 && "График проходит через все четверти координатной плоскости, возрастая."}
                {n > 0 && n % 2 !== 0 && a < 0 && "График проходит через все четверти координатной плоскости, убывая."}
                {n < 0 && "График представляет собой гиперболу."}
                {n === 0 && "График представляет собой горизонтальную прямую."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerFunctionVisualizer;