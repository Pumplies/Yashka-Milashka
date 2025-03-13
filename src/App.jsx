
import FirstComponent from './components/FirstComponent'
import CalendarCountdown from './components/SecondComponent'
import MusicPlayer from './components/MusicComponent'
import Agreement from './components/AgreementComponent'
import ThirdComponent from './components/ThirdComponent'
import GoogleMapComponent from './components/Map'
import Four from './components/Four'







function App() {
  return (
    <div className="bg-[#E5E0D8]">
      <FirstComponent/>
      <CalendarCountdown/>
      <ThirdComponent/>
      <GoogleMapComponent/>
      <Four/>
      <Agreement/>
      <MusicPlayer/>
    </div>
  )
}

export default App
