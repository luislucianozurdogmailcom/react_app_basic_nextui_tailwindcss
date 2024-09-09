// src/components/Home.js
import React from 'react';
import NextUIExample from '../Components/NextUIExample';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full bg-blue-600 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Bienvenido a la Página Principal</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-semibold mb-4">Página de Inicio</h2>
        <p className="text-gray-700 text-center mb-4">
          Esta es la página principal de tu aplicación. Aquí puedes añadir la información inicial y enlaces a otras secciones.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          Empezar
        </button>
      </main>
      <NextUIExample />
      <footer className="w-full bg-gray-800 p-4 text-white text-center">
        <p>&copy; 2023 TGenu Aplicación. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
