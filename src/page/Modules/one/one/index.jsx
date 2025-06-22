import React from 'react';
import {CircleHelp, BookOpen} from "lucide-react"
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import LinearEquationsVisualizer from './graph/linerVizual';
import AdaptiveLinearEquationsVisualizer from './graph/linerVizualA';
import LinB from './graph/linerVizualB'
import LinearEquationsSolver from './graph/LinearEquationsSolver'

export default function OneTheme() {

    const config = {
        loader: { load: ["[tex]/html"] },
        tex: {
          packages: { "[+]": ["html"] },
          inlineMath: [['$', '$']],
          displayMath: [['$$', '$$']]
        }
      };
      
      
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-white via-blue-50 to-white rounded-2xl shadow-xl p-8 my-10 space-y-10">
    <h1 className="text-3xl font-extrabold text-blue-800 mb-6 tracking-wide border-b-2 border-blue-200 pb-2 text-center">
    <BookOpen className="inline-block text-blue-400" size={32}/>
      24 Решение систем двух линейных уравнений с двумя переменными графическим способом
    </h1>
    <div className="flex items-center gap-4 bg-white border-l-4 border-blue-500 shadow p-4 rounded-lg mb-6">
      <CircleHelp color='red' size={40} strokeWidth='2.6' className='mr-3'/>
      <span className="text-base font-medium text-blue-900">
        Как решать систему двух линейных уравнений с двумя переменными графическим способом?
      </span>
    </div>

    <section className="space-y-4 text-lg leading-relaxed">
      <h2 className="font-bold text-xl mb-2">Описание</h2>
      <p>
        При решении систем линейных уравнений графическим способом используют следующий <span className='font-bold'>алгоритм</span>:
      </p>
      <ul className="list-disc pl-6 space-y-2 font-semibold">
        <li>выразить y через x из каждого уравнения;</li>
        <li>построить графики уравнений системы в одной координатной плоскости;</li>
        <li>найти координаты точек пересечения графиков уравнений (если они пересекаются);</li>
        <li>ответ дают в виде множества пар, которые являются координатами точек пересечения графиков уравнений системы.</li>
      </ul>
      <p>Рассмотрим решение систем двух линейных уравнений с двумя переменными графическим способом, используя примеры.</p>
    </section>

    {/* Пример 1 */}
    <section className="bg-gray-50 p-6 rounded-xl shadow-inner mb-8 space-y-4">
      <h3 className="font-bold text-lg mb-2">Пример 1</h3>
      <p>Решить систему уравнений:</p>
      <MathJaxContext>
        <MathJax>{`
          \\begin{cases}
          y - 2x = 0, \\\\
          2x + y - 4 = 0.
          \\end{cases}
        `}</MathJax>
      </MathJaxContext>
      <p>
        Сначала выразим <span className='font-bold'>y</span> через <span className='font-bold'>x</span> из каждого уравнения:
      </p>
      <MathJaxContext>
        <MathJax>{`
          \\begin{cases}
          y = 2x, \\\\
          y = -2x + 4.
          \\end{cases}
        `}</MathJax>
      </MathJaxContext>
      <p>Получены зависимости, которые задают линейные функции y = kx + b.</p>
      <p>
        Поскольку графиками линейных функций y = 2x и y = -2x + 4 являются прямые, то первый график проходит через начало координат, для построения второго — две точки. Составим таблицы <span className='font-bold'>(табл. 24.1)</span>.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="text-center bg-emerald-900 text-white font-bold rounded-lg p-2 w-full">
          y = 2x.
          <table className="w-full mt-2">
            <thead>
              <tr>
                <th>x</th>
                <th className="border-l">y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-t">1</td>
                <td className="px-4 py-2 border-t border-l">2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center bg-emerald-900 text-white font-bold rounded-lg p-2 w-full">
          y = -2x + 4.
          <table className="w-full mt-2">
            <thead>
              <tr>
                <th>x</th>
                <th className="border-l">y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-t">0</td>
                <td className="px-4 py-2 border-t border-l">4</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-t">2</td>
                <td className="px-4 py-2 border-t border-l">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <LinearEquationsSolver />
      <LinearEquationsVisualizer />
      <p>
        Построим точки О(0; 0) и А(1; 2) и проведем прямую ОА. Получим график функции y = 2x, т. е. график уравнения y - 2x = 0. Построим точки В(0; 4) и С(2; 0) и проведем прямую ВС. Получим график функции y = -2x + 4 или уравнения 2x + y - 4 = 0 <a href='#v1' className="text-[#746363]">(рис. 24.1)</a>.
      </p>
      <p>
        Графики пересекаются в точке с координатами (1; 2). Значит, данная система уравнений имеет единственное решение — (1; 2).
        <span className="font-bold block mt-2">Ответ: {'{1; 2}.'}</span>
      </p>
    </section>

    {/* Пример 2 */}
    <section className="bg-gray-50 p-6 rounded-xl shadow-inner mb-8 space-y-4">
      <h3 className="font-bold text-lg mb-2">Пример 2</h3>
      <p>
        Решим систему уравнений
        <MathJaxContext>
          <MathJax>{`
            \\begin{cases}
            y-x-2=0, \\\\
            y=0,5x-1.
            \\end{cases}
          `}</MathJax>
        </MathJaxContext>
        графическим способом.
      </p>
      <p>
        Сначала выразим переменную <span className='font-bold'>y</span> через переменную <span className='font-bold'>x</span> в каждом уравнении. Получим равенства <span className='font-bold'>y = x + 2 и y = 0,5x - 1,</span> которые задают линейные функции <span className='font-bold'>y = kx + b.</span>
      </p>
      <p>
        Построим графики функций: y = x + 2 и y = 0,5x - 1. Составим таблицы:
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="text-center bg-emerald-900 text-white font-bold rounded-lg p-2 w-full">
          <table className="w-full mt-2">
            <thead>
              <tr>
                <th>x</th>
                <th className="border-l">y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-t">0</td>
                <td className="px-4 py-2 border-t border-l">-1</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-t">2</td>
                <td className="px-4 py-2 border-t border-l">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center bg-emerald-900 text-white font-bold rounded-lg p-2 w-full">
          <table className="w-full mt-2">
            <thead>
              <tr>
                <th>x</th>
                <th className="border-l">y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-t">0</td>
                <td className="px-4 py-2 border-t border-l">1</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-t">2</td>
                <td className="px-4 py-2 border-t border-l">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <AdaptiveLinearEquationsVisualizer />
    </section>

    {/* Пример 3 */}
    <section className="bg-gray-50 p-6 rounded-xl shadow-inner mb-8 space-y-4">
      <h3 className="font-bold text-lg mb-2">Пример 3</h3>
      <p>
        Сколько решений имеет система уравнений
        <MathJaxContext>
          <MathJax>{`
            \\begin{cases}
            y+3x-2=0, \\\\
            2y=4-6x?
            \\end{cases}
          `}</MathJax>
        </MathJaxContext>
      </p>
      <p>
        Чтобы ответить на вопрос, построим графики функций y = 2 - 3x и 2y = 4 + 6x. Составим таблицы:
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="text-center bg-emerald-900 text-white font-bold rounded-lg p-2 w-full">
          <table className="w-full mt-2">
            <thead>
              <tr>
                <th>x</th>
                <th className="border-l">y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-t">0</td>
                <td className="px-4 py-2 border-t border-l">2</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-t">1</td>
                <td className="px-4 py-2 border-t border-l">-1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center bg-emerald-900 text-white font-bold rounded-lg p-2 w-full">
          <table className="w-full mt-2">
            <thead>
              <tr>
                <th>x</th>
                <th className="border-l">y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-t">-1</td>
                <td className="px-4 py-2 border-t border-l">5</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-t">2</td>
                <td className="px-4 py-2 border-t border-l">-4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <LinB />
      <p>
        Построим точки A(0; 2), B(1; -1) и проведем прямую AB. Построим график уравнения y = 3x - 2 = 0 (рис. 24.3). Построим точки C(-1; -2) и D(2; -4) и проведем прямую CD. Получим график уравнения 2y = 4 - 6x.
      </p>
      <p>
        Как видно, графики уравнений совпадают. Поэтому решением системы будет прямая, задаваемая уравнением y = 2 - 3x. Таких точек бесконечно много, так как прямая бесконечна.
        <span className="font-bold block text-end">Ответ: бесконечно много</span>
      </p>
      <p>
        При решении системы двух линейных уравнений с двумя переменными способом сложения оказалось, что такие системы могут иметь одно решение (когда прямые пересекаются), либо не иметь решений (когда прямые параллельны). Остальные уравнения, где две прямые совпадают, имеют бесконечно много решений.
      </p>
      <div className="p-6 bg-white shadow-md rounded-lg flex gap-4">
        <CircleHelp color='green' size={80} strokeWidth='2.6'/>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li className="font-medium">
            Почему один из способов решения системы двух линейных уравнений с двумя переменными - метод графический?
          </li>
          <li className="font-medium">
            Какие линии в каждом виде построить, чтобы решить систему двух линейных уравнений с двумя переменными?
          </li>
          <li className="font-medium">
            Может ли система двух линейных уравнений с двумя переменными иметь только два решения?
          </li>
          <li className="font-medium">
            Система двух линейных уравнений с двумя переменными может иметь либо одно решение, либо не иметь решения, либо бесконечно много решений.
          </li>
        </ol>
      </div>
    </section>

{/* Блоки A, B, C */}
<MathJaxContext config={config}>
  <div className="flex flex-col gap-8 md:flex-row md:gap-6">
    {/* A */}
    <div className="bg-white rounded-2xl shadow-xl p-6 border-l-8 border-[#08a898e0] flex-1 flex flex-col gap-6 min-w-0">
      <h3 className="font-bold mb-3 text-center text-[#08a898e0] text-2xl tracking-wide">A</h3>
      <section className="mb-4 p-4 bg-blue-50 rounded-xl shadow-inner">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">
          24.1. Найдите координаты точек пересечения с осью Ox прямых, являющихся графиками уравнений
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div><MathJax>{"$$x + y = 8$$"}</MathJax></div>
          <div><MathJax>{"$$y - x = 7$$"}</MathJax></div>
          <div><MathJax>{"$$5x - y = 7$$"}</MathJax></div>
          <div><MathJax>{"$$4y - 2x = 1$$"}</MathJax></div>
          <div><MathJax>{"$$5y + 4y - 5 = 0$$"}</MathJax></div>
          <div><MathJax>{"$$x + 2y + 1 = 0$$"}</MathJax></div>
        </div>
      </section>
      <section className="mb-4 p-4 bg-blue-50 rounded-xl shadow-inner">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">
          24.2. Найдите координаты точек пересечения с осью Oy прямых, являющихся графиками уравнений
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div><MathJax>{"$$y + x = 13$$"}</MathJax></div>
          <div><MathJax>{"$$2x - y = 1.7$$"}</MathJax></div>
          <div><MathJax>{"$$3y + 8x = 11.2$$"}</MathJax></div>
          <div><MathJax>{"$$\\frac{4}{5}x - y = 3$$"}</MathJax></div>
          <div><MathJax>{"$$\\frac{5}{3}y - 7x = 14$$"}</MathJax></div>
          <div><MathJax>{"$$9x + 1.6y = 8$$"}</MathJax></div>
        </div>
      </section>
      <section className="mb-4 p-4 bg-blue-50 rounded-xl shadow-inner">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">
          24.3. Постройте график уравнения
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div><MathJax>{"$$y = x + 5$$"}</MathJax></div>
          <div><MathJax>{"$$y = x - 4$$"}</MathJax></div>
          <div><MathJax>{"$$y = 7 - 2x$$"}</MathJax></div>
          <div><MathJax>{"$$4y - y = 6$$"}</MathJax></div>
          <div><MathJax>{"$$3x + 2y = 1$$"}</MathJax></div>
          <div><MathJax>{"$$6y + 4x = 9$$"}</MathJax></div>
          <div><MathJax>{"$$\\frac{7}{3}y - 18 = 0$$"}</MathJax></div>
          <div><MathJax>{"$$8|6 - 8x = 0$$"}</MathJax></div>
          <div><MathJax>{"$$4 - x - y = 0$$"}</MathJax></div>
        </div>
      </section>
      <section className="mb-2 p-4 bg-blue-50 rounded-xl shadow-inner">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">
          24.4. Постройте графики функций и найдите координаты точки их пересечения:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <MathJax>{"$$y = x + 4 \\quad \\text{и} \\quad y = 6 - x$$"}</MathJax>
          </div>
          <div>
            <MathJax>{"$$y = 7x + 9 \\quad \\text{и} \\quad y = 3 + x$$"}</MathJax>
          </div>
          <div>
            <MathJax>{"$$3y - 2y = -2 \\quad \\text{и} \\quad 7y - 5x = -4$$"}</MathJax>
          </div>
        </div>
      </section>
    </div>
    {/* B */}
    <div className="bg-white rounded-2xl shadow-xl p-6 border-l-8 border-[#ba9f0a] flex-1 flex flex-col gap-6 min-w-0">
      <h3 className="font-bold mb-3 text-center text-[#ba9f0a] text-2xl tracking-wide">B</h3>
      <section className="mb-4 p-4 bg-yellow-50 rounded-xl shadow-inner">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">24.5. Решите графически систему уравнений (24.5–24.7)</h3>
        <ol className="list-decimal pl-8 space-y-4">
          <li><MathJax>{"$$\\begin{cases} y=2x, \\\\ y=2+x; \\end{cases}$$"}</MathJax></li>
          <li><MathJax>{"$$\\begin{cases} y=2x, \\\\ y=x-3; \\end{cases}$$"}</MathJax></li>
          <li><MathJax>{"$$\\begin{cases} y-5x=0, \\\\ y=x-4; \\end{cases}$$"}</MathJax></li>
          <li><MathJax>{"$$\\begin{cases} y-3x=0, \\\\ y=6+x. \\end{cases}$$"}</MathJax></li>
        </ol>
      </section>
      <section className="mb-4 p-4 bg-yellow-50 rounded-xl shadow-inner">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">24.6.</h3>
        <ol className="list-decimal pl-8 space-y-4">
          <li><MathJax>{"$$\\begin{cases} x+y=9, \\\\ x-y=1; \\end{cases}$$"}</MathJax></li>
          <li><MathJax>{"$$\\begin{cases} 3x+y=1, \\\\ x+y=5; \\end{cases}$$"}</MathJax></li>
          <li><MathJax>{"$$\\begin{cases} y-6x=-25, \\\\ y-x=-8; \\end{cases}$$"}</MathJax></li>
          <li><MathJax>{"$$\\begin{cases} y+7x=18, \\\\ y+x=0. \\end{cases}$$"}</MathJax></li>
        </ol>
      </section>
      <section className="mb-4 p-4 bg-yellow-50 rounded-xl shadow-inner">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">24.7.</h3>
        <ol className="list-decimal pl-8 space-y-4">
          <li><MathJax>{"$$\\begin{cases} x+20y=37, \\\\ 5y+x=7; \\end{cases}$$"}</MathJax></li>
          <li><MathJax>{"$$\\begin{cases} y-8x=-33, \\\\ 7x-y=29; \\end{cases}$$"}</MathJax></li>
          <li><MathJax>{"$$\\begin{cases} 17x+y=90, \\\\ y-23x=-110. \\end{cases}$$"}</MathJax></li>
        </ol>
      </section>
      <section className="mb-2 p-4 bg-yellow-50 rounded-xl shadow-inner">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">24.8. Выясните, сколько решений имеет система уравнений:</h3>
        <ol className="list-decimal pl-8 space-y-4">
          <li><MathJax>{"$$\\begin{cases} 6x+y=0, \\\\ -4x+y=2; \\end{cases}$$"}</MathJax></li>
          <li><MathJax>{"$$\\begin{cases} y+x=7, \\\\ y=x-5; \\end{cases}$$"}</MathJax></li>
          <li><MathJax>{"$$\\begin{cases} x+y=6, \\\\ 3x-3y=6.0. \\end{cases}$$"}</MathJax></li>
        </ol>
      </section>
    </div>
    {/* C */}
    <div className="bg-white rounded-2xl shadow-xl p-6 border-l-8 border-[#b90e0e] flex-1 flex flex-col gap-6 min-w-0">
      <h3 className="font-bold mb-3 text-center text-[#b90e0e] text-2xl tracking-wide">C</h3>
      <section className="mb-4 p-4 bg-red-50 rounded-xl shadow-inner">
        <h3 className="text-3xl font-extrabold text-blue-800 mb-6 tracking-wide border-b-2 border-blue-200 pb-2 text-center flex items-center justify-center gap-3">
          24.9. Найдите значение выражения 7x₀ + 3y₀, если координаты точки A(x₀, y₀) являются решением системы уравнений:
        </h3>
        <ol className="list-decimal pl-8 space-y-4">
          <li><MathJax>{"$$\\begin{cases} 7x-3y=-1, \\\\ 14x-2y=3/2; \\end{cases}$$"}</MathJax></li>
          <li><MathJax>{"$$\\begin{cases} 12y+7x=-3, \\\\ x+24y=-25; \\end{cases}$$"}</MathJax></li>
          <li><MathJax>{"$$\\begin{cases} 8y-7x=-5.6, \\\\ 35x+2y=7; \\end{cases}$$"}</MathJax></li>
          <li><MathJax>{"$$\\begin{cases} 10x+12y=7.5, \\\\ 24y-5x=-5. \\end{cases}$$"}</MathJax></li>
        </ol>
      </section>
      <section className="mb-4 p-4 bg-red-50 rounded-xl shadow-inner">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">24.10. Используя данные таблицы 24.4, постройте график линейной функции</h3>
        <table className='w-full border-collapse border border-gray-300 rounded-lg shadow'>
          <thead>
            <tr>
              <th className='border border-gray-300 bg-gray-100'>x</th>
              <th className='border border-gray-300 bg-gray-100'>-1</th>
              <th className='border border-gray-300 bg-gray-100'>0</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 text-center'>y</td>
              <td className='border border-gray-300 text-center'>-5</td>
              <td className='border border-gray-300 text-center'>-3</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="mb-2 p-4 bg-red-50 rounded-xl shadow-inner">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">
          24.11. Постройте график функции y = -2x + 4 и найдите значение x, при которых функция принимает неотрицательные значения.
        </h3>
      </section>
    </div>
  </div>
</MathJaxContext>
  </div>


  );
}