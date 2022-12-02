import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"

// CLASSES DE CADASTRO
import CadastroCliente from "../negocio/cadastros/cadastroCliente";
import CadastroProduto from "../negocio/cadastros/cadastroProduto";
import CadastroServico from "../negocio/cadastros/cadastroServico";

// CLASSES DE DELETE
import deleteCliente from "../negocio/deletar/deleteCliente";
import deleteProduto from "../negocio/deletar/deleteProduto";
import deleteServico from "../negocio/deletar/deleteServico";

// CLASSES DE UPDATE
import updateCliente from "../negocio/atualizar/updateCliente";
import updateProduto from "../negocio/atualizar/updateProduto";
import updateServico from "../negocio/atualizar/updateServico";

// CLASSES DE ATUALIZAÇÃO
import ListagemClientes from "../negocio/listagem/listagemClientes";
import ListagemProdutos from "../negocio/listagem/listagemProduto";
import ListagemServico from "../negocio/listagem/listagemServico";
import ListagemGenero from "../negocio/listagem/listagemGenero";
import ListagemMaisConsumiramGenero from "../negocio/listagem/listagemMaisConsumidoGenero";
import listagemMaisConsumiramQuantidade from "../negocio/listagem/listaMaisConsumiramQuantidade";
import ListagemMenosConsumiramQuantidade from "../negocio/listagem/listaMenosConsumiramQuantidade";
import ListagemProSerMaisConsumidos from "../negocio/listagem/listagemProdutosMaisConsumidos";
import listagemMaisConsumiramValor from "../negocio/listagem/listagemMaisConsumiramValor";
import GerarProduto from "../negocio/gerar/exemplosProdutos";
import GerarCliente from "../negocio/gerar/exemplosClientes";
import GerarServico from "../negocio/gerar/exemplosServicos";



console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(' ')
    console.log(`--------------------------------------`);
    console.log(`Opções:`);
    console.log(`1 - Cadastros`);
    console.log(`2 - Listar`);
    console.log(`3 - Atualizar cliente`);
    console.log(`4 - Deletar `);
    console.log(`5 - Gerar exemplos `);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            console.log(`--------------------------------------`);
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Cadastrar Produto`);
            console.log(`3 - Cadastrar Servico`);
            console.log();
            let opcaoCadastro = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcaoCadastro) {
                case 1:
                    let cadastro = new CadastroCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
                    cadastro.cadastrar()
                    break;
                case 2:
                    let cadastro2 = new CadastroProduto(empresa.getProdutos)
                    cadastro2.cadastrar()
                    break;
                case 3:
                    let cadastro3 = new CadastroServico(empresa.getServicos)
                    cadastro3.cadastrar()
                    break;
            }
            break;
        case 2:
            console.log(`--------------------------------------`);
            console.log(`1 - Lista de clientes`);
            console.log(`2 - Lista de Produtos`);
            console.log(`3 - Lista de Servicos`);
            console.log(`4 - Lista dos clientes que mais consumiram em quantidade`)
            console.log(`5 - Lista dos clientes que menos consumiram em quantidade`)
            console.log(`6 - Lista de todos os clientes por genero`)
            console.log(`7 - Lista dos Produtos e Serviços mais consumidos`)
            console.log(`8 - Listagem dos Serviços e Produtos mais consumidos por genero`)
            console.log(`9 - Lista dos clientes que menos consumiram em quantidade`)
            console.log(`10 - Lista dos 5 clientes que mais consumiram em valor`)
            console.log();
            let opcaoListagem = entrada.receberNumero(`Por favor, escolha uma opção: `)
    
            switch (opcaoListagem) {
                case 1:
                    let listagem = new ListagemClientes(empresa.getClientes)
                    listagem.listar()
                    break;
                case 2:
                    let listagem2 = new ListagemProdutos(empresa.getProdutos)
                    listagem2.listar()
                    break;
                case 3:
                    let listagem3 = new ListagemServico(empresa.getServicos)
                    listagem3.listar()
                    break;
                case 4:
                    let listagem4 = new listagemMaisConsumiramQuantidade(empresa.getClientes);
                    listagem4.listar();
                    break
                case 5:
                    let listagem5 = new ListagemMenosConsumiramQuantidade(empresa.getClientes)
                    listagem5.listar()
                    break;
                case 6:
                    let listagem6 = new ListagemGenero(empresa.getClientes)
                    listagem6.listar()
                    break;
                case 7:
                    let listagem7 = new ListagemProSerMaisConsumidos(empresa.getClientes)
                    listagem7.listar()
                    break;
                case 8:
                    let listagem8 = new ListagemMaisConsumiramGenero(empresa.getClientes)
                    listagem8.listar()
                    break;
                case 9:
                    let listagem9 = new ListagemMenosConsumiramQuantidade(empresa.getClientes)
                        listagem9.listar()
                    break;
                case 10:
                    let listagem10 = new listagemMaisConsumiramValor(empresa.getClientes)
                        listagem10.listar()
                    break;
            }
            break;
        case 3:
            console.log(`--------------------------------------`);
            console.log(`1 - Atualizar cliente`);
            console.log(`2 - Atualizar Produto`);
            console.log(`3 - Atualizar Servico`);
            let opcaoUpdate = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcaoUpdate) {
                case 1:
                    let updateClientes = new updateCliente(empresa.getClientes)
                    updateClientes.update()
                    break;
                case 2:
                    let update_Produto = new updateProduto(empresa.getProdutos)
                    update_Produto.update()
                    break;
                case 3:
                    let update_servico = new updateServico(empresa.getServicos)
                    update_servico.update()
                    break;
            }
            break;
        case 4:
            console.log(`--------------------------------------`);
            console.log(`1 - Deletar de cliente`);
            console.log(`2 - Deletar de Produto`);
            console.log(`3 - Deletar de Servico`);
            console.log();
            let opcaoDeletar = entrada.receberNumero(`Por favor, escolha uma opção: `)
    
            switch (opcaoDeletar) {
                case 1:
                    let listagem = new deleteCliente(empresa.getClientes)
                    listagem.delete()
                    break;
                case 2:
                    let listagem2 = new deleteProduto(empresa.getProdutos)
                    listagem2.delete()
                    break;
                case 3:
                    let listagem3 = new deleteServico(empresa.getServicos)
                    listagem3.delete()
                    break;
            }
            break;
        case 5:
            let Gerar_Produto = new GerarProduto(empresa.getProdutos)
            Gerar_Produto.gerar()
            Gerar_Produto.gerar2()
            Gerar_Produto.gerar3()
            Gerar_Produto.gerar4()
            Gerar_Produto.gerar5()
            Gerar_Produto.gerar6()
            Gerar_Produto.gerar7()
            Gerar_Produto.gerar8()
            Gerar_Produto.gerar9()
            Gerar_Produto.gerar10()
            let Gerar_Servico = new GerarServico(empresa.getServicos)
            Gerar_Servico.gerar()
            Gerar_Servico.gerar2()
            Gerar_Servico.gerar3()
            Gerar_Servico.gerar4()
            Gerar_Servico.gerar5()
            Gerar_Servico.gerar6()
            Gerar_Servico.gerar7()
            Gerar_Servico.gerar8()
            Gerar_Servico.gerar9()
            Gerar_Servico.gerar10()
            let Gerar = new GerarCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            Gerar.gerar()
            Gerar.gerar2()
            Gerar.gerar3()
            Gerar.gerar4()
            Gerar.gerar5()
            Gerar.gerar6()
            Gerar.gerar7()
            Gerar.gerar8()
            Gerar.gerar9()
            Gerar.gerar10()
            Gerar.gerar11()
            Gerar.gerar12()
            Gerar.gerar13()
            Gerar.gerar14()
            Gerar.gerar15()
            Gerar.gerar16()
            Gerar.gerar17()
            Gerar.gerar18()
            Gerar.gerar19()
            Gerar.gerar20()
            Gerar.gerar21()
            Gerar.gerar22()
            Gerar.gerar23()
            Gerar.gerar24()
            Gerar.gerar25()
            Gerar.gerar26()
            Gerar.gerar27()
            Gerar.gerar28()
            Gerar.gerar29()
            Gerar.gerar30()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}