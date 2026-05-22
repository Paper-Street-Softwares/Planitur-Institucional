import React from "react";
import SectionArea from "../../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import TeamMember from "../../../components/cards/TeamMember";
import content from "../../../content/content";
import MotionDivDownToUp from "../../../components/animation/MotionDivDownToUp";

function Features3({ colorMode }) {
  return (
    <div id={content.texts.features.cards.card3.rota}>
      <section className="relative w-full h-auto py-20 desktop2:py-32 aspect-video min-h-[500px] desktop2:aspect-[10/1] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={content.texts.features.cards.card3.imgFeatures3}
            alt="Cityscape"
            className="w-full h-full object-cover object-center"
          />
          {/* <div className="absolute inset-0 bg-[#0f2a3a]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a3a] via-transparent to-transparent" /> */}
        </div>

        <MotionDivDownToUp className="z-10 w-full flex justify-center absolute bottom-6">
          <div>
            <ScrollMouse />
          </div>
        </MotionDivDownToUp>
      </section>

      <SectionArea paddingbot={false}>
        <SectionHeaderNovo
          colorMode={colorMode}
          miniTitle={content.texts.features.cards.card3.minitag}
          title={content.texts.features.cards.card3.title}
          subtitle={content.texts.features.cards.card3.subtitle}
          className="mb-4"
        />

        <MotionDivDownToUp>
          <div className="w-full">
            <p className="text-corOutrosTextosPreto/80 mx-auto w-[90%] text-justify max-w-[800px] mb-24 font-mainFont">
              {content.texts.features.cards.card3.description}
            </p>
          </div>
        </MotionDivDownToUp>
      </SectionArea>
    </div>
  );
}

export default Features3;
