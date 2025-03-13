import { useState } from "react";
import Confetti from "react-confetti";

export default function Agreement() {
  const [agreed, setAgreed] = useState(false);
  const [noPosition, setNoPosition] = useState({ transform: "translate(0, 0)" });

  const handleYesClick = () => {
    setAgreed(true);
  };

  const handleNoHover = () => {
    const newX = (Math.random() - 0.5) * 200; // Диапазон смещения по X
    const newY = (Math.random() - 0.5) * 100; // Диапазон смещения по Y
    setNoPosition({ transform: `translate(${newX}px, ${newY}px)` });
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-[#E5E0D8] text-center">
      {agreed && <Confetti numberOfPieces={100} recycle={false} />}
      
      {!agreed ? (
        <>
          <h1 className="text-4xl font-bold mb-6">Ты согласна? ❤️</h1>
          <div className="relative flex gap-6">
            <button
              onClick={handleYesClick}
              className="px-6 py-3 bg-[#809671] text-white rounded-xl text-xl font-semibold shadow-lg transition-transform transform hover:scale-105"
            >
              Да
            </button>
            <button
              onMouseEnter={handleNoHover}
              style={noPosition}
              className="px-6 py-3 bg-[#D2AB80] text-white rounded-xl text-xl font-semibold shadow-lg relative transition-all duration-300 ease-out"
            >
              Нет
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-[#809671] mb-4 animate-bounce">
            Ураааа! Я так рад! 🎉
          </h1>
          <img
            src="/jumping-cat.gif"
            alt="Танцующий котик"
            className="w-64 h-64"
          />
        </div>
      )}
    </div>
  );
}
