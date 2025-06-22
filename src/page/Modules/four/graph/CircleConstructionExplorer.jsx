import React, { useState, useRef, useEffect } from 'react';

const CircleConstructionExplorer = () => {
  const canvasRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState('Изучаем окружности и их взаимное расположение');
  const [mode, setMode] = useState('construct'); // construct, analyze

  // Две окружности
  const [circle1, setCircle1] = useState({
    center: { x: 200, y: 200 },
    radius: 80,
    color: '#e74c3c',
    label: 'Окружность A',
  });
  const [circle2, setCircle2] = useState({
    center: { x: 350, y: 200 },
    radius: 100,
    color: '#3498db',
    label: 'Окружность B',
  });

  const [dragged, setDragged] = useState(null); // {circle: 1|2, type: 'center'|'radius'}
  const [showGrid, setShowGrid] = useState(true);
  const [showEquations, setShowEquations] = useState(false);
  const [showRadii, setShowRadii] = useState(true);

  // Взаимное расположение двух окружностей
  const getRelationship = () => {
    const d = Math.sqrt(
      Math.pow(circle1.center.x - circle2.center.x, 2) +
      Math.pow(circle1.center.y - circle2.center.y, 2)
    );
    const r1 = circle1.radius;
    const r2 = circle2.radius;
    if (d > r1 + r2) return { type: 'apart', description: 'Окружности не пересекаются (внешнее положение)' };
    if (Math.abs(d - (r1 + r2)) < 1) return { type: 'touch-outer', description: 'Окружности внешне касаются' };
    if (d < r1 + r2 && d > Math.abs(r1 - r2)) return { type: 'intersect', description: 'Окружности пересекаются' };
    if (Math.abs(d - Math.abs(r1 - r2)) < 1 && d !== 0) return { type: 'touch-inner', description: 'Окружности внутренне касаются' };
    if (d < Math.abs(r1 - r2)) return { type: 'inside', description: 'Одна окружность внутри другой, не касается' };
    if (d === 0 && r1 === r2) return { type: 'coincident', description: 'Совпадающие окружности' };
    return { type: 'other', description: 'Особый случай' };
  };

  // Уравнение окружности
  const getEquation = (circle) => {
    const { center, radius } = circle;
    return `(x - ${center.x})² + (y - ${center.y})² = ${radius ** 2}`;
  };

  // Канвас
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const drawGrid = (ctx) => {
    if (!showGrid) return;
    ctx.strokeStyle = '#ecf0f1';
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= 600; x += 20) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 400); ctx.stroke();
    }
    for (let y = 0; y <= 400; y += 20) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(600, y); ctx.stroke();
    }
  };

  const drawCircle = (ctx, circle, highlight = false) => {
    ctx.save();
    ctx.strokeStyle = circle.color;
    ctx.lineWidth = highlight ? 4 : 3;
    ctx.beginPath();
    ctx.arc(circle.center.x, circle.center.y, circle.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();

    // Центр
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.center.x, circle.center.y, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Радиус
    if (showRadii) {
      ctx.strokeStyle = circle.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(circle.center.x, circle.center.y);
      ctx.lineTo(circle.center.x + circle.radius, circle.center.y);
      ctx.stroke();
      ctx.fillStyle = '#222';
      ctx.font = 'bold 13px Arial';
      ctx.fillText('r = ' + circle.radius, circle.center.x + circle.radius / 2 + 10, circle.center.y - 10);
    }

    // Подпись
    ctx.fillStyle = circle.color;
    ctx.font = 'bold 14px Arial';
    ctx.fillText(circle.label, circle.center.x + 10, circle.center.y - 10);
  };

  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    clearCanvas();
    drawGrid(ctx);
    drawCircle(ctx, circle1, false);
    drawCircle(ctx, circle2, false);
  };

  // Drag logic
  const getMouse = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handleMouseDown = (e) => {
    if (mode !== 'construct') return;
    const { x, y } = getMouse(e);
    // Центры
    if (Math.hypot(x - circle1.center.x, y - circle1.center.y) < 15) setDragged({ circle: 1, type: 'center' });
    else if (Math.hypot(x - circle2.center.x, y - circle2.center.y) < 15) setDragged({ circle: 2, type: 'center' });
    // Радиусы
    else if (Math.abs(Math.hypot(x - circle1.center.x, y - circle1.center.y) - circle1.radius) < 12) setDragged({ circle: 1, type: 'radius' });
    else if (Math.abs(Math.hypot(x - circle2.center.x, y - circle2.center.y) - circle2.radius) < 12) setDragged({ circle: 2, type: 'radius' });
  };

  const handleMouseMove = (e) => {
    if (!dragged || mode !== 'construct') return;
    const { x, y } = getMouse(e);
    if (dragged.type === 'center') {
      if (dragged.circle === 1) setCircle1((c) => ({ ...c, center: { x, y } }));
      else setCircle2((c) => ({ ...c, center: { x, y } }));
    } else if (dragged.type === 'radius') {
      if (dragged.circle === 1) setCircle1((c) => ({ ...c, radius: Math.max(10, Math.min(180, Math.hypot(x - c.center.x, y - c.center.y))) }));
      else setCircle2((c) => ({ ...c, radius: Math.max(10, Math.min(180, Math.hypot(x - c.center.x, y - c.center.y))) }));
    }
  };

  const handleMouseUp = () => setDragged(null);

  useEffect(() => { redrawCanvas(); }, [circle1, circle2, showGrid, showRadii]);
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
  }, [dragged, mode]);

  const relationship = getRelationship();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-400 to-green-300 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 animate-pulse">
          🟠 Окружность. Геометрические построения
        </h1>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Панель управления */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Управление</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Режим работы</h3>
              <div className="grid grid-cols-1 gap-2">
                <button onClick={() => setMode('construct')} className={`p-3 rounded-lg font-semibold transition-all ${mode === 'construct' ? 'bg-blue-500 text-white' : 'bg-white/20 hover:bg-white/30'}`}>🏗️ Построение</button>
                <button onClick={() => setMode('analyze')} className={`p-3 rounded-lg font-semibold transition-all ${mode === 'analyze' ? 'bg-green-500 text-white' : 'bg-white/20 hover:bg-white/30'}`}>🔍 Анализ</button>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Отображение</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={showGrid} onChange={e => setShowGrid(e.target.checked)} className="w-4 h-4" />
                  <span>Показать сетку</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={showRadii} onChange={e => setShowRadii(e.target.checked)} className="w-4 h-4" />
                  <span>Показать радиусы</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={showEquations} onChange={e => setShowEquations(e.target.checked)} className="w-4 h-4" />
                  <span>Показать уравнения</span>
                </label>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Быстрые примеры</h3>
              <div className="grid grid-cols-1 gap-2">
                <button onClick={() => {
                  setCircle1({ ...circle1, center: { x: 200, y: 200 }, radius: 80 });
                  setCircle2({ ...circle2, center: { x: 350, y: 200 }, radius: 100 });
                }} className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-sm transition-all">⚪ Пересекающиеся</button>
                <button onClick={() => {
                  setCircle1({ ...circle1, center: { x: 200, y: 200 }, radius: 60 });
                  setCircle2({ ...circle2, center: { x: 320, y: 200 }, radius: 60 });
                }} className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-sm transition-all">⚪⚪ Касающиеся (внешне)</button>
                <button onClick={() => {
                  setCircle1({ ...circle1, center: { x: 200, y: 200 }, radius: 40 });
                  setCircle2({ ...circle2, center: { x: 200, y: 200 }, radius: 100 });
                }} className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-sm transition-all">⚪◯ Вложенные</button>
                <button onClick={() => {
                  setCircle1({ ...circle1, center: { x: 200, y: 200 }, radius: 60 });
                  setCircle2({ ...circle2, center: { x: 400, y: 200 }, radius: 60 });
                }} className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-sm transition-all">⚪ ⚪ Внешние</button>
              </div>
            </div>
            {mode === 'construct' && (
              <div className="mt-4 p-3 bg-blue-500/20 rounded-lg">
                <div className="text-sm">💡 Перетаскивайте центр или радиус окружности для изменения</div>
              </div>
            )}
          </div>
          {/* Канвас */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-center mb-4">
              <div className="bg-white/20 rounded-xl p-3 inline-block">
                <div className="text-lg font-semibold">{currentStep}</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-2xl">
              <canvas ref={canvasRef} width={600} height={400} className="w-full h-auto border-2 border-gray-300 rounded-lg cursor-pointer" />
            </div>
            <div className="mt-4 text-sm text-gray-300 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="font-semibold text-yellow-300 mb-2">{relationship.description}</div>
                <div className="text-xs text-gray-200">d = расстояние между центрами: {Math.round(Math.sqrt(Math.pow(circle1.center.x - circle2.center.x, 2) + Math.pow(circle1.center.y - circle2.center.y, 2)) * 10) / 10}</div>
              </div>
            </div>
          </div>
          {/* Свойства окружностей */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Свойства окружностей</h2>
            <div className="space-y-4">
              {/* Уравнения */}
              {showEquations && (
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="font-semibold text-red-300 mb-2">📐 Уравнения:</div>
                  <div className="text-sm space-y-1">
                    <div className="text-red-400">{circle1.label}: {getEquation(circle1)}</div>
                    <div className="text-blue-400">{circle2.label}: {getEquation(circle2)}</div>
                  </div>
                </div>
              )}
              {/* Центры и радиусы */}
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-semibold text-green-300 mb-2">📍 Центры и радиусы:</div>
                <div className="text-sm space-y-1">
                  <div className="text-red-400">{circle1.label}: центр ({circle1.center.x}, {circle1.center.y}), r = {circle1.radius}</div>
                  <div className="text-blue-400">{circle2.label}: центр ({circle2.center.x}, {circle2.center.y}), r = {circle2.radius}</div>
                </div>
              </div>
              {/* Цвета */}
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-semibold text-purple-300 mb-2">🎨 Цвета:</div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full inline-block" style={{ background: circle1.color, border: '1px solid #fff' }}></span>
                    <span className="text-red-400">{circle1.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full inline-block" style={{ background: circle2.color, border: '1px solid #fff' }}></span>
                    <span className="text-blue-400">{circle2.label}</span>
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

export default CircleConstructionExplorer; 