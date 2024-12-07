import { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import CSS from "csstype";

type Props = {
  tema: string;
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

const FormularioCadastroServico: React.FC<Props> = ({ tema }) => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll("select");
      M.FormSelect.init(elems);
    });
  }, []);

  return (
    <div>
      <nav>
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
      <br />
      <div className="container">
        <h4 className="center-align">Cadastrar Pedidos</h4>
        <form className="col s12 formCli">
          <div className="row">
            <div className="input-field col s12 opcoes">
              <select>
                <option value="0">Selecione o Cliente</option>
              </select>
            </div>
            <div className="input-field col s12 opcoes">
              <select>
                <option value="1">Selecione o Serviço</option>
              </select>
            </div>
            <div className="input-field col s12 opcoes">
              <select>
                <option value="2">Selecione o Produto</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button style={botaoStyle} type="submit" name="action">
                Registrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioCadastroServico;
