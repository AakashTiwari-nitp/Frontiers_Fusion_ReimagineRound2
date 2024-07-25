import React, { useState, useEffect, Suspense } from 'react';

import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import PayBills from "./Components/PayBills";
import "./index.css";
import OfferSection from "./Components/OfferSection";
import Acc from "./Components/Acc";
import { lazy } from "react";
import Preloader from './Components/Preloader';

const Home = lazy(() => import("./Pages/Home"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching delay
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 4000)); 
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className="bg-[#111] w-screen overflow-hidden">
          <HeroSection />
          <PayBills />
          <OfferSection />  
          
          <Suspense fallback={<Preloader />}>
            <Home />
          </Suspense>
          <Acc />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
