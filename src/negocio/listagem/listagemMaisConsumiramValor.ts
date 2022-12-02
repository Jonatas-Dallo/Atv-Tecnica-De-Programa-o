import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class listagemMaisConsumiramValor extends Listagem {
    private cliente: Array<Cliente>
    constructor(cliente: Array<Cliente>) {
        super()
        this.cliente = cliente
    }
    public listar(): void {
        let valores: any = []
        this.cliente.forEach((itens) => {
            let reducer = (soma, index) => soma + index;
            let nomes = itens.nome
            let mapValoresProduto = itens.getProdutosConsumidos.map(i => i.getCusto)
            let valorFinalProduto = mapValoresProduto.reduce(reducer)
            let mapValoresServico = itens.getServicosConsumidos.map(i => i.getCusto)
            let valorFinalServico = mapValoresServico.reduce(reducer)
            valores.push({
                nome: nomes,
                precosProdutos: valorFinalProduto,
                precosServicos: valorFinalServico
            })
        })
        let ordenacaoProdutos = valores.sort((
            a: { precosProdutos: number; },
            b: { precosProdutos: number; }) => {
            return (
                b.precosProdutos - a.precosProdutos
            );
        });
        let restricao = ordenacaoProdutos.slice(0, 5)
        console.log();
        console.log("Clientes que mais consumiram em valor os Produtos");
        console.log('');
        restricao.forEach((consumidos: { nome: string, precosProdutos: number }) => {
            console.log(`Nome: ${consumidos.nome}`);
            console.log(`Produtos R$${consumidos.precosProdutos}`);
            console.log();
        })
        let ordenacaoServicos = valores.sort((
            a: { precosServicos: number },
            b: { precosServicos: number }) => {
            return (
                b.precosServicos - a.precosServicos
            );
        });
        restricao = ordenacaoServicos.slice(0, 5)
        console.log("Clientes que mais consumiram em valor os Servicos");
        restricao.forEach((consumidos: { nome: string, precosServicos: number }) => {
            console.log(`Nome: ${consumidos.nome}`);
            console.log(`Serviços R$${consumidos.precosServicos}`);
            console.log();
        })
    }
}