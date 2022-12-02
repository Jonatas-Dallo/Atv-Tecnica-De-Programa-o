import { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'
import './styles.css'

export class Clientes extends Component {
    render() {

        return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Lista de clientes</h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                            <th>Nome</th>
                            <th>Editar</th>
                            <th>Remover</th>
                            <th>Informações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                <p>Arthur Cervero</p>
                                </td>                              
                                <td>
                                    <Button variant="success" href='/editar_cliente/1'>Editar</Button>{' '}
                                </td>  
                                <td>
                                    <Button variant="danger" onClick={() => {alert('Deletado!'); }}>Remover</Button>{' '}
                                </td>   
                                <td>
                                    <Button variant="primary" href='/clientes/1'>Informações</Button>{' '}
                                </td>                
                            </tr>
                            <tr>
                                <td>
                                <p>Elizabet Weber</p>
                                </td>                              
                                <td>
                                    <Button variant="success" href='/editar_cliente/2'>Editar</Button>{' '}
                                </td>  
                                <td>
                                    <Button variant="danger"  onClick={() => {alert('Deletado!'); }}>Remover</Button>{' '}
                                </td>   
                                <td>
                                    <Button variant="primary" >Informações</Button>{' '}
                                </td>              
                            </tr>
                            <tr>
                                <td>
                                <p>Joui Jouke</p>
                                </td>                              
                                <td>
                                    <Button variant="success" >Editar</Button>{' '}
                                </td>  
                                <td>
                                    <Button variant="danger"  onClick={() => {alert('Deletado!'); }}>Remover</Button>{' '}
                                </td>   
                                <td>
                                    <Button variant="primary">Informações</Button>{' '}
                                </td>            
                            </tr>
                            <tr>
                                <td>
                                <p>Thiago da Silva</p>
                                </td>                              
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
                                <td>
                                <p>Ana Maria</p>
                                </td>                              
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