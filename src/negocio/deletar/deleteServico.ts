import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Delete from "./delete";

export default class deleteServico extends Delete {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public delete(): void {
        console.log(`--------------------------------------`);
        console.log(`Lista de todos os Serviços`);
        this.servicos.forEach(servico => {
            console.log(`Produto: ${servico.getNomeServico}`);
        })
        let entrada = this.entrada.receberTexto(`Nome do serviço que deseja deletar: `)
        let ListaServicos = this.servicos.map(i => i.getNomeServico)
        let IndexOF = ListaServicos.indexOf(entrada)

        if (IndexOF == -1) {
            console.log(`O servico ${entrada} não foi encontrado`);
        } else {
            let execucao = true
            while (execucao) {
                console.log();
                console.log(`Tem certeza que deseja deletar o serviço?`);
                console.log(`1 - Sim`);
                console.log(`2 - Não`);
                let escolha = this.entrada.receberNumero(`Digite a opção: `)
                switch (escolha) {
                    case 1:
                        this.servicos.map(i => {
                            if (entrada === i.getNomeServico) {
                                let index = this.servicos.indexOf(i)
                                this.servicos.splice(index, 1)
                            }
                        })
                        console.log(`Serviço Deletado com sucesso`);
                    case 2:
                        execucao = false
                        break;
                }
            }
        }
    }

}