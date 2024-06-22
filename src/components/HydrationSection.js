import Image from "next/image";
import React from "react";
import { FaTint, FaGlassWhiskey, FaLeaf } from "react-icons/fa";

const HydrationSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-blue-500 mb-4">
              Importância da Hidratação
            </h2>
            <p className="mb-4">
              Manter-se hidratado é fundamental para a saúde geral e para o bom
              funcionamento do corpo. A hidratação adequada ajuda na
              concentração, na regulação da temperatura corporal e na eliminação
              de toxinas. Aqui estão algumas dicas importantes:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="flex items-center">
                <FaTint className="text-blue-500 mr-2" /> Beba pelo menos 8
                copos de água por dia.
              </li>
              <li className="flex items-center">
                <FaGlassWhiskey className="text-orange-500 mr-2" /> Tenha uma
                garrafa de água sempre à mão enquanto trabalha.
              </li>
              <li className="flex items-center">
                <FaLeaf className="text-green-500 mr-2" /> Opte por chás e
                infusões sem açúcar como alternativa à água.
              </li>
              <li className="flex items-center">
                <FaTint className="text-blue-500 mr-2" /> Evite bebidas com alto
                teor de açúcar e cafeína.
              </li>
              <li className="flex items-center">
                <FaGlassWhiskey className="text-orange-500 mr-2" /> Consuma
                alimentos ricos em água, como frutas e vegetais.
              </li>
            </ul>
            <p>
              Uma boa hidratação pode melhorar sua energia, humor e desempenho
              cognitivo, ajudando você a se sentir mais disposto e focado
              durante o dia de trabalho.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
            <Image
              src="/images/Hydration.jpg"
              alt="Garrafa de água"
              className="rounded-lg shadow-md"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HydrationSection;
