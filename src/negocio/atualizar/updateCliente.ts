import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Update from "./update";

export default class updateCliente extends Update {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    public update(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach((cliente) => {
            console.log(`Nome: ${(cliente.nome)}`);
        })
        let ListaClientes = this.clientes.map(i => i.nome)
        let entrada = this.entrada.receberTexto(`Escolha qual cliente escrevendo o nome:  `)
        console.log();
        let IndexOF = ListaClientes.indexOf(entrada)
        let execucao = true
        if (IndexOF == -1) {
            console.log(`Cliente "${entrada}" não existe`);
        } else {
            this.clientes.map(i => {
                while (execucao) {
                    console.log(`--------------------------------------`);
                    console.log("1 - Editar nome");
                    console.log("2 - Editar nome Social");
                    console.log("3 - Editar CPF");
                    console.log("4 - Editar RG");
                    console.log("5 - Editar Telefone");
                    console.log("0 - Sair");
                    console.log();
                    let escolha = this.entrada.receberNumero("Escolha uma opção: ")
                    switch (escolha) {
                        case 1:
                            let novoNome = this.entrada.receberTexto("Digite o novo nome: ")
                            this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.nome = novoNome)
                            execucao = false
                            console.log("Nome Atualizado");
                            console.log();
                            break
                        case 2:
                            let novoNomeSocial = this.entrada.receberTexto("Digite o novo nome Social: ")
                            this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.nomeSocial = novoNomeSocial)
                            console.log("Nome Social Atualizado");
                            console.log();
                            break
                        case 3:
                            let execucaoCPF = true
                            while (execucaoCPF) {
                                console.log('');
                                console.log("1 - CPF");
                                console.log("2 - Data de emissao");
                                console.log("0 - Sair");
                                let escolhaCPF = this.entrada.receberNumero("Escolha uma opção: ")
                                switch (escolhaCPF) {
                                    case 1:
                                        let novoCPF = this.entrada.receberTexto("Digite o novo CPF")
                                        this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.getCpf.setValor = novoCPF)
                                        break
                                    case 2:
                                        let novaData = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
                                        let partesData = novaData.split('/')
                                        let ano = new Number(partesData[2].valueOf()).valueOf()
                                        let mes = new Number(partesData[1].valueOf()).valueOf()
                                        let dia = new Number(partesData[0].valueOf()).valueOf()
                                        let dataEmissao = new Date(ano, mes, dia)
                                        this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.getCpf.setDataEmissao = dataEmissao)
                                        break
                                    case 0:
                                        execucaoCPF = false
                                        break
                                    default:
                                        console.log("Escolha não encontrada");
                                }                    
                            }break
                        case 4:
                            let execucaoRG = true
                            while (execucaoRG) {
                                console.log('');
                                console.log("1 - RG");
                                console.log("2 - Data de emissao");
                                console.log("0 - Sair");
                                let escolhaRG = this.entrada.receberNumero("Escolha uma opção: ")
                                switch (escolhaRG) {
                                    case 1:
                                        let novoRG = this.entrada.receberTexto(`Digite o novo RG: `);
                                        this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.getRg.setValor = novoRG)
                                        break
                                    case 2:
                                        let novaData = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
                                        let partesData = novaData.split('/')
                                        let ano = new Number(partesData[2].valueOf()).valueOf()
                                        let mes = new Number(partesData[1].valueOf()).valueOf()
                                        let dia = new Number(partesData[0].valueOf()).valueOf()
                                        let dataEmissao = new Date(ano, mes, dia)
                                        this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.getRg.setDataEmissao = dataEmissao)
                                        break                                    
                                    case 0:
                                        execucaoRG = false
                                        break
                                    default:
                                        console.log("Escolha não encontrada");
                                }
                            }break
                        case 5:
                            let execucaoTELEFONE = true
                            while (execucaoTELEFONE) {
                                console.log('');
                                console.log("1 - Editar telefone");
                                console.log("0 - Sair");
                                let escolhaTELEFONE = this.entrada.receberNumero("Escolha a opção: ")
                                switch (escolhaTELEFONE){   
                                    case 1:
                                        let NovoDDD = this.entrada.receberTexto(`Por favor digite o novo DDD:`);
                                        this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.getTelefones.setDDD = NovoDDD)
                                        let NovoNumero = this.entrada.receberTexto(`Por favor digite o novo numero de telefone:`);
                                        this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.getTelefones.setNumero = NovoNumero)
                                        break
                                    case 0:
                                        execucaoTELEFONE = false
                                        break
                                    default:
                                        console.log("Escolha não encontrada");
                                } 
                            }break
                        case 0:
                            execucao = false
                            break
                        default:
                            console.log("Comando não encontrado");
                    }
                }
            })
        }
    }
}