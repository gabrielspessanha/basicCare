import Image from "next/image";
import React from "react";
import {
  FiActivity,
  FiCoffee,
  FiSun,
  FiSunrise,
  FiFeather,
} from "react-icons/fi";

const PhysicalActivitySection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-green-500 mb-4">
              Importância da Atividade Física
            </h2>
            <p className="mb-4">
              Incorporar atividades físicas na rotina de trabalho é essencial
              para manter o corpo saudável e prevenir o sedentarismo. Pequenas
              pausas para se movimentar podem fazer uma grande diferença na sua
              saúde e bem-estar. Aqui estão algumas dicas:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="flex items-center mb-2">
                <FiActivity className="text-blue-500 mr-2" /> Faça pausas
                regulares para caminhar ou alongar.
              </li>
              <li className="flex items-center mb-2">
                <FiFeather className="text-purple-500 mr-2" /> Pratique
                exercícios de alongamento para evitar tensões musculares.
              </li>
              <li className="flex items-center mb-2">
                <FiSun className="text-orange-500 mr-2" /> Considere atividades
                como ioga ou pilates para melhorar a flexibilidade.
              </li>
              <li className="flex items-center mb-2">
                <FiSunrise className="text-red-500 mr-2" /> Use uma mesa
                ajustável para alternar entre trabalhar sentado e em pé.
              </li>
              <li className="flex items-center mb-2">
                <FiCoffee className="text-green-500 mr-2" /> Incorpore
                exercícios leves, como agachamentos ou polichinelos, ao longo do
                dia.
              </li>
            </ul>
            <p>
              Manter-se ativo ajuda a melhorar a circulação sanguínea, aumentar
              a energia e reduzir o estresse. Dedicar alguns minutos do seu dia
              para se exercitar pode trazer benefícios significativos para sua
              saúde física e mental.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
            <Image
              src="/images/physicalActivity.jpg"
              alt="Pessoa praticando atividade física"
              className="mx-auto rounded-lg shadow-md"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysicalActivitySection;
