import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemProSerMaisConsumidos extends Listagem {
    private cliente: Array<Cliente>
    constructor(cliente: Array<Cliente>) {
        super()
        this.cliente = cliente
    }
    public listar(): void {
        let produtos: any = []
        this.cliente.map(i => {
            i.getProdutosConsumidos.forEach(i => {
                let nome = i.getNomeProduto
                let quantidade = produtos[i.getNomeProduto] = (produtos[i.getNomeProduto] || 0) + 1
                produtos.push({
                    quantidade: quantidade,
                    nome: nome,
                })
            }
            )
        })
        let ordernar = produtos.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
        });
        let restricao = ordernar.slice(0, 10)
        console.log(`Produto mais consumido`);
        restricao.forEach((consumidos: { nome: string, quantidade: string, genero: string }) => {
            console.log(`Nome: ${consumidos.nome}`);
            console.log(`Quantidade consumida ${consumidos.quantidade}`);
            console.log();
        })
        let servicos: any = []
        this.cliente.map(i => i.getServicosConsumidos.forEach(i => {
            let nome = i.getNomeServico
            let quantidade = servicos[i.getNomeServico] = (servicos[i.getNomeServico] || 0) + 1
            servicos.push({
                quantidade: quantidade,
                nome: nome
            })
        }
        ))
        ordernar = servicos.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
        });
        restricao = ordernar.slice(0, 10)
        console.log(`Serviço mais Consumido`);
        restricao.forEach((consumidos: { nome: string, quantidade: string, genero: string }) => {
            console.log(`Nome: ${consumidos.nome}`);
            console.log(`Quantidade consumida ${consumidos.quantidade}`);
            console.log();
        })










    }
}