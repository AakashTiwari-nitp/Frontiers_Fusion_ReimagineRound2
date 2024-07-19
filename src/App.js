import BSNLApp from "./Components/BSNLApp";
import Footer from "./Components/Footer";
import PayBills from "./Components/PayBills";
import RechargeSection from "./Components/RechargeSection";
import "./index.css";

function App() {
  return (
    <>
      <PayBills />
      <RechargeSection />
      <BSNLApp />
      <Footer />
    </>
  );
}

export default App;
