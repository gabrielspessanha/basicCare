import Image from "next/image";
import React from "react";

const MentalHealthSection = () => {
  return (
    <section className="bg-pink-100 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:order-2 mb-8 lg:mb-0 lg:ml-8 relative">
            <Image
              src="/images/mentalHealth.png"
              alt="Ilustração de saúde mental"
              className="animate-pulse"
              width={500}
              height={500}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="lg:w-1/2 lg:order-1">
            <h2 className="text-4xl font-bold text-pink-600 mb-4">
              Cuidando da sua Saúde Mental
            </h2>
            <p className="mb-6 text-lg">
              Em um ambiente de trabalho remoto, é fácil negligenciar a saúde
              mental. No entanto, cuidar da sua mente é tão importante quanto
              cuidar do seu corpo. Aqui estão algumas práticas para manter uma
              boa saúde mental:
            </p>
            <ul className="mb-8">
              <li className="mb-4">
                <span className="font-bold text-pink-600">1. </span> Dedique
                tempo para atividades relaxantes, como meditação ou yoga.
              </li>
              <li className="mb-4">
                <span className="font-bold text-pink-600">2. </span> Estabeleça
                limites claros entre trabalho e vida pessoal.
              </li>
              <li className="mb-4">
                <span className="font-bold text-pink-600">3. </span> Converse
                regularmente com amigos e familiares.
              </li>
              <li className="mb-4">
                <span className="font-bold text-pink-600">4. </span> Pratique o
                autoconhecimento e identifique sinais de estresse.
              </li>
              <li className="mb-4">
                <span className="font-bold text-pink-600">5. </span> Procure
                ajuda profissional se necessário.
              </li>
            </ul>
            <p className="text-lg">
              Priorizar sua saúde mental não só melhora seu bem-estar emocional,
              mas também aumenta sua produtividade e satisfação no trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthSection;
