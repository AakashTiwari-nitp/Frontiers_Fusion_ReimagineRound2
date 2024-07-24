import BSNLApp from "./Components/BSNLApp";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import PayBills from "./Components/PayBills";
import "./index.css";
import OfferSection from "./Components/OfferSection";
import Acc from "./Components/Acc";

function App() {
  return (
    <div className="bg-[#111] w-screen overflow-hidden">
      <HeroSection />
      <PayBills />
      <OfferSection />
      <BSNLApp />
      <Acc/>
      <Footer />
    </div>
  );
}

export default App;
