import React, { useEffect, useRef } from "react";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import SectionArea from "../../../components/sectionElements/SectionArea";
import aboutImgRota from "../../../assets/imgs/about/rotaAbout/aboutRota.webp";
import "../../../styles/ScrollPanelDemo.css";
import content from "../../../content/content";
import SocialMedia from "../../../components/sections/SocialMediaTemplate";
import MotionDivDownToUp from "../../../components/animation/MotionDivDownToUp";

function ConteudoAbout({ colorMode, social }) {
  const boxRef = useRef(null);

  useEffect(() => {
    const el = $(boxRef.current);
    const dot = $(".scroll-dot");
    window.scrollTo(0, 0);

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

  const imageslList = Object.values(content.texts.about.logosAbout);

  return (
    <div>
      <section
        id="home"
        className="font-mainFont relative min-h-[250px] phone3:h-[40vh] tablet2:h-[50vh] desktop1:min-h-[50vh] desktop3:h-[70vh] flex flex-col items-center justify-center overflow-hidden w-full"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={content.texts.about.imagemBg}
            alt="Cityscape"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <MotionDivDownToUp className="z-10 w-full flex justify-center absolute bottom-6">
          <div>
            <ScrollMouse />
          </div>
        </MotionDivDownToUp>
      </section>

      <SectionArea className={`bg-white`} paddingbot={true}>
        <div className="flex flex-col gap-20">
          <div className="relative w-[90%] max-w-7xl mx-auto flex flex-col gap-14">
            {/* <MotionDivDownToUp className={`w-full`}>
              <img
                src={aboutImgRota}
                alt="imagem representativa do Consultório"
                className="w-[90%] tablet2:w-[350px] desktop2:w-[400px] z-10 rounded-md mx-auto"
              />
            </MotionDivDownToUp> */}

            <MotionDivDownToUp className={`w-full`}>
              <div className="relative w-full text-justify max-w-[800px]">
                {/* Área com scroll */}
                {/* <div ref={boxRef} className="custom-native-scroll flex-1"> */}

                {/* </div> */}
                <p className="text-justify font-light font-mainFont w-full">
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
                    <div className="flex flex-wrap gap-4 tablet1:gap-4 tablet2:gap-1">
                      {imageslList.map((item, index) => (
                        <div key={index} className="flex justify-center">
                          <img
                            src={item.img}
                            alt={item.alt}
                            className="max-w-[130px]"
                          />
                        </div>
                      ))}
                    </div>
                    <br />
                    <br />
                    <h1 className="font-secondFont font-bold">
                      Nossa atuação:
                    </h1>
                    <br />
                    <div>
                      <iframe
                        src="https://www.google.com/maps/d/embed?mid=1Dww8t0DOx1bY-AyFUx5MU6tw5TsxcCA&ehbc=2E312F"
                        width=""
                        height="480"
                        className="w-[95%]"
                      ></iframe>
                    </div>{" "}
                  </span>
                </p>

                {/* Linha + bolinha */}
                {/* <div className="scroll-indicator">
                  <span className="scroll-dot" />
                </div> */}
              </div>
            </MotionDivDownToUp>
          </div>
          {social && <SocialMedia />}
        </div>
      </SectionArea>
    </div>
  );
}

export default ConteudoAbout;
