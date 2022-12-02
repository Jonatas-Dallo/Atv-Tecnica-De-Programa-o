export interface Cliente {
    cliente_id: number;
    nome: string;
    nomeSocial: String;
    genero: String;
    cliente_dataCadastro: Date;
    cpf: Cpf;
    rg: Rg[];
    telefones: Telefone[];
    produtos: Produto[];
    servicos: Servicos[];
    pedidos: Pedido[];
}

export interface Cpf {
    cpf_id: Number;
    valor: String;
    dataEmissao: String;
}

export interface Rg{ 
    rg_id: Number;
    valor: String;
    dataEmissao: String;
}
export interface Telefone{
    telefone_id: number;
    ddd: string;
    numero: string;
}
export interface Produto{
    produto_id: number;
    nomeProduto: string;
    custo: string;
}
export interface Servicos{
    servico_id: number;
    nomeServico: string;
    custo: string;
}
export interface Pedido{
    pedido_id: number;
    numero_do_pedido: number;
}