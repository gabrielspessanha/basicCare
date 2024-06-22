import Image from "next/image";
import React from "react";

const LeisureSection = () => {
  return (
    <section className="bg-purple-100 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:order-2 mb-8 lg:mb-0 lg:ml-8 relative">
            <Image
              src="/images/leisure.png"
              alt="Ilustração de lazer"
              className="animate-bounce"
              width={500}
              height={500}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-yellow-500 text-6xl font-bold"></p>
            </div>
          </div>
          <div className="lg:w-1/2 lg:order-1">
            <h2 className="text-4xl font-bold text-purple-600 mb-4">
              Valorizando seu Tempo de Lazer
            </h2>
            <p className="mb-6 text-lg">
              Aproveitar o tempo de lazer é fundamental para equilibrar sua vida
              profissional e pessoal. Aqui estão algumas ideias para integrar
              momentos de lazer na sua rotina:
            </p>
            <ul className="mb-8">
              <li className="mb-4">
                <span className="text-yellow-500 text-3xl font-bold">1. </span>{" "}
                Assista filmes ou séries: Escolha seus favoritos para relaxar.
              </li>
              <li className="mb-4">
                <span className="text-yellow-500 text-3xl font-bold">2. </span>{" "}
                Explore atividades ao ar livre: Caminhadas são ótimas para
                recarregar energias.
              </li>
              <li className="mb-4">
                <span className="text-yellow-500 text-3xl font-bold">3. </span>{" "}
                Pratique atividades criativas: Pintura ou artesanato podem ser
                terapêuticos.
              </li>
              <li className="mb-4">
                <span className="text-yellow-500 text-3xl font-bold">4. </span>{" "}
                Participe de esportes: Jogar basquete ou qualquer outro esporte
                pode ser divertido.
              </li>
            </ul>
            <p className="text-lg">
              Incorporar momentos de lazer na sua semana ajuda a recarregar
              energias e a manter uma mente mais saudável e criativa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeisureSection;
