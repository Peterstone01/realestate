import React from "react";
import { DarkModeProvider } from "./component/DarkModeContext";
import Header from "./component/Header";
import Hero from "./section/Hero";
import About from "./section/About";
import PopularArea from "./section/PopularArea";
import Properties from "./section/Properties";
import Services from "./section/Services";
import Clients from "./section/Clients";
import Contacts from "./section/Contacts";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularArea />
        <Properties />
        <Services />
        <Clients />
        <Contacts />
        <Footer />
      </DarkModeProvider>
    </>
  );
};

export default App;
