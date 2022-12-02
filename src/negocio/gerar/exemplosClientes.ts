import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Gerar from "./gerar";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

export default class GerarCliente extends Gerar {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes;
        this.servicos = servicos;
        this.produtos = produtos;
    }
    public gerar(): Cliente {
        let nome = 'Jonatas Mathias Dalló'
        let nomeSocial = 'Jonatas'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Shampoo-Condicionador-Sabonete'
        let splitProdutos = nomeProduto.split('-');
        let custo = '10.00-20.00-30.00'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Corte de cabelo-Manicure-Pedicure';
        let splitServico = nomeServico.split('-');
        let custo2 = '10.00-20.00-30.00'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);

        return cliente
    }
    public gerar2(): Cliente {
        let nome = 'Alexsander'
        let nomeSocial = 'Alexsander'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Shampoo-Sabonete'
        let splitProdutos = nomeProduto.split('-');
        let custo = '10.00-20.00-30.00'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Corte de cabelo-Manicure';
        let splitServico = nomeServico.split('-');
        let custo2 = '10.00-20.00-30.00'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);

        return cliente
    }
    public gerar3(): Cliente {
        let nome = 'Arthur'
        let nomeSocial = 'Arthur'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Condicionador-Sabonete'
        let splitProdutos = nomeProduto.split('-');
        let custo = '10.00-20.00-30.00'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Corte de cabelo-Pedicure';
        let splitServico = nomeServico.split('-');
        let custo2 = '10.00-20.00-30.00'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);

        return cliente
    }
    public gerar4(): Cliente {
        let nome = 'Elizabeth'
        let nomeSocial = 'Elizabeth'
        let genero = 'Feminino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Shampoo-Condicionador-Sabonete'
        let splitProdutos = nomeProduto.split('-');
        let custo = '10.00-20.00-30.00'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Corte de cabelo';
        let splitServico = nomeServico.split('-');
        let custo2 = '10.00-20.00-30.00'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);

        return cliente
    }
    public gerar5(): Cliente {
        let nome = 'Thiago'
        let nomeSocial = 'Thiago'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Sabonete'
        let splitProdutos = nomeProduto.split('-');
        let custo = '10.00-20.00-30.00'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Pedicure';
        let splitServico = nomeServico.split('-');
        let custo2 = '10.00-20.00-30.00'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);

        return cliente
    }
    public gerar6(): Cliente {
        let nome = 'Beatrice'
        let nomeSocial = 'Beatrice'
        let genero = 'Feminino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Shampo'
        let splitProdutos = nomeProduto.split('-');
        let custo = '10.00-20.00-30.00'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Corte de cabelo';
        let splitServico = nomeServico.split('-');
        let custo2 = '10.00-20.00-30.00'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);

        return cliente
    }
    public gerar7(): Cliente {
        let nome = 'Daniel'
        let nomeSocial = 'Daniel'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Condicionador-Sabonete'
        let splitProdutos = nomeProduto.split('-');
        let custo = '10.00-20.00-30.00'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Pedicure';
        let splitServico = nomeServico.split('-');
        let custo2 = '10.00-20.00-30.00'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);

        return cliente
    }
    public gerar8(): Cliente {
        let nome = 'Chistofer'
        let nomeSocial = 'Chistofer'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Condicionador'
        let splitProdutos = nomeProduto.split('-');
        let custo = '10.00-20.00-30.00'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Corte de cabelo-Manicure-Pedicure';
        let splitServico = nomeServico.split('-');
        let custo2 = '10.00-20.00-30.00'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);

        return cliente
    }
    public gerar9(): Cliente {
        let nome = 'Cesar'
        let nomeSocial = 'Cesar'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Shampoo-Condicionador-Sabonete'
        let splitProdutos = nomeProduto.split('-');
        let custo = '10.00-20.00-30.00'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Corte de cabelo';
        let splitServico = nomeServico.split('-');
        let custo2 = '10.00-20.00-30.00'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);

        return cliente
    }
    public gerar10(): Cliente {
        let nome = 'Kaiser'
        let nomeSocial = 'Kaiser'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Shampoo-Condicionador-Sabonete'
        let splitProdutos = nomeProduto.split('-');
        let custo = '10.00-20.00-30.00'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Corte de cabelo-Manicure-Pedicure';
        let splitServico = nomeServico.split('-');
        let custo2 = '10.00-20.00-30.00'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar12(): Cliente {
        let nome = 'Joelma'
        let nomeSocial = 'Joelma'
        let genero = 'Feminino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Perfume-Esmalte-Prendedor de cabelo'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Luzes-Bronzeamento-Design de sobrancelhas-Limpeza de pele-Massagem';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-1500-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar13(): Cliente {
        let nome = 'Eren'
        let nomeSocial = 'Eren'
        let genero = 'Feminino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Perfume-Esmalte'
        let splitProdutos = nomeProduto.split('-');
        let custo = '10.00-20.00-30.00'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Luzes-Bronzeamento-Design de sobrancelhas-Limpeza de pele-Massagem';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-5000-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar14(): Cliente {
        let nome = 'Beamon'
        let nomeSocial = 'Beamon'
        let genero = 'Feminino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Perfume-Esmalte-Prendedor de cabelo-Hidratante-Toalha-Toalha'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Luzes-Bronzeamento-Design de sobrancelhas';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-1000-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar15(): Cliente {
        let nome = 'Luiza'
        let nomeSocial = 'Luiza'
        let genero = 'Feminino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Prendedor de cabelo-Hidratante-Toalha'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Limpeza de pele-Massagem';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-1000-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar16(): Cliente {
        let nome = 'Joui'
        let nomeSocial = 'Joui'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Perfume-Esmalte-Hidratante-Toalha'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Luzes-Bronzeamento-Limpeza de pele-Massagem';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-1000-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar17(): Cliente {
        let nome = 'Dante'
        let nomeSocial = 'Dante'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Perfume-Esmalte-Prendedor de cabelo-Hidratante-Toalha-Toalha-Toalha'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50-50-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Luzes-Bronzeamento-Design de sobrancelhas';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-1000-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar18(): Cliente {
        let nome = 'Gal'
        let nomeSocial = 'Gal'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Perfume'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Luzes-Bronzeamento-Design de sobrancelhas-Limpeza de pele-Massagem';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-950-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar19(): Cliente {
        let nome = 'Kian'
        let nomeSocial = 'Kian'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Perfume'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Luzes-Bronzeamento';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-1000-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar20(): Cliente {
        let nome = 'Luiz'
        let nomeSocial = 'Luiz'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Perfume-Esmalte-Prendedor de cabelo-Hidratante-Toalha-Hidratante'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50-40'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Luzes-Bronzeamento';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-1000-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar21(): Cliente {
        let nome = 'Lucas'
        let nomeSocial = 'Lucas'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Perfume-Esmalte-Prendedor de cabelo'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Luzes-Bronzeamento-Design de sobrancelhas';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-1000-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar22(): Cliente {
        let nome = 'Marta'
        let nomeSocial = 'Marta'
        let genero = 'Feminino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Perfume-Esmalte-Prendedor de cabelo-Hidratante-Toalha'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Design de sobrancelhas';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-1000-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar23(): Cliente {
        let nome = 'Rose'
        let nomeSocial = 'Rose'
        let genero = 'Feminino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Esmalte'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Luzes-Bronzeamento-Design de sobrancelhas-Limpeza de pele-Massagem';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-960-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar24(): Cliente {
        let nome = 'Breno'
        let nomeSocial = 'Breno'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Prendedor de cabelo-Hidratante-Toalha'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Luzes-Bronzeamento-Design de sobrancelhas-Limpeza de pele-Massagem';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-800-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar25(): Cliente {
        let nome = 'Bruno'
        let nomeSocial = 'Bruno'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Perfume-Esmalte-Prendedor de cabelo-Hidratante-Toalha'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Luzes-Bronzeamento';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-1000-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar26(): Cliente {
        let nome = 'Gabriele'
        let nomeSocial = 'Gabriele'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Perfume-Esmalte-Prendedor de cabelo-Hidratante-Toalha'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Limpeza de pele-Massagem';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-1000-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar27(): Cliente {
        let nome = 'Joao'
        let nomeSocial = 'Joao'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Prendedor de cabelo-Hidratante-Toalha'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Luzes-Bronzeamento-Limpeza de pele-Massagem';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-900-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar28(): Cliente {
        let nome = 'Xande'
        let nomeSocial = 'Xande'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Perfume-Esmalte-Toalha'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Luzes-Bronzeamento-Design de sobrancelhas';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-1000-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar29(): Cliente {
        let nome = 'Dara'
        let nomeSocial = 'Dara'
        let genero = 'Feminino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Prendedor de cabelo-Hidratante-Toalha'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Luzes-Limpeza de pele-Massagem';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-1000-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar30(): Cliente {
        let nome = 'Adelino'
        let nomeSocial = 'Adelino'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Perfume-Esmalte-Prendedor de cabelo-Hidratante-Toalha'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Design de sobrancelhas-Limpeza de pele-Massagem';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-1000-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }

        this.clientes.push(cliente);
        return cliente
    }
    public gerar11(): Cliente {
        let nome = 'Soluço'
        let nomeSocial = 'Soluço'
        let genero = 'Masculino'
        let valor = '123.456.789-01'
        let data = '04/01/2003'
        let valor2 = '123.456.789/01'
        let data2 = '04/01/2003'
        let ddd = '012'
        let numero = '94002-8922'

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let partesData2 = data2.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()

        let dataEmissao2 = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissao2)
        let telefones = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rg, telefones);


        let nomeProduto = 'Prendedor de cabelo-Hidratante-Toalha'
        let splitProdutos = nomeProduto.split('-');
        let custo = '60-70-90-40-50'
        let splitCusto = custo.split('-');
        for (let n = 0; n < splitProdutos.length; n++) {
            let NovoProduto = new Produto(splitProdutos[n], new Number(splitCusto[n].valueOf()).valueOf())
            cliente.getProdutosConsumidos.push(NovoProduto)
        }

        let nomeServico = 'Luzes-Bronzeamento-Design de sobrancelhas-Limpeza de pele-Massagem';
        let splitServico = nomeServico.split('-');
        let custo2 = '70-80-2100-50-40'
        let splitCusto2 = custo2.split('-');
        for (let n = 0; n < splitServico.length; n++) {
            let NovoServico = new Servico(splitServico[n], new Number(splitCusto2[n].valueOf()).valueOf())
            cliente.getServicosConsumidos.push(NovoServico)
        }
        console.log(`\nClientes cadastrados com sucesso`);
        this.clientes.push(cliente);
        return cliente
    }
}