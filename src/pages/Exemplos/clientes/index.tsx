import { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar';
import './style.css'

export class VisualizarCliente extends Component {
    render(){

        return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <Button  variant="outline-dark" href='/clientes' className="Voltar">Voltar</Button>{' '}
                <Card bg="white" text="dark" style={{ width: '250px' }} className="mb-2">
                    <Card.Header>ID: 1</Card.Header>
                    <Card.Body>
                        <Card.Title>Arthur Cervero</Card.Title>
                        <Card.Text>
                            Nome Social: Arthur
                        </Card.Text>
                        <Card.Text>
                            Gênero: Masculino
                        </Card.Text>
                        <Card.Text>
                            CPF: 123.456.789-10
                        </Card.Text>
                        <Card.Text>
                            RG: 98.765.432/01
                        </Card.Text>
                        <Card.Text>
                            Telefone: 12 4002-8922
                        </Card.Text>
                    </Card.Body>
                </Card>
            </main>
        </section>
    )
}
};