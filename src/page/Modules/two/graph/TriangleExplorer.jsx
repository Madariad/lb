import React, { useState, useRef, useEffect } from 'react';

const TriangleExplorer = () => {
  const canvasRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState("Постройте треугольник, перемещая вершины");
  const [mode, setMode] = useState('construct');
  
  const [vertices, setVertices] = useState({
    A: { x: 150, y: 100, label: 'A' },
    B: { x: 450, y: 100, label: 'B' },
    C: { x: 300, y: 300, label: 'C' }
  });
  
  const [draggedVertex, setDraggedVertex] = useState(null);
  const [showConstruction, setShowConstruction] = useState(false);
  const [constructionType, setConstructionType] = useState('circumcenter');
  
  const calculateSides = () => {
    const { A, B, C } = vertices;
    const a = Math.sqrt(Math.pow(B.x - C.x, 2) + Math.pow(B.y - C.y, 2));
    const b = Math.sqrt(Math.pow(A.x - C.x, 2) + Math.pow(A.y - C.y, 2));
    const c = Math.sqrt(Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2));
    
    return {
      a: Math.round(a * 10) / 10,
      b: Math.round(b * 10) / 10,
      c: Math.round(c * 10) / 10
    };
  };
  
  const calculateAngles = () => {
    const sides = calculateSides();
    const { a, b, c } = sides;
    
    const angleA = Math.acos((b*b + c*c - a*a) / (2*b*c)) * 180 / Math.PI;
    const angleB = Math.acos((a*a + c*c - b*b) / (2*a*c)) * 180 / Math.PI;
    const angleC = 180 - angleA - angleB;
    
    return {
      A: Math.round(angleA * 10) / 10,
      B: Math.round(angleB * 10) / 10,
      C: Math.round(angleC * 10) / 10
    };
  };
  
  const calculateArea = () => {
    const { A, B, C } = vertices;
    const area = Math.abs((A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y)) / 2);
    return Math.round(area * 100) / 100;
  };
  
  const calculatePerimeter = () => {
    const sides = calculateSides();
    return Math.round((sides.a + sides.b + sides.c) * 10) / 10;
  };
  
  const getTriangleType = () => {
    const sides = calculateSides();
    const angles = calculateAngles();
    const { a, b, c } = sides;
    
    let sideType = '';
    let angleType = '';
    
    if (Math.abs(a - b) < 0.5 && Math.abs(b - c) < 0.5) {
      sideType = 'равносторонний';
    } else if (Math.abs(a - b) < 0.5 || Math.abs(b - c) < 0.5 || Math.abs(a - c) < 0.5) {
      sideType = 'равнобедренный';
    } else {
      sideType = 'разносторонний';
    }
    
    const maxAngle = Math.max(angles.A, angles.B, angles.C);
    if (Math.abs(maxAngle - 90) < 1) {
      angleType = 'прямоугольный';
    } else if (maxAngle > 90) {
      angleType = 'тупоугольный';  
    } else {
      angleType = 'остроугольный';
    }
    
    return { sideType, angleType };
  };
  
  const calculateCentroid = () => {
    const { A, B, C } = vertices;
    return {
      x: (A.x + B.x + C.x) / 3,
      y: (A.y + B.y + C.y) / 3
    };
  };
  
  const calculateCircumcenter = () => {
    const { A, B, C } = vertices;
    
    const d = 2 * (A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y));
    if (Math.abs(d) < 0.001) return null;
    
    const ux = ((A.x*A.x + A.y*A.y) * (B.y - C.y) + (B.x*B.x + B.y*B.y) * (C.y - A.y) + (C.x*C.x + C.y*C.y) * (A.y - B.y)) / d;
    const uy = ((A.x*A.x + A.y*A.y) * (C.x - B.x) + (B.x*B.x + B.y*B.y) * (A.x - C.x) + (C.x*C.x + C.y*C.y) * (B.x - A.x)) / d;
    
    return { x: ux, y: uy };
  };
  
  const calculateIncenter = () => {
    const { A, B, C } = vertices;
    const sides = calculateSides();
    const { a, b, c } = sides;
    
    const x = (a * A.x + b * B.x + c * C.x) / (a + b + c);
    const y = (a * A.y + b * B.y + c * C.y) / (a + b + c);
    
    return { x, y };
  };
  
  const drawTriangle = (ctx, animated = false, progress = 1) => {
    const { A, B, C } = vertices;
    
    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(231, 76, 60, 0.1)';
    
    if (animated) {
      ctx.setLineDash([8, 4]);
      ctx.lineDashOffset = -progress * 20;
    } else {
      ctx.setLineDash([]);
    }
    
    ctx.beginPath();
    ctx.moveTo(A.x, A.y);
    
    if (progress > 0.33) ctx.lineTo(B.x, B.y);
    if (progress > 0.66) ctx.lineTo(C.x, C.y);
    if (progress > 0.99) ctx.closePath();
    
    ctx.stroke();
    if (progress > 0.99) ctx.fill();
    
    if (progress > 0.2) {
      ctx.fillStyle = '#3498db';
      ctx.strokeStyle = '#2980b9';
      ctx.lineWidth = 2;
      
      [A, B, C].forEach(vertex => {
        ctx.beginPath();
        ctx.arc(vertex.x, vertex.y, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#2c3e50';
        ctx.font = 'bold 16px Arial';
        ctx.fillText(vertex.label, vertex.x + 12, vertex.y - 12);
      });
    }
  };
  
  const drawLabels = (ctx) => {
    const { A, B, C } = vertices;
    const sides = calculateSides();
    const angles = calculateAngles();
    
    ctx.fillStyle = '#8e44ad';
    ctx.font = 'bold 14px Arial';
    
    const midAB = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
    ctx.fillText(`c = ${sides.c}`, midAB.x, midAB.y - 10);
    
    const midBC = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 };
    ctx.fillText(`a = ${sides.a}`, midBC.x + 10, midBC.y);
    
    const midAC = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 };
    ctx.fillText(`b = ${sides.b}`, midAC.x - 30, midAC.y);
    
    ctx.fillStyle = '#e67e22';
    ctx.font = 'bold 12px Arial';
    
    ctx.fillText(`∠A = ${angles.A}°`, A.x - 15, A.y + 25);
    ctx.fillText(`∠B = ${angles.B}°`, B.x - 15, B.y + 25);
    ctx.fillText(`∠C = ${angles.C}°`, C.x - 15, C.y - 15);
  };
  
  const drawConstructions = (ctx) => {
    if (!showConstruction) return;
    
    let center;
    let color;
    let label;
    
    switch (constructionType) {
      case 'circumcenter':
        center = calculateCircumcenter();
        color = '#9b59b6';
        label = 'O';
        
        if (center) {
          const radius = Math.sqrt(Math.pow(center.x - vertices.A.x, 2) + Math.pow(center.y - vertices.A.y, 2));
          ctx.strokeStyle = color;
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.setLineDash([]);
        }
        break;
        
      case 'incenter':
        center = calculateIncenter();
        color = '#27ae60';
        label = 'I';
        
        const area = calculateArea();
        const semiperimeter = calculatePerimeter() / 2;
        const inradius = area / semiperimeter;
        
        if (center && inradius > 0) {
          ctx.strokeStyle = color;
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.arc(center.x, center.y, inradius, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.setLineDash([]);
        }
        break;
        
      case 'centroid':
        center = calculateCentroid();
        color = '#f39c12';
        label = 'G';
        
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        
        const midAB = { x: (vertices.A.x + vertices.B.x) / 2, y: (vertices.A.y + vertices.B.y) / 2 };
        const midBC = { x: (vertices.B.x + vertices.C.x) / 2, y: (vertices.B.y + vertices.C.y) / 2 };
        const midAC = { x: (vertices.A.x + vertices.C.x) / 2, y: (vertices.A.y + vertices.C.y) / 2 };
        
        ctx.beginPath();
        ctx.moveTo(vertices.A.x, vertices.A.y);
        ctx.lineTo(midBC.x, midBC.y);
        ctx.moveTo(vertices.B.x, vertices.B.y);
        ctx.lineTo(midAC.x, midAC.y);
        ctx.moveTo(vertices.C.x, vertices.C.y);
        ctx.lineTo(midAB.x, midAB.y);
        ctx.stroke();
        
        ctx.setLineDash([]);
        break;
    }
    
    if (center) {
      ctx.fillStyle = color;
      ctx.strokeStyle = '#2c3e50';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(center.x, center.y, 6, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      
      ctx.fillStyle = '#2c3e50';
      ctx.font = 'bold 12px Arial';
      ctx.fillText(label, center.x + 10, center.y - 10);
    }
  };
  
  const animateTriangle = async () => {
    return new Promise(resolve => {
      let progress = 0;
      const duration = 2000;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        progress = Math.min(elapsed / duration, 1);
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawTriangle(ctx, true, progress);
        
        if (progress > 0.5) drawLabels(ctx);
        if (progress > 0.9) drawConstructions(ctx);
        
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
    setCurrentStep("Строим треугольник и анализируем его свойства...");
    
    await animateTriangle();
    
    const triangleType = getTriangleType();
    setCurrentStep(`Треугольник построен! Тип: ${triangleType.sideType} ${triangleType.angleType}`);
    setIsAnimating(false);
  };
  
  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawTriangle(ctx);
    if (mode === 'analyze') {
      drawLabels(ctx);
      drawConstructions(ctx);
    }
  };
  
  const handleMouseDown = (e) => {
    if (mode !== 'construct') return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    Object.keys(vertices).forEach(key => {
      const vertex = vertices[key];
      const distance = Math.sqrt(Math.pow(x - vertex.x, 2) + Math.pow(y - vertex.y, 2));
      if (distance < 15) {
        setDraggedVertex(key);
      }
    });
  };
  
  const handleMouseMove = (e) => {
    if (!draggedVertex || mode !== 'construct') return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = Math.max(20, Math.min(580, e.clientX - rect.left));
    const y = Math.max(20, Math.min(380, e.clientY - rect.top));
    
    setVertices(prev => ({
      ...prev,
      [draggedVertex]: { ...prev[draggedVertex], x, y }
    }));
  };
  
  const handleMouseUp = () => {
    setDraggedVertex(null);
  };
  
  useEffect(() => {
    redrawCanvas();
  }, [vertices, mode, showConstruction, constructionType]);
  
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
  }, [draggedVertex, mode]);
  
  const sides = calculateSides();
  const angles = calculateAngles();
  const area = calculateArea();
  const perimeter = calculatePerimeter();
  const triangleType = getTriangleType();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 animate-pulse">
          📐 Интерактивное изучение треугольников
        </h1>
        
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Управление</h2>
            
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
            
            {mode === 'analyze' && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <input
                    type="checkbox"
                    id="showConstruction"
                    checked={showConstruction}
                    onChange={(e) => setShowConstruction(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <label htmlFor="showConstruction" className="font-semibold">
                    Показать построения
                  </label>
                </div>
                
                {showConstruction && (
                  <select
                    value={constructionType}
                    onChange={(e) => setConstructionType(e.target.value)}
                    className="w-full p-2 bg-white/20 border border-white/30 rounded-lg text-white"
                  >
                    <option value="circumcenter">Описанная окружность</option>
                    <option value="incenter">Вписанная окружность</option>
                    <option value="centroid">Центроид</option>
                  </select>
                )}
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Быстрые примеры</h3>
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => setVertices({
                    A: { x: 300, y: 80, label: 'A' },
                    B: { x: 200, y: 300, label: 'B' },
                    C: { x: 400, y: 300, label: 'C' }
                  })}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-sm transition-all"
                >
                  📐 Равнобедренный
                </button>
                <button
                  onClick={() => setVertices({
                    A: { x: 300, y: 100, label: 'A' },
                    B: { x: 200, y: 280, label: 'B' },
                    C: { x: 400, y: 280, label: 'C' }
                  })}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-sm transition-all"
                >
                  📏 Равносторонний
                </button>
                <button
                  onClick={() => setVertices({
                    A: { x: 200, y: 100, label: 'A' },
                    B: { x: 400, y: 100, label: 'B' },
                    C: { x: 200, y: 300, label: 'C' }
                  })}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-sm transition-all"
                >
                  ⬜ Прямоугольный
                </button>
              </div>
            </div>
            
            <button
              onClick={startAnimation}
              disabled={isAnimating}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-500 disabled:to-gray-600 px-6 py-3 rounded-xl font-bold transition-all duration-300"
            >
              {isAnimating ? '🎬 Анализируем...' : '🎯 Анализировать'}
            </button>
            
            {mode === 'construct' && (
              <div className="mt-4 p-3 bg-blue-500/20 rounded-lg">
                <div className="text-sm">
                  💡 Перетаскивайте вершины треугольника для изменения его формы
                </div>
              </div>
            )}
          </div>
          
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
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-semibold mb-1">Тип треугольника:</div>
                  <div className="text-yellow-300">{triangleType.sideType}</div>
                  <div className="text-cyan-300">{triangleType.angleType}</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Основные свойства:</div>
                  <div>S = {area}</div>
                  <div>P = {perimeter}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Свойства треугольника</h2>
            
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-semibold text-purple-300 mb-2">📏 Стороны:</div>
                <div className="text-sm space-y-1">
                  <div>a (BC) = {sides.a}</div>
                  <div>b (AC) = {sides.b}</div>
                  <div>c (AB) = {sides.c}</div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-semibold text-orange-300 mb-2">📐 Углы:</div>
                <div className="text-sm space-y-1">
                  <div>∠A = {angles.A}°</div>
                  <div>∠B = {angles.B}°</div>
                  <div>∠C = {angles.C}°</div>
                  <div className="text-gray-300">Сумма: {Math.round((angles.A + angles.B + angles.C) * 10) / 10}°</div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-semibold text-green-300 mb-2">📊 Измерения:</div>
                <div className="text-sm space-y-1">
                  <div>Площадь: {area}</div>
                  <div>Периметр: {perimeter}</div>
                  <div>Полупериметр: {Math.round(perimeter * 5) / 10}</div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-semibold text-blue-300 mb-2">🔍 Классификация:</div>
                <div className="text-sm space-y-1">
                  <div>По сторонам: {triangleType.sideType}</div>
                  <div>По углам: {triangleType.angleType}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriangleExplorer;