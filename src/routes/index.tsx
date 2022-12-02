import {
    BrowserRouter as Router,
    Route, 
    Routes
} from 'react-router-dom';
import { Home } from '../pages/Home';
import { Clientes } from '../pages/Lista/clientes';
import { Produtos } from '../pages/Lista/produtos';
import { Servicos } from '../pages/Lista/servicos';
import { Consumos } from '../pages/ListagensTOP10';
import { CadastrarClientes } from '../pages/Cadastro/clientes';
import { CadastrarProdutos } from '../pages/Cadastro/produtos';
import { CadastrarServico } from '../pages/Cadastro/servicos';
import { VisualizarCliente } from '../pages/Exemplos/clientes';
import { VisualizarProduto } from '../pages/Exemplos/produtos';
import { VisualizarServico } from '../pages/Exemplos/servicos';
import { EditarCliente } from '../pages/Update/clientes';
import { EditarProduto } from '../pages/Update/produtos';
import { EditarServico } from '../pages/Update/servicos';
import { Component } from 'react';

export class  AppRoute extends Component {
    render(){

        return (
            <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/clientes' element={<Clientes/>}/>
                <Route path='/produtos' element={<Produtos/>}/>
                <Route path='/servicos' element={<Servicos/>}/>
                <Route path='/consumos' element={<Consumos/>}/>
                <Route path='/cadastrar_cliente' element={<CadastrarClientes/>}/>
                <Route path='/cadastrar_produto' element={<CadastrarProdutos/>}/>
                <Route path='/cadastrar_servico' element={<CadastrarServico/>}/>
                <Route path='/clientes/1' element={<VisualizarCliente/>}/>
                <Route path='/produtos/1' element={<VisualizarProduto/>}/>
                <Route path='/servicos/1' element={<VisualizarServico/>}/>
                <Route path='/editar_cliente/1' element={<EditarCliente/>}/>
                <Route path='/editar_produto/1' element={<EditarProduto/>}/>
                <Route path='/editar_servico/1' element={<EditarServico/>}/>
            </Routes>
        </Router>
    );
}
}
