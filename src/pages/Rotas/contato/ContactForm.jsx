import { useState } from "react";
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

function ContactForm({ colorMode }) {
  const [checked, setChecked] = useState(helpOptions.map(() => false));

  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    cnpj: "",
    mensagem: "",
  });

  const [sent, setSent] = useState(false);

  function toggle(i) {
    setChecked((c) => c.map((v, idx) => (idx === i ? !v : v)));
  }

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const selected = helpOptions.filter((_, i) => checked[i]);

    const subject = encodeURIComponent("Contato - PLANITUR");
    const body = encodeURIComponent(
      `Como podemos ajudar: ${selected.join(", ")}\n\nNome: ${form.nome}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}${
        form.cnpj ? `\nCNPJ: ${form.cnpj}` : ""
      }\n\nMensagem:\n${form.mensagem}`,
    );

    window.open(
      `mailto:gabrielsouza65115@gmail.com?subject=${subject}&body=${body}`,
    );

    setSent(true);
  }

  return (
    <SectionArea className={`desktop1:max-w-[600px]`}>
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
        />
        <div className="w-[90%] max-w-[500px]">
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
                    <label
                      key={opt}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={checked[i]}
                        onChange={() => toggle(i)}
                      />
                      <span className="text-sm">{opt}</span>
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

              {/* TEXTAREA */}
              <textarea
                name="mensagem"
                placeholder="Descreva sua mensagem..."
                className="border p-2 rounded-md w-full"
                rows={5}
                value={form.mensagem}
                onChange={handleChange}
                required
              />

              {/* BOTÃO */}
              <div className="">
                <button
                  type="submit"
                  className="mt-2 inline-block border-2 border-orange-500 text-orange-500 font-semibold uppercase text-sm py-3 px-8 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  Enviar mensagem
                </button>
              </div>
            </form>
          )}
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default ContactForm;
