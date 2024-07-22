import BSNLApp from "./Components/BSNLApp";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import PayBills from "./Components/PayBills";
import RechargeSection from "./Components/RechargeSection";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css";
import OfferSection from "./Components/OfferSection";

function App() {
  return (
    <div className="bg-[#111] overflow-hidden">
      <HeroSection />
      <PayBills />
      <RechargeSection />
      <OfferSection />
      <BSNLApp />
      <Footer />
    </div>
  );
}

export default App;
