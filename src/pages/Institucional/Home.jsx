import React from "react";
import { motion } from "framer-motion";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import imgHero from "../../assets/imgs/hero/hero.jpg";
import imgAnalise from "../../assets/imgs/hero/analise.jpg";
import imgMontanha from "../../assets/imgs/hero/montanha.jpg";
import imgAula from "../../assets/imgs/hero/aula.jpg";
import imgIlha from "../../assets/imgs/hero/ilha.jpg";
import imgMesa from "../../assets/imgs/hero/mesa.jpg";
import imgPlaca from "../../assets/imgs/hero/placa.jpg";
import imgPostit from "../../assets/imgs/hero/postit.jpg";
import imgTrilha from "../../assets/imgs/hero/trilha.jpg";
import imgAngelice from "../../assets/imgs/team/img1.webp";
import imgTarcisio from "../../assets/imgs/team/img2.webp";
import imgCta from "../../assets/imgs/hero/cta.jpg";

function Home({ colorMode }) {
  // Cores base extraídas do design
  const colors = {
    orange: "#E85D22",
    darkGreen: "#0A3D24",
    lightBg: "#F8F8F6",
    redLabel: "#C24127",
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <SectionArea
        className="relative h-[70vh] min-h-[600px] desktop1:min-h-[700px] justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${imgHero})` }}
        paddingtop={false}
        paddingbot={false}
      >
        {/* Overlay escuro para leitura do texto */}
        <div className="absolute inset-0 bg-black/50"></div>

        <SectionWrapper className="relative z-10 pt-16 text-left md:items-start">
          <div className="w-full max-w-[800px] flex flex-col items-start">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Turismo que conecta pessoas, território e natureza
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-6 max-w-[600px] font-medium leading-relaxed">
              Transformamos realidades por meio do turismo, com projetos e
              consultorias sob medida que integram saberes locais e conhecimento
              técnico para gerar soluções viáveis.
            </p>
            <div className="flex flex-col w-full gap-4 mt-10 sm:flex-row sm:w-auto">
              <a
                className="bg-[#E85D22] hover:bg-[#d1521d] transition-colors text-white px-8 py-4 font-semibold text-sm tracking-wide rounded-sm w-fit"
                href="/services"
              >
                CONHEÇA NOSSOS SERVIÇOS
              </a>

              <a
                className="px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors border border-white rounded-sm w-fit hover:bg-white/10"
                href="/contato"
              >
                INICIAR CONVERSA
              </a>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>

      {/* 2. IMPACTO E TERRITÓRIOS */}
      <SectionArea className="bg-[#F8F8F6]">
        <SectionWrapper>
          <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Coluna Esquerda: Texto */}
            <div className="flex flex-col items-start lg:col-span-4">
              <span className="text-[#C24127] font-bold text-sm tracking-wider uppercase mb-4">
                2. Impacto e territórios
              </span>
              <h2 className="text-[#0A3D24] text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Atuação que fortalece territórios e iniciativas
              </h2>
              <p className="mb-8 leading-relaxed text-gray-700">
                A PLANITUR desenvolve soluções integradas para apoiar projetos,
                organizações, negócios e territórios no planejamento,
                qualificação e desenvolvimento do turismo.
              </p>

              <a href="/experience">
                <button className="border border-[#E85D22] text-[#E85D22] hover:bg-[#E85D22] hover:text-white transition-colors px-8 py-4 font-semibold text-sm tracking-wide rounded-sm">
                  CONHEÇA NOSSAS EXPERIÊNCIAS
                </button>
              </a>
            </div>

            {/* Coluna Direita: Ícones e Imagens */}
            <div className="flex flex-col gap-8 lg:col-span-8">
              {/* Grid de Ícones */}
              <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
                {[
                  {
                    icon: (
                      <svg
                        className="w-6 h-6 text-[#0A3D24]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    ),
                    text: "Atuação em diferentes territórios brasileiros",
                  },
                  {
                    icon: (
                      <svg
                        className="w-6 h-6 text-[#0A3D24]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                      </svg>
                    ),
                    text: "Parcerias com organizações, instituições e iniciativas locais",
                  },
                  {
                    icon: (
                      <svg
                        className="w-6 h-6 text-[#0A3D24]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    ),
                    text: "Projetos voltados ao planejamento e desenvolvimento do turismo",
                  },
                  {
                    icon: (
                      <svg
                        className="w-6 h-6 text-[#0A3D24]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 22V12"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 12C12 8 16 4 20 4C20 8 16 12 12 12Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 16C12 13 9 10 6 10C6 13 9 16 12 16Z"
                        />
                      </svg>
                    ),
                    text: "Formação, pesquisa e soluções aplicadas ao território",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="flex items-center justify-center mb-4 border border-gray-300 rounded-full w-14 h-14">
                      {item.icon}
                    </div>
                    <p className="text-sm leading-relaxed text-gray-700">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              {/* Grid de Imagens */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <img
                  src={imgMontanha}
                  alt="Galeria 1"
                  className="object-cover w-full h-40 rounded-md"
                />
                <img
                  src={imgAula}
                  alt="Galeria 2"
                  className="object-cover w-full h-40 rounded-md"
                />
                <img
                  src={imgTrilha}
                  alt="Galeria 3"
                  className="object-cover w-full h-40 rounded-md"
                />
                <img
                  src={imgMesa}
                  alt="Galeria 4"
                  className="object-cover w-full h-40 rounded-md"
                />
              </div>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>

      {/* 3. SOBRE A PLANITUR */}
      <SectionArea className="bg-white">
        <SectionWrapper>
          <div className="grid items-center w-full grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Imagem Principal Esquerda */}
            <div className="h-full lg:col-span-5">
              <img
                src={imgPostit}
                alt="Sobre a Planitur"
                className="w-full h-[400px] lg:h-full object-cover rounded-lg"
              />
            </div>

            {/* Conteúdo Central */}
            <div className="flex flex-col items-start px-0 lg:col-span-4 lg:px-4">
              <span className="text-[#C24127] font-bold text-sm tracking-wider uppercase mb-4">
                3. Sobre a Planitur
              </span>
              <h2 className="text-[#0A3D24] text-3xl font-bold leading-tight mb-6">
                Planejamento estratégico para destinos e territórios
              </h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Acreditamos no turismo como ferramenta de transformação
                socioambiental. Atuamos com planejamento, formação e pesquisa
                aplicada para fortalecer territórios, iniciativas e pessoas.
              </p>
              <p className="mb-8 leading-relaxed text-gray-700">
                Juntos, construímos soluções sustentáveis que geram impacto real
                e duradouro.
              </p>
              <a href="/about">
                {" "}
                <button className="bg-[#E85D22] hover:bg-[#d1521d] transition-colors text-white px-8 py-4 font-semibold text-sm tracking-wide rounded-sm">
                  CONHEÇA A PLANITUR
                </button>
              </a>
            </div>

            {/* Imagens Secundárias Direita */}
            <div className="flex flex-col h-full gap-4 lg:col-span-3">
              <img
                src={imgIlha}
                alt="Detalhe 1"
                className="object-cover w-full h-48 rounded-lg"
              />
              <div className="grid flex-1 grid-cols-2 gap-4">
                <img
                  src={imgPlaca}
                  alt="Detalhe 2"
                  className="w-full h-full object-cover rounded-lg min-h-[160px]"
                />
                <img
                  src={imgAnalise}
                  alt="Detalhe 3"
                  className="w-full h-full object-cover rounded-lg min-h-[160px]"
                />
              </div>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>

      {/* 4. NOSSOS EIXOS DE ATUAÇÃO */}
      <SectionArea className="bg-[#F9F9F8]">
        <SectionWrapper>
          <div className="flex flex-col items-center w-full mb-12 text-center">
            <span className="text-[#C24127] font-bold text-sm tracking-wider uppercase mb-4">
              4. Nossos eixos de atuação
            </span>
            <h2 className="text-[#0A3D24] text-3xl lg:text-4xl font-bold mb-4">
              Transformamos territórios em oportunidades
            </h2>
            <p className="max-w-2xl text-gray-700">
              Soluções estratégicas, formação e conhecimento para fortalecer
              iniciativas e projetos ligados ao turismo.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-[#F1F1EF] p-8 rounded-lg flex flex-col items-start">
              <div className="flex items-center justify-center mb-6 border border-gray-400 rounded-full w-14 h-14">
                <svg
                  className="w-6 h-6 text-[#0A3D24]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-[#0A3D24] text-xl font-bold mb-4">
                Técnico-Consultivo e Planejamento
              </h3>
              <p className="flex-1 mb-6 text-sm text-gray-600">
                Planejamento, diagnósticos e soluções estratégicas para
                fortalecer territórios e iniciativas.
              </p>
              <button className="text-[#C24127] font-bold text-sm flex items-center gap-2 hover:opacity-80 transition-opacity">
                <a href="/features/tecnicoconsultivo">
                  SAIBA MAIS <span>→</span>
                </a>
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F1F1EF] p-8 rounded-lg flex flex-col items-start">
              <div className="flex items-center justify-center mb-6 border border-gray-400 rounded-full w-14 h-14">
                <svg
                  className="w-6 h-6 text-[#0A3D24]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-[#0A3D24] text-xl font-bold mb-4">
                Formativo e Educacional
              </h3>
              <p className="flex-1 mb-6 text-sm text-gray-600">
                Formação e desenvolvimento de pessoas, equipes e comunidades
                para gerar transformação real.
              </p>
              <button className="text-[#C24127] font-bold text-sm flex items-center gap-2 hover:opacity-80 transition-opacity">
                <a href="/features/formativoeeducacional">
                  SAIBA MAIS <span>→</span>
                </a>
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F1F1EF] p-8 rounded-lg flex flex-col items-start">
              <div className="flex items-center justify-center mb-6 border border-gray-400 rounded-full w-14 h-14">
                <svg
                  className="w-6 h-6 text-[#0A3D24]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-[#0A3D24] text-xl font-bold mb-4">
                Pesquisa Aplicada e Produção de Conhecimento
              </h3>
              <p className="flex-1 mb-6 text-sm text-gray-600">
                Pesquisas e análises que transformam dados em informações úteis
                para melhores decisões.
              </p>
              <button className="text-[#C24127] font-bold text-sm flex items-center gap-2 hover:opacity-80 transition-opacity">
                <a href="/features/pesquisaeproducao">
                  SAIBA MAIS <span>→</span>
                </a>
              </button>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>

      {/* 5. SÓCIOS */}
      <SectionArea className="bg-white">
        <SectionWrapper>
          <div className="flex flex-col items-center w-full mb-12 text-center">
            <span className="text-[#C24127] font-bold text-sm tracking-wider uppercase mb-4">
              5. Sócios
            </span>
            <h2 className="text-[#0A3D24] text-3xl font-bold mb-4">
              Especialistas em planejamento turístico
            </h2>
            <p className="text-gray-700">
              Profissionais com experiência em planejamento, turismo de
              natureza, governança e desenvolvimento territorial.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            {/* Sócio 1 */}
            <div className="bg-[#F9F9F8] p-8 rounded-xl flex flex-col sm:flex-row gap-6 items-start">
              <img
                src={imgAngelice}
                alt="Angelice Motter"
                className="object-cover w-32 h-32 rounded-full shrink-0"
              />
              <div>
                <h3 className="text-[#0A3D24] text-xl font-bold">
                  Angelice Motter
                </h3>
                <p className="mb-4 text-sm font-medium text-gray-500">
                  Sócia Administrativa e Coordenadora de Projetos
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  Turismóloga, mestre em Turismo e Hotelaria e especialista em
                  Ecoturismo. Atua com planejamento, projetos socioambientais e
                  desenvolvimento territorial.
                </p>
                <a
                  href="https://www.linkedin.com/in/angelice-raquel-motter-manzino-a261b2217/"
                  target="_blank"
                  className="text-[#0A3D24] hover:opacity-80 transition-opacity"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Sócio 2 */}
            <div className="bg-[#F9F9F8] p-8 rounded-xl flex flex-col sm:flex-row gap-6 items-start">
              <img
                src={imgTarcisio}
                alt="Tarcísio Cunha"
                className="object-cover w-32 h-32 rounded-full shrink-0"
              />
              <div>
                <h3 className="text-[#0A3D24] text-xl font-bold">
                  Tarcísio Cunha
                </h3>
                <p className="mb-4 text-sm font-medium text-gray-500">
                  Sócio e Líder de Projetos
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  Doutorando em Políticas Públicas e especialista em áreas
                  protegidas. Atua há mais de 10 anos com turismo de natureza e
                  governança territorial.
                </p>
                <a
                  href="https://www.linkedin.com/in/tarcisio-cunha/"
                  target="_blank"
                  className="text-[#0A3D24] hover:opacity-80 transition-opacity"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>

      {/* 6. CONTATO */}
      <SectionArea className="bg-white" paddingtop={false}>
        <SectionWrapper>
          <div className="flex flex-col w-full overflow-hidden shadow-sm xl:flex-row rounded-2xl">
            {/* Bloco Verde Escuro */}
            <div className="bg-[#0A3D24] text-white p-10 lg:p-14 xl:w-[30%] flex flex-col justify-center">
              <span className="text-[#E85D22] font-bold text-sm tracking-wider uppercase mb-4">
                6. Contato
              </span>
              <h2 className="mb-6 text-3xl font-bold leading-tight">
                Vamos construir soluções para o seu território?
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-white/80">
                Cada território possui desafios e potencialidades próprias. A
                PLANITUR atua de forma personalizada para apoiar iniciativas,
                negócios, territórios e organizações no desenvolvimento do
                turismo.
              </p>
              <a href="/contato">
                {" "}
                <button className="bg-[#E85D22] hover:bg-[#d1521d] transition-colors text-white px-8 py-4 font-semibold text-sm tracking-wide rounded-sm self-start">
                  INICIAR CONVERSA
                </button>
              </a>
            </div>

            {/* Imagem Central */}
            <div
              style={{ backgroundImage: `url(${imgCta})` }}
              className="h-64 xl:h-auto xl:w-[35%] bg-cover bg-center"
            ></div>

            {/* Bloco Cinza Claro - Infos de Contato */}
            <div className="bg-[#EAEBE8] p-10 lg:p-14 xl:w-[35%] flex flex-col justify-center gap-8">
              <div className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-[#0A3D24] mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <div>
                  <h4 className="text-[#0A3D24] font-bold text-sm mb-1">
                    E-mail
                  </h4>
                  <p className="text-sm text-gray-600 break-all">
                    contato@planiturconsultoria.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="w-5 h-5 text-[#0A3D24] mt-1 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.49 0 .14 5.35.14 11.92c0 2.1.55 4.16 1.59 5.97L0 24l6.29-1.65a11.92 11.92 0 005.77 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.47-8.4zM12.07 21.8h-.01a9.9 9.9 0 01-5.05-1.38l-.36-.21-3.73.98 1-3.63-.23-.37a9.87 9.87 0 01-1.52-5.28c0-5.46 4.44-9.9 9.91-9.9 2.64 0 5.12 1.03 6.98 2.89a9.8 9.8 0 012.89 6.99c0 5.46-4.44 9.91-9.89 9.91zm5.43-7.43c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                </svg>
                <div>
                  <h4 className="text-[#0A3D24] font-bold text-sm mb-1">
                    WhatsApp
                  </h4>
                  <p className="text-sm text-gray-600">(51) 98225-1864</p>
                  <p className="text-sm text-gray-600">(21) 98385-6516</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-[#0A3D24] mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  ></path>
                </svg>
                <div>
                  <h4 className="text-[#0A3D24] font-bold text-sm mb-1">
                    Atuação
                  </h4>
                  <p className="text-sm text-gray-600">Em todo o Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}

export default Home;
