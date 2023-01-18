import Navbar from "./Component/Navbar"
import './App.css';
import Slider from "./Component/Slider";
import Footer from "./Component/Footer";
import Data from "./Data.json";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider start={Data.banner.start} />
      <Footer/>
    </div>
  );
}

export default App;
