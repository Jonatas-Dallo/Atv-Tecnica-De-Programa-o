import express from 'express'
import Cliente from 'controllers/cliente'
import CPFs from 'controllers/cpf'
import RGs from 'controllers/rg'
import Telefone from 'controllers/telefone'
import Produtos from 'controllers/produtos'
import Servico from 'controllers/servico'

const router = express.Router()

// CRUD DO CLIENTE - > CREATE, UPDATE, DELETE E READ DE UM CLIENTE OU TODOS

// create
router.post('/criar-cliente', Cliente.criarCliente, RGs.criarRGCliente, Telefone.criarTelefoneCliente, CPFs.criarCPFCliente,)

// read
router.get('/achar-cliente/:id', Cliente.findOne) // acha especifico
router.get('/achar-cliente', Cliente.findMany) // tras todos

// update
router.put('/atualizar-cliente/:id', Cliente.atualizarCliente)

// delete
router.delete('/deletar-cliente/:id', Telefone.deleteTelefoneCliente, RGs.deleteRGCliente, CPFs.deletarCPFCliente, Produtos.deletarRelaçõesProduto, Servico.deletarRelaçõesServiço, Cliente.deletarCliente)
//-----------------------

// CRUD DO RG QUE SURGI POR PODER TER MAIS DE UM RG
// create
router.post('/enviar-rg', RGs.CriarRG)

// delete
router.delete('/deletar-rg/:id/:rg', RGs.deletarRG)

// update
router.put('/atualizar-cliente-rg/:cliente_id/:rg_id', RGs.atualizar)
//-----------------------

// CRUD DO TELEFONE QUE SURGE POR PODER TER MAIS DE UM TELEFONE
// create
router.post('/enviar-telefone', Telefone.criarTelefone)

//update
router.put('/atualizar-cliente-telefone/:cliente_id/:telefone_id', Telefone.atualizarTelefone )

// delete
router.delete('/deletar-telefone/:id/:tell', Telefone.deletarTelefone)
//-----------------------

// UPDATE DO CPF
router.put('/atualizar-cliente-cpf/:cliente_id/:cpf_id', CPFs.atualizarCPF)

export default router;