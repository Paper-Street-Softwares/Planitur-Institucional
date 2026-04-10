import React, { useEffect, useRef, useState } from "react";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import SectionArea from "../../../components/sectionElements/SectionArea";
import aboutImgRota from "../../../assets/imgs/about/rotaAbout/aboutRota.webp";
import "../../../styles/ScrollPanelDemo.css";
import content from "../../../content/content";
import SocialMedia from "../../../components/sections/SocialMediaTemplate";
import MotionDivDownToUp from "../../../components/animation/MotionDivDownToUp";
import { useLocation } from "react-router-dom";
import { Carousel } from "primereact/carousel";
import SectionWrapper from "../../../components/sectionElements/SectionWrapper";

function ConteudoAbout({ colorMode, social }) {
  const baseList = Object.values(content.texts.about.logosAbout);
  const imageslList = [...baseList, ...baseList, ...baseList];
  const [page, setPage] = useState(0);
  const total = imageslList.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [total]);

  const instituicoesAtendidas = Object.values(
    content.texts.team.instituicoesAtendidas,
  );
  const parceiros = Object.values(content.texts.team.parceirosLogo);
  const clientes = Object.values(content.texts.team.clientesLogo);

  const imageTemplate = (item) => {
    return (
      <div className="carousel-item flex justify-center p-3">
        <img
          src={item.img}
          alt={item.alt}
          className="carousel-img max-w-full object-cover"
        />
      </div>
    );
  };
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        const isMobile = window.innerWidth < 768;

        const offset = isMobile ? 90 : 100;

        const y =
          element.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }
  }, [location]);
  const boxRef = useRef(null);

  useEffect(() => {
    const el = $(boxRef.current);
    const dot = $(".scroll-dot");
    // window.scrollTo(0, 0);

    el.css({
      height: "435px",
      overflowY: "auto",
    });

    el.on("scroll", function () {
      const scrollTop = el.scrollTop();
      const scrollHeight = el[0].scrollHeight - el.outerHeight();
      const percent = scrollTop / scrollHeight;

      const indicatorHeight = $(".scroll-indicator").height() - dot.height();
      const topPos = percent * indicatorHeight;

      dot.css("top", `${topPos}px`);
    });

    return () => {
      el.off("scroll");
    };
  }, []);

  return (
    <div id="top">
      <section className="relative w-full h-auto py-20 desktop2:py-32 aspect-video min-h-[300px] desktop2:aspect-[10/1] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={content.texts.about.imagemBg}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>

        <MotionDivDownToUp className="z-10 w-full flex justify-center absolute bottom-6">
          <div>
            <ScrollMouse />
          </div>
        </MotionDivDownToUp>
      </section>

      <SectionArea className={`bg-white`} paddingbot={true}>
        <div className="flex flex-col justify-center mx-auto gap-20 max-w-[1215px] ">
          <div className="relative w-[90%] flex justify-center flex-col gap-14">
            {/* <MotionDivDownToUp className={`w-full`}>
              <img
                src={aboutImgRota}
                alt="imagem representativa do Consultório"
                className="w-[90%] tablet2:w-[350px] desktop2:w-[400px] z-10 rounded-md mx-auto"
              />
            </MotionDivDownToUp> */}

            <MotionDivDownToUp className={`w-full`}>
              <div className="relative w-full text-justify max-w-[800px] mx-auto">
                {/* Área com scroll */}
                {/* <div ref={boxRef} className="custom-native-scroll flex-1"> */}
                {/* </div> */}
                <div className="text-justify font-light font-mainFont w-full">
                  <SectionHeaderNovo
                    miniTitle={content.texts.about.miniTag}
                    subtitle={content.texts.about.subtitle}
                    title={content.texts.about.FirstPart}
                    colorMode={colorMode}
                    type="article"
                    className={`mb-6`}
                  />
                  <span className="text-black/70 w-full">
                    {content.texts.about.paragraph}
                    <br />
                    <div className="grid grid-cols-1 tablet1:grid-cols-2 tablet2:grid-cols-3 m-auto gap-12 tablet1:gap-x-6 p-5 relative">
                      {/* CARD 01 - MISSÃO */}
                      <div className="relative mx-auto flex w-fit">
                        {/* Moldura de fundo (Verde) */}
                        <div className="relative bg-white phone3:max-w-[300px] mx-auto p-4 shadow-xl h-full flex flex-col items-center text-center">
                          <div className="text-lime-500 mb-6">
                            <svg
                              className="w-12 h-12"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                          </div>
                          <h3 className="text-lime-500 font-black text-xl tracking-widest mb-4">
                            MISSÃO
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            Transformar territórios por meio do planejamento, da
                            gestão e da formação em turismo e lazer, promovendo
                            sustentabilidade e a valorização das identidades
                            locais.
                          </p>
                        </div>
                      </div>

                      {/* CARD 02 - VISÃO */}
                      <div className="relative mx-auto group w-fit">
                        <div className="relative bg-white phone3:max-w-[300px] mx-auto p-4 shadow-xl h-full flex flex-col items-center text-center">
                          <div className="text-teal-500 mb-6">
                            <svg
                              className="w-12 h-12"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                              />
                            </svg>
                          </div>
                          <h3 className="text-teal-600 font-black text-xl tracking-widest mb-4">
                            VISÃO
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            Ser referência no planejamento e na implementação de
                            iniciativas socioambientais em turismo, lazer e
                            conservação da natureza.
                          </p>
                        </div>
                      </div>

                      {/* CARD 03 - VALORES */}
                      <div className="relative mx-auto group w-fit">
                        <div className="relative bg-white phone3:max-w-[300px] mx-auto p-4 shadow-xl h-full flex flex-col items-center text-center">
                          <div className="text-blue-600 mb-6">
                            <svg
                              className="w-12 h-12"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <h3 className="text-blue-700 font-black text-xl tracking-widest mb-4">
                            VALORES
                          </h3>
                          <ul className="text-gray-500 text-xs leading-tight space-y-2 items-center text-center">
                            <li>1. Sustentabilidade</li>
                            <li>2. Ética e compromisso socioambiental</li>
                            <li>3. Valorização dos saberes locais</li>
                            <li>
                              4. Excelência técnica com sensibilidade humana
                            </li>
                            <li>5. Colaboração em rede</li>
                            <li>6. Inovação</li>
                            <li>7. Valorização do patrimônio</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      id="equipe"
                      className="flex mt-6 flex-wrap gap-4 tablet1:gap-4 tablet2:gap-1"
                    >
                      <span className="font-bold text-lg">
                        Nosso compromisso:
                      </span>{" "}
                      <br />
                      <p className="font-secondFont mb-4 text-start">
                        Desenvolvemos projetos socioambientais alinhados a
                        agendas globais de sustentabilidade, integrando
                        conservação ambiental, inclusão social e desenvolvimento
                        territorial, com foco em impacto positivo e soluções de
                        longo prazo.
                      </p>
                      <div className="w-full mx-auto overflow-hidden">
                        <Carousel
                          value={imageslList}
                          numVisible={3}
                          numScroll={1}
                          page={page}
                          circular
                          showIndicators={false}
                          itemTemplate={imageTemplate}
                        />
                      </div>
                    </div>
                    <br />
                    <br />
                    <h1 className="font-secondFont text-lg font-bold">
                      Nossa atuação:
                    </h1>
                    <br />
                  </span>
                </div>

                {/* Linha + bolinha */}
                {/* <div className="scroll-indicator">
                  <span className="scroll-dot" />
                </div> */}
              </div>
              <div className="w-full">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1Dww8t0DOx1bY-AyFUx5MU6tw5TsxcCA&ehbc=2E312F"
                  width=""
                  height="480"
                  className="w-full"
                ></iframe>
              </div>{" "}
            </MotionDivDownToUp>
          </div>

          <div id="clientes" className="w-full">
            <SectionHeaderNovo
              colorMode={colorMode}
              title={content.texts.team.sectionTitle}
            />

            <div className="flex flex-col gap-14">
              {/* Clientes */}
              <div className="mx-auto">
                <SectionHeaderNovo
                  title={content.texts.team.titleClientes}
                  colorMode={colorMode}
                  className={`mb-4`}
                />

                <div className="flex flex-wrap justify-center items-center gap-4">
                  {clientes.map((item, index) => (
                    <div key={index} className="">
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="max-w-[120px] rounded-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Parceiros */}
              <div className="mx-auto">
                <SectionHeaderNovo
                  title={content.texts.team.titleParceiros}
                  colorMode={colorMode}
                  className={`mb-4`}
                />

                <div className="flex flex-wrap justify-center items-center gap-4">
                  {parceiros.map((item, index) => (
                    <div key={index} className="">
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="max-w-[120px] rounded-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Instituições */}
              <div className="mx-auto">
                <SectionHeaderNovo
                  title={content.texts.team.titleInstituicoes}
                  colorMode={colorMode}
                  className={`mb-4`}
                />

                <div className="flex flex-wrap justify-center gap-4 tablet2:grid tablet2:grid-cols-4 desktop2:grid-cols-8">
                  {instituicoesAtendidas.map((item, index) => (
                    <div key={index} className="">
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="max-w-[120px] rounded-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionArea>
    </div>
  );
}

export default ConteudoAbout;
