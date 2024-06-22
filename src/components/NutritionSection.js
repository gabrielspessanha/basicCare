import Image from "next/image";
import React from "react";
import {
  FaAppleAlt,
  FaBreadSlice,
  FaDrumstickBite,
  FaTint,
  FaCandyCane,
} from "react-icons/fa";

const NutritionSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
            <Image
              src="/images/Nutrition.png"
              alt="Pessoa feita de legumes e frutas"
              width={600}
              height={600}
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              Importância de uma Alimentação Saudável
            </h2>
            <p className="mb-4">
              Manter uma alimentação equilibrada é essencial para garantir
              energia e concentração durante o trabalho remoto. Escolher
              alimentos nutritivos pode fazer uma grande diferença na sua
              produtividade e bem-estar. Aqui estão algumas dicas:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="flex items-center mb-2">
                <FaAppleAlt className="text-green-500 mr-2" /> Inclua frutas e
                vegetais variados na sua dieta diária.
              </li>
              <li className="flex items-center mb-2">
                <FaBreadSlice className="text-yellow-500 mr-2" /> Opte por
                carboidratos complexos, como grãos integrais, para uma energia
                duradoura.
              </li>
              <li className="flex items-center mb-2">
                <FaDrumstickBite className="text-red-500 mr-2" /> Consuma
                proteínas magras, como peixes, aves e legumes.
              </li>
              <li className="flex items-center mb-2">
                <FaTint className="text-blue-500 mr-2" /> Mantenha-se hidratado
                bebendo bastante água ao longo do dia.
              </li>
              <li className="flex items-center mb-2">
                <FaCandyCane className="text-pink-500 mr-2" /> Evite alimentos
                processados e ricos em açúcar, que podem causar picos e quedas
                de energia.
              </li>
            </ul>
            <p>
              Planejar suas refeições e lanches com antecedência pode ajudar a
              evitar escolhas não saudáveis e a manter um padrão alimentar
              equilibrado. Uma alimentação adequada não só melhora sua saúde
              física, mas também contribui para uma melhor disposição e
              concentração no trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
