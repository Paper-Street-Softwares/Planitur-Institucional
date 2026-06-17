import React from "react";
import { Instagram, Linkedin, Mail, MapPin, Phone, Timer } from "lucide-react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import content from "../../content/content";

export default function Footer({
  phone,
  phone2,
  phone3,
  sociais,
  adress,
  expedient,
  className,
}) {
  const featuresInfos = Object.values(content.texts.features.cards);

  return (
    <SectionArea paddingTopAndBottom={false}>
      <footer
        className={`bg-neutral-50 text-primaryDark/80 border-t w-full pb-10 font-mainFont flex justify-center ${className}`}
      >
        <SectionWrapper>
          <div className="flex flex-col w-full pt-[20px] tablet2:flex-row tablet2:pt-[50px] items-start justify-center gap-12 tablet2:gap-6 tablet1:grid-cols-4 desktop1:grid-cols-4">
            {/* COLUNA 1 - LOGO */}
            <div className="flex flex-col gap-0">
              <img
                src={content.texts.navbar.logo.img}
                alt="Logo Planitur"
                className="w-[220px]"
              />
              <img
                src={content.texts.navbar.logo.logoCadastur}
                alt="Logo Planitur"
                className="w-[220px]"
              />

              {sociais && (
                <div className="flex flex-col gap-4">
                  <h1 className="font-secondFont">Siga-nos nas redes socias</h1>

                  <div className="flex gap-4">
                    <a
                      href={content.texts.links.instagram}
                      className="flex items-center justify-center w-8 h-8 transition-all duration-500 rounded-md cursor-pointer bg-primaryDark/20 hover:scale-90"
                    >
                      <Instagram width={18} className="text-primaryDark/70" />
                    </a>
                    <a
                      href={content.texts.links.linkedin}
                      className="flex items-center justify-center w-8 h-8 transition-all duration-500 rounded-md cursor-pointer bg-primaryDark/20 hover:scale-90"
                    >
                      <Linkedin width={18} className="text-primaryDark/70" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* COLUNA 2 - LINKS */}
            <div className="flex flex-col space-y-10 text-sm tablet2:h-auto ">
              <div>
                <h3 className="mb-3 font-semibold text-primaryLight">
                  SOBRE NÓS
                </h3>
                <ul className="flex flex-col space-y-2 text-sm text-primaryDark/80">
                  <a
                    href="/about"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 cursor-pointer hover:text-primaryLight"
                  >
                    A Planitur
                  </a>
                  <a
                    href="/team"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 cursor-pointer hover:text-primaryLight"
                  >
                    Dos Sócios
                  </a>
                  <a
                    href="/contato"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 cursor-pointer hover:text-primaryLight"
                  >
                    Contato
                  </a>
                </ul>
              </div>

              {/* <div>
              <h3 className="mb-3 font-semibold text-primaryLight">
                ADVOGADOS
              </h3>
            </div> */}

              {/* <div>
              <h3 className="mb-3 font-semibold text-primaryLight">
                NOTÍCIAS E PUBLICAÇÕES
              </h3>
              <ul className="space-y-2 text-primaryDark/80">
                <li>Imprensa</li>
                <li>Informativos</li>
                <li>Reconhecimentos</li>
                <li>Eventos</li>
              </ul>
            </div> */}

              {/* <div>
              <h3 className="font-semibold text-primaryLight">TRACK RECORD</h3>
            </div> */}
            </div>

            {/* COLUNA 3 - Eixo de Atuação */}
            <div className="">
              <h3 className="mb-4 font-semibold text-primaryLight">
                Eixo de Atuação
              </h3>
              <ul className="flex flex-col space-y-2 text-sm text-primaryDark/80">
                {featuresInfos.map((item, index) => (
                  <a
                    key={index}
                    href={item.rota}
                    rel="noopener noreferrer"
                    className="transition-all duration-300 cursor-pointer hover:text-primaryLight"
                  >
                    {item.title}
                  </a>
                ))}
              </ul>
            </div>

            {/* COLUNA 4 - CONTATO */}
            <div className="flex flex-col justify-between text-sm">
              <h3 className="mb-4 font-semibold text-primaryLight">CONTATO</h3>
              <div className="space-y-6">
                <div className="flex flex-col space-y-6">
                  {phone && (
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-primaryLight" />
                      <span className="text-md">
                        {content.texts.infos.phone}
                      </span>
                    </div>
                  )}

                  {phone2 && (
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-primaryLight" />
                      <span className="text-[12px] desktop1:text-[14px]">
                        {content.texts.infos.phoneSecundario}
                      </span>
                    </div>
                  )}

                  {phone3 && (
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-primaryLight" />
                      <span className="text-[12px] desktop1:text-[14px]">
                        {content.texts.infos.phoneTerciario}
                      </span>
                    </div>
                  )}
                </div>
                {adress && (
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-1 text-primaryLight" />
                    <p className="text-primaryDark/80">
                      {content.texts.infos.adress}
                    </p>
                  </div>
                )}
                {expedient && (
                  <div className="flex items-start gap-3">
                    <Timer size={18} className="mt-1 text-primaryLight" />
                    <p className="text-primaryDark/80">
                      {content.texts.infos.officeHours}
                    </p>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-primaryLight" />
                  <p className="text-[12px] text-primaryDark/80">
                    contato@planiturconsultoria.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-400 mt-[62px] flex  flex-col justify-center items-center text-center">
            ©{content.texts.footer.copyrightLine}
            <span>
              Esse site não faz parte do Google LLC nem do Facebook Inc. e não
              oferecemos nenhum tipo de serviço oficial do governo.
            </span>
          </div>
        </SectionWrapper>
      </footer>
    </SectionArea>
  );
}
