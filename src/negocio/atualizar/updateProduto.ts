import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Update from "./update";

export default class updateProduto extends Update {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada();
    }
    public update(): void {
        console.log();
        console.log(`Lista de todos os Produtos`);
        this.produtos.forEach(Produto => {
            console.log(`Produto: ${Produto.getNomeProduto}`);
        })
        console.log();
        let entrada = this.entrada.receberTexto(`Escolha o nome do produto que quer editar: `)
        let ListaProdutos = this.produtos.map(i => i.getNomeProduto)
        let IndexOF = ListaProdutos.indexOf(entrada)

        if (IndexOF == -1) {
            console.log(`Produto ${entrada} não encontrado`);
            console.log();
        } else {
            let novoNome = this.entrada.receberTexto(`Digite o novo nome do produto: `)
            let novoPreco = this.entrada.receberNumero(`Digite o novo preço do produto: R$`)
            this.produtos.filter(produto => produto.getNomeProduto == entrada).map(i => i.setCusto = novoPreco)
            this.produtos.filter(produto => produto.getNomeProduto == entrada).map(i => i.setNomeProduto = novoNome)
            console.log(`O produto foi editado com sucesso`);
        }
    }
}