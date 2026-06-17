import React from "react";
import Navbar from "../../Institucional/Navbar";
import Footer from "../../Institucional/Footer";
import ConteudoTeam from "./ConteudoTeam";

function RouteTeam({ colorMode }) {
  return (
    <div>
      <Navbar />
      <ConteudoTeam colorMode={colorMode} parceiros={false} />
      <Footer phone={true} phone2={true} sociais={true} expedient={true} />
    </div>
  );
}

export default RouteTeam;
