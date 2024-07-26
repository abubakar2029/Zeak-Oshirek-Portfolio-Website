import { Navbar } from "./Components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="relative min-h-screen	">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
