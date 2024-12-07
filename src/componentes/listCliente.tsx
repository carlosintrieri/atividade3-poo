import React, { useState, useEffect } from "react";
import CSS from "csstype";

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

const ListaClientes: React.FC = () => {
  const [clientes, setClientes] = useState<any[]>([]);

  useEffect(() => {
    const storedClientes = JSON.parse(localStorage.getItem("clientes") || "[]");

    if (storedClientes.length === 0) {
      const clientesFicticios = [
        {
          id: 1,
          nome: "João Silva",
          cpf: "123.456.789-01",
          rg: "MG-12.345.678",
          dataEmissao: "10/10/2020",
          telefone: "(31) 98765-4321",
          dataCadastro: "15/05/2021",
        },
        {
          id: 2,
          nome: "Maria Oliveira",
          cpf: "234.567.890-12",
          rg: "SP-23.456.789",
          dataEmissao: "20/06/2021",
          telefone: "(11) 91234-5678",
          dataCadastro: "17/07/2021",
        },
        {
          id: 3,
          nome: "Carlos Souza",
          cpf: "345.678.901-23",
          rg: "RJ-34.567.890",
          dataEmissao: "15/09/2021",
          telefone: "(21) 99876-5432",
          dataCadastro: "22/10/2021",
        },
        {
          id: 4,
          nome: "Ana Pereira",
          cpf: "456.789.012-34",
          rg: "MG-45.678.901",
          dataEmissao: "05/12/2020",
          telefone: "(31) 92345-6789",
          dataCadastro: "14/02/2021",
        },
        {
          id: 5,
          nome: "Pedro Costa",
          cpf: "567.890.123-45",
          rg: "SP-56.789.012",
          dataEmissao: "12/03/2022",
          telefone: "(11) 93214-8765",
          dataCadastro: "25/04/2022",
        },
      ];

      localStorage.setItem("clientes", JSON.stringify(clientesFicticios));
      setClientes(clientesFicticios);
    } else {
      setClientes(storedClientes);
    }
  }, []);

  return (
    <div>
      <nav className="">
        <div style={backgroundColor} className="nav-wrapper">
          <a className="brand-logo right" style={fontStyle}>
            World Beauty
          </a>
          <a style={botaoStyle} href="/cadServico">
            Cadastros
          </a>
          <a style={botaoStyle} href="/listaCliente">
            Cliente
          </a>
          <a style={botaoStyle} href="/listaProduto">
            Produto
          </a>
          <a style={botaoStyle} href="/listaPedidos">
            Consumo
          </a>
          <a style={botaoStyle} href="/listaServicos">
            Serviços
          </a>
          <a style={botaoStyle} href="/Listagens">
            Listagens
          </a>
        </div>
      </nav>

      <div className="container">
        <h5 className="center-align">Lista de Clientes</h5>
        {clientes.length === 0 ? (
          <p className="center-align">Nenhum cliente cadastrado.</p>
        ) : (
          <table className="highlight centered">
            <thead>
              <tr>
                <th>Id_Cliente</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>RG</th>
                <th>Data Emissão</th>
                <th>Telefone</th>
                <th>Data Cadastro</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente: any) => (
                <tr key={cliente.id}>
                  <td>{cliente.id}</td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.rg}</td>
                  <td>{cliente.dataEmissao}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.dataCadastro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ListaClientes;
