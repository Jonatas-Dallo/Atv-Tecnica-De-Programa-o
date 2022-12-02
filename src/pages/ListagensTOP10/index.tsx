import { Button, Table } from 'react-bootstrap';
import  NavBar_  from '../../component/NavBar'

function ListagensTOP10() {
        return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Consumos</h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                            <th>Nome</th>
                            <th>Lista</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lista dos 10 clientes que mais consumiram em quantidade</td>
                                <td>
                                    <Button variant="primary" >Ver listagem</Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>Lista dos clientes por genero</td>
                                <td>
                                    <Button variant="primary" >Ver listagem</Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>Lista de produtos e serviços mais consumidos</td>
                                <td>
                                    <Button variant="primary" >Ver listagem</Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>Listagem dos serviços ou produtos mais consumidos por gênero</td>
                                <td>
                                    <Button variant="primary" >Ver listagem</Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>Lista dos 10 clientes que menos consumiram produtos ou serviços</td>
                                <td>
                                    <Button variant="primary" >Ver listagem</Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>Lista dos 5 clientes que mais consumiram em valor(R$)</td>
                                <td>
                                    <Button variant="primary" >Ver listagem</Button>{' '}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
)};

export default ListagensTOP10;