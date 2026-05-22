import React, { useEffect, useState } from "react";
import SectionArea from "../../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import content from "../../../content/content";
import MotionDivDownToUp from "../../../components/animation/MotionDivDownToUp";
import imgExperience from "../../../assets/imgs/experience/experienceImg.webp";
import img1 from "../../../assets/imgs/experience/img1.webp";
import img2 from "../../../assets/imgs/experience/img2.webp";
import img3 from "../../../assets/imgs/experience/img3.webp";

function Experiences({ colorMode }) {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experienceCards = [
    {
      id: 1,
      image: img1,
      title: "Eixo 1",
      subtitle: "Técnico-Consultivo e Planejamento",
      shortDescription:
        "Desenvolvemos soluções estratégicas para apoiar a tomada de decisões, estruturar iniciativas e fortalecer territórios. Nesse eixo, realizamos diagnósticos, planejamento turístico e territorial, estruturação de políticas públicas, entre outras ações.",
      modalContent: (
        <>
          <h3 className="text-2xl font-semibold text-[#1C4B3C] mb-6">
            EIXO 1 — Técnico-Consultivo e Planejamento
          </h3>

          <div className="space-y-8 text-[#5E7A70]">
            <div>
              <h4 className="font-semibold text-[#1C4B3C] mb-3">
                🔹 Implementação de trilhas de curta, média e longa distância
              </h4>

              <p className="font-medium text-[#1C4B3C] mb-2">Atuação:</p>

              <ul className="pl-5 space-y-2 list-disc">
                <li>
                  Mapeamento e definição de rotas para caminhada, ciclismo,
                  trecho aquático e cavalgada
                </li>
                <li>
                  Inventário e análise do potencial e vocação turística,
                  incluindo atrativos naturais e culturais
                </li>
                <li>
                  Classificação de trilhas com base em normas técnicas e padrões
                  nacionais e internacionais (ABNT/ISO)
                </li>
                <li>
                  Planejamento de sinalização, infraestrutura e pontos de apoio
                  ao visitante
                </li>
                <li>
                  Integração de trilhas com serviços, comunidades e experiências
                  locais culminando em roteiros de visitação
                </li>
                <li>
                  Estruturação de produtos turísticos associados às trilhas
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#1C4B3C] mb-3">
                🔹 Planejamento turístico e desenvolvimento territorial
              </h4>

              <p className="font-medium text-[#1C4B3C] mb-2">Atuação:</p>

              <ul className="pl-5 space-y-2 list-disc">
                <li>Elaboração de diagnósticos turísticos e socioambientais</li>
                <li>
                  Mapeamento de atrativos, oportunidades e dinâmicas
                  territoriais
                </li>
                <li>
                  Análise de potencialidades, vocações e fragilidades para o
                  desenvolvimento do turismo
                </li>
                <li>
                  Estruturação de roteiros e experiências baseadas nas
                  potencialidades e vocações locais
                </li>
                <li>
                  Planejamento integrado do turismo em territórios com múltiplos
                  atores
                </li>
                <li>
                  Planejamento do turismo em comunidades e povos tradicionais e
                  originários
                </li>
                <li>
                  Desenvolvimento de modelos de viabilidade e planos de negócios
                  para iniciativas turísticas
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#1C4B3C] mb-3">
                🔹 Governança e organização territorial
              </h4>

              <p className="font-medium text-[#1C4B3C] mb-2">Atuação:</p>

              <ul className="pl-5 space-y-2 list-disc">
                <li>
                  Estruturação de modelos de governança para iniciativas
                  públicas e privadas, redes e coletivos locais
                </li>
                <li>
                  Mapeamento e articulação de atores públicos, privados e
                  comunitários
                </li>
                <li>
                  Condução de processos participativos com diferentes perfis de
                  stakeholders (partes interessadas)
                </li>
                <li>
                  Realização de entrevistas e escutas qualificadas com dezenas
                  de atores estratégicos
                </li>
                <li>
                  Apoio à definição de instâncias, fluxos de gestão e diretrizes
                  de atuação
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#1C4B3C] mb-3">
                🔹 Estruturação de projetos e captação de recursos
              </h4>

              <p className="font-medium text-[#1C4B3C] mb-2">Atuação:</p>

              <ul className="pl-5 space-y-2 list-disc">
                <li>
                  Escrita de projetos técnicos e propostas para editais e
                  financiamentos
                </li>
                <li>
                  Apoio à mobilização de equipes e articulação institucional
                </li>
                <li>Elaboração de apresentações técnicas e institucionais</li>
                <li>
                  Contribuição para a captação de recursos em projetos
                  socioambientais de pequeno, médio e grande porte
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#1C4B3C] mb-3">
                🔹 Planejamento do uso público em áreas naturais
              </h4>

              <p className="font-medium text-[#1C4B3C] mb-2">Atuação:</p>

              <ul className="pl-5 space-y-2 list-disc">
                <li>
                  Caracterização do uso público e das atividades turísticas em
                  áreas naturais
                </li>
                <li>
                  Levantamento e análise de atrativos, serviços e infraestrutura
                  existente
                </li>
                <li>
                  Integração entre conservação da biodiversidade e visitação
                </li>
                <li>
                  Identificação de oportunidades para uso sustentável do
                  território
                </li>
                <li>
                  Produção de subsídios técnicos para gestão e criação de áreas
                  protegidas
                </li>
                <li>Aplicação de ferramentas como ROVUC</li>
                <li>Elaboração de Planos de Uso Público</li>
                <li>
                  Estudos de uso público para criação de unidades de conservação
                  e elaboração de planos de manejo
                </li>
              </ul>
            </div>
          </div>
        </>
      ),
    },

    {
      id: 2,
      image: img2,
      title: "Eixo 2",
      subtitle: "Formativo e Educacional",
      shortDescription:
        "Promovemos o desenvolvimento de competências e a qualificação de pessoas, gestores, equipes, instituições e comunidades, por meio de cursos, oficinas e processos formativos.",
      modalContent: (
        <>
          <h3 className="text-2xl font-semibold text-[#1C4B3C] mb-6">
            EIXO 2 — Formativo e Educacional
          </h3>

          <div className="space-y-8 text-[#5E7A70]">
            <div>
              <h4 className="font-semibold text-[#1C4B3C] mb-3">
                🔹 Capacitações e formação técnica
              </h4>

              <p className="font-medium text-[#1C4B3C] mb-2">Atuação:</p>

              <ul className="pl-5 space-y-2 list-disc">
                <li>
                  Realização de cursos, oficinas e treinamentos em turismo, em
                  temas de precificação, técnicas de bem receber, agentes
                  econômicos, construção de trilhas e vocação local
                </li>
                <li>Formação de condutores de visitantes</li>
                <li>
                  Capacitação de gestores públicos, equipes técnicas e
                  comunidades
                </li>
                <li>
                  Desenvolvimento de conteúdos formativos adaptados às
                  realidades territoriais
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#1C4B3C] mb-3">
                🔹 Facilitação de processos participativos
              </h4>

              <p className="font-medium text-[#1C4B3C] mb-2">Atuação:</p>

              <ul className="pl-5 space-y-2 list-disc">
                <li>
                  Condução de oficinas e grupos de trabalho com múltiplos atores
                </li>
                <li>Mediação de encontros comunitários e institucionais</li>
                <li>
                  Apoio à construção coletiva de projetos e iniciativas
                  territoriais
                </li>
                <li>
                  Engajamento de atores locais em processos de planejamento e
                  tomada de decisão
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#1C4B3C] mb-3">
                🔹 Desenvolvimento de conteúdos e metodologias
              </h4>

              <p className="font-medium text-[#1C4B3C] mb-2">Atuação:</p>

              <ul className="pl-5 space-y-2 list-disc">
                <li>
                  Elaboração de materiais técnicos, guias, manuais,
                  apresentações e conteúdos formativos
                </li>
                <li>
                  Apoio à estruturação de processos formativos e educativos
                </li>
              </ul>
            </div>
          </div>
        </>
      ),
    },

    {
      id: 3,
      image: img3,
      title: "Eixo 3",
      subtitle: "Pesquisa Aplicada e Produção de Conhecimento",
      shortDescription:
        "Realizamos investigações aplicadas para qualificar decisões, políticas e projetos, por meio de estudos, sistematizações, indicadores e produção técnica.",
      modalContent: (
        <>
          <h3 className="text-2xl font-semibold text-[#1C4B3C] mb-6">
            EIXO 3 — Pesquisa Aplicada e Produção de Conhecimento
          </h3>

          <div className="space-y-8 text-[#5E7A70]">
            <div>
              <h4 className="font-semibold text-[#1C4B3C] mb-3">
                🔹 Diagnósticos e estudos técnicos
              </h4>

              <p className="font-medium text-[#1C4B3C] mb-2">Atuação:</p>

              <ul className="pl-5 space-y-2 list-disc">
                <li>Levantamentos socioambientais e territoriais</li>
                <li>
                  Diagnósticos institucionais e análises aplicadas ao turismo
                </li>
                <li>Mapeamento e sistematização de informações estratégicas</li>
                <li>
                  Elaboração de relatórios técnicos para subsidiar projetos e
                  políticas públicas
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#1C4B3C] mb-3">
                🔹 Pesquisas aplicadas ao turismo e governança
              </h4>

              <p className="font-medium text-[#1C4B3C] mb-2">Atuação:</p>

              <ul className="pl-5 space-y-2 list-disc">
                <li>Condução de pesquisas qualitativas e quantitativas</li>
                <li>
                  Realização de entrevistas com atores-chave em escala local e
                  nacional
                </li>
                <li>Análise de modelos e referências de governança e gestão</li>
                <li>
                  Produção de recomendações técnicas para estruturação de
                  iniciativas
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#1C4B3C] mb-3">
                🔹 Sistematização e produção de conhecimento
              </h4>

              <p className="font-medium text-[#1C4B3C] mb-2">Atuação:</p>

              <ul className="pl-5 space-y-2 list-disc">
                <li>Organização, análise e interpretação de dados</li>
                <li>Elaboração de relatórios, estudos e documentos técnicos</li>
                <li>Produção de conteúdos voltados à gestão e planejamento</li>
                <li>
                  Apoio à tomada de decisão em projetos territoriais e políticas
                  públicas
                </li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="mb-24">
      <section className="relative w-full h-auto pt-20 desktop2:pt-32 aspect-video min-h-[500px] desktop2:aspect-[10/1] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={imgExperience}
            alt="Experiências"
            className="object-cover object-center w-full h-full"
          />
        </div>

        <MotionDivDownToUp className="absolute z-10 flex justify-center w-full bottom-6">
          <ScrollMouse />
        </MotionDivDownToUp>
      </section>

      <SectionArea paddingbot={false}>
        <SectionHeaderNovo
          colorMode={colorMode}
          miniTitle="Experiências e Resultados"
          title={
            <>
              Nossa atuação na <span>prática</span>
            </>
          }
          subtitle={
            <>
              A atuação da PLANITUR reúne projetos, parcerias e experiências
              acumuladas no planejamento, estruturação e desenvolvimento do
              turismo em diferentes territórios.
              <br />
              Nossas experiências estão organizadas a partir dos três eixos de
              atuação, evidenciando as principais frentes de trabalho, entregas
              técnicas e resultados alcançados.
            </>
          }
          className="mb-8"
        />

        <MotionDivDownToUp>
          <div className="grid grid-cols-1 tablet2:grid-cols-2 desktop1:grid-cols-3 gap-8 w-[90%] mx-auto">
            {experienceCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100 min-h-[320px] h-fit flex flex-col justify-between"
              >
                <div className="w-full h-[400px] mb-4 rounded-md">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-cover object-top w-full h-full rounded-md"
                  />
                </div>
                <div>
                  <h3 className="text-[28px] font-semibold text-[#1C4B3C] mb-4">
                    {card.title}
                  </h3>

                  <p className="text-[#1C4B3C] font-medium mb-4">
                    {card.subtitle}
                  </p>

                  <p className="text-[#5E7A70] leading-relaxed">
                    {card.shortDescription}
                  </p>
                </div>

                <button
                  onClick={() => setActiveModal(card)}
                  className="mt-8 border border-[#1C4B3C] text-[#1C4B3C] px-6 py-3 rounded-full hover:bg-[#1C4B3C] hover:text-white transition-all"
                >
                  Saiba mais
                </button>
              </div>
            ))}
          </div>
        </MotionDivDownToUp>
      </SectionArea>

      {activeModal && (
        <div className="fixed inset-0 bg-black/50 z-[999] flex items-center justify-center px-4">
          <div className="bg-white max-w-4xl w-full max-h-[85vh] overflow-y-auto rounded-[24px] p-8 relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-2xl text-[#1C4B3C]"
            >
              ×
            </button>

            {activeModal.modalContent}
          </div>
        </div>
      )}
    </div>
  );
}

export default Experiences;
