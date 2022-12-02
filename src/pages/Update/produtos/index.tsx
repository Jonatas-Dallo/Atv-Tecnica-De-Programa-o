import { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'
import './style.css'

export class EditarProduto extends Component {
    render(){

        return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <div className='Column'>
                    <Button  variant="outline-dark" href='/clientes' className="voltar">Voltar</Button>{' '}
                    <Button variant="outline-success" className="salvar" onClick={() => {alert('Salvo'); }}>Salvar</Button>{' '}
                </div>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Produto">Produto:</label>
                            <input type="text" defaultValue="Shampoo"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text" defaultValue="200"/>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    )
}
};