import Servico from "../../modelo/servico";
import Gerar from "./gerar";

export default class GerarServico extends Gerar {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public gerar(): void {
        let nomeservico = 'Corte de cabelo'
        let custo = 10.00
        let servico = new Servico(nomeservico, custo);
        this.servicos.push(servico)
    }
    public gerar2(): void {
        let nomeservico = 'Manicure'
        let custo = 20.00
        let servico = new Servico(nomeservico, custo);
        this.servicos.push(servico)
    }
    public gerar3(): void {
        let nomeservico = 'Pedicure'
        let custo = 30.00
        let servico = new Servico(nomeservico, custo);
        this.servicos.push(servico)
    }
    public gerar4(): void {
        let nomeservico = 'Massagem'
        let custo = 40.00
        let servico = new Servico(nomeservico, custo);
        this.servicos.push(servico)
    }
    public gerar5(): void {
        let nomeservico = 'Limpeza de pele'
        let custo = 50.00
        let servico = new Servico(nomeservico, custo);
        this.servicos.push(servico)
    }
    public gerar6(): void {
        let nomeservico = 'Barbeiro'
        let custo = 60.00
        let servico = new Servico(nomeservico, custo);
        this.servicos.push(servico)
    }
    public gerar7(): void {
        let nomeservico = 'Luzes'
        let custo = 70.00
        let servico = new Servico(nomeservico, custo);
        this.servicos.push(servico)
    }
    public gerar8(): void {
        let nomeservico = 'Bronzeamento'
        let custo = 80.00
        let servico = new Servico(nomeservico, custo);
        this.servicos.push(servico)
    }
    public gerar9(): void {
        let nomeservico = 'Sauna'
        let custo = 90.00
        let servico = new Servico(nomeservico, custo);
        this.servicos.push(servico)
    }
    public gerar10(): void {
        let nomeservico = 'Design de sobrancelhas'
        let custo = 1000.00
        let servico = new Servico(nomeservico, custo);
        this.servicos.push(servico)
        console.log(`\nServiços cadastrados com sucesso`);
    }
}