import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemMaisConsumiramGenero extends Listagem {
    private cliente: Array<Cliente>
    constructor(cliente: Array<Cliente>) {
        super()
        this.cliente = cliente
    }
    public listar(): void {
        let ProdutosFeminino: any = []
        let ServicoFeminino: any = []
        let ProdutosMasculino: any = []
        let ServicoMasculino: any = []

        this.cliente.filter(i => i.genero == 'Masculino').map(i => {
            i.getProdutosConsumidos.forEach(PM => {
                let nomeProduto = PM.getNomeProduto
                let armazenarProduto = ProdutosMasculino[PM.getNomeProduto] = (ProdutosMasculino[PM.getNomeProduto] || 0) + 1
                ProdutosMasculino.push({
                    nomeProduto: nomeProduto,
                    quantidade: armazenarProduto
                })
            })
            i.getServicosConsumidos.forEach(SM => {
                let nomeServico = SM.getNomeServico
                let armazenarServicos = ServicoMasculino[SM.getNomeServico] = (ServicoMasculino[SM.getNomeServico] || 0) + 1
                ServicoMasculino.push({
                    nomeServico: nomeServico,
                    quantidade: armazenarServicos
                })
            })
        })
        this.cliente.filter(i => i.genero == 'Feminino').map(i => {
            i.getProdutosConsumidos.forEach(PF => {
                let nomeProduto = PF.getNomeProduto
                let armazenarProduto = ProdutosFeminino[PF.getNomeProduto] = (ProdutosFeminino[PF.getNomeProduto] || 0) + 1
                ProdutosFeminino.push({
                    nomeProduto: nomeProduto,
                    quantidade: armazenarProduto
                })
            })
            i.getServicosConsumidos.forEach(SF => {
                let nomeServico = SF.getNomeServico
                let armazenarServicos = ServicoFeminino[SF.getNomeServico] = (ServicoFeminino[SF.getNomeServico] || 0) + 1
                ServicoFeminino.push({
                    nomeServico: nomeServico,
                    quantidade: armazenarServicos
                })

            })
        })

        let ordenaarMasculinoProdutos = ProdutosMasculino.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
        });
        let ordenarMasculinoServicos = ServicoMasculino.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
        });

        let restricaoMasculino = ordenaarMasculinoProdutos.slice(0, 1)
        console.log();
        console.log(`--------------------------------------`);
        console.log(`Produto mais consumido pelo genero Masculino:`);
        restricaoMasculino.forEach((consumidos: { nomeProduto: string, quantidade: string }) => {
            console.log(`Nome: ${consumidos.nomeProduto}`);
            console.log(`Quantidade consumida ${consumidos.quantidade}`);
        })
        restricaoMasculino = ordenarMasculinoServicos.slice(0, 1)
        console.log();
        console.log(`--------------------------------------`);
        console.log(`Serviço mais consumido pelo genero Masculino:`);
        restricaoMasculino.forEach((consumidos: { nomeServico: string, quantidade: string }) => {
            console.log(`Nome: ${consumidos.nomeServico}`);
            console.log(`Quantidade consumida ${consumidos.quantidade}`);
            console.log();
        })
        let ordenanarFemininaProdutos = ProdutosFeminino.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
        });
        let ordenarFemininaServicos = ServicoFeminino.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
        });
        let restricaoFeminina = ordenanarFemininaProdutos.slice(0, 1)
        console.log();
        console.log(`--------------------------------------`);
        console.log(`Produto mais consumido Feminino`);
        restricaoFeminina.forEach((consumidos: { nomeProduto: string, quantidade: string }) => {
            console.log(`Nome: ${consumidos.nomeProduto}`);
            console.log(`Quantidade consumida ${consumidos.quantidade}`);
        })
        restricaoFeminina = ordenarFemininaServicos.slice(0, 1)
        console.log();
        console.log(`--------------------------------------`);
        console.log(`Servico mais consumido Feminino`);
        restricaoFeminina.forEach((consumidos: { nomeServico: string, quantidade: string }) => {
            console.log(`Nome: ${consumidos.nomeServico}`);
            console.log(`Quantidade consumida ${consumidos.quantidade}`);
            console.log();
        })
        console.log(`--------------------------------------`);

    }
}