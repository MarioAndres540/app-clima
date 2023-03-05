import Aside from "./components/aside/Aside";
import MainContainer from "./layout/MainContainer";
import Footer from "./components/footer/Footer";
import WeatherCardsContainer from "./components/weatherCardsContainer/WeatherCardsContainer";

function App() {
  return (
    <>
      <Aside></Aside>
      <MainContainer>
        <WeatherCardsContainer />
      </MainContainer>
      <Footer></Footer>
    </>
    
  );
}

export default App;
