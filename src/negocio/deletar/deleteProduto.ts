import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Delete from "./delete";

export default class deleteProduto extends Delete {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada();
    }
    public delete(): void {
        console.log(`--------------------------------------`);
        console.log(`Lista de todos os Produtos`);
        this.produtos.forEach(produto => {
            console.log(`Produto: ${produto.getNomeProduto}`);
        })
        console.log();
        let ListaProdutos = this.produtos.map(i => i.getNomeProduto)

        let entrada = this.entrada.receberTexto(`Nome do produto que deseja deletar: `)
        let IndexOF = ListaProdutos.indexOf(entrada)

        if (IndexOF == -1) {
            console.log(`O produto ${entrada} não foi encontrado`);
        } else {
            let execucao = true
            while (execucao) {
                console.log(`--------------------------------------`);
                console.log(`Tem certeza que deseja deletar o produto?`);
                console.log(`(1) Sim`);
                console.log(`(2) Não`);
                let escolha = this.entrada.receberNumero(`Digite uma das opções para continuar: `)
                switch (escolha) {
                    case 1:
                        this.produtos.map(i => {
                            if (entrada === i.getNomeProduto) {
                                let index = this.produtos.indexOf(i)
                                this.produtos.splice(index, 1)
                            }
                        })
                        console.log(`O produto foi deletado com sucesso`);
                    case 2:
                        execucao = false
                        break;
                }
            }
        }
    }
}