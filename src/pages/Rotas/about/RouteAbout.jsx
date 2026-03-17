import React from "react";
import Navbar from "../../Institucional/Navbar";
import ConteudoAbout from "./ConteudoAbout";
import Footer from "../../Institucional/Footer";
import SocialMediaTemplate from "../../../components/sections/SocialMediaTemplate";

function RouteAbout({ colorMode }) {
  return (
    <div>
      <Navbar />
      <ConteudoAbout colorMode={colorMode} />
      <SocialMediaTemplate />
      <Footer
        phone={true}
        phone2={true}
        phone3={true}
        sociais={false}
        adress={true}
        expedient={true}
      />
    </div>
  );
}

export default RouteAbout;
