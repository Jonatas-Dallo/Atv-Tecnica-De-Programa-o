import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar';
import './styles.css'

function CadastroCliente() {
    return (
        <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Cadastrar Cliente</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Nome">Nome:</label>
                            <input type="text" className="nome"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Social">Nome social:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Genero">Gênero:</label>
                            <select name="genero" id="genero">
                                <option>Selecione seu genero</option>
                                <option>Feminino</option>
                                <option>Masculino</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="cpf">CPF:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="rg">RG:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Telefone">Telefone:</label>
                            <input type="text"/>
                        </div>
                    </form>
                    <Button className="submit" variant="outline-dark" onClick={() => {alert('Cadastrado!'); }}>Cadastrar</Button>{' '}
                </div>
            </main>
        </section>
)};

export default CadastroCliente;