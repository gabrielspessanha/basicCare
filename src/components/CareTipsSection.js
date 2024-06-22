import React from "react";

const CareTipsSection = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-4">
          Alguns dos cuidados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Ergonomia
            </h3>
            <p>
              Adote uma postura correta, utilize cadeiras ergonômicas e ajuste a
              altura da tela para evitar problemas de saúde.
            </p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Rotina
            </h3>
            <p>
              Estabeleça um horário fixo para trabalhar e faça pausas regulares
              para descansar a mente e o corpo.
            </p>
          </div>
          <div className="p-6 bg-yellow-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">
              Ambiente
            </h3>
            <p>
              Crie um ambiente de trabalho dedicado, bem iluminado e organizado
              para aumentar a produtividade.
            </p>
          </div>
          <div className="p-6 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              Movimentação
            </h3>
            <p>
              Incorpore atividades físicas na sua rotina diária para manter o
              corpo ativo e evitar sedentarismo.
            </p>
          </div>
          <div className="p-6 bg-red-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Saúde Mental
            </h3>
            <p>
              Faça pausas para relaxar, meditar ou praticar hobbies que ajudem a
              reduzir o estresse e a ansiedade.
            </p>
          </div>
          <div className="p-6 bg-teal-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-teal-600 mb-2">
              Conexão
            </h3>
            <p>
              Mantenha contato regular com colegas e amigos para evitar o
              isolamento social.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareTipsSection;
