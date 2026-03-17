import { Outlet } from "react-router-dom";
import Navbar from "../../Institucional/Navbar";
import Footer from "../../Institucional/Footer";
import Contato from "./ConteudoContato";

function RouteContato({ colorMode }) {
  return (
    <>
      <Navbar />
      <Contato social={false} colorMode={colorMode} />
      <Footer
        phone={true}
        phone2={true}
        phone3={true}
        sociais={false}
        adress={true}
        expedient={true}
      />
    </>
  );
}

export default RouteContato;
