import React from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import { motion } from "framer-motion";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";
import {
  FileText,
  Leaf,
  MapPin,
  Users,
  Search,
  Mail,
  MessageCircle,
  Globe,
  ChartNoAxesCombined,
} from "lucide-react";
import content from "../../content/content";

import imgpaisagens1 from "../../assets/imgs/home/paisagens/img1.webp";
import imgpaisagens2 from "../../assets/imgs/home/paisagens/img2.webp";
import imgpaisagens3 from "../../assets/imgs/home/paisagens/img3.webp";
import imgpaisagens4 from "../../assets/imgs/home/paisagens/img4.webp";

function Home({ colorMode }) {
  return (
    <SectionArea className="bg-[#F8F8F6]" paddingTopAndBottom={false}>
      {/* HERO */}
      <section
        id="/"
        className="relative min-h-[760px] w-full flex items-center overflow-hidden "
      >
        <div className="absolute inset-0">
          <img
            src={content.texts.hero.heroBg}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>

        <div className=" relative z-10 mx-auto w-[90%]">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-white text-[42px] desktop1:text-[64px] leading-[48px] desktop1:leading-[72px] font-bold tracking-[-2px]">
                Turismo que conecta
                <br />
                pessoas, território e natureza
              </h1>

              <p className="text-white/90 text-[18px] leading-[32px] mt-8 max-w-[520px]">
                Transformamos realidades por meio do turismo, com projetos e
                consultorias sob medida que integram saberes locais e
                conhecimento técnico para gerar soluções viáveis.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="#"
                  className="bg-[#F97316] hover:bg-[#ea6a0d] text-white uppercase tracking-wide text-[13px] font-semibold px-8 py-4 rounded-md transition-all duration-300"
                >
                  Conheça nossos serviços
                </a>

                <a
                  href="#"
                  className="border border-white/70 hover:bg-white hover:text-black text-white uppercase tracking-wide text-[13px] font-semibold px-8 py-4 rounded-md transition-all duration-300"
                >
                  Iniciar conversa
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className=" mx-auto px-6 desktop1:px-12 py-24">
        <div className="grid grid-cols-1 desktop1:grid-cols-[420px_1fr] gap-16">
          {/* LEFT */}
          <div>
            <p className="text-[#D9642B] uppercase text-[15px] font-bold tracking-wide mb-6">
              2. Impacto e Territórios
            </p>

            <h2 className="text-[#15543B] text-[46px] leading-[56px] font-bold">
              Atuação que fortalece territórios e iniciativas
            </h2>

            <p className="text-[#555] leading-[34px] text-[18px] mt-8">
              A PLANITUR desenvolve soluções integradas para apoiar projetos,
              organizações, negócios e territórios no planejamento, qualificação
              e desenvolvimento do turismo.
            </p>

            <a
              href="#"
              className="inline-flex mt-10 border border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white transition-all duration-300 px-8 py-4 rounded-md uppercase text-[13px] font-semibold"
            >
              Conheça nossas experiências
            </a>
          </div>

          {/* RIGHT */}
          <div>
            {/* ICONS */}
            <div className="grid grid-cols-2 desktop1:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full border border-[#15543B]/40 flex items-center justify-center mb-5">
                  <MapPin size={32} color="#15543B" />
                </div>

                <p className="text-[15px] leading-[28px] text-[#222]">
                  Atuação em diferentes territórios brasileiros
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full border border-[#15543B]/40 flex items-center justify-center mb-5">
                  <Users size={32} color="#15543B" />
                </div>

                <p className="text-[15px] leading-[28px] text-[#222]">
                  Parcerias com organizações, instituições e iniciativas locais
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full border border-[#15543B]/40 flex items-center justify-center mb-5">
                  <FileText size={32} color="#15543B" />
                </div>

                <p className="text-[15px] leading-[28px] text-[#222]">
                  Projetos voltados ao planejamento e desenvolvimento do turismo
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full border border-[#15543B]/40 flex items-center justify-center mb-5">
                  <Leaf size={32} color="#15543B" />
                </div>

                <p className="text-[15px] leading-[28px] text-[#222]">
                  Formação, pesquisa e soluções aplicadas ao território
                </p>
              </div>
            </div>

            {/* IMAGES */}
            <div className="grid grid-cols-2 desktop1:grid-cols-4 gap-5 mt-14">
              <img
                src={imgpaisagens1}
                alt=""
                className="h-[230px] w-full object-cover rounded-2xl"
              />

              <img
                src={imgpaisagens2}
                alt=""
                className="h-[230px] w-full object-cover rounded-2xl"
              />

              <img
                src={imgpaisagens3}
                alt=""
                className="h-[230px] w-full object-cover rounded-2xl"
              />

              <img
                src={imgpaisagens4}
                alt=""
                className="h-[230px] w-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className=" mx-auto px-6 desktop1:px-12 w-full pb-24">
        <div className="flex items-center justify-between">
          {/* LEFT IMAGE */}
          <div>
            <img
              src={imgpaisagens2}
              alt=""
              className="max-w-[600px] h-[500px] object-cover rounded-[28px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex">
            <div className="max-w-[500px]">
              {" "}
              <p className="text-[#D9642B] uppercase text-[15px] font-bold tracking-wide mb-6">
                3. Sobre a Planitur
              </p>
              <h2 className="text-[#15543B] text-[42px] leading-[62px] font-bold max-w-[600px]">
                Planejamento estratégico para destinos e territórios
              </h2>
              <p className="text-[#555] leading-[34px] text-[18px] mt-8">
                Acreditamos no turismo como ferramenta de transformação
                socioambiental. Atuamos com planejamento, formação e pesquisa
                aplicada para fortalecer territórios, iniciativas e pessoas.
              </p>
              <p className="text-[#555] leading-[34px] text-[18px] mt-6">
                Juntos, construímos soluções sustentáveis que geram impacto real
                e duradouro.
              </p>
              <a
                href="#"
                className="inline-flex mt-10 bg-[#F97316] hover:bg-[#ea6a0d] text-white transition-all duration-300 px-8 py-4 rounded-md uppercase text-[13px] font-semibold"
              >
                Conheça a Planitur
              </a>
            </div>
          </div>
          {/* SMALL GRID */}
          <div>
            <img
              src={imgpaisagens4}
              alt=""
              className="w-[445px] h-[220px] object-cover rounded-2xl"
            />
            <div className=" flex gap-2 mt-10">
              <img
                src={imgpaisagens1}
                alt=""
                className="w-[200px] h-[220px] object-cover rounded-2xl"
              />

              <img
                src={imgpaisagens4}
                alt=""
                className="w-[240px] h-[220px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EIXOS */}
      <section className=" mx-auto px-6 desktop1:px-12 pb-24">
        <div className="text-center max-w-[900px] mx-auto">
          <p className="text-[#D9642B] uppercase text-[15px] font-bold tracking-wide mb-6">
            4. Nossos eixos de atuação
          </p>

          <h2 className="text-[#15543B] text-[52px] leading-[62px] font-bold">
            Transformamos territórios em oportunidades
          </h2>

          <p className="text-[#555] text-[18px] leading-[34px] mt-8">
            Soluções estratégicas, formação e conhecimento para fortalecer
            iniciativas e projetos ligados ao turismo.
          </p>
        </div>

        <div className="grid grid-cols-1 desktop1:grid-cols-3 gap-8 mt-16">
          {/* CARD */}
          <div className="bg-white rounded-[28px] p-10 border border-[#ECECEC]">
            <div className="w-20 h-20 rounded-full border border-[#15543B]/40 flex items-center justify-center mb-8">
              <ChartNoAxesCombined size={32} color="#15543B" />
            </div>

            <h3 className="text-[#15543B] text-[32px] leading-[40px] font-bold">
              Técnico-Consultivo e Planejamento
            </h3>

            <p className="text-[#555] leading-[32px] text-[17px] mt-6">
              Planejamento, diagnósticos e soluções estratégicas para fortalecer
              territórios e iniciativas.
            </p>

            <button className="text-[#F97316] uppercase font-bold text-[14px] mt-8">
              Saiba mais →
            </button>
          </div>

          {/* CARD */}
          <div className="bg-white rounded-[28px] p-10 border border-[#ECECEC]">
            <div className="w-20 h-20 rounded-full border border-[#15543B]/40 flex items-center justify-center mb-8">
              <Users size={32} color="#15543B" />
            </div>

            <h3 className="text-[#15543B] text-[32px] leading-[40px] font-bold">
              Formativo e Educacional
            </h3>

            <p className="text-[#555] leading-[32px] text-[17px] mt-6">
              Formação e desenvolvimento de pessoas, equipes e comunidades para
              gerar transformação real.
            </p>

            <button className="text-[#F97316] uppercase font-bold text-[14px] mt-8">
              Saiba mais →
            </button>
          </div>

          {/* CARD */}
          <div className="bg-white rounded-[28px] p-10 border border-[#ECECEC]">
            <div className="w-20 h-20 rounded-full border border-[#15543B]/40 flex items-center justify-center mb-8">
              <Search size={32} color="#15543B" />
            </div>

            <h3 className="text-[#15543B] text-[32px] leading-[40px] font-bold">
              Pesquisa Aplicada e Produção de Conhecimento
            </h3>

            <p className="text-[#555] leading-[32px] text-[17px] mt-6">
              Pesquisas e análises que transformam dados em informações úteis
              para melhores decisões.
            </p>

            <button className="text-[#F97316] uppercase font-bold text-[14px] mt-8">
              Saiba mais →
            </button>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className=" mx-auto px-6 desktop1:px-12 pb-20">
        <div className="grid grid-cols-1 desktop1:grid-cols-[1.1fr_420px] overflow-hidden rounded-[32px]">
          {/* LEFT */}
          <div className="relative min-h-[420px]">
            <img
              src={content.texts.hero.heroBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[#0B4A34]/80" />

            <div className="relative z-10 p-12 max-w-[620px]">
              <p className="text-[#F97316] uppercase font-bold text-[15px] mb-6">
                6. Contato
              </p>

              <h2 className="text-white text-[54px] leading-[62px] font-bold">
                Vamos construir soluções para o seu território?
              </h2>

              <p className="text-white/90 text-[18px] leading-[34px] mt-8">
                Cada território possui desafios e potencialidades próprias. A
                PLANITUR atua de forma personalizada para apoiar iniciativas,
                negócios, territórios e organizações no desenvolvimento do
                turismo.
              </p>

              <button className="bg-[#F97316] hover:bg-[#ea6a0d] transition-all duration-300 text-white uppercase text-[13px] font-semibold px-8 py-4 rounded-md mt-10">
                Iniciar conversa
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-[#F1F4EF] p-12 flex flex-col justify-center gap-10">
            <div className="flex items-start gap-5">
              <Mail color="#15543B" />

              <div>
                <p className="text-[#15543B] font-bold mb-2">E-mail</p>

                <p className="text-[#444]">contato@planitur.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <MessageCircle color="#15543B" />

              <div>
                <p className="text-[#15543B] font-bold mb-2">WhatsApp</p>

                <p className="text-[#444]">(48) 99909-9999</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <Globe color="#15543B" />

              <div>
                <p className="text-[#15543B] font-bold mb-2">
                  Atuação em todo o Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionArea>
  );
}

export default Home;
