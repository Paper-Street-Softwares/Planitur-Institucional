import { Outlet } from "react-router-dom";
import Navbar from "../../Institucional/Navbar";
import Footer from "../../Institucional/Footer";

function RoutesFeatures({ colorMode }) {
  return (
    <>
      <Navbar />
      <Outlet />
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

export default RoutesFeatures;
