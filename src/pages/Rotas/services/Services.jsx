import React, { useEffect } from "react";
import SectionArea from "../../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import TeamMember from "../../../components/cards/TeamMember";
import content from "../../../content/content";
import MotionDivDownToUp from "../../../components/animation/MotionDivDownToUp";

function Services({ colorMode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const servicesCards = Object.values(content.texts.services.cards);

  return (
    <div id={content.texts.features.cards.card1.rota}>
      <section className="relative w-full h-auto py-20 desktop2:py-32 aspect-video min-h-[300px] desktop2:aspect-[10/1] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={content.texts.services.img}
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

      <SectionArea paddingbot={false}>
        <SectionHeaderNovo
          colorMode={colorMode}
          miniTitle={content.texts.services.miniTag}
          title={
            <>
              {content.texts.services.FirstPart}{" "}
              {content.texts.services.Destaque}{" "}
              {content.texts.services.SecondPart}
            </>
          }
          subtitle={content.texts.services.subtitle}
          className="mb-16"
        />

        <MotionDivDownToUp>
          <div className="grid grid-cols-1 tablet2:grid-cols-2 desktop1:grid-cols-3 gap-8 w-[90%] mx-auto">
            {servicesCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100 min-h-[320px] h-fit flex flex-col"
              >
                {/* <div className="w-10 h-10 rounded-full bg-[#f8f8f8] flex items-center justify-center mb-6">
                  <span className="text-[#E85D04] text-xl">◦</span>
                </div> */}

                <h3 className="text-[28px] font-semibold text-[#1C4B3C] mb-4 leading-tight">
                  {card.title}
                </h3>

                <p className="text-[#5E7A70] mb-5 leading-relaxed">
                  {card.subtitle}
                </p>

                <div className="text-[#5E7A70] leading-relaxed text-sm">
                  {card.description}
                </div>
              </div>
            ))}
          </div>
        </MotionDivDownToUp>

        <MotionDivDownToUp>
          <div className="text-center max-w-[900px] mx-auto mt-0">
            <h2 className="text-3xl font-semibold text-[#1C4B3C] mb-6 pt-24">
              {content.texts.services.bottomTitle}
            </h2>

            <p className="text-[#5E7A70] leading-relaxed mb-24">
              {content.texts.services.bottomText}
            </p>
          </div>
        </MotionDivDownToUp>
      </SectionArea>
    </div>
  );
}

export default Services;
