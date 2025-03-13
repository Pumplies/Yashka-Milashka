import { useState, useEffect } from "react";

export default function CalendarCountdown() {
  const targetDate = new Date("2025-04-06T19:30:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col px-5 items-center p-4">
      {/* Календарь */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-5">
          Апрель 2025
        </h2>
        <div className="grid grid-cols-7 gap-2 text-gray-700 text-lg">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`w-12 h-12 flex items-center justify-center rounded-full text-xl ${
                i + 1 === 6 ? "bg-[#B3B792] text-white font-bold" : "bg-white"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Таймер */}
      <h2 className="text-3xl font-semibold text-gray-700 mb-5">Осталось:</h2>
      <div className="flex space-x-4 text-gray-700 text-lg">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-md text-2xl font-bold">
              {value}
            </div>
            <p className="mt-1 text-sm uppercase">{unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function getTimeRemaining(target) {
  const now = new Date().getTime();
  const diff = target - now;
  return {
    Дней: Math.floor(diff / (1000 * 60 * 60 * 24)),
    Часов: Math.floor((diff / (1000 * 60 * 60)) % 24),
    Минут: Math.floor((diff / (1000 * 60)) % 60),
    Секунд: Math.floor((diff / 1000) % 60),
  };
}
