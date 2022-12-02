import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Update from "./update";

export default class updateServico extends Update {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada();
    }
    public update(): void {
        console.log();
        console.log(`\nLista de todos os Servicos`)
        this.servicos.forEach((servico) => {
            console.log(`Serviço: ` + servico.getNomeServico);
        })
        console.log()
        let entrada = this.entrada.receberTexto(`Escolha qual servico escrevendo o nome: `)
        let ListaServicos = this.servicos.map(i => i.getNomeServico);
        let IndexOF = ListaServicos.indexOf(entrada)

        if (IndexOF == -1) {
            console.log(`Serviço ${entrada} não encontrado`);
        } else {
            let novoNome = this.entrada.receberTexto(`Digite o novo nome do serviço: `)
            let novoPreco = this.entrada.receberNumero(`Digite o novo preço do produto: R$`)
            this.servicos.filter(servico => servico.getNomeServico == entrada).map(i => i.setCusto = novoPreco)
            this.servicos.filter(servico => servico.getNomeServico == entrada).map(i => i.setNomeServico = novoNome)
            console.log(`O serviço foi editado com sucesso`);
        }
    }
}