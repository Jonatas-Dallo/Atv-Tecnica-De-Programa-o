import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do servico`);
        let nomeServico = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        let verificação = this.servicos.map(i => (i.getNomeServico))
        if (verificação.includes(nomeServico)) {
            console.log(`${nomeServico} já foi cadastrado`);
            console.log();
        } else {
            let custo = this.entrada.receberNumero('Por favor insira o preço do serviçoR$: ')
            let servico = new Servico(nomeServico, custo);
            this.servicos.push(servico)
            console.log(`\nCadastro concluído :)\n`);
        }
    }
}