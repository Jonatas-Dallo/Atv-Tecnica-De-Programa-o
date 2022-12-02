import {
    BrowserRouter as Router,
    Route, 
    Routes
} from 'react-router-dom';
import Home from '../pages/Home';
import ListaCliente from '../pages/Lista/clientes';
import ListaProduto from '../pages/Lista/produtos';
import ListaServico from '../pages/Lista/servicos';
import ListagensTOP10 from '../pages/ListagensTOP10';
import CadastroCliente from '../pages/Cadastro/clientes';
import CadastroProdutos from '../pages/Cadastro/produtos';
import CadastroServico from '../pages/Cadastro/servicos';
import UpdateCliente from '../pages/Update/clientes';
import UpdateProduto from '../pages/Update/produtos';
import UpdateServico from '../pages/Update/servicos';
import ExemploCliente from '../pages/Exemplos/clientes';
import ExemploProduto from '../pages/Exemplos/produtos';
import ExemploServico from '../pages/Exemplos/servicos';

function AppRoute() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/clientes' element={<ListaCliente/>}/>
                <Route path='/produtos' element={<ListaProduto/>}/>
                <Route path='/servicos' element={<ListaServico/>}/>
                <Route path='/consumos' element={<ListagensTOP10/>}/>
                <Route path='/cadastrar_cliente' element={<CadastroCliente/>}/>
                <Route path='/cadastrar_produto' element={<CadastroProdutos/>}/>
                <Route path='/cadastrar_servico' element={<CadastroServico/>}/>
                <Route path='/clientes/1' element={<ExemploCliente/>}/>
                <Route path='/produtos/1' element={<ExemploProduto/>}/>
                <Route path='/servicos/1' element={<ExemploServico/>}/>
                <Route path='/editar_cliente/1' element={<UpdateCliente/>}/>
                <Route path='/editar_produto/1' element={<UpdateProduto/>}/>
                <Route path='/editar_servico/1' element={<UpdateServico/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoute;