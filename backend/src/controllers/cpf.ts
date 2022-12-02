import { CPF } from 'models/cpf'
import { AppDataSource } from 'database/database'
import { NextFunction, Request, Response } from 'express'
import { Cpf } from 'interface'

const cpfRepository = AppDataSource.getRepository(CPF)

class CPFs {
    async criarCPFCliente(req: Request, res: Response,) {
        try {
            const { valor, dataEmissao }: Cpf = req.body
            await cpfRepository
                .createQueryBuilder()
                .insert()
                .into(CPF)
                .values({
                    valor: valor,
                    dataEmissao: dataEmissao,
                    cliente: req.body.cliente_id
                })
                .execute()
            res.json(req.body)
        } catch (error) {
            res.json(error)
        }
    }
    
    async atualizarCPF(req: Request, res: Response) {
        try {
            const { cliente_id, cpf_id } = req.params
            const body: Cpf = req.body
            await cpfRepository
                .createQueryBuilder()
                .update()
                .set({
                    "dataEmissao": body.dataEmissao,
                    "valor": body.valor
                })
                .where('cpf_id = :cpf_id', {
                    cpf_id: cpf_id
                })
                .andWhere('cliente = :cliente_id', {
                    cliente_id: cliente_id
                })
                .execute()
            res.json(req.body)
        } catch (error) {
            res.json(error)
        }
    }

    async deletarCPFCliente(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            await cpfRepository
                .createQueryBuilder()
                .delete()
                .where("cliente = :cliente_id", {
                    cliente_id: id
                })
                .execute()
            next()
        } catch (error) {
            res.json(error)
        }
    }
}

export default new CPFs