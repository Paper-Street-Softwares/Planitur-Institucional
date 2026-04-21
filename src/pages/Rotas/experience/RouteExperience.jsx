import { Outlet } from "react-router-dom";
import Navbar from "../../Institucional/Navbar";
import Footer from "../../Institucional/Footer";
import Experiences from "./Experience";

function RouteExperience({ colorMode }) {
  return (
    <>
      <Navbar />
      <Experiences social={false} colorMode={colorMode} />
      <Footer
        phone={true}
        phone2={true}
        sociais={false}
        expedient={true}
        className={`bg-white`}
      />
    </>
  );
}

export default RouteExperience;
