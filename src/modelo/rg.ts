export default class RG {
    private valor2: string
    private dataEmissao2: Date
    constructor(valor2: string, dataEmissao2: Date) {
        this.valor2 = valor2
        this.dataEmissao2 = dataEmissao2
    }
    public get getValor(): string {
        return this.valor2
    }
    public get getDataEmissao(): Date {
        return this.dataEmissao2
    }
    public set setValor(valor2: string){
        this.valor2 = valor2;
    }
    public set setDataEmissao(dataEmissao2: Date){
        this.dataEmissao2 = dataEmissao2
    }
}