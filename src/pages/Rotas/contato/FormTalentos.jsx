import { useState } from "react";
import SectionArea from "../../../components/sectionElements/SectionArea";
import SectionWrapper from "../../../components/sectionElements/SectionWrapper";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";

function TalentForm({ colorMode }) {
  const [form, setForm] = useState({
    nome: "",
    cidade: "",
    telefone: "",
    email: "",
    area: "",
    resumo: "",
    curriculo: null,
  });

  const [sent, setSent] = useState(false);

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

    const subject = encodeURIComponent("Banco de Talentos - PLANITUR");
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nCidade/Estado: ${form.cidade}\nTelefone: ${form.telefone}\nEmail: ${form.email}\nÁrea: ${form.area}\n\nResumo:\n${form.resumo}`,
    );

    window.open(
      `mailto:contato@planiturconsultoria.com?subject=${subject}&body=${body}`,
    );

    setSent(true);
  }

  return (
    <SectionArea className={`desktop1:max-w-[600px]`}>
      <SectionWrapper>
        <SectionHeaderNovo
          title="Quer colaborar com a PLANITUR em projetos e ações técnicas?"
          miniTitle="Banco de talentos"
          subtitle="Cadastre-se em nosso banco de talentos, entraremos em contato sempre que tivermos alguma oportunidade em vista! Informações para formulário de cadastro:"
          colorMode={colorMode}
        />
        <div className="w-[90%] max-w-[500px]">
          {sent ? (
            <div className="bg-green-100 p-6 rounded-md text-center">
              <p className="font-semibold text-green-800">Cadastro enviado!</p>
              <button
                className="mt-3 underline text-green-700"
                onClick={() => setSent(false)}
              >
                Enviar novamente
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

              <select
                name="area"
                className="border p-2 rounded-md w-full"
                value={form.area}
                onChange={handleChange}
                required
              >
                <option value="">Selecione sua área</option>
                <option>Planejamento Turístico</option>
                <option>Captação de Recursos</option>
                <option>Educação</option>
                <option>Uso Público</option>
                <option>Pesquisa</option>
                <option>Comunicação</option>
                <option>Outra</option>
              </select>

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
                <input type="file" onChange={handleFile} />

                {form.curriculo && (
                  <span className="text-sm text-gray-600">
                    {form.curriculo.name}
                  </span>
                )}
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  className="border-2 border-orange-500 text-orange-500 font-semibold uppercase text-sm py-3 px-8 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  Enviar cadastro
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
