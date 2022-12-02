import Produto from "../../modelo/produto";
import Gerar from "./gerar";

export default class GerarProduto extends Gerar {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public gerar(): void {
        let nomeProduto = 'Shampoo'
        let custo = 10.00
        let produto = new Produto(nomeProduto, custo);
        this.produtos.push(produto)
    }
    public gerar2(): void {
        let nomeProduto = 'Condicionador'
        let custo = 20.00
        let produto = new Produto(nomeProduto, custo);
        this.produtos.push(produto)
    }
    public gerar3(): void {
        let nomeProduto = 'Sabonete'
        let custo = 30.00
        let produto = new Produto(nomeProduto, custo);
        this.produtos.push(produto)
    }
    public gerar4(): void {
        let nomeProduto = 'Hidratante'
        let custo = 40.00
        let produto = new Produto(nomeProduto, custo);
        this.produtos.push(produto)
    }
    public gerar5(): void {
        let nomeProduto = 'Toalha'
        let custo = 50.00
        let produto = new Produto(nomeProduto, custo);
        this.produtos.push(produto)
    }
    public gerar6(): void {
        let nomeProduto = 'Perfume'
        let custo = 60.00
        let produto = new Produto(nomeProduto, custo);
        this.produtos.push(produto)
    } 
    public gerar7(): void {
        let nomeProduto = 'Esmalte'
        let custo = 70.00
        let produto = new Produto(nomeProduto, custo);
        this.produtos.push(produto)
    }
    public gerar8(): void {
        let nomeProduto = 'Óleo'
        let custo = 80.00
        let produto = new Produto(nomeProduto, custo);
        this.produtos.push(produto)
    }
    public gerar9(): void {
        let nomeProduto = 'Prendedor de cabelo'
        let custo = 90.00
        let produto = new Produto(nomeProduto, custo);
        this.produtos.push(produto)
    }
    public gerar10(): void {
        let nomeProduto = 'Tinta de cabelo'
        let custo = 100.00
        let produto = new Produto(nomeProduto, custo);
        this.produtos.push(produto)
        console.log(`\nProdutos cadastrados com sucesso`);
    }
}