import { useState } from "react";
import CSS from "csstype";

type Cliente = {
  id: string;
  nome: string;
  cpf: string;
  rg: string;
  dataEmissao: string;
  telefone: string;
  dataCadastro: string;
};

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

const CadastroCliente = () => {
  const [cliente, setCliente] = useState<Cliente>({
    id: "",
    nome: "",
    cpf: "",
    rg: "",
    dataEmissao: "",
    telefone: "",
    dataCadastro: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const clienteNovo = {
      ...cliente,
      id: String(Date.now()),
    };

    const clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
    clientes.push(clienteNovo);
    localStorage.setItem("clientes", JSON.stringify(clientes));

    setCliente({
      id: "",
      nome: "",
      cpf: "",
      rg: "",
      dataEmissao: "",
      telefone: "",
      dataCadastro: "",
    });

    alert("Cliente cadastrado com sucesso!");
  };

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
        <h5 className="center-align">Cadastro de Cliente</h5>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={cliente.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label>CPF:</label>
            <input
              type="text"
              name="cpf"
              value={cliente.cpf}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label>RG:</label>
            <input
              type="text"
              name="rg"
              value={cliente.rg}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label>Data Emissão:</label>
            <input
              type="date"
              name="dataEmissao"
              value={cliente.dataEmissao}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label>Telefone:</label>
            <input
              type="text"
              name="telefone"
              value={cliente.telefone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label>Data Cadastro:</label>
            <input
              type="date"
              name="dataCadastro"
              value={cliente.dataCadastro}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" style={botaoStyle}>
            Registrar Cliente
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroCliente;
