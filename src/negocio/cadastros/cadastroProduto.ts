import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        let nomeProduto = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let verificação = this.produtos.map(i => (i.getNomeProduto))
        if (verificação.includes(nomeProduto)) {
            console.log(`${nomeProduto} já foi cadastrado`);
            console.log();
        } else {
            let custo = this.entrada.receberNumero('Por favor insira o preço do produto R$:')
            let produto = new Produto(nomeProduto, custo);
            this.produtos.push(produto)
            console.log(`\nCadastro concluído :)\n`);
        }
    }
}