"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p>&copy; 2024 Todos os direitos reservados.</p>
        <p>Desenvolvidor por Gabriel Santos Pessanha</p>
      </div>
    </footer>
  );
};

export default Footer;
