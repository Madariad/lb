import React, { useState, useRef, useEffect } from 'react';

const LinearEquationsSolver = () => {
  const canvasRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [currentStep, setCurrentStep] = useState("Введите коэффициенты и нажмите 'Решить'");
  
  // Коэффициенты для системы уравнений
  const [eq1, setEq1] = useState({ a: 2, b: 1, c: 6 });
  const [eq2, setEq2] = useState({ a: 1, b: -1, c: 0 });
  
  // Вычисление решения системы
  const calculateSolution = () => {
    const { a: a1, b: b1, c: c1 } = eq1;
    const { a: a2, b: b2, c: c2 } = eq2;
    
    const determinant = a1 * b2 - a2 * b1;
    
    if (Math.abs(determinant) < 0.0001) {
      return null; // Система не имеет единственного решения
    }
    
    const x = (c1 * b2 - c2 * b1) / determinant;
    const y = (a1 * c2 - a2 * c1) / determinant;
    
    return { 
      x: Math.round(x * 100) / 100, 
      y: Math.round(y * 100) / 100 
    };
  };
  
  const solution = calculateSolution();
  
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  
  const drawGrid = (ctx) => {
    ctx.strokeStyle = '#f0f0f0';
    ctx.lineWidth = 1;
    
    for (let i = 0; i <= 12; i++) {
      const pos = i * 50;
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
    
    for (let i = -6; i <= 6; i++) {
      if (i !== 0) {
        const x = 300 + i * 50;
        const y = 300 - i * 50;
        
        ctx.fillText(i.toString(), x - 5, 315);
        ctx.fillText(i.toString(), 315, y + 5);
      }
    }
  };
  
  const drawLine = (ctx, equation, color, animated = false, progress = 1) => {
    const { a, b, c } = equation;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    
    if (animated) {
      ctx.setLineDash([10, 5]);
      ctx.lineDashOffset = -progress * 20;
    } else {
      ctx.setLineDash([]);
    }
    
    ctx.beginPath();
    
    const points = [];
    
    if (Math.abs(b) > 0.001) {
      // Обычная линия: y = (c - ax) / b
      for (let x = -6; x <= 6; x += 0.1) {
        const y = (c - a * x) / b;
        if (y >= -6 && y <= 6) {
          points.push({ x: 300 + x * 50, y: 300 - y * 50 });
        }
      }
    } else if (Math.abs(a) > 0.001) {
      // Вертикальная линия: x = c / a
      const xVal = c / a;
      if (xVal >= -6 && xVal <= 6) {
        points.push({ x: 300 + xVal * 50, y: 0 });
        points.push({ x: 300 + xVal * 50, y: 600 });
      }
    }
    
    if (points.length > 0) {
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
    }
    
    ctx.stroke();
  };
  
  const drawIntersection = (ctx, solution) => {
    if (!solution) return;
    
    const { x, y } = solution;
    const canvasX = 300 + x * 50;
    const canvasY = 300 - y * 50;
    
    // Check if point is visible on canvas
    if (canvasX < 0 || canvasX > 600 || canvasY < 0 || canvasY > 600) return;
    
    ctx.fillStyle = '#ffeb3b';
    ctx.strokeStyle = '#f39c12';
    ctx.lineWidth = 3;
    
    ctx.beginPath();
    ctx.arc(canvasX, canvasY, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#333';
    ctx.font = 'bold 14px Arial';
    ctx.fillText(`(${x}, ${y})`, canvasX + 15, canvasY - 10);
  };
  
  const animateStep = async (step) => {
    return new Promise(resolve => {
      let progress = 0;
      const duration = 1500;
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
        
        switch(step) {
          case 1:
            setCurrentStep("Шаг 1: Построение первой прямой");
            drawLine(ctx, eq1, '#e74c3c', true, progress);
            break;
            
          case 2:
            setCurrentStep("Шаг 2: Построение второй прямой");
            drawLine(ctx, eq1, '#e74c3c');
            drawLine(ctx, eq2, '#3498db', true, progress);
            break;
            
          case 3:
            setCurrentStep("Шаг 3: Точка пересечения - решение системы!");
            drawLine(ctx, eq1, '#e74c3c');
            drawLine(ctx, eq2, '#3498db');
            if (progress > 0.5) {
              drawIntersection(ctx, solution);
            }
            break;
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setTimeout(resolve, 500);
        }
      };
      animate();
    });
  };
  
  const startAnimation = async () => {
    if (isAnimating || !solution) return;
    
    setIsAnimating(true);
    
    for (let step = 1; step <= 3; step++) {
      await animateStep(step);
    }
    
    setIsAnimating(false);
  };
  
  const resetCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    clearCanvas();
    drawGrid(ctx);
    drawAxes(ctx);
    drawNumbers(ctx);
    setCurrentStep("Введите коэффициенты и нажмите 'Решить'");
  };
  
  useEffect(() => {
    resetCanvas();
  }, []);
  
  const formatEquation = (eq) => {
    const { a, b, c } = eq;
    let equation = '';
    
    if (a !== 0) {
      equation += a === 1 ? 'x' : a === -1 ? '-x' : `${a}x`;
    }
    
    if (b !== 0) {
      if (equation && b > 0) equation += ' + ';
      else if (equation && b < 0) equation += ' - ';
      else if (b < 0) equation += '-';
      
      const absB = Math.abs(b);
      equation += absB === 1 ? 'y' : `${absB}y`;
    }
    
    equation += ` = ${c}`;
    return equation;
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-blue-800 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 animate-pulse">
          📈 Интерактивный решатель систем линейных уравнений
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Введите коэффициенты</h2>
            
            {/* First Equation */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-200">Первое уравнение: {formatEquation(eq1)}</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm mb-2">Коэффициент при x (a₁)</label>
                  <input
                    type="number"
                    value={eq1.a}
                    onChange={(e) => setEq1({...eq1, a: parseFloat(e.target.value) || 0})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Коэффициент при y (b₁)</label>
                  <input
                    type="number"
                    value={eq1.b}
                    onChange={(e) => setEq1({...eq1, b: parseFloat(e.target.value) || 0})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Константа (c₁)</label>
                  <input
                    type="number"
                    value={eq1.c}
                    onChange={(e) => setEq1({...eq1, c: parseFloat(e.target.value) || 0})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50"
                    step="0.1"
                  />
                </div>
              </div>
            </div>
            
            {/* Second Equation */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-green-200">Второе уравнение: {formatEquation(eq2)}</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm mb-2">Коэффициент при x (a₂)</label>
                  <input
                    type="number"
                    value={eq2.a}
                    onChange={(e) => setEq2({...eq2, a: parseFloat(e.target.value) || 0})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Коэффициент при y (b₂)</label>
                  <input
                    type="number"
                    value={eq2.b}
                    onChange={(e) => setEq2({...eq2, b: parseFloat(e.target.value) || 0})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Константа (c₂)</label>
                  <input
                    type="number"
                    value={eq2.c}
                    onChange={(e) => setEq2({...eq2, c: parseFloat(e.target.value) || 0})}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50"
                    step="0.1"
                  />
                </div>
              </div>
            </div>
            
            {/* Solution Display */}
            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-xl p-4 mb-6">
              <h3 className="text-lg font-bold mb-2">Решение системы:</h3>
              {solution ? (
                <div className="text-xl font-bold text-yellow-300">
                  x = {solution.x}, y = {solution.y}
                </div>
              ) : (
                <div className="text-red-300">
                  Система не имеет единственного решения (прямые параллельны или совпадают)
                </div>
              )}
            </div>
            
            {/* Control Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={startAnimation}
                disabled={isAnimating || !solution}
                className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-500 disabled:to-gray-600 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 disabled:scale-100"
              >
                {isAnimating ? '🎬 Анимация...' : '🎯 Решить графически'}
              </button>
              <button
                onClick={resetCanvas}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                🔄 Сброс
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
              <div className="flex justify-center items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-red-500"></div>
                  <span>Первое уравнение</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-blue-500"></div>
                  <span>Второе уравнение</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span>Решение</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Examples */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h3 className="text-xl font-bold mb-4 text-center">🚀 Быстрые примеры</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => {
                setEq1({ a: 1, b: 1, c: 4 });
                setEq2({ a: 2, b: -1, c: 2 });
              }}
              className="bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-all duration-300"
            >
              <div className="font-semibold">Пример 1</div>
              <div className="text-sm">x + y = 4</div>
              <div className="text-sm">2x - y = 2</div>
            </button>
            <button
              onClick={() => {
                setEq1({ a: 3, b: 2, c: 12 });
                setEq2({ a: 1, b: 1, c: 5 });
              }}
              className="bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-all duration-300"
            >
              <div className="font-semibold">Пример 2</div>
              <div className="text-sm">3x + 2y = 12</div>
              <div className="text-sm">x + y = 5</div>
            </button>
            <button
              onClick={() => {
                setEq1({ a: 2, b: -3, c: 1 });
                setEq2({ a: 1, b: 2, c: 8 });
              }}
              className="bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-all duration-300"
            >
              <div className="font-semibold">Пример 3</div>
              <div className="text-sm">2x - 3y = 1</div>
              <div className="text-sm">x + 2y = 8</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinearEquationsSolver;