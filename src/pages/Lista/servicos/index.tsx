import { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'

export class Servicos extends Component {
    render(){

        return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Serviços</h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                            <th>Serviço</th>
                            <th>Preço</th>
                            <th>Editar</th>
                            <th>Remover</th>
                            <th>Informações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Corte de cabelo</td>
                                <td>R$15</td>
                                <td>
                                    <Button variant="success" href='/editar_servico/1'>Editar</Button>{' '}
                                </td>  
                                <td>
                                    <Button variant="danger"  onClick={() => {alert('Deletado!'); }}>Remover</Button>{' '}
                                </td>   
                                <td>
                                    <Button variant="primary" href='/servicos/1'>Informações</Button>{' '}
                                </td> 
                            </tr>
                            <tr>
                                <td>Pedicure</td>
                                <td>R$20</td>
                                <td>
                                    <Button variant="success">Editar</Button>{' '}
                                </td>  
                                <td>
                                    <Button variant="danger"  onClick={() => {alert('Deletado!'); }}>Remover</Button>{' '}
                                </td>   
                                <td>
                                    <Button variant="primary">Informações</Button>{' '}
                                </td> 
                            </tr>
                            <tr>
                                <td>Manicure</td>
                                <td>R$30</td>
                                <td>
                                    <Button variant="success">Editar</Button>{' '}
                                </td>  
                                <td>
                                    <Button variant="danger"  onClick={() => {alert('Deletado!'); }}>Remover</Button>{' '}
                                </td>   
                                <td>
                                    <Button variant="primary">Informações</Button>{' '}
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