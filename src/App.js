import BSNLApp from "./Components/BSNLApp";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import PayBills from "./Components/PayBills";
import RechargeSection from "./Components/RechargeSection";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PayBills />
      <RechargeSection />
      <BSNLApp />
      <Footer />
    </>
  );
}

export default App;
