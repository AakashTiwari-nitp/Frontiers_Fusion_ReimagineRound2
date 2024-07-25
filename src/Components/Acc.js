import React from "react";
import Accordion from "./Accordion";

import './Acc.css';


import illustration__woman_desktop from "../assets/illustration-woman-online-desktop.svg";
import illustration__woman_mobile from "../assets/illustration-woman-online-mobile.svg";

const questionsAnswers = [
  {
    question: "How can I activate my BSNL SIM card?",
    answer:
      "Visit a BSNL store with valid ID proof and a passport-size photo. Fill out the form, and the SIM will be activated within 24 hours.",
  },
  {
    question: "What are BSNL's prepaid and postpaid plans?",
    answer:
      "BSNL offers various prepaid and postpaid plans with different data, talk time, and validity options. Check the BSNL website or visit a store for details.",
  },
  {
    question: "How can I check my BSNL balance?",
    answer: `Dial *123# from your BSNL mobile to check your balance. Alternatively, you can use the BSNL mobile app or visit the website.`,
  },
  {
    question: "What if my BSNL SIM is lost or stolen?",
    answer: `Call 1503 to block the SIM and visit a BSNL store with ID proof for a replacement.`,
  },
  {
    question: "What should I do if I have network issues?",
    answer: `Restart your device, check for service outages, and ensure settings are correct. If problems persist, contact BSNL customer care for support and troubleshooting.`,
  },
  {
    question: "How can I port my number to BSNL?",
    answer: `Send 'PORT <your number>' to 1900, get the UPC, and visit a BSNL store with ID proof to complete the process.`,
  },
];

const Acc = () => {
  return (
    <div className="container">
      <div className="component">
        <div className="illustration">
         

          <img
            className="illustration__woman-desktop"
            src={illustration__woman_desktop}
            alt="illustration with woman"
          />
          <img
            className="illustration__woman-mobile"
            src={illustration__woman_mobile}
            alt="illustration with woman"
          />
        </div>
        <Accordion questionsAnswers={questionsAnswers} />
      </div>
     
    </div>
  );
};

export default Acc;
