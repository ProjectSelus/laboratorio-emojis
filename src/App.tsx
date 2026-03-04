import React, { useState } from "react";
import { motion } from "framer-motion";

export const App: React.FC = () => {
  // Copy State
  const [copied, setCopied] = useState(false);

  // Emoji State
  const [emoji, setEmoji] = useState("👍");

  // Layout/Position State
  const [marginLeft, setMarginLeft] = useState(-0.25); // em rems ou tailwind classes, mas vamos usar inline para facilitar ajuste fino
  const [marginTop, setMarginTop] = useState(-10); // pixels
  const [leftPos, setLeftPos] = useState(-2); // pixels
  const [fontSize, setFontSize] = useState(34); // pixels
  const [scaleY, setScaleY] = useState(-1); // 1 (normal) or -1 (flipped)
  const [scaleX, setScaleX] = useState(1); // 1 (normal) or -1 (flipped)

  // Origin point for rotation
  const [originX, setOriginX] = useState(0.3); // 0 to 1
  const [originY, setOriginY] = useState(0.9); // 0 to 1

  // Animation Keyframes State
  const [rotStart, setRotStart] = useState(80);
  const [rotPeak, setRotPeak] = useState(105);
  const [rotEnd, setRotEnd] = useState(80);

  const [yStart, setYStart] = useState(4);
  const [yPeak, setYPeak] = useState(4);
  const [yEnd, setYEnd] = useState(4);

  const [xStart, setXStart] = useState(4);
  const [xPeak, setXPeak] = useState(4);
  const [xEnd, setXEnd] = useState(4);

  // Animation Timing
  const [duration, setDuration] = useState(2.2);
  const [easing, setEasing] = useState<
    | "linear"
    | "easeIn"
    | "easeOut"
    | "easeInOut"
    | "circIn"
    | "circOut"
    | "circInOut"
    | "backIn"
    | "backOut"
    | "backInOut"
    | "anticipate"
  >("linear");

  const loadPreset = (type: "thumb" | "car") => {
    if (type === "thumb") {
      setEmoji("👍");
      setMarginLeft(-0.25);
      setMarginTop(-10);
      setLeftPos(-2);
      setFontSize(34);
      setScaleY(-1);
      setScaleX(1);
      setOriginX(0.3);
      setOriginY(0.9);
      setRotStart(80);
      setRotPeak(105);
      setRotEnd(80);
      setYStart(4);
      setYPeak(4);
      setYEnd(4);
      setXStart(4);
      setXPeak(4);
      setXEnd(4);
      setDuration(2.2);
      setEasing("linear");
    } else {
      setEmoji("🚘");
      setMarginLeft(0);
      setMarginTop(-7);
      setLeftPos(-11);
      setFontSize(36);
      setScaleY(1);
      setScaleX(1);
      setOriginX(0.5);
      setOriginY(0.4);
      setRotStart(2);
      setRotPeak(-2);
      setRotEnd(2);
      setYStart(0);
      setYPeak(0);
      setYEnd(0);
      setXStart(9);
      setXPeak(0);
      setXEnd(9);
      setDuration(3.2);
      setEasing("easeInOut");
    }
  };

  const isCar = emoji === "🚘";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 pb-32">
      <h1 className="text-3xl font-black text-gray-800 mb-8 border-b-4 border-indigo-500 pb-2">
        Laboratório de Emojis de Carona 🚗
      </h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* PREVIEW PANEL */}
        <div className="w-full md:w-1/3 flex flex-col items-center gap-6">
          <h2 className="text-xl font-bold text-gray-700">
            Como vai ficar no App
          </h2>

          {/* Mock of the ListingCard Gradient Background */}
          <div
            className={`relative w-64 h-64 rounded-2xl bg-gradient-to-br ${isCar ? "from-gray-950 via-gray-900 to-teal-900" : "from-amber-900 from-40% via-neutral-900 via-80% to-gray-950"} p-5 flex flex-col justify-between overflow-hidden shadow-2xl border-4 border-white transition-colors duration-500`}
          >
            {/* Abstract background shapes */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-black/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex justify-between items-start z-10 relative mt-8">
              <div
                className={`backdrop-blur-md rounded-2xl p-2.5 shadow-sm border border-white/20 ${isCar ? "bg-white/10" : "bg-black/10"}`}
              >
                {/* /// THIS IS THE CONTINER /// */}
                <div
                  className="relative w-10 h-10 flex items-center justify-center border border-dashed border-red-500/30 overflow-visible"
                  style={{ marginLeft: `${marginLeft}rem` }}
                >
                  {/* /// THIS IS THE EMOJI /// */}
                  <motion.div
                    animate={{
                      rotate: [rotStart, rotPeak, rotEnd],
                      y: [yStart, yPeak, yEnd],
                      x: [xStart, xPeak, xEnd],
                    }}
                    transition={{
                      duration: duration,
                      repeat: Infinity,
                      ease: easing,
                    }}
                    className="drop-shadow-xl absolute"
                    style={{
                      top: `${marginTop}px`,
                      left: `${leftPos}px`,
                      fontSize: `${fontSize}px`,
                      originX: originX,
                      originY: originY,
                      scaleY: scaleY,
                      scaleX: scaleX,
                      lineHeight: 1,
                    }}
                  >
                    {emoji}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Dummy text just for visual reference */}
            <div className="z-10 relative mt-auto mb-2 opacity-50">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-white font-black text-xl">Origem</span>
                </div>
                <div className="w-0.5 h-5 bg-white/40 ml-1.5 rounded-full my-0.5"></div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                  <span className="text-white font-black text-xl">Destino</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 text-sm rounded shadow-sm">
            A caixa pontilhada vermelha é o container (`w-10 h-10`). Use as
            opções de margem para mover o container como um todo, e o "Top" e
            "Left" para mover o emoji finamente.
          </div>
        </div>

        {/* CONTROLS PANEL */}
        <div className="w-full md:w-2/3 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-6">
          {/* PRESETS */}
          <div className="flex gap-4 mb-2">
            <button
              onClick={() => loadPreset("thumb")}
              className={`flex-1 p-3 rounded-lg font-bold transition-all border-2 ${!isCar ? "border-amber-500 bg-amber-50 text-amber-900" : "border-gray-100 hover:border-gray-200 text-gray-500"}`}
            >
              👍 Ajustar Pedido (Polegar)
            </button>
            <button
              onClick={() => loadPreset("car")}
              className={`flex-1 p-3 rounded-lg font-bold transition-all border-2 ${isCar ? "border-teal-500 bg-teal-50 text-teal-900" : "border-gray-100 hover:border-gray-200 text-gray-500"}`}
            >
              🚘 Ajustar Oferta (Carro)
            </button>
          </div>

          {/* Seção 1: Aparência */}
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-3 flex items-center gap-2">
              <span className="bg-indigo-100 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center text-sm">
                1
              </span>
              Aparência e Posição Inicial
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1">
                  Qual Emoji?
                </label>
                <input
                  type="text"
                  value={emoji}
                  onChange={(e) => setEmoji(e.target.value)}
                  className="w-full p-2 border rounded bg-gray-50 text-xl text-center"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1">
                  Tamanho (px)
                </label>
                <input
                  type="number"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full p-2 border rounded bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1">
                  Ajuste Fino Y (Top px)
                </label>
                <input
                  type="range"
                  min="-30"
                  max="30"
                  value={marginTop}
                  onChange={(e) => setMarginTop(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-xs text-center text-gray-400">
                  {marginTop}px
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1">
                  Ajuste Fino X (Left px)
                </label>
                <input
                  type="range"
                  min="-30"
                  max="30"
                  value={leftPos}
                  onChange={(e) => setLeftPos(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-xs text-center text-gray-400">
                  {leftPos}px
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1">
                  Margem do Container (rem)
                </label>
                <input
                  type="range"
                  min="-4"
                  max="4"
                  step="0.25"
                  value={marginLeft}
                  onChange={(e) => setMarginLeft(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-xs text-center text-gray-400">
                  {marginLeft}rem
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-xs font-bold text-gray-500 mb-1">
                    Inverter Vertical?
                  </label>
                  <button
                    onClick={() => setScaleY((s) => (s === 1 ? -1 : 1))}
                    className="w-full p-2 border rounded bg-gray-100 hover:bg-gray-200 text-sm"
                  >
                    {scaleY === 1 ? "Normal" : "Invertido"}
                  </button>
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-bold text-gray-500 mb-1">
                    Inverter Horizont.?
                  </label>
                  <button
                    onClick={() => setScaleX((s) => (s === 1 ? -1 : 1))}
                    className="w-full p-2 border rounded bg-gray-100 hover:bg-gray-200 text-sm"
                  >
                    {scaleX === 1 ? "Normal" : "Invertido"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Seção 2: Ponto de Giro (Origin) */}
          <div>
            <h3 className="text-lg font-bold text-indigo-600 flex items-center gap-2 mb-1">
              <span className="bg-indigo-100 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center text-sm">
                2
              </span>
              Centro de Rotação (De onde o emoji gira)
            </h3>
            <p className="text-xs text-gray-500 mb-3">
              0 é esquerda/topo, 1 é direita/base, 0.5 é o centro exato.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-3 rounded-lg border border-gray-200">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Eixo X (Esquerda 0 → 1 Direita)
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={originX}
                  onChange={(e) => setOriginX(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-xs text-center text-indigo-600 font-medium">
                  {originX}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Eixo Y (Topo 0 → 1 Base)
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={originY}
                  onChange={(e) => setOriginY(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-xs text-center text-indigo-600 font-medium">
                  {originY}
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Seção 3: Animando - Keyframes */}
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-3 flex items-center gap-2">
              <span className="bg-indigo-100 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center text-sm">
                3
              </span>
              Movimento (A Animação em si)
            </h3>

            <div className="grid grid-cols-3 gap-x-2 gap-y-4 items-end">
              {/* Headers */}
              <div className="text-xs font-bold text-center text-gray-400 mb-1">
                Frame 1 (Início)
              </div>
              <div className="text-xs font-bold text-center text-gray-400 mb-1">
                Frame 2 (Meio)
              </div>
              <div className="text-xs font-bold text-center text-gray-400 mb-1">
                Frame 3 (Fim/Volta)
              </div>

              {/* Row 1: Rotation */}
              <div className="bg-gray-50 p-2 rounded border border-gray-100">
                <label className="block text-[10px] font-bold text-gray-500 mb-1">
                  Giro (Graus)
                </label>
                <input
                  type="number"
                  value={rotStart}
                  onChange={(e) => setRotStart(Number(e.target.value))}
                  className="w-full p-1 border rounded text-sm text-center"
                />
              </div>
              <div className="bg-gray-50 p-2 rounded border border-gray-100">
                <label className="block text-[10px] font-bold text-gray-500 mb-1">
                  Giro (Graus)
                </label>
                <input
                  type="number"
                  value={rotPeak}
                  onChange={(e) => setRotPeak(Number(e.target.value))}
                  className="w-full p-1 border rounded text-sm text-center"
                />
              </div>
              <div className="bg-gray-50 p-2 rounded border border-gray-100">
                <label className="block text-[10px] font-bold text-gray-500 mb-1">
                  Giro (Graus)
                </label>
                <input
                  type="number"
                  value={rotEnd}
                  onChange={(e) => setRotEnd(Number(e.target.value))}
                  className="w-full p-1 border rounded text-sm text-center"
                />
              </div>

              {/* Row 2: Y Translation (Vertical Pulo) */}
              <div className="bg-orange-50 p-2 rounded border border-orange-100">
                <label className="block text-[10px] font-bold text-orange-600 mb-1">
                  Pulo Vertical (Y)
                </label>
                <input
                  type="number"
                  value={yStart}
                  onChange={(e) => setYStart(Number(e.target.value))}
                  className="w-full p-1 border rounded text-sm text-center border-orange-200 bg-white"
                />
              </div>
              <div className="bg-orange-50 p-2 rounded border border-orange-100">
                <label className="block text-[10px] font-bold text-orange-600 mb-1">
                  Pulo Vertical (Y)
                </label>
                <input
                  type="number"
                  value={yPeak}
                  onChange={(e) => setYPeak(Number(e.target.value))}
                  className="w-full p-1 border rounded text-sm text-center border-orange-200 bg-white"
                />
              </div>
              <div className="bg-orange-50 p-2 rounded border border-orange-100">
                <label className="block text-[10px] font-bold text-orange-600 mb-1">
                  Pulo Vertical (Y)
                </label>
                <input
                  type="number"
                  value={yEnd}
                  onChange={(e) => setYEnd(Number(e.target.value))}
                  className="w-full p-1 border rounded text-sm text-center border-orange-200 bg-white"
                />
              </div>

              {/* Row 3: X Translation (Horizontal Deslize) */}
              <div className="bg-teal-50 p-2 rounded border border-teal-100">
                <label className="block text-[10px] font-bold text-teal-600 mb-1">
                  Deslize Horizontal (X)
                </label>
                <input
                  type="number"
                  value={xStart}
                  onChange={(e) => setXStart(Number(e.target.value))}
                  className="w-full p-1 border rounded text-sm text-center border-teal-200 bg-white"
                />
              </div>
              <div className="bg-teal-50 p-2 rounded border border-teal-100">
                <label className="block text-[10px] font-bold text-teal-600 mb-1">
                  Deslize Horizontal (X)
                </label>
                <input
                  type="number"
                  value={xPeak}
                  onChange={(e) => setXPeak(Number(e.target.value))}
                  className="w-full p-1 border rounded text-sm text-center border-teal-200 bg-white"
                />
              </div>
              <div className="bg-teal-50 p-2 rounded border border-teal-100">
                <label className="block text-[10px] font-bold text-teal-600 mb-1">
                  Deslize Horizontal (X)
                </label>
                <input
                  type="number"
                  value={xEnd}
                  onChange={(e) => setXEnd(Number(e.target.value))}
                  className="w-full p-1 border rounded text-sm text-center border-teal-200 bg-white"
                />
              </div>
            </div>

            {/* Timing / Speed */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1">
                  Duração do Ciclo (Segundos)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0.1"
                    max="5"
                    step="0.1"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-sm font-bold bg-gray-100 px-2 py-1 rounded w-16 text-center">
                    {duration}s
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1">
                  Suavização (Easing)
                </label>
                <select
                  value={easing}
                  onChange={(e) => setEasing(e.target.value as any)}
                  className="w-full p-2 border rounded bg-white text-sm"
                >
                  <option value="linear">linear (mecânico)</option>
                  <option value="easeIn">easeIn (acelera)</option>
                  <option value="easeOut">easeOut (freia)</option>
                  <option value="easeInOut">easeInOut (suave - padrão)</option>
                  <option value="anticipate">
                    anticipate (puxada elástica)
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Code Output */}
      <div className="w-full max-w-6xl mt-8 bg-gray-900 rounded-xl p-6 shadow-2xl border border-gray-800 relative group">
        <h3 className="text-emerald-400 font-bold mb-2 flex items-center justify-between">
          <span>O Código Gerado para o ListingCard.tsx</span>
          <button
            onClick={() => {
              const code = `<div className="relative w-10 h-10 flex items-center justify-center${marginLeft !== 0 ? ` ml-[${marginLeft}rem]` : ""}">
    <motion.div
        animate={{ 
            rotate: [${rotStart}, ${rotPeak}, ${rotEnd}], 
            y: [${yStart}, ${yPeak}, ${yEnd}], 
            x: [${xStart}, ${xPeak}, ${xEnd}] 
        }}
        transition={{ duration: ${duration}, repeat: Infinity, ease: '${easing}' }}
        className="drop-shadow-xl absolute top-[${marginTop}px] left-[${leftPos}px]"
        style={{ originX: ${originX}, originY: ${originY}, scaleY: ${scaleY}, scaleX: ${scaleX}, fontSize: '${fontSize}px', lineHeight: 1 }}
    >
        ${emoji}
    </motion.div>
</div>`;
              navigator.clipboard.writeText(code);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className={`text-xs px-3 py-1.5 rounded font-bold transition-all ${copied ? "bg-emerald-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"}`}
          >
            {copied ? "Copiado! ✓" : "Copiar Código"}
          </button>
        </h3>
        <pre className="text-gray-300 text-sm overflow-x-auto bg-black p-4 rounded-lg font-mono">
          {`<div className="relative w-10 h-10 flex items-center justify-center`}
          {marginLeft !== 0 && ` ml-[${marginLeft}rem]`}{" "}
          {/* Nota mental: tailwind arbitary */}
          {`">`}
          {`    <motion.div`}
          {`        animate={{ `}
          {`            rotate: [${rotStart}, ${rotPeak}, ${rotEnd}], `}
          {`            y: [${yStart}, ${yPeak}, ${yEnd}], `}
          {`            x: [${xStart}, ${xPeak}, ${xEnd}] `}
          {`        }}`}
          {`        transition={{ duration: ${duration}, repeat: Infinity, ease: '${easing}' }}`}
          {`        className="drop-shadow-xl absolute top-[${marginTop}px] left-[${leftPos}px]"`}
          {`        style={{ originX: ${originX}, originY: ${originY}, scaleY: ${scaleY}, scaleX: ${scaleX}, fontSize: '${fontSize}px', lineHeight: 1 }}`}
          {`    >`}
          {`        ${emoji}`}
          {`    </motion.div>`}
          {`</div>`}
        </pre>
      </div>
    </div>
  );
};

export default App;
