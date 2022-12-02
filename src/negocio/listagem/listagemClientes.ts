import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        console.log(`--------------------------------------`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);

            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Gênero: ` + cliente.genero)
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Data de emissão do CPF: ` + cliente.getCpf.getDataEmissao.toLocaleDateString());
            console.log(`RG: ` + cliente.getRg.getValor);
            console.log(`Data de emissão do CPF: ` + cliente.getRg.getDataEmissao.toLocaleDateString());
            console.log(`Telefone: (` + cliente.getTelefones.getDdd + `) ` + cliente.getTelefones.getNumero);
            console.log(`--------------------------------------`);
            console.log(`Listagem de Produtos consumidos`);
            cliente.getProdutosConsumidos.map(produtos => { console.log(produtos.getNomeProduto + `\nR$${produtos.custo}`)});
            console.log(`--------------------------------------`);
            console.log(`Listagem de Servicos Consumidos`);
            cliente.getServicosConsumidos.map(servicos => { console.log(servicos.getNomeServico + `\nR$${servicos.getCusto}`)});
            console.log(`--------------------------------------`);

            console.log(`Data de cadastro: ` + cliente.getDataCadastro.toLocaleDateString());
            console.log(`--------------------------------------`);
            console.log(``);
        });
        console.log(`\n`);
    }
}