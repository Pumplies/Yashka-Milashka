import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    audioRef.current = new Audio("/fon.mp3");
    const audio = audioRef.current;
    audio.volume = 0.03;
    audio.loop = true;

    const playAudio = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      console.log("Свайп/нажатие обнаружено, запускаю музыку...");

      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Ошибка при воспроизведении аудио:", error);
        startedRef.current = false;
      });
    };

    document.addEventListener("pointerdown", playAudio, { once: true });

    return () => {
      document.removeEventListener("pointerdown", playAudio);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.error("Ошибка при воспроизведении:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-4 right-4 p-3 bg-[#B3B792] text-white rounded-full shadow-lg"
    >
      {isPlaying ? "🔇" : "🎵"}
    </button>
  );
}
