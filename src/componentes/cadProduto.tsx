import React, { useState } from "react";
import CSS from "csstype";

const backgroundColor: CSS.Properties = {
  backgroundColor: "#000000",
};

const botaoStyle: CSS.Properties = {
  padding: "12px 20px",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#333333",
  color: "#FFFFFF",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const fontStyle: CSS.Properties = {
  fontSize: "xx-large",
  fontFamily: "Arial, sans-serif",
  color: "#FFFFFF",
};

const CadProduto: React.FC = () => {
  const [nomeProduto, setNomeProduto] = useState("");
  const [preco, setPreco] = useState("");

  // Função para atualizar o estado ao digitar no campo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "nomeProduto") {
      setNomeProduto(value);
    } else if (name === "preco") {
      setPreco(value);
    }
  };

  // Função chamada no envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Criar um novo objeto de produto
    const newProduct = { nomeProduto, preco };

    // Recupera os produtos armazenados no localStorage
    const storedProducts = JSON.parse(localStorage.getItem("produtos") || "[]");

    // Adiciona o novo produto à lista de produtos
    storedProducts.push(newProduct);

    // Atualiza o localStorage com a nova lista de produtos
    localStorage.setItem("produtos", JSON.stringify(storedProducts));

    console.log("Produto registrado:", { nomeProduto, preco });

    // Limpa os campos de entrada após o registro
    setNomeProduto("");
    setPreco("");
  };

  return (
    <div>
      <nav>
        <div style={backgroundColor} className="nav-wrapper">
          <a className="brand-logo center" style={fontStyle}>
            World Beauty
          </a>
          <a style={botaoStyle} href="/cadServico">Cadastros</a>
          <a style={botaoStyle} href="/listaCliente">Cliente</a>
          <a style={botaoStyle} href="/listaProduto">Produto</a>
          <a style={botaoStyle} href="/listaPedidos">Consumo</a>
          <a style={botaoStyle} href="/listaServicos">Serviços</a>
          <a style={botaoStyle} href="/Listagens">Listagens</a>
        </div>
      </nav>
      <br />
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="nome_produto"
                  type="text"
                  name="nomeProduto"
                  value={nomeProduto}
                  onChange={handleChange}
                  className="validate"
                />
                <label htmlFor="nome_produto">Nome</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="preco"
                  type="text"
                  name="preco"
                  value={preco}
                  onChange={handleChange}
                  className="validate"
                />
                <label htmlFor="preco">Preço</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <button
                  style={botaoStyle}
                  type="submit"
                  name="action"
                >
                  Registrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadProduto;
