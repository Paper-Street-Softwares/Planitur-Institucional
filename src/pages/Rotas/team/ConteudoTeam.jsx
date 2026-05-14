import React, { useState, useEffect } from "react";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import SectionArea from "../../../components/sectionElements/SectionArea";
import "../../../styles/ScrollPanelDemo.css";
import TeamMember from "../../../components/cards/TeamMember";
import SectionWrapper from "../../../components/sectionElements/SectionWrapper";
import content from "../../../content/content";
import { Dialog } from "primereact/dialog";
import MotionDivDownToUp from "../../../components/animation/MotionDivDownToUp";
import { useLocation } from "react-router-dom";

function ConteudoTeam({ colorMode }) {
  const [visible, setVisible] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");
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

  const openDescription = (description) => {
    setSelectedDescription(description);
    setVisible(true);
  };

  return (
    <div>
      <section
        id="socios"
        className="relative w-full h-auto py-20 desktop2:py-32 aspect-video min-h-[300px] desktop2:aspect-[10/1] flex flex-col items-center justify-center overflow-hidden"
      >
        {" "}
        <div className="absolute inset-0 z-0">
          <img
            src={content.texts.team.imgFundo}
            alt="Cityscape"
            className="w-full h-full object-cover"
          />
        </div>
        <MotionDivDownToUp className="z-10 w-full flex justify-center absolute bottom-10">
          <div>
            <ScrollMouse />
          </div>
        </MotionDivDownToUp>
      </section>

      <SectionArea className={`bg-terciary`}>
        <SectionHeaderNovo
          miniTitle={content.texts.team.miniTag}
          title={content.texts.team.title}
          subtitle={content.texts.team.subtitle}
          className={`mb-2`}
          colorMode={colorMode}
        />

        <SectionWrapper>
          <div className="mx-auto md:px-0 my-10">
            <div className="grid tablet1:grid-cols-2 justify-center items-start flex-wrap gap-6 tablet2:gap-4 desktop1:gap-2">
              <MotionDivDownToUp>
                <TeamMember
                  img={content.texts.team.cards.card1.img}
                  name={content.texts.team.cards.card1.name}
                  role={
                    <p>
                      Sócia Administrativa e Coordenadora de Projetos |{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={content.texts.team.cards.card1.linkedIn}
                      >
                        LinkedIn
                      </a>
                    </p>
                  }
                  description={content.texts.team.cards.card1.description}
                  onOpenModal={openDescription}
                  modal={false}
                />
              </MotionDivDownToUp>

              <MotionDivDownToUp>
                <TeamMember
                  img={content.texts.team.cards.card2.img}
                  name={content.texts.team.cards.card2.name}
                  role={
                    <p>
                      Líder de Projetos |{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={content.texts.team.cards.card2.linkedIn}
                      >
                        LinkedIn
                      </a>
                    </p>
                  }
                  description={content.texts.team.cards.card2.description}
                  onOpenModal={openDescription}
                  modal={false}
                />
              </MotionDivDownToUp>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>

      <Dialog
        header="Saiba mais"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "30vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <p className="m-0">{selectedDescription}</p>
      </Dialog>
    </div>
  );
}

export default ConteudoTeam;
