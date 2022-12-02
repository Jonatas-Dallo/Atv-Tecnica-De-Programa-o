import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemGenero extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nClientes do sexo Masculino`);
        this.clientes.filter(i => i.genero == 'Masculino').map(cliente => console.log(`Nome: ${cliente.nome}`)).toString()
        console.log(`\nClientes do sexo Feminino`);
        this.clientes.filter(i => i.genero == 'Feminino').map(cliente => console.log(`Nome: ${cliente.nome}`)).toString()
        console.log();
    }

}