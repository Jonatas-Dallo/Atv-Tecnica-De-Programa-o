import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Cadastro from "./cadastro";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes;
        this.servicos = servicos;
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public cadastrar(): Cliente {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let genero = this.entrada.receberTexto('Por favor Informe o gênero, no padrão "Masculino" ou "Feminino": ')
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `)
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `)
        let valor2 = this.entrada.receberTexto(`Por favor informe o número do RG: `)
        let data2 = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `)
        let ddd = this.entrada.receberTexto(`Por favor informe o ddd do seu telefone no padrão (xxx): `)
        let numero = this.entrada.receberTexto(`Por favor informe o numero do seu telefone: `)

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = this.entrada.receberTexto(`Por favor informe os produtos consumidos, com o padrão Shampoo-Condicionador-Sabonete:`)
        let splitProdutos = nomeProduto.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let Produtos = this.produtos.map(i => (i.getNomeProduto))

            if (Produtos.includes(splitProdutos[n])) {

                let Preco = this.produtos.filter(produto => produto.getNomeProduto == nomeProduto).map(i => { return i.getCusto }).toString()

                let NovoProduto = new Produto(splitProdutos[n], Number(Preco))

                cliente.getProdutosConsumidos.push(NovoProduto)

            } else {

                let preco = this.entrada.receberNumero(`Defina o preço para "${splitProdutos[n]}" R$`)
                let splitProdutosPreco = preco.toString().split(', ')
                let NovoProduto = new Produto(splitProdutos[n], Number(splitProdutosPreco))
                this.produtos.push(NovoProduto)
                cliente.getProdutosConsumidos.push(NovoProduto)

            }
        }

        let nomeServico = this.entrada.receberTexto(`Por favor informe os serviços consumidos, com o padrão Corte de cabelo-Manicure-Pedicure:`);
        let splitServico = nomeServico.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let Servicos = this.servicos.map(i => (i.getNomeServico))
            if (Servicos.includes(splitServico[n])) {
                let pegarPreco = this.servicos.filter(servico => servico.getNomeServico == nomeServico).map(i => { return i.getCusto }).toString()
                let NovoServico = new Servico(splitServico[n], Number(pegarPreco))
                cliente.getServicosConsumidos.push(NovoServico)
            } else {
                let preco = this.entrada.receberNumero(`Defina o preço para "${splitServico[n]}" R$`)
                let splitServicoPreco = preco.toString().split(', ')
                let NovoServico = new Servico(splitServico[n], Number(splitServicoPreco))
                this.servicos.push(NovoServico)
                cliente.getServicosConsumidos.push(NovoServico)
            }
        }

        this.clientes.push(cliente);

        console.log(`\nCadastro concluído :)\n`);
        return cliente
    }
}

