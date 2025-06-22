import { useState, useEffect } from 'react';

export default function LinearEquationsVisualizer() {
  // Parameters for first line: y = m1*x + b1
  const [m1, setM1] = useState(1);
  const [b1, setB1] = useState(2);
  
  // Parameters for second line: y = m2*x + b2
  const [m2, setM2] = useState(-0.5);
  const [b2, setB2] = useState(1);
  
  // Solution point (if exists)
  const [solution, setSolution] = useState({ x: 0, y: 0, exists: false });
  
  // Grid settings
  const gridSize = 10;
  const cellSize = 30;
  const width = cellSize * (2 * gridSize + 1);
  const height = cellSize * (2 * gridSize + 1);
  
  // Calculate solution when parameters change
  useEffect(() => {
    // Check if lines are parallel
    if (m1 === m2) {
      setSolution({ exists: false });
      return;
    }
    
    // Calculate intersection point
    const x = (b2 - b1) / (m1 - m2);
    const y = m1 * x + b1;
    setSolution({ x, y, exists: true });
  }, [m1, b1, m2, b2]);
  
  // Generate points for each line
  const getLinePoints = (m, b) => {
    const points = [];
    for (let x = -gridSize; x <= gridSize; x++) {
      const y = m * x + b;
      if (y >= -gridSize && y <= gridSize) {
        points.push({ x, y });
      }
    }
    return points;
  };
  
  // Transform grid coordinates to SVG coordinates
  const transformX = x => (x + gridSize) * cellSize;
  const transformY = y => height - (y + gridSize) * cellSize;
  
  // Generate SVG path from points
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
  
  return (
    <div className="flex flex-col items-center p-4 gap-4 max-w-full">
      <h2 className="text-xl font-bold mb-2">Система линейных уравнений</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Уравнение 1: y = {formatNumber(m1)}x + {formatNumber(b1)}</h3>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <span className="w-32">Коэффициент m₁:</span>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.1"
                value={m1}
                onChange={(e) => setM1(parseFloat(e.target.value))}
                className="flex-grow"
              />
              <span className="w-8 text-right">{formatNumber(m1)}</span>
            </label>
            <label className="flex items-center gap-2">
              <span className="w-32">Свободный член b₁:</span>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.1"
                value={b1}
                onChange={(e) => setB1(parseFloat(e.target.value))}
                className="flex-grow"
              />
              <span className="w-8 text-right">{formatNumber(b1)}</span>
            </label>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded shadow">
  <h3 className="text-lg font-semibold mb-2">Уравнение 1: y = {formatNumber(m1)}x + {formatNumber(b1)}</h3>
  <div className="flex flex-col gap-2">
    <label className="flex flex-col sm:flex-row items-center gap-2 w-full">
      <span className="w-full sm:w-32">Коэффициент m₁:</span>
      <input
        type="range"
        min="-5"
        max="5"
        step="0.1"
        value={m1}
        onChange={(e) => setM1(parseFloat(e.target.value))}
        className="w-full"
      />
      <span className="w-12 text-right">{formatNumber(m1)}</span>
    </label>
    <label className="flex flex-col sm:flex-row items-center gap-2 w-full">
      <span className="w-full sm:w-32">Свободный член b₁:</span>
      <input
        type="range"
        min="-5"
        max="5"
        step="0.1"
        value={b1}
        onChange={(e) => setB1(parseFloat(e.target.value))}
        className="w-full"
      />
      <span className="w-12 text-right">{formatNumber(b1)}</span>
    </label>
  </div>
  
</div>
      </div>
      
  
 
      <div className="bg-white border border-gray-300 rounded p-2 flex flex-wrap">
      <div className=''>


        <svg  width={400}
          height="auto" viewBox={`0 0 ${width} ${height}`}  className="w-full max-w-[600px] h-auto bg-white"           preserveAspectRatio="xMidYMid meet">
          {/* Grid lines */}
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
          
          {/* Axes */}
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
          
          {/* Axes labels */}
          <text x={width - 15} y={gridSize * cellSize - 5} fill="#666" fontSize="14">x</text>
          <text x={gridSize * cellSize + 5} y={15} fill="#666" fontSize="14">y</text>
          
          {/* Grid numbers */}
          {Array.from({ length: 2 * gridSize + 1 }).map((_, i) => {
            const num = i - gridSize;
            if (num !== 0) {
              return (
                <g key={`num-${i}`}>
                  <text
                    x={transformX(num) - 5}
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
          
          {/* Lines */}
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
          
          {/* Solution point if exists */}
          {solution.exists && Math.abs(solution.x) <= gridSize && Math.abs(solution.y) <= gridSize && (
            <>
              <circle
                cx={transformX(solution.x)}
                cy={transformY(solution.y)}
                r="5"
                fill="green"
              />
              <text
                x={transformX(solution.x) + 10}
                y={transformY(solution.y) - 10}
                fill="green"
                fontSize="12"
              >
                ({formatNumber(solution.x)}, {formatNumber(solution.y)})
              </text>
            </>
          )}
        </svg>
      </div>
      
      <div className="text-center mt-2">
        {solution.exists ? (
          <p className="font-medium">
            Решение: ({formatNumber(solution.x)}, {formatNumber(solution.y)})
          </p>
        ) : (
          <p className="font-medium text-red-600">
            Прямые параллельны. Решений нет.
          </p>
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
      <span className='font-mon text-[#897e7f] text-[13px] font-bold' id='v1'>Рис. 24.1</span>
      </div>
    </div>
  );
}