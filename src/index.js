import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './styles/globalStyle'; // Importando os estilos globais corretamente
import Routes from "./routes"

const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(
    <>
    <Routes />
        <GlobalStyle /> {/* Renderizando os estilos globais */}
        
    </>
);