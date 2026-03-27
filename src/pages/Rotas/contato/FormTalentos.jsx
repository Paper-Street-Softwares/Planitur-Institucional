import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionArea from "../../../components/sectionElements/SectionArea";
import SectionWrapper from "../../../components/sectionElements/SectionWrapper";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";

function TalentForm({ colorMode }) {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  // Estado inicial isolado para facilitar o reset
  const initialState = {
    nome: "",
    cidade: "",
    telefone: "",
    email: "",
    area: "",
    resumo: "",
    curriculo: null,
  };

  const [form, setForm] = useState(initialState);

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

    const SERVICE_ID = "service_y6ls2ga";
    const TEMPLATE_ID = "template_mw9885e";
    const PUBLIC_KEY = "tQ1DPO5JD-O6jvetX";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        alert("Cadastro enviado com sucesso!"); // Alert de sucesso
        setForm(initialState); // Reseta o estado do formulário
        formRef.current.reset(); // Reseta o formulário HTML (limpa o input de arquivo)
        setSent(true);
        setIsSending(false);
      },
      (error) => {
        console.error("Erro ao enviar:", error.text);
        alert(
          "Ocorreu um erro ao enviar. Verifique se o arquivo ultrapassa 50kb (limite do EmailJS gratuito).",
        );
        setIsSending(false);
      },
    );
  }

  return (
    <SectionArea
      paddingtop={false}
      className="desktop1:max-w-[600px] font-secondFont"
    >
      <SectionWrapper>
        <SectionHeaderNovo
          title="Quer colaborar com a PLANITUR em projetos e ações técnicas?"
          miniTitle="Banco de talentos"
          subtitle="Cadastre-se em nosso banco de talentos!"
          colorMode={colorMode}
          className="w-[90%] desktop1:mb-5 desktop2:mb-6"
        />
        <div className="w-full max-w-[500px] bg-white border rounded-md p-4">
          {sent ? (
            <div className="bg-green-100 p-6 rounded-md text-center">
              <p className="font-semibold text-green-800">
                Enviado com sucesso!
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
              />
              <textarea
                name="resumo"
                placeholder="Resumo..."
                className="border p-2 rounded-md w-full"
                rows={4}
                value={form.resumo}
                onChange={handleChange}
                required
              />

              {/* <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Currículo (Máx 50kb):
                </label>
                <input
                  id="fileInput"
                  type="file"
                  name="curriculo"
                  onChange={handleFile}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  required
                />
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer border p-2 rounded-md text-center bg-gray-100 hover:bg-gray-200 w-fit"
                >
                  Escolher arquivo
                </label>
                <p className="text-sm text-gray-600">
                  {form.curriculo
                    ? form.curriculo.name
                    : "Nenhum arquivo escolhido"}
                </p>
              </div> */}

              <div className="mt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="border-2 border-orange-500 font-semibold uppercase text-sm py-3 px-8 text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
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
