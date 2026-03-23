import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionArea from "../../../components/sectionElements/SectionArea";
import SectionWrapper from "../../../components/sectionElements/SectionWrapper";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";

function TalentForm({ colorMode }) {
  const formRef = useRef(); // Referência para o formulário
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    cidade: "",
    telefone: "",
    email: "",
    area: "",
    resumo: "",
    curriculo: null,
  });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleFile(e) {
    setForm((f) => ({
      ...f,
      curriculo: e.target.files?.[0] || null,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);

    // Substitua os IDs abaixo pelos seus obtidos no painel do EmailJS
    const SERVICE_ID = "seu_service_id";
    const TEMPLATE_ID = "seu_template_id";
    const PUBLIC_KEY = "sua_public_key";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setSent(true);
        setIsSending(false);
      },
      (error) => {
        console.error("Erro ao enviar:", error.text);
        alert(
          "Ocorreu um erro ao enviar. Verifique se o arquivo é muito grande (limite 500kb).",
        );
        setIsSending(false);
      },
    );
  }

  return (
    <SectionArea className={`desktop1:max-w-[600px] font-secondFont`}>
      <SectionWrapper>
        <SectionHeaderNovo
          title="Quer colaborar com a PLANITUR em projetos e ações técnicas?"
          miniTitle="Banco de talentos"
          subtitle="Cadastre-se em nosso banco de talentos, entraremos em contato sempre que tivermos alguma oportunidade em vista!"
          colorMode={colorMode}
        />
        <div className="w-[90%] max-w-[400px] desktop1:max-w-[500px]">
          {sent ? (
            <div className="bg-green-100 p-6 rounded-md text-center">
              <p className="font-semibold text-green-800">
                Cadastro enviado com sucesso!
              </p>
              <button
                className="mt-3 underline text-green-700"
                onClick={() => setSent(false)}
              >
                Enviar outro cadastro
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input
                name="nome"
                placeholder="Nome completo"
                className="border p-2 rounded-md w-full"
                value={form.nome}
                onChange={handleChange}
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="cidade"
                  placeholder="Cidade / Estado"
                  className="border p-2 rounded-md"
                  value={form.cidade}
                  onChange={handleChange}
                  required
                />

                <input
                  name="telefone"
                  placeholder="Telefone"
                  className="border p-2 rounded-md"
                  value={form.telefone}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                name="email"
                type="email"
                placeholder="Email"
                className="border p-2 rounded-md w-full"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                name="area"
                className="border p-2 rounded-md w-full"
                placeholder="Área de atuação"
                value={form.area}
                onChange={handleChange}
                required
              ></input>

              <textarea
                name="resumo"
                placeholder="Resumo da sua experiência..."
                className="border p-2 rounded-md w-full"
                rows={4}
                value={form.resumo}
                onChange={handleChange}
                required
              />

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Currículo (Máx 500kb):
                </label>
                <input
                  type="file"
                  name="curriculo" // Este nome deve ser o mesmo no template do EmailJS
                  onChange={handleFile}
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className={`border-2 border-orange-500 font-semibold uppercase text-sm py-3 px-8 transition-colors duration-300 ${
                    isSending
                      ? "bg-gray-300 border-gray-300 text-gray-600 cursor-not-allowed"
                      : "text-orange-500 hover:bg-orange-500 hover:text-white"
                  }`}
                >
                  {isSending ? "Enviando..." : "Enviar cadastro"}
                </button>
              </div>
            </form>
          )}
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default TalentForm;
