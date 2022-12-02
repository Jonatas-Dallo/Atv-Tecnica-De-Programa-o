import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'
import './style.css'

function UpdateCliente() {
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
                            <label htmlFor="Nome" >Nome:</label>
                            <input type="text" defaultValue="Arthur"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Sobrenome">Sobrenome:</label>
                            <input type="text" defaultValue="Cervero"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Social">Nome social:</label>
                            <input type="text" defaultValue="Arthur"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Genero">Gênero:</label>
                            <input type="text" defaultValue="Masculino"/>
                        </div>
                        <div className="field">
                            <label htmlFor="cpf">CPF:</label>
                            <input type="text" defaultValue="123.456.789-10"/>
                        </div>
                        <div className="field">
                            <label htmlFor="rg">RG:</label>
                            <input type="text" defaultValue="987.654.321/01"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Telefone">Telefone:</label>
                            <input type="text" defaultValue="012 94002-8922"/>
                        </div>
                    </form>
                </div>
            </main>
        </section>
)};

export default UpdateCliente;