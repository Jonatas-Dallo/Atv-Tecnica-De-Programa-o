import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemMenosConsumiramQuantidade extends Listagem {
    private cliente: Array<Cliente>
    constructor(cliente: Array<Cliente>) {
        super()
        this.cliente = cliente
    }
    public listar(): void {
        let clientesMaisConsumiram: any = []
        this.cliente.forEach(quantidade => {
            let nomeCliente = quantidade.nome
            let quantidadeConsumido = quantidade.getProdutosConsumidos.length + quantidade.getServicosConsumidos.length
            clientesMaisConsumiram.push({ nome: nomeCliente, quantidade: quantidadeConsumido })
        })
        let ordernar = clientesMaisConsumiram.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return a.quantidade - b.quantidade;
        });
        let Max10 = ordernar.slice(0, 10)
        console.log(`--------------------------------------`);
        console.log(`Lista dos 10 clientes que menos consumiram produtos e serviços em quantidade`);
        Max10.forEach((clientesMaisConsumiram: { nome: string; quantidade: string }) => {
            console.log(`Nome: ${clientesMaisConsumiram.nome}`);
            console.log(`Quantidade total consumido: ${clientesMaisConsumiram.quantidade} itens`);
            console.log();
        })
        console.log(`--------------------------------------`);

    }
}