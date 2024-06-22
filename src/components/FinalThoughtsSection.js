import React from "react";

const FinalThoughtsSection = () => {
  return (
    <section className="bg-green-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-600 mb-8">
            Considerações Finais
          </h2>
          <p className="text-lg mb-8">
            Para mais informações detalhadas sobre cuidados básicos no
            home-office, visite o site do Instituto SC:
          </p>
          <a
            href="https://www.institutosc.com.br/web/blog/orientacoes-de-saude-e-seguranca-do-trabalho-no-home-office/1000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded transition duration-200 inline-block"
          >
            Visite o site
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalThoughtsSection;
