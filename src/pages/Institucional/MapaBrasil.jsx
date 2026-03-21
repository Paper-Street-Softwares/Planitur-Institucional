import React, { useEffect } from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";
import content from "../../content/content";
import AboutFading from "../../components/sectionElements/AboutFading";
import { ArrowRight } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
import MotionDivDownToUp from "../../components/animation/MotionDivDownToUp";
import imgBrasilMapa from "../../assets/imgs/home/brasilmap.png";

export default function MapaBrasil({ colorMode }) {
  return (
    <div>
      <SectionArea>
        <section class="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-12 bg-white">
          <div class="w-full md:w-1/2 pl-6 border-l border-gray-300">
            <SectionHeaderNovo
              colorMode={colorMode}
              miniTitle="SUSTENTABILIDADE"
              title="Projetos com impacto social e
          geradores de desenvolvimento
          econômico sustentável"
              type="article"
            />
            <p class="font-secondFont text-paragraph4 text-paragraphLight overflow-hidden text-corOutrosTextosPreto mb-10">
              A premissa de que o turismo, quando bem planejado, pode
              transformar realidades é o que nos move. Partimos da força dos
              territórios, das pessoas e dos saberes locais para construir
              soluções colaborativas e sustentáveis.
            </p>

            <a
              href="#"
              class="inline-block border-2 border-orange-500 text-orange-500 font-semibold uppercase text-sm py-3 px-8 hover:bg-orange-500 hover:text-white transition-colors duration-300"
            >
              Nossos projetos
            </a>
          </div>

          <div class="w-full md:w-1/2 flex justify-end">
            <img
              src={imgBrasilMapa}
              alt="Mapa de conexões globais"
              class="w-full h-auto object-cover max-w-2xl"
            />
          </div>
        </section>
      </SectionArea>
    </div>
  );
}
