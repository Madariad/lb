import React, { useState, useRef, useEffect } from 'react';

const QuadraticFunctionExplorer = () => {
  const canvasRef = useRef(null);
  const [a, setA] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showProperties, setShowProperties] = useState(true);
  const [animationProgress, setAnimationProgress] = useState(0);
  
  // Предустановленные значения для демонстрации
  const presetValues = [
    { value: 1, label: "a = 1 (стандартная парабола)" },
    { value: 0.5, label: "a = 0.5 (широкая парабола)" },
    { value: 2, label: "a = 2 (узкая парабола)" },
    { value: -1, label: "a = -1 (перевернутая)" },
    { value: -0.5, label: "a = -0.5 (широкая перевернутая)" },
    { value: -2, label: "a = -2 (узкая перевернутая)" }
  ];
  
  // Вычисление свойств функции
  const getProperties = () => {
    const properties = {
      vertex: { x: 0, y: 0 },
      axisOfSymmetry: "x = 0",
      domain: "(-∞; +∞)",
      range: a > 0 ? "[0; +∞)" : "(-∞; 0]",
      direction: a > 0 ? "Ветви направлены вверх" : "Ветви направлены вниз",
      extremum: a > 0 ? "Минимум в точке (0; 0)" : "Максимум в точке (0; 0)",
      monotonicity: a > 0 
        ? "Убывает при x ∈ (-∞; 0], возрастает при x ∈ [0; +∞)"
        : "Возрастает при x ∈ (-∞; 0], убывает при x ∈ [0; +∞)",
      evenness: "Четная функция: f(-x) = f(x)",
      width: Math.abs(a) > 1 ? "Уже стандартной параболы" : Math.abs(a) < 1 ? "Шире стандартной параболы" : "Стандартная ширина"
    };
    
    return properties;
  };
  
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  
  const drawGrid = (ctx) => {
    ctx.strokeStyle = '#f0f0f0';
    ctx.lineWidth = 1;
    
    // Vertical lines
    for (let i = 0; i <= 20; i++) {
      const x = i * 30;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 600);
      ctx.stroke();
    }
    
    // Horizontal lines
    for (let i = 0; i <= 20; i++) {
      const y = i * 30;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(600, y);
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
    // X-axis arrow
    ctx.beginPath();
    ctx.moveTo(590, 295);
    ctx.lineTo(600, 300);
    ctx.lineTo(590, 305);
    ctx.fill();
    
    // Y-axis arrow
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
  
  const drawScale = (ctx) => {
    ctx.font = '12px Arial';
    ctx.fillStyle = '#666';
    
    // X-axis numbers
    for (let i = -9; i <= 9; i++) {
      if (i !== 0) {
        const x = 300 + i * 30;
        ctx.fillText(i.toString(), x - 5, 315);
      }
    }
    
    // Y-axis numbers
    for (let i = -9; i <= 9; i++) {
      if (i !== 0) {
        const y = 300 - i * 30;
        ctx.fillText(i.toString(), 315, y + 5);
      }
    }
  };
  
  const drawParabola = (ctx, coefficient, animated = false, progress = 1) => {
    const points = [];
    
    // Generate points for the parabola
    for (let x = -10; x <= 10; x += 0.05) {
      const y = coefficient * x * x;
      if (y >= -10 && y <= 10) {
        const canvasX = 300 + x * 30;
        const canvasY = 300 - y * 30;
        points.push({ x: canvasX, y: canvasY });
      }
    }
    
    if (points.length === 0) return;
    
    // Set up line style
    ctx.strokeStyle = coefficient > 0 ? '#e74c3c' : '#3498db';
    ctx.lineWidth = 3;
    
    if (animated) {
      ctx.setLineDash([5, 5]);
      ctx.lineDashOffset = -progress * 10;
    } else {
      ctx.setLineDash([]);
    }
    
    // Draw the parabola
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    
    const endIndex = animated ? Math.floor(points.length * progress) : points.length;
    
    for (let i = 1; i < endIndex; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    
    ctx.stroke();
  };
  
  const drawVertex = (ctx) => {
    // Highlight the vertex at (0, 0)
    ctx.fillStyle = '#ffeb3b';
    ctx.strokeStyle = '#f39c12';
    ctx.lineWidth = 3;
    
    ctx.beginPath();
    ctx.arc(300, 300, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    // Label
    ctx.fillStyle = '#333';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('(0, 0)', 310, 295);
  };
  
  const drawAxisOfSymmetry = (ctx) => {
    ctx.strokeStyle = '#9b59b6';
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 5]);
    
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 600);
    ctx.stroke();
    
    ctx.setLineDash([]);
    
    // Label
    ctx.fillStyle = '#9b59b6';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Ось симметрии', 310, 50);
  };
  
  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    clearCanvas();
    drawGrid(ctx);
    drawAxes(ctx);
    drawScale(ctx);
    drawAxisOfSymmetry(ctx);
    drawParabola(ctx, a);
    drawVertex(ctx);
  };
  
  const animateParabola = async () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    return new Promise(resolve => {
      let progress = 0;
      const duration = 2000;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        progress = Math.min(elapsed / duration, 1);
        setAnimationProgress(progress);
        
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        clearCanvas();
        drawGrid(ctx);
        drawAxes(ctx);
        drawScale(ctx);
        drawAxisOfSymmetry(ctx);
        drawParabola(ctx, a, true, progress);
        
        if (progress > 0.7) {
          drawVertex(ctx);
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
          setAnimationProgress(0);
          resolve();
        }
      };
      animate();
    });
  };
  
  useEffect(() => {
    redrawCanvas();
  }, [a]);
  
  useEffect(() => {
    redrawCanvas();
  }, []);
  
  const properties = getProperties();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 animate-pulse">
          📊 Исследователь функции y = ax²
        </h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Control Panel */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Управление</h2>
            
            {/* Current Function Display */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-4 mb-6 text-center">
              <div className="text-2xl font-bold">
                y = {a === 1 ? '' : a === -1 ? '-' : a}x²
              </div>
              <div className="text-sm text-gray-300 mt-2">
                Коэффициент a = {a}
              </div>
            </div>
            
            {/* Slider Control */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-3">
                Коэффициент a: {a}
              </label>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.1"
                value={a}
                onChange={(e) => setA(parseFloat(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-300 mt-2">
                <span>-3</span>
                <span>0</span>
                <span>3</span>
              </div>
            </div>
            
            {/* Precise Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Точное значение a:
              </label>
              <input
                type="number"
                value={a}
                onChange={(e) => setA(parseFloat(e.target.value) || 0)}
                step="0.1"
                className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50"
              />
            </div>
            
            {/* Preset Values */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Готовые примеры:</h3>
              <div className="space-y-2">
                {presetValues.map((preset, index) => (
                  <button
                    key={index}
                    onClick={() => setA(preset.value)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                      a === preset.value 
                        ? 'bg-white/30 border border-white/50' 
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    <div className="font-semibold">{preset.label.split(' (')[0]}</div>
                    <div className="text-sm text-gray-300">
                      {preset.label.split(' (')[1]?.replace(')', '') || ''}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Animation Button */}
            <button
              onClick={animateParabola}
              disabled={isAnimating}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-500 disabled:to-gray-600 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 disabled:scale-100"
            >
              {isAnimating ? '🎬 Анимация...' : '🎯 Анимировать построение'}
            </button>
          </div>
          
          {/* Canvas Panel */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-center">График функции</h2>
            
            <div className="bg-white rounded-xl p-4 shadow-2xl">
              <canvas
                ref={canvasRef}
                width={600}
                height={600}
                className="w-full h-auto border-2 border-gray-300 rounded-lg"
              />
            </div>
            
            <div className="mt-4 text-sm text-gray-300">
              <div className="flex justify-center items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-red-500"></div>
                  <span>a {'>'} 0 (вверх)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-blue-500"></div>
                  <span>a {'<'} 0 (вниз)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span>Вершина</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-purple-500" style={{background: 'repeating-linear-gradient(to right, #9b59b6, #9b59b6 5px, transparent 5px, transparent 10px)'}}></div>
                  <span>Ось симметрии</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Properties Panel */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Свойства функции</h2>
              <button
                onClick={() => setShowProperties(!showProperties)}
                className="text-2xl hover:scale-110 transition-transform"
              >
                {showProperties ? '📖' : '📕'}
              </button>
            </div>
            
            {showProperties && (
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <h3 className="font-bold text-blue-300 mb-2">🎯 Вершина параболы</h3>
                  <p>({properties.vertex.x}; {properties.vertex.y})</p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <h3 className="font-bold text-purple-300 mb-2">📏 Ось симметрии</h3>
                  <p>{properties.axisOfSymmetry}</p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <h3 className="font-bold text-green-300 mb-2">🔄 Направление ветвей</h3>
                  <p>{properties.direction}</p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <h3 className="font-bold text-yellow-300 mb-2">📊 Область определения</h3>
                  <p>D(f) = {properties.domain}</p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <h3 className="font-bold text-orange-300 mb-2">📈 Область значений</h3>
                  <p>E(f) = {properties.range}</p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <h3 className="font-bold text-red-300 mb-2">🔺 Экстремум</h3>
                  <p>{properties.extremum}</p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-300 mb-2">📉 Монотонность</h3>
                  <p className="text-sm">{properties.monotonicity}</p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <h3 className="font-bold text-pink-300 mb-2">⚖️ Четность</h3>
                  <p>{properties.evenness}</p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <h3 className="font-bold text-teal-300 mb-2">📐 Ширина параболы</h3>
                  <p>{properties.width}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Theory Section */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h3 className="text-2xl font-bold mb-4 text-center">📚 Теоретическая справка</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-blue-300 mb-3">🔍 Влияние коэффициента a:</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>a {'>'} 0:</strong> Парабола направлена вверх, имеет минимум</li>
                <li><strong>a {'<'} 0:</strong> Парабола направлена вниз, имеет максимум</li>
                <li><strong>|a| {'>'} 1:</strong> Парабола уже стандартной</li>
                <li><strong>|a| {'<'} 1:</strong> Парабола шире стандартной</li>
                <li><strong>a = 0:</strong> Функция вырождается в y = 0</li>
              </ul>
            </div>
            
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-green-300 mb-3">📋 Основные свойства:</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>Вершина:</strong> Всегда в точке (0; 0)</li>
                <li><strong>Симметрия:</strong> Относительно оси y</li>
                <li><strong>Четность:</strong> f(-x) = f(x)</li>
                <li><strong>Непрерывность:</strong> На всей области определения</li>
                <li><strong>Дифференцируемость:</strong> Везде, f'(x) = 2ax</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3498db, #e74c3c);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3498db, #e74c3c);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
};

export default QuadraticFunctionExplorer;