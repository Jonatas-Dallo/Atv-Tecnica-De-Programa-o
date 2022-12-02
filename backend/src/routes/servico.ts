import Servico from 'controllers/servico';
import express from 'express';

const router = express.Router()

// create
router.post('/add-servico', Servico.criarServico)
router.post('/add-servico-cliente/:id', Servico.relation)

// read
router.get('/achar-servico', Servico.findMany)
router.get('/findOne/:id', Servico.findOne)

// update
router.put('/editServico/:id', Servico.editarServico)

// delete
router.delete('/deletar-servico-cliente/:id/:servico', Servico.deleteServicoRelacao)
router.delete('/deletar/:id', Servico.deletarServico)

export default router;