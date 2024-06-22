import Image from "next/image";
import React from "react";
import {
  MdChair,
  MdAccessibility,
  MdDesktopWindows,
  MdTimer,
  MdKeyboard,
} from "react-icons/md";

const ErgonomicsSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:ml-8">
            <Image
              src="/images/ergonomics.jpg"
              alt="Ilustração de postura ergonômica"
              className="mx-auto"
              width={600}
              height={500}
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-blue-500 mb-4">
              Ergonomia no Home-office
            </h2>
            <p className="mb-4">
              A ergonomia é crucial para garantir que o seu espaço de trabalho
              não cause danos à sua saúde. Adotar uma postura correta, utilizar
              cadeiras ergonômicas e ajustar a altura da tela são medidas
              essenciais. Abaixo estão algumas dicas para melhorar sua
              ergonomia:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="flex items-center mb-2">
                <MdChair className="text-blue-500 mr-2" /> Utilize uma cadeira
                com suporte lombar.
              </li>
              <li className="flex items-center mb-2">
                <MdAccessibility className="text-green-500 mr-2" /> Mantenha os
                pés apoiados no chão ou em um apoio para pés.
              </li>
              <li className="flex items-center mb-2">
                <MdDesktopWindows className="text-orange-500 mr-2" /> Posicione
                a tela do computador na altura dos olhos.
              </li>
              <li className="flex items-center mb-2">
                <MdTimer className="text-red-500 mr-2" /> Faça pausas regulares
                para alongar e movimentar-se.
              </li>
              <li className="flex items-center mb-2">
                <MdKeyboard className="text-purple-500 mr-2" /> Mantenha os
                pulsos retos ao digitar.
              </li>
            </ul>
            <p>
              Seguir estas recomendações pode ajudar a prevenir problemas como
              dores nas costas, no pescoço e nos ombros, além de melhorar sua
              produtividade e conforto no trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErgonomicsSection;
