import { Outlet } from "react-router-dom";
import Navbar from "../../Institucional/Navbar";
import Footer from "../../Institucional/Footer";
import Services from "./Services";

function RouteServices({ colorMode }) {
  return (
    <>
      <Navbar />
      <Services social={false} colorMode={colorMode} />
      <Footer
        phone={true}
        phone2={true}
        sociais={true}
        expedient={true}
        className={`bg-white`}
      />
    </>
  );
}

export default RouteServices;
