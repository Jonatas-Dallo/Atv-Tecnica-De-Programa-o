import { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'

export class Produtos extends Component {
    render() {

        return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Produtos</h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Editar</th>
                            <th>Remover</th>
                            <th>Informações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Shampoo</td>
                                <td>R$200</td>
                                <td>
                                    <Button variant="success" href="/editar_produto/1">Editar</Button>{' '}
                                </td>  
                                <td>
                                    <Button variant="danger"  onClick={() => {alert('Deletado!'); }}>Remover</Button>{' '}
                                </td>   
                                <td>
                                    <Button variant="primary" href='/produtos/1'>Informações</Button>{' '}
                                </td> 
                            </tr>
                            <tr>
                                <td>Condicionador</td>
                                <td>R$11</td>
                                <td>
                                    <Button variant="success" >Editar</Button>{' '}
                                </td>  
                                <td>
                                    <Button variant="danger"  onClick={() => {alert('Deletado!'); }}>Remover</Button>{' '}
                                </td>   
                                <td>
                                    <Button variant="primary" >Informações</Button>{' '}
                                </td> 
                            </tr>
                            <tr>
                                <td>Sabonete</td>
                                <td>R$15</td>
                                <td>
                                    <Button variant="success" >Editar</Button>{' '}
                                </td>  
                                <td>
                                    <Button variant="danger"  onClick={() => {alert('Deletado!'); }}>Remover</Button>{' '}
                                </td>   
                                <td>
                                    <Button variant="primary" >Informações</Button>{' '}
                                </td> 
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
}
}
