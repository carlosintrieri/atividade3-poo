import { useState, useEffect } from "react";
import CSS from "csstype";
import "materialize-css/dist/css/materialize.min.css";

const backgroundColor: CSS.Properties = {
  backgroundColor: "#000",
};

const botaoStyle: CSS.Properties = {
  padding: "10px",
  fontFamily: "arial",
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

const fontStyle: CSS.Properties = {
  fontSize: "xx-large",
  fontFamily: "arial",
  color: "#fff",
};

const ListaProduto = () => {
  const [produtos, setProdutos] = useState<{ nomeProduto: string; preco: string }[]>([]);

  // Função para carregar os produtos do localStorage
  const carregarProdutos = () => {
    const storedProducts = JSON.parse(localStorage.getItem("produtos") || "[]");
    setProdutos(storedProducts);
  };

  useEffect(() => {
    carregarProdutos();
  }, []); // Carrega os produtos quando a página é montada

  return (
    <div>
      <nav>
        <div style={backgroundColor} className="nav-wrapper">
          <a className="brand-logo right" style={fontStyle}>
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
        <h5 className="center-align">Lista de Produtos</h5>
        <table className="striped centered">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {produtos.length > 0 ? (
              produtos.map((produto, index) => (
                <tr key={index}>
                  <td>{produto.nomeProduto}</td>
                  <td>R${produto.preco}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2}>Nenhum produto cadastrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaProduto;
