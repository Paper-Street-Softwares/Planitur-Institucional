import React, { useState, useEffect } from "react";
import { Menu, ChevronDown, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import content from "../../content/content";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOfficeOpen, setMobileOfficeOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [areasOpen, setAreasOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [closeTimer, setCloseTimer] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const sections = ["/", "office", "service", "team", "reconhecimento"];

  useEffect(() => {
    if (location.pathname !== "/" || mobileOpen) return;

    const observers = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          root: null,
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        },
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [location.pathname, mobileOpen]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(null);
    }
  }, [location.pathname]);

  const routeActive = () => {
    if (location.pathname === "/") return "home";
    if (location.pathname === "/contato") return "contato";
    if (location.pathname === "/about") return "office";
    if (location.pathname.startsWith("/features")) return "service";
    return null;
  };

  const currentRoute = routeActive();

  const handleOpen = (menu) => {
    if (closeTimer) {
      clearTimeout(closeTimer);
      setCloseTimer(null);
    }
    setOpenDropdown(menu);
  };

  const handleClose = () => {
    const timer = setTimeout(() => {
      setOpenDropdown(null);
      setAreasOpen(false);
    }, 300);

    setCloseTimer(timer);
  };

  const linkClass = (id) =>
    `relative transition duration-500 hover:text-primaryLight ${
      (location.pathname === "/" ? activeSection === id : currentRoute === id)
        ? "text-primaryLight"
        : "text-primaryDark"
    }`;

  const underline = (id) =>
    (location.pathname === "/"
      ? activeSection === id
      : currentRoute === id) && (
      <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-primaryLight" />
    );

  const linksFeatures = Object.values(content.texts.features.cards);

  return (
    <div
      className={`bg-neutral-50 fixed w-full z-50 py-2 ${
        mobileOpen ? "" : " border-b-2 border-[#C03D1A]"
      }`}
    >
      <div className="max-w-[1215px] w-[90%] mx-auto">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="w-[45%] phone3:max-w-[158px] tablet2:w-[20%] desktop1:w-[20%]">
            <Link to="/">
              <img
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                src={content.texts.navbar.logo.img}
                alt={content.texts.navbar.logo.alt}
                className="w-full"
              />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden uppercase desktop1:flex items-center gap-5 text-sm tracking-wide font-mainFont font-medium">
            <Link to="/" className={linkClass("home")}>
              INÍCIO
              {underline("home")}
            </Link>

            <span className="text-primaryLight">•</span>

            {/* PLANITUR */}
            <div
              className="relative"
              onMouseEnter={() => handleOpen("escritorio")}
              onMouseLeave={handleClose}
            >
              <button type="button" className={linkClass("office")}>
                A PLANITUR <ChevronDown size={16} className="inline ml-1" />
                {underline("office")}
              </button>

              <div
                className={`absolute top-full left-0 mt-4 bg-neutral-50 uppercase shadow-xl py-3 transition-all duration-300 ${
                  openDropdown === "escritorio"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <Link
                  to="/about#top"
                  className="block px-4 py-2 hover:text-primaryLight"
                >
                  Sobre a Empresa
                </Link>

                <Link
                  to="/about#equipe"
                  className="block px-4 py-2 hover:text-primaryLight"
                >
                  Nosso Compromisso
                </Link>

                <Link
                  to="/about#clientes"
                  className="block px-4 py-2 hover:text-primaryLight"
                >
                  CLIENTES E PARCEIROS
                </Link>

                {/* ÁREAS */}
                <div className="relative">
                  <button
                    type="button"
                    className="block px-4 py-2 hover:text-primaryLight w-full text-left"
                    onClick={(e) => {
                      e.stopPropagation();
                      setAreasOpen(!areasOpen);
                    }}
                  >
                    NOSSA ATUAÇÃO
                    <ChevronDown
                      size={16}
                      className={`inline ml-1 transition-transform ${
                        areasOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`ml-4 bg-neutral-50 normal-case overflow-hidden transition-all duration-300 ${
                      areasOpen
                        ? "max-h-[400px] opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {linksFeatures.map((item, index) => (
                      <Link
                        key={index}
                        to={item.rota}
                        className="block px-4 py-2 hover:text-primaryLight"
                        onClick={() => setAreasOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  {" "}
                  <Link
                    to="/team#socios"
                    className={`linkClass("team") block px-4 py-2 hover:text-primaryLight`}
                  >
                    SOBRE OS SÓCIOS
                  </Link>
                </div>
              </div>
            </div>

            <span className="text-primaryLight">•</span>

            <Link to="/services" className={linkClass("services")}>
              Nossos Serviços
            </Link>

            <span className="text-primaryLight">•</span>

            <Link to="/experience" className={linkClass("experience")}>
              Experiências e Resultados
            </Link>

            <span className="text-primaryLight">•</span>

            <Link to="/contato" className={linkClass("contato")}>
              CONTATO
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <section className="desktop1:hidden flex gap-4">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-primaryLight"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </section>
        </div>
      </div>
      {/* MOBILE MENU */}
      <div
        className={`xl:hidden bg-neutral-50 text-primaryDark px-6 text-sm space-y-4 font-medium 
  transition-all duration-300 ease-out transform origin-top
  ${
    mobileOpen
      ? "scale-y-100 opacity-100 translate-y-0 max-h-screen pt-4"
      : "scale-y-0 opacity-0 -translate-y-4 max-h-0 overflow-hidden"
  }`}
      >
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="uppercase block"
        >
          INÍCIO
        </Link>

        {/* ESCRITÓRIO */}
        <div>
          <button
            onClick={() => {
              setMobileOfficeOpen(!mobileOfficeOpen);
              setMobileAreasOpen(false);
            }}
            className="uppercase w-full flex items-center justify-between"
          >
            <span>A planitur</span>

            <ChevronDown
              size={16}
              className={`transition-transform ${
                mobileOfficeOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileOfficeOpen && (
            <div className="uppercase mt-2 ml-4 flex flex-col gap-2 ">
              <Link to="/about#top" onClick={() => setMobileOpen(false)}>
                Sobre a Empresa
              </Link>

              <Link to="/about#equipe" onClick={() => setMobileOpen(false)}>
                Nosso Compromisso
              </Link>

              <Link to="/about#clientes" className="uppercase ">
                CLIENTES E PARCEIROS
              </Link>

              {/* ÁREAS */}
              <div>
                <button
                  onClick={() => {
                    setMobileAreasOpen(!mobileAreasOpen);
                  }}
                  className="uppercase w-full flex items-center justify-between"
                >
                  <span>NOSSA ATUAÇÃO</span>

                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      mobileAreasOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`ml-4 flex flex-col normal-case overflow-hidden transition-all duration-300 ${
                    mobileAreasOpen ? "max-h-[500px] mt-2" : "max-h-0"
                  }`}
                >
                  {linksFeatures.map((item, index) => (
                    <Link
                      key={index}
                      to={item.rota}
                      onClick={() => setMobileOpen(false)}
                      className="uppercase py-2  flex items-center gap-2"
                    >
                      <span>{item.icon}</span> {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/team#socios">SOBRE OS SÓCIOS</Link>
            </div>
          )}
        </div>

        <div>
          {" "}
          <Link to="/services" className={linkClass("services")}>
            Nossos Serviços
          </Link>
        </div>

        <div>
          {" "}
          <Link to="/experience" className={linkClass("experience")}>
            Experiências e Resultados
          </Link>
        </div>

        <div>
          <Link
            to="/contato"
            onClick={() => setMobileOpen(false)}
            className="pb-4"
          >
            CONTATO
          </Link>
        </div>
      </div>{" "}
    </div>
  );
}

export default Navbar;
