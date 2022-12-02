export default class Produto {
    public nomeProduto: string
    public custo: number
    constructor(nomeProduto: string, custo: number){
        this.nomeProduto = nomeProduto
        this.custo = custo
    }
    public get getNomeProduto(){
        return this.nomeProduto
    }
    public get getCusto(){
        return this.custo
    }
    public set setNomeProduto(nomeProduto: string){
        this.nomeProduto = nomeProduto;
    }
    public set setCusto(custo: number){
        this.custo = custo;
    }
}









