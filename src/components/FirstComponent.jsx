export default function FirstComponent() {
    return (
      <div
        className="relative w-full h-[925px] bg-cover bg-center"
        style={{ backgroundImage: "url('/fon.jpg')" }}
      >
        {/* Затемняющий слой */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Контент поверх затемнённого фона */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-5xl font-bold">У меня есть кое-что для <span className="italic">тебя</span>❤️</h1>
          <p className="text-lg mt-2">Ты готова к сюрпризу?</p>
        </div>
      </div>
    );
  }
  