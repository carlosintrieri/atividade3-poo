import { useState } from "react";
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

const ListaServicos = () => {
  const [servicos] = useState([
    { nomeServico: "Corte de Cabelo", preco: "R$ 50,00" },
    { nomeServico: "Depilação", preco: "R$ 40,00" },
    { nomeServico: "Maquiagem", preco: "R$ 70,00" },
    { nomeServico: "Manicure e Pedicure", preco: "R$ 30,00" },
    { nomeServico: "Hidratação de Cabelos", preco: "R$ 60,00" },
  ]);

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
        <h5 className="center-align">Lista de Serviços</h5>
        <table className="striped centered">
          <thead>
            <tr>
              <th>Serviço</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {servicos.map((servico, index) => (
              <tr key={index}>
                <td>{servico.nomeServico}</td>
                <td>R${servico.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaServicos;
