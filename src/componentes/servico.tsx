import { useState } from "react";
import CSS from "csstype";
import editar from "../Assets/edit.png";
import excluir from "../Assets/delete.png";
import { Link } from "react-router-dom";

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

const ImagemStyle: CSS.Properties = {
  padding: "5px",
  maxHeight: "30px",
  maxWidth: "30px",
};

const Servicos = () => {
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
        <table className="highlight centered">
          <thead>
            <tr>
              <th>Serviço</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {[
              { nome: "Depilação Facial", preco: "R$ 50,00" },
              { nome: "Hidratação Capilar", preco: "R$ 80,00" },
              { nome: "Manicure e Pedicure", preco: "R$ 40,00" },
              { nome: "Design de Sobrancelhas", preco: "R$ 45,00" },
              { nome: "Maquiagem Profissional", preco: "R$ 120,00" },
            ].map((servico, index) => (
              <tr key={index}>
                <td>{servico.nome}</td>
                <td>{servico.preco}</td>
                <td>
                  <Link to="/formularioEdicaoServico">
                    <img src={editar} style={ImagemStyle} alt="editar" />
                  </Link>
                  <img src={excluir} style={ImagemStyle} alt="excluir" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Servicos;
