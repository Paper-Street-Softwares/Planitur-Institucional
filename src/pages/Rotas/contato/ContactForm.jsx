import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionArea from "../../../components/sectionElements/SectionArea";
import SectionWrapper from "../../../components/sectionElements/SectionWrapper";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";

const helpOptions = [
  "Estruturação de projetos",
  "Captação de recursos",
  "Planejamento do turismo",
  "Uso público em áreas naturais",
  "Capacitações e consultorias",
  "Outros assuntos",
];

// 🔥 UPLOAD PDF (Cloudinary)
async function uploadPDF(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "v2twklga");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dcpx5sxlq/raw/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();

  if (!data.secure_url) {
    throw new Error("Erro no upload do PDF");
  }

  return data.secure_url;
}

function ContactForm({ colorMode }) {
  const [checked, setChecked] = useState(helpOptions.map(() => false));
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [curriculo, setCurriculo] = useState(null);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    cnpj: "",
    mensagem: "",
  });

  function toggle(i) {
    setChecked((c) => c.map((v, idx) => (idx === i ? !v : v)));
  }

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);

    try {
      const selectedHelp = helpOptions
        .filter((_, i) => checked[i])
        .join(", ");

      let curriculoUrl = null;

      if (curriculo) {
        curriculoUrl = await uploadPDF(curriculo);
      }

      const templateParams = {
        user_name: form.nome,
        user_email: form.email,
        user_whatsapp: form.whatsapp,
        user_cnpj: form.cnpj || "Não informado",
        ajuda_com: selectedHelp || "Nenhuma opção selecionada",
        mensagem: form.mensagem,
        curriculo: curriculoUrl || "Não enviado",
      };

      const SERVICE_ID = "service_y6ls2ga";
      const TEMPLATE_ID = "template_mw9885e";
      const PUBLIC_KEY = "tQ1DPO5JD-O6jvetX";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setSent(true);
      setForm({
        nome: "",
        email: "",
        whatsapp: "",
        cnpj: "",
        mensagem: "",
      });

      setChecked(helpOptions.map(() => false));
      setCurriculo(null);
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar mensagem. Tente novamente mais tarde.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <SectionArea className="desktop1:max-w-[600px] font-secondFont" paddingTopAndBottom={false}>
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
              <p className="font-semibold text-green-800">Mensagem enviada!</p>
              <button
                className="mt-3 underline text-green-700"
                onClick={() => setSent(false)}
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* CHECKBOX */}
              <div>
                <p className="text-sm font-medium mb-2">
                  Como podemos te ajudar?
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {helpOptions.map((opt, i) => (
                    <label key={opt} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={checked[i]}
                        onChange={() => toggle(i)}
                        className="appearance-none min-w-[20px] min-h-[20px] border border-black/20 rounded-[5px] checked:bg-orange-500 checked:border-orange-500"
                      />
                      <span className="text-sm text-black/50">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* INPUTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="nome"
                  placeholder="Seu nome"
                  className="border p-2 rounded-md"
                  value={form.nome}
                  onChange={handleChange}
                  required
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Seu email"
                  className="border p-2 rounded-md"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="whatsapp"
                  placeholder="WhatsApp"
                  className="border p-2 rounded-md"
                  value={form.whatsapp}
                  onChange={handleChange}
                  required
                />

                <input
                  name="cnpj"
                  placeholder="CNPJ (opcional)"
                  className="border p-2 rounded-md"
                  value={form.cnpj}
                  onChange={handleChange}
                />
              </div>

              {/* CURRÍCULO */}
              <div>
                <p className="text-sm text-black/60 mb-2">
                  Currículo (PDF opcional)
                </p>

                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => setCurriculo(e.target.files[0])}
                  className="text-sm"
                />
              </div>

              <textarea
                name="mensagem"
                placeholder="Descreva sua mensagem..."
                className="border p-2 rounded-md w-full"
                rows={5}
                value={form.mensagem}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                disabled={isSending}
                className={`mt-2 inline-block border-2 border-orange-500 font-semibold uppercase text-sm py-3 px-8 transition-colors duration-300 ${
                  isSending
                    ? "opacity-50 cursor-not-allowed bg-gray-200"
                    : "text-orange-500 hover:bg-orange-500 hover:text-white"
                }`}
              >
                {isSending ? "Enviando..." : "Enviar mensagem"}
              </button>

            </form>
          )}

        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default ContactForm;