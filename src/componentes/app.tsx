import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PaginaInicial from "./paginaInicial";
import ListaCliente from "./listCliente";
import FormularioCadastroCliente from "./cadCliente";
import ListaProduto from "./listProduto";
import FormularioCadastroProduto from "./cadProduto";
import FormularioCadastroServico from "./cadServico";
import FormularioCadastroConsumo from "./cadConsumo";
import Produtos from "./produto";
import ListaPedidos from "./listConsumo";
import Clientes from "./cliente";
import Servicos from "./servico";
import ListaSevicos from "./listServico";
import Listagens from "./listagens";
import FormularioEdicaoProduto from "./editProduto";
import FormularioEdicaoServico from "./editServico";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PaginaInicial />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/Listagens" element={<Listagens />} />
        <Route path="/listaCliente" element={<ListaCliente />} />
        <Route path="/listaProduto" element={<ListaProduto />} />
        <Route path="/listaPedidos" element={<ListaPedidos />} />
        <Route path="/listaServicos" element={<ListaSevicos />} />
        <Route path="/cadCliente" element={<FormularioCadastroCliente />} />
        <Route path="/cadProduto" element={<FormularioCadastroProduto />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
