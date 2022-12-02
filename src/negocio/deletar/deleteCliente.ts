import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Delete from "./delete"

export default class deleteCliente extends Delete {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    public delete(): void {
        console.log(`--------------------------------------`);
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach((cliente) => {
            console.log(`Nome: ${cliente.nome}`);
        })
        console.log();
        let ListaClientes = this.clientes.map(i => i.nome)
        let entrada = this.entrada.receberTexto(`Insira o nome de um cliente da lista:  `)
        let IndexOF = ListaClientes.indexOf(entrada)

        if (IndexOF == -1) {
            console.log(`O cliente ${entrada} não existe`);
        } else {
            let execucao = true
            while (execucao) {
                console.log(`--------------------------------------`);
                console.log(`Tem certeza que deseja deletar o cliente?`);
                console.log(`(1) Sim`);
                console.log(`(2) Não`);
                let escolha = this.entrada.receberNumero(`Digite uma das opções para continuar: `)
                switch (escolha) {
                    case 1:
                        this.clientes.map(i => {
                            if (entrada === i.nome) {
                                let index = this.clientes.indexOf(i)
                                this.clientes.splice(index, 1)
                            }
                        })
                        console.log(`O Cliente foi deletado com sucesso`);
                    case 2:
                        execucao = false
                        break;
                }
            }
        }
    }
}
