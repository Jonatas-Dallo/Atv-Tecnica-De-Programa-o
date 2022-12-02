import Produtos from 'controllers/produtos';
import express from 'express';

const router = express.Router()

// create
router.post('/add-produto', Produtos.criarProduto)
router.post('/add-produto-cliente/:id', Produtos.relation)

// read
router.get('/findMany', Produtos.findMany) 
router.get('/findOne/:id', Produtos.findOne)

// update
router.put('/editProduto/:id', Produtos.editarProduto)

// delete
router.delete('/deleteRelation/:id/:produto', Produtos.deleteProdutoRelacao)
router.delete('/deletar/:id', Produtos.deletarProduto)

export default router;