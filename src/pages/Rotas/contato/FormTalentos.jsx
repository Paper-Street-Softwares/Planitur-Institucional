import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionArea from "../../../components/sectionElements/SectionArea";
import SectionWrapper from "../../../components/sectionElements/SectionWrapper";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";

const areaOptions = [
  "Técnico-Consultivo e Planejamento",
  "Formativo e Educacional",
  "Pesquisa Aplicada e Produção de Conhecimento",
];

function TalentForm({ colorMode }) {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [areaChecked, setAreaChecked] = useState(areaOptions.map(() => false));

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

  function toggleArea(i) {
    setAreaChecked((current) => {
      const updated = current.map((v, idx) => (idx === i ? !v : v));

      const selectedAreas = areaOptions
        .filter((_, idx) => updated[idx])
        .join(", ");

      setForm((f) => ({ ...f, area: selectedAreas }));

      return updated;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.area) {
      alert("Selecione pelo menos um eixo de atuação.");
      return;
    }

    setIsSending(true);

    const SERVICE_ID = "service_8q02srz";
    const TEMPLATE_ID = "template_qbvjlns";
    const PUBLIC_KEY = "tQ1DPO5JD-O6jvetX";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        alert("Cadastro enviado com sucesso!"); // Alert de sucesso
        setForm(initialState); // Reseta o estado do formulário
        setAreaChecked(areaOptions.map(() => false));
        formRef.current.reset(); // Reseta o formulário HTML (limpa o input de arquivo)
        setSent(true);
        setIsSending(false);
      },
      (error) => {
        console.error("Erro ao enviar:", error.text);
        alert(
          "Ocorreu um erro ao enviar. Verifique se o arquivo ultrapassa 50kb (limite do EmailJS gratuito)."
        );
        setIsSending(false);
      }
    );
  }

  return (
    <SectionArea
      paddingtop={false}
      className="desktop1:max-w-[600px] font-secondFont"
    >
      <SectionWrapper>
        <SectionHeaderNovo
          title="Vamos conversar?"
          miniTitle="Contato com a PLANITUR"
          subtitle={
            <>
              Tem uma ideia e quer transformá-la em projeto? <br />
              Busca apoio para estruturar uma proposta ou captar recursos?
              <br />
              Deseja qualificar o turismo em seu território ou iniciativa?
            </>
          }
          colorMode={colorMode}
          className={`w-[90%]`}
        />
        <div className="w-full max-w-[500px] bg-white border rounded-md p-4">
          {sent ? (
            <div className="p-6 text-center bg-green-100 rounded-md">
              <p className="font-semibold text-green-800">
                Enviado com sucesso!
              </p>
              <button
                className="mt-3 text-green-700 underline"
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
                placeholder="Nome Completo"
                className="w-full p-2 border rounded-md"
                value={form.nome}
                onChange={handleChange}
                required
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  name="cidade"
                  placeholder="Cidade / Estado"
                  className="p-2 border rounded-md"
                  value={form.cidade}
                  onChange={handleChange}
                  required
                />
                <input
                  name="telefone"
                  placeholder="Telefone"
                  className="p-2 border rounded-md"
                  value={form.telefone}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-md"
                value={form.email}
                onChange={handleChange}
                required
              />

              <div>
                <p className="mb-2 text-sm font-medium">Eixo de atuação</p>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {areaOptions.map((opt, i) => (
                    <label key={opt} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={areaChecked[i]}
                        onChange={() => toggleArea(i)}
                        className="appearance-none min-w-[20px] min-h-[20px] border border-black/20 rounded-[5px] checked:bg-orange-500 checked:border-orange-500"
                      />
                      <span className="text-sm text-black/50">{opt}</span>
                    </label>
                  ))}
                </div>

                <input type="hidden" name="area" value={form.area} />
              </div>

              <textarea
                name="resumo"
                placeholder="Resumo..."
                className="w-full p-2 border rounded-md"
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
                  className="p-2 text-center bg-gray-100 border rounded-md cursor-pointer hover:bg-gray-200 w-fit"
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
                  className="px-8 py-3 text-sm font-semibold text-orange-500 uppercase transition-all border-2 border-orange-500 hover:bg-orange-500 hover:text-white"
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
