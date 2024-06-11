import React, { createContext, useContext, useState } from 'react';

// Criando o contexto
export const CarrinhoContext = createContext();

// Provedor do contexto
export const CarrinhoProvider = ({ children }) => {
  const [eventos, setEventos] = useState([]);

  const adicionarEvento = (novoEvento) => {
    setEventos((prevEventos) => {
      const eventoExiste = prevEventos.some(evento => evento.eventData.id === novoEvento.eventData.id);
      if (!eventoExiste) {
        return [...prevEventos, novoEvento];
      }
      return prevEventos;
    });
  };

  const removerEvento = (id) => {
    setEventos((prevEventos) => prevEventos.filter(evento => evento.eventData.id !== id));
  };

  return (
    <CarrinhoContext.Provider value={{ eventos, adicionarEvento, removerEvento }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

// Hook para usar o contexto do carrinho
export const useCarrinho = () => useContext(CarrinhoContext);
