import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'

function CadastroProdutos() {
        return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
            <h1>Cadastrar Produto</h1>
            <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Produto">Produto:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text"/>
                        </div>
                    </form>
                    <Button className="submit" variant="outline-dark" onClick={() => {alert('Cadastrado!'); }}>Cadastrar</Button>{' '}
                </div>
            </main>
        </section>
)};   

export default CadastroProdutos;