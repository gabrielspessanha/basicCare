import Image from "next/image";
import styles from "../styles/main.module.css";

export default function Main() {
  return (
    <main className="">
      <div className="flex items-center mt-3 absolute z-20">
        <Image
          src={"/images/logo_site.png"}
          alt="logoGuiaGlobal"
          width={100}
          height={100}
        />
        <p className="text-white font-semibold">GUIA GLOBAL</p>
      </div>
      <div
        className={`w-full text-white flex flex-col gap-3 justify-center items-center text-center ${styles.Content} pl-5`}
      >
        <h1 className="text-3xl max-w-[32rem] font-extrabold">
          Cuidados Básicos para trabalhadores HOME-OFFICE
        </h1>
        <p className="max-w-[28remm]">
          Esse é um site com uma guia Rápido sobre cuidados básicos de saúde que
          podem melhorar a qualidade de vida de trabalhadores home-office
        </p>
      </div>

      <div className="text-center w-5/6 max-w-[52rem] min-h-96 mx-auto my-10 p-3 shadow-2xl rounded-lg flex flex-col justify-center gap-3">
        <h2 className="text-2xl text-blue-500 font-bold">
          Bem-vindo ao guia prático de cuidados para trabalhadores home-office!
        </h2>
        <p>
          Com o crescente número de profissionais migrando para o trabalho
          remoto, é essencial garantir um ambiente{" "}
          <span className="text-blue-500 font-semibold">saudável</span> e{" "}
          <span className="text-yellow-500 font-semibold">produtivo</span> em
          casa. Este site foi criado com o objetivo de oferecer orientações
          simples e eficazes para ajudá-lo a melhorar sua{" "}
          <span className="text-blue-500 font-semibold">saúde</span>,{" "}
          <span className="text-blue-500 font-semibold">bem-start</span> e{" "}
          <span className="text-sky-800 font-semibold">desenhepenho</span>{" "}
          enquanto trabalha remotamente. Desde{" "}
          <span className="text-amber-800 font-semibold">ergonomia</span>{" "}
          adequada até dicas para manter uma rotina equilibrada, exploraremos
          como você pode transformar seu espaço de trabalho em um ambiente ideal
          para o sucesso profissional.
        </p>
        <p className="text-gray-500">
          Continue lendo para descobrir como pequenos ajustes podem fazer uma
          grande diferença!
        </p>
      </div>
    </main>
  );
}
