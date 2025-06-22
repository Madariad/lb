import React from 'react';
import {
  BookOpen,
  Info,
  Lightbulb,
  Star,
  ChevronRight,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

import PowerFunctionVisualizer from './graph/PowerFunctionVisualizer'

export default function Three() {
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-white via-blue-50 to-white rounded-2xl shadow-xl p-8 my-10 space-y-10">
      <h1 className="text-3xl font-extrabold text-blue-800 mb-6 tracking-wide border-b-2 border-blue-200 pb-2 text-center flex items-center justify-center gap-3">
        <BookOpen className="inline-block text-blue-400" size={32} />
        § 26. Функция y = axⁿ, её свойства и график
      </h1>

      {/* Теория */}
      <section className="mb-8 p-6 bg-blue-50 rounded-xl shadow-inner space-y-4 border-l-4 border-blue-300 relative">
        <div className="absolute -left-6 top-6">
          <Info className="text-blue-400" size={28} />
        </div>
        <h2 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
          <Sparkles className="text-yellow-400" size={20} /> Свойства функции <code>y = axⁿ</code>
        </h2>
        <div className="space-y-2">
          <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
            <ChevronRight className="text-blue-400 mt-1" size={20} />
            <span>
              1) Областью определения функции <code>y = ax³</code> является множество чисел числовой прямой <b>(-∞; +∞)</b>. Объясните, почему.<br />
              Символически: D(y) = (-∞; +∞), или D(ax³) = (-∞; +∞); или D(y) = R, или D(ax³) = R.
            </span>
          </div>
          <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
            <ChevronRight className="text-blue-400 mt-1" size={20} />
            <span>
              2) Найдем множество значений функции <code>y = ax³</code>:<br />
              Если <b>a &gt; 0</b> и x &lt; 0, то E(y) = (-∞; 0).
            </span>
          </div>
          <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
            <ChevronRight className="text-blue-400 mt-1" size={20} />
            <span>
              — Переменная <code>x</code> принимает положительные значения, то множеством значений функции <code>y = ax³</code> является открытый числовой луч <code>(0; +∞)</code>.
            </span>
          </div>
          <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
            <ChevronRight className="text-blue-400 mt-1" size={20} />
            <span>
              — Переменная <code>x</code> принимает значение, равное нулю, то значением функции <code>y = ax³</code> будет число нуль.
            </span>
          </div>
          <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
            <ChevronRight className="text-blue-400 mt-1" size={20} />
            <span>
              Следовательно, при <code>a &gt; 0</code> множеством значений функции <code>y = ax³</code> является множество чисел числовой прямой <code>(-∞; +∞)</code>.
            </span>
          </div>
          <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
            <ChevronRight className="text-blue-400 mt-1" size={20} />
            <span>
              Почему при <code>a &lt; 0</code> множеством значений функции <code>y = ax³</code> является множество чисел числовой прямой <code>(-∞; +∞)</code>?
            </span>
          </div>
          <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
            <ChevronRight className="text-blue-400 mt-1" size={20} />
            <span>
              Множеством значений функции <code>y = ax³</code>, где <code>a ≠ 0</code>, является множество чисел числовой прямой <code>(-∞; +∞)</code>.
            </span>
          </div>
          <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
            <ChevronRight className="text-blue-400 mt-1" size={20} />
            <span>
              Символически: <code>E(y) = (-∞; +∞)</code>, или <code>E(ax³) = (-∞; +∞)</code>, или <code>E(y) = R</code>, или <code>E(ax³) = R</code>.
            </span>
          </div>
          <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
            <ChevronRight className="text-blue-400 mt-1" size={20} />
            <span>
              Из первого и второго свойств функции <code>y = ax³</code> следует, что её график расположен:
            </span>
          </div>
          <ul className="list-disc pl-10">
            <li>в I и III координатной четверти при <code>a &gt; 0</code>,</li>
            <li>в II и IV координатной четверти при <code>a &lt; 0</code>.</li>
          </ul>
        </div>
        <h3 className="font-semibold mt-4 flex items-center gap-2">
          <CheckCircle className="text-green-500" size={20} /> 3) Найдём промежутки знакопостоянства функции
        </h3>
        <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
          <ChevronRight className="text-blue-400 mt-1" size={20} />
          <span>
            Из первого и второго свойств функции <code>y = ax³</code> следует, что она принимает:
          </span>
        </div>
        <ul className="list-disc pl-10">
          <li>при <code>a &gt; 0</code> — положительные значения на <code>(0; +∞)</code>, отрицательные значения — на <code>(-∞; 0)</code>.</li>
        </ul>
        <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
          <ChevronRight className="text-blue-400 mt-1" size={20} />
          <span>
            — При <code>a &lt; 0</code>, положительные значения функции <code>y = ax³</code> наблюдаются на <code>(-∞; 0)</code>, а отрицательные — на <code>(0; +∞)</code>.
          </span>
        </div>
        <h3 className="font-semibold mt-4 flex items-center gap-2">
          <CheckCircle className="text-green-500" size={20} /> 4) Найдем нули функции
        </h3>
        <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
          <ChevronRight className="text-blue-400 mt-1" size={20} />
          <span>
            Значение функции <code>y = ax³</code> равно нулю при <code>x = 0</code>.
          </span>
        </div>
        <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
          <ChevronRight className="text-blue-400 mt-1" size={20} />
          <span>
            Действительно, если <code>y = 0</code>, то <code>ax³ = 0</code>. Поскольку <code>a ≠ 0</code>, то <code>x³ = 0</code>, или <code>x ⋅ x ⋅ x = 0</code>. Значение произведения равно нулю, когда хотя бы один из множителей равен нулю. Значит, <code>x = 0</code>.
          </span>
        </div>
        <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
          <ChevronRight className="text-blue-400 mt-1" size={20} />
          <span>
            Для построения графика функции <code>y = x³</code> и <code>y = -x³</code> составим таблицу 26.1.
          </span>
        </div>
        <h3 className="font-semibold mt-4 flex items-center gap-2">
          <Star className="text-blue-400" size={18} /> Таблица 26.1
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg shadow mb-4">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">x</th>
                <th className="border border-gray-300 px-4 py-2">-2</th>
                <th className="border border-gray-300 px-4 py-2">-1</th>
                <th className="border border-gray-300 px-4 py-2">-1/2</th>
                <th className="border border-gray-300 px-4 py-2">0</th>
                <th className="border border-gray-300 px-4 py-2">1/2</th>
                <th className="border border-gray-300 px-4 py-2">1</th>
                <th className="border border-gray-300 px-4 py-2">2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">y = x³</td>
                <td className="border border-gray-300 px-4 py-2">-8</td>
                <td className="border border-gray-300 px-4 py-2">-1</td>
                <td className="border border-gray-300 px-4 py-2">-1/8</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">1/8</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">8</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">y = ∛x</td>
                <td className="border border-gray-300 px-4 py-2">-∛2</td>
                <td className="border border-gray-300 px-4 py-2">-1</td>
                <td className="border border-gray-300 px-4 py-2">-∛(1/2)</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">∛(1/2)</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">∛2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">y = 1/x³</td>
                <td className="border border-gray-300 px-4 py-2">-1/8</td>
                <td className="border border-gray-300 px-4 py-2">-1</td>
                <td className="border border-gray-300 px-4 py-2">-8</td>
                <td className="border border-gray-300 px-4 py-2">∞</td>
                <td className="border border-gray-300 px-4 py-2">8</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">1/8</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
          <ChevronRight className="text-blue-400 mt-1" size={20} />
          <span>
            Если построить другие точки, принадлежащие графику функции <code>y = x³</code> или <code>y = ∛x</code>, то увидим, что они расположены на линии, которая плавно соединяет точки, построенные с помощью таблицы. Графики функций <code>y = x³</code>, <code>y = ∛x</code> называются кубическими параболами (рис. 26.1, 26.2).
          </span>
        </div>
        <h3 className="font-semibold mt-4 flex items-center gap-2">
          <Star className="text-blue-400" size={18} /> Таблица 26.2
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg shadow mb-4">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">x</th>
                <th className="border border-gray-300 px-4 py-2">-2</th>
                <th className="border border-gray-300 px-4 py-2">-1</th>
                <th className="border border-gray-300 px-4 py-2">0</th>
                <th className="border border-gray-300 px-4 py-2">1/2</th>
                <th className="border border-gray-300 px-4 py-2">1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">y = 2x³</td>
                <td className="border border-gray-300 px-4 py-2">-16</td>
                <td className="border border-gray-300 px-4 py-2">-2</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">1/4</td>
                <td className="border border-gray-300 px-4 py-2">2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">y = -2x³</td>
                <td className="border border-gray-300 px-4 py-2">16</td>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">-1/4</td>
                <td className="border border-gray-300 px-4 py-2">-2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
          <ChevronRight className="text-blue-400 mt-1" size={20} />
          <span>
            Заполните таблицу 26.3. При одних и тех же значениях аргумента сравните соответствующие значения функций:
          </span>
        </div>
        <ol className="list-decimal pl-10">
          <li>y = 2x³ и y = x³;</li>
          <li>y = 1/2x³ и y = x³.</li>
        </ol>
        <h3 className="font-semibold mt-4 flex items-center gap-2">
          <Star className="text-blue-400" size={18} /> Таблица 26.3
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg shadow mb-4">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">x</th>
                <th className="border border-gray-300 px-4 py-2">-4</th>
                <th className="border border-gray-300 px-4 py-2">-2</th>
                <th className="border border-gray-300 px-4 py-2">-1</th>
                <th className="border border-gray-300 px-4 py-2">0</th>
                <th className="border border-gray-300 px-4 py-2">1</th>
                <th className="border border-gray-300 px-4 py-2">2</th>
                <th className="border border-gray-300 px-4 py-2">4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">y = x³</td>
                <td className="border border-gray-300 px-4 py-2">-64</td>
                <td className="border border-gray-300 px-4 py-2">-8</td>
                <td className="border border-gray-300 px-4 py-2">-1</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">8</td>
                <td className="border border-gray-300 px-4 py-2">64</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">y = (1/2)x³</td>
                <td className="border border-gray-300 px-4 py-2">-32</td>
                <td className="border border-gray-300 px-4 py-2">-4</td>
                <td className="border border-gray-300 px-4 py-2">-1/2</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">1/2</td>
                <td className="border border-gray-300 px-4 py-2">4</td>
                <td className="border border-gray-300 px-4 py-2">32</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">y = 2x³</td>
                <td className="border border-gray-300 px-4 py-2">-128</td>
                <td className="border border-gray-300 px-4 py-2">-16</td>
                <td className="border border-gray-300 px-4 py-2">-2</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">16</td>
                <td className="border border-gray-300 px-4 py-2">128</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
          <ChevronRight className="text-blue-400 mt-1" size={20} />
          <span>
            Графики всех этих функций <code>y = x³</code>, <code>y = (1/2)x³</code> и <code>y = 2x³</code> называют кубическими параболами.
          </span>
        </div>
        <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
          <ChevronRight className="text-blue-400 mt-1" size={20} />
          <span>
            Для краткости вместо предложения "построить кубическую параболу, которая является графиком функции <code>y = x³</code>", говорят: "построить кубическую параболу <code>y = x³</code>".
          </span>
        </div>
        <div className="bg-white/80 rounded-lg p-4 shadow flex items-start gap-3">
          <ChevronRight className="text-blue-400 mt-1" size={20} />
          <span>
            В одной и той же системе координат постройте кубические параболы, которые являются графиками функций <code>y = x³</code>, <code>y = (1/2)x³</code> и <code>y = 2x³</code>.
          </span>
        </div>
        <ol className="list-decimal pl-10">
          <li>Как из кубической параболы <code>y = x³</code> получить кубическую параболу <code>y = 7x³</code>, <code>y = (7/2)x³</code>, <code>y = -5x³</code>?</li>
          <li>Как относительно друг друга расположены кубические параболы <code>y = 5x³</code> и <code>y = -5x³</code>?</li>
          <li>Объясните, почему начало координат является центром симметрии кубической параболы вида <code>y = ax³</code>.</li>
          <li>В каких координатных четвертях расположена кубическая парабола: <code>y = 7x³</code>; <code>y = -1.5x³</code>?</li>
        </ol>
      </section>


      <PowerFunctionVisualizer />


      {/* Блоки A, B, C */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* A */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border-l-8 border-[#08a898e0] flex flex-col gap-6 relative">
          <div className="absolute -left-7 top-6">
            <Star className="text-[#08a898e0]" size={28} />
          </div>
          <h2 className="font-bold mb-3 text-center text-[#08a898e0] text-2xl tracking-wide flex items-center justify-center gap-2">
            <BookOpen className="text-[#08a898e0]" size={22} /> A
          </h2>
          <section className="mb-4 p-4 bg-blue-50 rounded-xl shadow-inner">
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                Принадлежит ли графику функции <code>y = x⁴</code> точка:
                <ul className="list-disc pl-6">
                  <li>1) A(2; 16);</li>
                  <li>2) B(-1; -1);</li>
                  <li>3) C(3; 54);</li>
                  <li>4) D(-2; -8);</li>
                  <li>5) M(-0.2; -0.008);</li>
                  <li>6) K(3.7; 27);</li>
                  <li>7) P(0.5; 1.27);</li>
                  <li>8) S(-1.5; -125)?</li>
                </ul>
              </li>
              <li>
                Постройте график функции <code>y = 0.5x²</code>. По графику найдите:
                <ul className="list-disc pl-6">
                  <li>1) значения <code>y</code>, соответствующие <code>x = -1.25; -0.75; 2; 3.5;</code></li>
                  <li>2) значения <code>x</code>, которым соответствуют <code>y = -3; -1.4; 4; 4.8.</code></li>
                </ul>
              </li>
              <li>
                Постройте в одной координатной плоскости графики функций:
                <ul className="list-disc pl-6">
                  <li>1) <code>y = x²</code>; <code>y = 5x²</code>; <code>y = 1/2x²</code>; <code>y = 4x²</code>;</li>
                  <li>2) <code>y = -5x²</code>; <code>y = -x²</code>; <code>y = -4x²</code>;</li>
                  <li>3) <code>y = 1/4x²</code>; <code>y = 4/x²</code>; <code>y = -4/x²</code>.</li>
                </ul>
              </li>
            </ol>
          </section>
        </div>
        {/* B */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border-l-8 border-[#ba9f0a] flex flex-col gap-6 relative">
          <div className="absolute -left-7 top-6">
            <Star className="text-[#ba9f0a]" size={28} />
          </div>
          <h2 className="font-bold mb-3 text-center text-[#ba9f0a] text-2xl tracking-wide flex items-center justify-center gap-2">
            <BookOpen className="text-[#ba9f0a]" size={22} /> B
          </h2>
          <section className="mb-4 p-4 bg-yellow-50 rounded-xl shadow-inner">
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                С помощью графика функции <code>y = x²</code> сравните числа:
                <ul className="list-disc pl-6">
                  <li><code>(-3)²</code> и <code>(-2)²</code></li>
                  <li><code>(-1.2)²</code> и <code>0.2</code></li>
                  <li><code>4.4</code> и <code>π</code>, и <code>5.02</code></li>
                  <li><code>0</code> и <code>(-2)²</code></li>
                </ul>
              </li>
              <li>
                Имеет ли корни уравнение:
                <ul className="list-disc pl-6">
                  <li><code>y² = 2x + 1</code></li>
                  <li><code>2x³ = -3x</code></li>
                  <li><code>0.4x + y = 2</code></li>
                  <li><code>-1.2 - x = x⁹</code></li>
                </ul>
              </li>
              <li>
                Решите уравнение:
                <ul className="list-disc pl-6">
                  <li><code>y³ = 54</code></li>
                  <li><code>x³ = 125</code></li>
                  <li><code>2y² = 4</code></li>
                  <li><code>-0.5 = -4x</code></li>
                </ul>
              </li>
              <li>
                Пересекаются ли графики функций <code>y = -0.4</code> и <code>y = -0.3x + 5</code>?
              </li>
              <li>
                Найдите графическим способом приближенные значения корней уравнения:
                <ul className="list-disc pl-6">
                  <li><code>-0.3x = -4</code></li>
                  <li><code>-0.3x = 5</code></li>
                  <li><code>-0.3x = 1.4</code></li>
                </ul>
              </li>
            </ol>
          </section>
        </div>
        {/* C */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border-l-8 border-[#b90e0e] flex flex-col gap-6 relative">
          <div className="absolute -left-7 top-6">
            <Star className="text-[#b90e0e]" size={28} />
          </div>
          <h2 className="font-bold mb-3 text-center text-[#b90e0e] text-2xl tracking-wide flex items-center justify-center gap-2">
            <BookOpen className="text-[#b90e0e]" size={22} /> C
          </h2>
          <section className="mb-4 p-4 bg-red-50 rounded-xl shadow-inner">
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                Сколько точек пересечения имеют графики функций <code>y = ax³</code> и <code>y = bx⁴</code>, если:
                <ul className="list-disc pl-6">
                  <li>1) <code>a = 3</code>, <code>b = 2</code>;</li>
                  <li>2) <code>a = 0.2</code>, <code>b = -0.2</code>;</li>
                  <li>3) <code>a = -3</code>, <code>b = 0.2</code>;</li>
                  <li>4) <code>a = -4</code>, <code>b = -2</code>.</li>
                </ul>
              </li>
              <li>
                Найдите наибольшее и наименьшее значения функции <code>y = 2x³</code> на промежутке:
                <ul className="list-disc pl-6">
                  <li>1) <code>[-2; 5]</code>;</li>
                  <li>2) <code>[-1; -0.5]</code>;</li>
                  <li>3) <code>[-3; 3.5]</code>.</li>
                </ul>
              </li>
              <li>
                Постройте график уравнения:
                <ul className="list-disc pl-6">
                  <li>1) <code>y - x² / x - 3 = 0</code>;</li>
                  <li>2) <code>y - x² / x - 2 = 0</code>;</li>
                  <li>3) <code>y - x² / x - 3 = 0</code>;</li>
                  <li>4) <code>y - 0.25x² / 4 - y = 0</code>.</li>
                </ul>
              </li>
            </ol>
          </section>
        </div>
      </div>

      {/* Подготовка к новым знаниям */}
      <section className="mt-8 p-6 bg-green-50 rounded-xl shadow-inner border-l-4 border-green-400">
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb className="text-green-500" size={22} />
          <h2 className="text-xl font-bold text-green-700">Подготовьтесь к овладению новыми знаниями</h2>
        </div>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Какие из перечисленных функций:
            <ul className="list-disc pl-6">
              <li><code>y = -3x</code></li>
              <li><code>y = 2x + 1</code></li>
              <li><code>y = 3/x</code></li>
              <li><code>y = 0.5x + 1</code></li>
            </ul>
            являются:
            <ol className="list-decimal pl-6">
              <li>возрастающими?</li>
              <li>убывающими?</li>
            </ol>
          </li>
          <li>
            В каких четвертях расположены графики функций:
            <ul className="list-disc pl-6">
              <li><code>y = -0.2x</code></li>
              <li><code>y = 5x²</code></li>
              <li><code>y = -2x²</code></li>
            </ul>
          </li>
        </ol>
      </section>
    </div>
  );
}