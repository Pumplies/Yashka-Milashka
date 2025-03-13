import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 43.243260420927676, // Москва, изменить при необходимости
  lng: 76.9593414981243,
};

// Опции карты для отключения UI
const mapOptions = {
  disableDefaultUI: true, // Убирает все стандартные элементы
  zoomControl: false, // Отключает кнопки увеличения/уменьшения
  mapTypeControl: false, // Убирает переключение типа карты
  streetViewControl: false, // Убирает "человечка" панорам
  fullscreenControl: false, // Отключает кнопку на весь экран
};

export default function GoogleMapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBrruVLAgeasXrKtHCO596Fd8_4IjScAbI", // Замени на свой ключ
  });

  if (loadError) return <p>Ошибка загрузки карты</p>;
  if (!isLoaded) return <p>Загрузка карты...</p>;

  return (
    <div className="flex justify-center">
      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={15} 
        center={center} 
        options={mapOptions} // Передаем кастомные опции
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
