export default class Servico {
    private nomeServico: string
    private custo: number
    constructor(nomeServico: string, custo: number){
        this.nomeServico = nomeServico
        this.custo = custo
    }
    public get getNomeServico(){
        return this.nomeServico
    }
    public get getCusto(){
        return this.custo
    }
    public set setNomeServico(nomeServico: string){
        this.nomeServico = nomeServico;
    }
    public set setCusto(custo: number){
        this.custo = custo;
    }
}