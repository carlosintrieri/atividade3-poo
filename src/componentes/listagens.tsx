import { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import CSS from "csstype";
import M from "materialize-css";


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

const Listagens = () => {
  useEffect(() => {
    M.AutoInit();
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
          <a style={botaoStyle} href="/listagens">
            Listagens
          </a>
        </div>
      </nav>

      <div className="container center">
        <h4>
          <strong> Listagens por Consumo </strong>
        </h4>
        <br />
        <div className="row">
          <div className="">
            <ul className="tabs-swipe-demo tabs tabsConsumo ">
              <li className="tab col s3">
                <a href="#1" style={{ color: "black", fontSize: "10px" }}>
                  Cliente Consumo Valor
                </a>
              </li>
              <li className="tab col s2">
                <a href="#2" style={{ color: "black", fontSize: "10px" }}>
                  Cliente Maior Qtd
                </a>
              </li>
              <li className="tab col s3">
                <a href="#3" style={{ color: "black", fontSize: "10px" }}>
                  Cliente Menor Consumo
                </a>
              </li>
              <li className="tab col s2">
                <a href="#4" style={{ color: "black", fontSize: "10px" }}>
                  Prod/Serv Consumo
                </a>
              </li>
              <li className="tab col s2">
                <a href="#5" style={{ color: "black", fontSize: "10px" }}>
                  Consumo Gênero
                </a>
              </li>
            </ul>
          </div>

          <div id="1" className="col s12">
            <form>
              <div>
                <table className="responsive-table centered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nome</th>
                      <th>CPF</th>
                      <th>Telefone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Cliente 1</td>
                      <td>000.000.000.00</td>
                      <td>(00)00000-0000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div id="2" className="col s12">
            <form>
              <div>
                <table className="responsive-table centered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nome</th>
                      <th>CPF</th>
                      <th>Total Consumido</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Cliente 1</td>
                      <td>000.000.000.00</td>
                      <td>...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div id="3" className="col s12">
            <form>
              <div>
                <table className="responsive-table centered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nome</th>
                      <th>CPF</th>
                      <th>Total consumido</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Cliente 1</td>
                      <td>000.000.000.00</td>
                      <td>...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div id="4" className="col s12">
            <form>
              <div>
                <table className="responsive-table centered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nome do Produto/Serviço</th>
                      <th>Valor do Produto/Serviço</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div id="5" className="col s12">
            <form>
              <h5 className="generoConsumoFont">Feminino</h5>
              <div>
                <table className="responsive-table centered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nome do Produto/Serviço</th>
                      <th>Valor do Produto/Serviço</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <h5 className="generoConsumoFont">Masculino</h5>
              <div>
                <table className="responsive-table centered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nome do Produto/Serviço</th>
                      <th>Valor do Produto/Serviço</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listagens;
