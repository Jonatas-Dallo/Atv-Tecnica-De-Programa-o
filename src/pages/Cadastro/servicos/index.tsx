import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'

function CadastroServico() {
        return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Cadastrar Serviço</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Servico">Serviço:</label>
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

export default CadastroServico;