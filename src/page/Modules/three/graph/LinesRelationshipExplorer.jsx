import React, { useState, useRef, useEffect } from 'react';

const LinesRelationshipExplorer = () => {
  const canvasRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState("Изучаем взаимное расположение прямых");
  const [mode, setMode] = useState('construct'); // construct, analyze, parallel, perpendicular
  
  // Данные для двух прямых
  const [line1, setLine1] = useState({
    point1: { x: 100, y: 150 },
    point2: { x: 500, y: 200 },
    color: '#e74c3c',
    label: 'Прямая a'
  });
  
  const [line2, setLine2] = useState({
    point1: { x: 120, y: 100 },
    point2: { x: 480, y: 300 },
    color: '#3498db',
    label: 'Прямая b'
  });
  
  const [draggedPoint, setDraggedPoint] = useState(null);
  const [showAngles, setShowAngles] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [showEquations, setShowEquations] = useState(false);
  const [constructionType, setConstructionType] = useState('intersection'); // intersection, distance, angle
  
  // Вычисление угла наклона прямой
  const calculateSlope = (point1, point2) => {
    if (Math.abs(point2.x - point1.x) < 0.001) return Infinity;
    return (point2.y - point1.y) / (point2.x - point1.x);
  };
  
  // Вычисление углового коэффициента и свободного члена y = kx + b
  const getLineEquation = (point1, point2) => {
    const slope = calculateSlope(point1, point2);
    if (slope === Infinity) {
      return { type: 'vertical', x: point1.x };
    }
    const b = point1.y - slope * point1.x;
    return { type: 'normal', k: Math.round(slope * 1000) / 1000, b: Math.round(b * 1000) / 1000 };
  };
  
  // Определение взаимного расположения прямых
  const getRelationshipType = () => {
    const slope1 = calculateSlope(line1.point1, line1.point2);
    const slope2 = calculateSlope(line2.point1, line2.point2);
    
    // Проверка на параллельность
    if (Math.abs(slope1 - slope2) < 0.01) {
      // Проверяем, совпадают ли прямые
      const eq1 = getLineEquation(line1.point1, line1.point2);
      const eq2 = getLineEquation(line2.point1, line2.point2);
      
      if (eq1.type === 'normal' && eq2.type === 'normal') {
        if (Math.abs(eq1.b - eq2.b) < 0.01) {
          return { type: 'coincident', description: 'Совпадающие прямые' };
        }
      }
      return { type: 'parallel', description: 'Параллельные прямые' };
    }
    
    // Проверка на перпендикулярность
    if (slope1 !== Infinity && slope2 !== Infinity) {
      if (Math.abs(slope1 * slope2 + 1) < 0.01) {
        return { type: 'perpendicular', description: 'Перпендикулярные прямые' };
      }
    } else if (slope1 === Infinity && Math.abs(slope2) < 0.01) {
      return { type: 'perpendicular', description: 'Перпендикулярные прямые' };
    } else if (slope2 === Infinity && Math.abs(slope1) < 0.01) {
      return { type: 'perpendicular', description: 'Перпендикулярные прямые' };
    }
    
    return { type: 'intersecting', description: 'Пересекающиеся прямые' };
  };
  
  // Нахождение точки пересечения
  const findIntersection = () => {
    const eq1 = getLineEquation(line1.point1, line1.point2);
    const eq2 = getLineEquation(line2.point1, line2.point2);
    
    if (eq1.type === 'vertical' && eq2.type === 'vertical') return null;
    if (eq1.type === 'normal' && eq2.type === 'normal' && Math.abs(eq1.k - eq2.k) < 0.001) return null;
    
    let x, y;
    
    if (eq1.type === 'vertical') {
      x = eq1.x;
      y = eq2.k * x + eq2.b;
    } else if (eq2.type === 'vertical') {
      x = eq2.x;
      y = eq1.k * x + eq1.b;
    } else {
      x = (eq2.b - eq1.b) / (eq1.k - eq2.k);
      y = eq1.k * x + eq1.b;
    }
    
    return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
  };
  
  // Вычисление угла между прямыми
  const calculateAngleBetweenLines = () => {
    const slope1 = calculateSlope(line1.point1, line1.point2);
    const slope2 = calculateSlope(line2.point1, line2.point2);
    
    if (slope1 === Infinity || slope2 === Infinity) {
      if (slope1 === Infinity && slope2 === Infinity) return 0;
      const finiteSlope = slope1 === Infinity ? slope2 : slope1;
      return Math.round(Math.abs(90 - Math.atan(finiteSlope) * 180 / Math.PI) * 10) / 10;
    }
    
    const angle = Math.atan(Math.abs((slope1 - slope2) / (1 + slope1 * slope2))) * 180 / Math.PI;
    return Math.round(angle * 10) / 10;
  };
  
  // Расстояние от точки до прямой
  const distanceFromPointToLine = (point, linePoint1, linePoint2) => {
    const A = linePoint2.y - linePoint1.y;
    const B = linePoint1.x - linePoint2.x;
    const C = linePoint2.x * linePoint1.y - linePoint1.x * linePoint2.y;
    
    const distance = Math.abs(A * point.x + B * point.y + C) / Math.sqrt(A * A + B * B);
    return Math.round(distance * 100) / 100;
  };
  
  // Расстояние между параллельными прямыми
  const distanceBetweenParallelLines = () => {
    const relationship = getRelationshipType();
    if (relationship.type !== 'parallel') return null;
    
    // Берем любую точку с первой прямой и находим расстояние до второй прямой
    return distanceFromPointToLine(line1.point1, line2.point1, line2.point2);
  };
  
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  
  const drawGrid = (ctx) => {
    if (!showGrid) return;
    
    ctx.strokeStyle = '#ecf0f1';
    ctx.lineWidth = 0.5;
    
    // Вертикальные линии
    for (let x = 0; x <= 600; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 400);
      ctx.stroke();
    }
    
    // Горизонтальные линии
    for (let y = 0; y <= 400; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(600, y);
      ctx.stroke();
    }
  };
  
  const extendLine = (point1, point2, canvasWidth, canvasHeight) => {
    const slope = calculateSlope(point1, point2);
    
    if (slope === Infinity) {
      return {
        start: { x: point1.x, y: 0 },
        end: { x: point1.x, y: canvasHeight }
      };
    }
    
    const eq = getLineEquation(point1, point2);
    const startX = 0;
    const endX = canvasWidth;
    const startY = eq.k * startX + eq.b;
    const endY = eq.k * endX + eq.b;
    
    return {
      start: { x: startX, y: startY },
      end: { x: endX, y: endY }
    };
  };
  
  const drawLine = (ctx, line, animated = false, progress = 1) => {
    const extended = extendLine(line.point1, line.point2, 600, 400);
    
    ctx.strokeStyle = line.color;
    ctx.lineWidth = 3;
    
    if (animated) {
      ctx.setLineDash([10, 5]);
      ctx.lineDashOffset = -progress * 30;
    } else {
      ctx.setLineDash([]);
    }
    
    ctx.beginPath();
    ctx.moveTo(extended.start.x, extended.start.y);
    ctx.lineTo(extended.end.x, extended.end.y);
    ctx.stroke();
    
    // Рисуем контрольные точки
    ctx.fillStyle = line.color;
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    
    [line.point1, line.point2].forEach(point => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 6, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
    });
    
    // Подпись прямой
    const midX = (line.point1.x + line.point2.x) / 2;
    const midY = (line.point1.y + line.point2.y) / 2;
    ctx.fillStyle = line.color;
    ctx.font = 'bold 14px Arial';
    ctx.fillText(line.label, midX + 10, midY - 10);
  };
  
  const drawIntersection = (ctx) => {
    const intersection = findIntersection();
    const relationship = getRelationshipType();
    
    if (intersection && relationship.type === 'intersecting') {
      ctx.fillStyle = '#f39c12';
      ctx.strokeStyle = '#e67e22';
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.arc(intersection.x, intersection.y, 8, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      
      ctx.fillStyle = '#2c3e50';
      ctx.font = 'bold 12px Arial';
      ctx.fillText(`(${intersection.x}, ${intersection.y})`, intersection.x + 12, intersection.y - 12);
      
      if (showAngles) {
        const angle = calculateAngleBetweenLines();
        ctx.fillText(`${angle}°`, intersection.x + 12, intersection.y + 25);
      }
    }
  };
  
  const drawAngles = (ctx) => {
    if (!showAngles) return;
    
    const intersection = findIntersection();
    const relationship = getRelationshipType();
    
    if (intersection && relationship.type === 'intersecting') {
      // Рисуем дуги углов
      ctx.strokeStyle = '#9b59b6';
      ctx.lineWidth = 2;
      ctx.setLineDash([3, 3]);
      
      const angle = calculateAngleBetweenLines();
      
      ctx.beginPath();
      ctx.arc(intersection.x, intersection.y, 30, 0, angle * Math.PI / 180);
      ctx.stroke();
      
      ctx.setLineDash([]);
    }
  };
  
  const drawDistanceMarkers = (ctx) => {
    const relationship = getRelationshipType();
    
    if (relationship.type === 'parallel') {
      const distance = distanceBetweenParallelLines();
      
      // Рисуем линию расстояния
      const midPoint1 = {
        x: (line1.point1.x + line1.point2.x) / 2,
        y: (line1.point1.y + line1.point2.y) / 2
      };
      
      const slope1 = calculateSlope(line1.point1, line1.point2);
      let perpSlope = slope1 === Infinity ? 0 : (slope1 === 0 ? Infinity : -1 / slope1);
      
      // Находим ближайшую точку на второй прямой
      let closestPoint;
      if (perpSlope === Infinity) {
        closestPoint = { x: midPoint1.x, y: line2.point1.y };
      } else if (perpSlope === 0) {
        closestPoint = { x: line2.point1.x, y: midPoint1.y };
      } else {
        const eq2 = getLineEquation(line2.point1, line2.point2);
        const x = (midPoint1.y - eq2.b + perpSlope * midPoint1.x) / (perpSlope + eq2.k);
        const y = eq2.k * x + eq2.b;
        closestPoint = { x, y };
      }
      
      ctx.strokeStyle = '#27ae60';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      
      ctx.beginPath();
      ctx.moveTo(midPoint1.x, midPoint1.y);
      ctx.lineTo(closestPoint.x, closestPoint.y);
      ctx.stroke();
      
      ctx.setLineDash([]);
      
      // Подпись расстояния
      const distMidX = (midPoint1.x + closestPoint.x) / 2;
      const distMidY = (midPoint1.y + closestPoint.y) / 2;
      
      ctx.fillStyle = '#27ae60';
      ctx.font = 'bold 12px Arial';
      ctx.fillText(`d = ${distance}`, distMidX, distMidY - 5);
    }
  };
  
  const drawEquations = (ctx) => {
    if (!showEquations) return;
    
    const eq1 = getLineEquation(line1.point1, line1.point2);
    const eq2 = getLineEquation(line2.point1, line2.point2);
    
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 14px Arial';
    
    let eq1Text = '';
    let eq2Text = '';
    
    if (eq1.type === 'vertical') {
      eq1Text = `x = ${eq1.x}`;
    } else {
      eq1Text = `y = ${eq1.k}x + ${eq1.b}`;
    }
    
    if (eq2.type === 'vertical') {
      eq2Text = `x = ${eq2.x}`;
    } else {
      eq2Text = `y = ${eq2.k}x + ${eq2.b}`;
    }
    
    ctx.fillStyle = line1.color;
    ctx.fillText(`${line1.label}: ${eq1Text}`, 10, 30);
    
    ctx.fillStyle = line2.color;
    ctx.fillText(`${line2.label}: ${eq2Text}`, 10, 50);
  };
  
  const animateLines = async () => {
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
        
        if (progress > 0.2) drawLine(ctx, line1, true, progress);
        if (progress > 0.5) drawLine(ctx, line2, true, progress);
        if (progress > 0.7) drawIntersection(ctx);
        if (progress > 0.8) drawAngles(ctx);
        if (progress > 0.9) {
          drawDistanceMarkers(ctx);
          drawEquations(ctx);
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
    setCurrentStep("Анализируем взаимное расположение прямых...");
    
    await animateLines();
    
    const relationship = getRelationshipType();
    setCurrentStep(`Анализ завершен! ${relationship.description}`);
    setIsAnimating(false);
  };
  
  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    clearCanvas();
    
    drawGrid(ctx);
    drawLine(ctx, line1);
    drawLine(ctx, line2);
    drawIntersection(ctx);
    drawAngles(ctx);
    drawDistanceMarkers(ctx);
    drawEquations(ctx);
  };
  
  const handleMouseDown = (e) => {
    if (mode !== 'construct') return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Проверяем, какая точка была захвачена
    const points = [
      { key: 'line1_point1', point: line1.point1 },
      { key: 'line1_point2', point: line1.point2 },
      { key: 'line2_point1', point: line2.point1 },
      { key: 'line2_point2', point: line2.point2 }
    ];
    
    points.forEach(({ key, point }) => {
      const distance = Math.sqrt(Math.pow(x - point.x, 2) + Math.pow(y - point.y, 2));
      if (distance < 15) {
        setDraggedPoint(key);
      }
    });
  };
  
  const handleMouseMove = (e) => {
    if (!draggedPoint || mode !== 'construct') return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = Math.max(10, Math.min(590, e.clientX - rect.left));
    const y = Math.max(10, Math.min(390, e.clientY - rect.top));
    
    if (draggedPoint.includes('line1')) {
      setLine1(prev => ({
        ...prev,
        [draggedPoint.split('_')[1]]: { x, y }
      }));
    } else {
      setLine2(prev => ({
        ...prev,
        [draggedPoint.split('_')[1]]: { x, y }
      }));
    }
  };
  
  const handleMouseUp = () => {
    setDraggedPoint(null);
  };
  
  useEffect(() => {
    redrawCanvas();
  }, [line1, line2, mode, showAngles, showGrid, showEquations]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggedPoint, mode]);
  
  const relationship = getRelationshipType();
  const intersection = findIntersection();
  const angle = calculateAngleBetweenLines();
  const distance = distanceBetweenParallelLines();
  const eq1 = getLineEquation(line1.point1, line1.point2);
  const eq2 = getLineEquation(line2.point1, line2.point2);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 animate-pulse">
          📏 Взаимное расположение прямых
        </h1>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Control Panel */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Управление</h2>
            
            {/* Mode Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Режим работы</h3>
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => setMode('construct')}
                  className={`p-3 rounded-lg font-semibold transition-all ${
                    mode === 'construct' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  🏗️ Построение
                </button>
                <button
                  onClick={() => setMode('analyze')}
                  className={`p-3 rounded-lg font-semibold transition-all ${
                    mode === 'analyze' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  🔍 Анализ
                </button>
              </div>
            </div>
            
            {/* Display Options */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Отображение</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={showGrid}
                    onChange={(e) => setShowGrid(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span>Показать сетку</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={showAngles}
                    onChange={(e) => setShowAngles(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span>Показать углы</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={showEquations}
                    onChange={(e) => setShowEquations(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span>Показать уравнения</span>
                </label>
              </div>
            </div>
            
            {/* Quick Examples */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Быстрые примеры</h3>
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => {
                    setLine1({ ...line1, point1: { x: 100, y: 150 }, point2: { x: 500, y: 150 } });
                    setLine2({ ...line2, point1: { x: 100, y: 250 }, point2: { x: 500, y: 250 } });
                  }}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-sm transition-all"
                >
                  ⫽ Параллельные
                </button>
                <button
                  onClick={() => {
                    setLine1({ ...line1, point1: { x: 300, y: 100 }, point2: { x: 300, y: 300 } });
                    setLine2({ ...line2, point1: { x: 150, y: 200 }, point2: { x: 450, y: 200 } });
                  }}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-sm transition-all"
                >
                  ⊥ Перпендикулярные
                </button>
                <button
                  onClick={() => {
                    setLine1({ ...line1, point1: { x: 100, y: 100 }, point2: { x: 500, y: 300 } });
                    setLine2({ ...line2, point1: { x: 100, y: 300 }, point2: { x: 500, y: 100 } });
                  }}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-sm transition-all"
                >
                  ✕ Пересекающиеся
                </button>
              </div>
            </div>
            
            {/* Control Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={startAnimation}
                disabled={isAnimating}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 disabled:scale-100"
              >
                {isAnimating ? '🎬 Анализируем...' : '🎯 Анализировать'}
              </button>
            </div>
            
            {mode === 'construct' && (
              <div className="mt-4 p-3 bg-blue-500/20 rounded-lg">
                <div className="text-sm">
                  💡 Перетаскивайте точки на прямых для изменения их положения
                </div>
              </div>
            )}
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
                height={400}
                className="w-full h-auto border-2 border-gray-300 rounded-lg cursor-pointer"
              />
            </div>
            
            <div className="mt-4 text-sm text-gray-300 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="font-semibold text-yellow-300 mb-2">
                  Тип расположения: {relationship.description}
                </div>
                {relationship.type === 'intersecting' && intersection && (
                  <div>
                    <div>Точка пересечения: ({intersection.x}, {intersection.y})</div>
                    <div>Угол между прямыми: {angle}°</div>
                  </div>
                )}
                {relationship.type === 'parallel' && distance && (
                  <div>Расстояние между прямыми: {distance}</div>
                )}
              </div>
            </div>
          </div>
          
          {/* Properties Panel */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Свойства прямых</h2>
            
            <div className="space-y-4">
              {/* Уравнения прямых */}
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-semibold text-red-300 mb-2">📐 Уравнения прямых:</div>
                <div className="text-sm space-y-1">
                  <div className="text-red-400">
                    {line1.label}: {eq1.type === 'vertical' ? `x = ${eq1.x}` : `y = ${eq1.k}x + ${eq1.b}`}
                  </div>
                  <div className="text-blue-400">
                    {line2.label}: {eq2.type === 'vertical' ? `x = ${eq2.x}` : `y = ${eq2.k}x + ${eq2.b}`}
                  </div>
                </div>
              </div>
              
              {/* Угловые коэффициенты */}
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-semibold text-orange-300 mb-2">📊 Угловые коэффициенты:</div>
                <div className="text-sm space-y-1">
                  <div className="text-red-400">
                    {line1.label}: {eq1.type === 'vertical' ? '∞' : eq1.k}
                  </div>
                  <div className="text-blue-400">
                    {line2.label}: {eq2.type === 'vertical' ? '∞' : eq2.k}
                  </div>
                </div>
              </div>

              {/* Координаты точек */}
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-semibold text-green-300 mb-2">📍 Координаты точек:</div>
                <div className="text-sm space-y-1">
                  <div className="text-red-400">
                    {line1.label}: A({line1.point1.x}, {line1.point1.y}), B({line1.point2.x}, {line1.point2.y})
                  </div>
                  <div className="text-blue-400">
                    {line2.label}: C({line2.point1.x}, {line2.point1.y}), D({line2.point2.x}, {line2.point2.y})
                  </div>
                </div>
              </div>

              {/* Цвета прямых */}
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-semibold text-purple-300 mb-2">🎨 Цвета прямых:</div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full inline-block" style={{ background: line1.color, border: '1px solid #fff' }}></span>
                    <span className="text-red-400">{line1.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full inline-block" style={{ background: line2.color, border: '1px solid #fff' }}></span>
                    <span className="text-blue-400">{line2.label}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinesRelationshipExplorer;