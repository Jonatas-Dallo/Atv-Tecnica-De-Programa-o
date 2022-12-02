import { RG } from 'models/rgs'
import { AppDataSource } from 'database/database'
import { NextFunction, Request, Response } from 'express'
import { Rg } from 'interface'

const rgRepository = AppDataSource.getRepository(RG)

class RGs {
    async criarRGCliente(req: Request, res: Response, next: NextFunction) {
        try {
            const { valor, dataEmissao }: Rg = req.body
            await rgRepository
                .createQueryBuilder()
                .insert()
                .into(RG)
                .values({
                    valor: valor,
                    dataEmissao: dataEmissao,
                    cliente: req.body.cliente_id
                })
                .execute()
            next()
        } catch (error) {
            res.json(error)
        }
    }

    async deleteRGCliente(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            await rgRepository
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
    
    async atualizar(req: Request, res: Response) {
        try {
            const { cliente_id, rg_id } = req.params
            const body: Rg = req.body
            await rgRepository
                .createQueryBuilder()
                .update()
                .set({
                    "dataEmissao": body.dataEmissao,
                    "valor": body.valor
                })
                .where('rg_id = :rg_id', {
                    rg_id: rg_id
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

    async CriarRG(req: Request, res: Response, next: NextFunction) {
        try {
            const { valor, dataEmissao }: Rg = req.body
            await rgRepository
                .createQueryBuilder()
                .insert()
                .into(RG)
                .values({
                    valor: valor,
                    dataEmissao: dataEmissao,
                    cliente: req.body.cliente
                })
                .execute()
            res.json(req.body)
        } catch (error) {
            res.json(error)
        }
    }

    async deletarRG(req: Request, res: Response) {
        try {
            const { id, rg } = req.params
            await rgRepository
            .createQueryBuilder()
            .delete()
            .from(RG)
            .where("rg_id = :rg_id",{
                rg_id: rg
            })
            .andWhere("cliente = :cliente_id", {
                cliente_id: id
            })
            .execute()
        } catch (error) {
            res.json(error)
        }
    }
}

export default new RGs