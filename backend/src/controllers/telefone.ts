import { telefone } from 'models/telefones'
import { AppDataSource } from 'database/database'
import { NextFunction, Request, Response } from 'express'
import { Telefone } from 'interface'

const telefoneRepository = AppDataSource.getRepository(telefone)

class Telefones {
    // função de criar telefone relacionado ao cliente
    async criarTelefoneCliente(req: Request, res: Response, next: NextFunction) {
        try {
            const { telefones } = req.body
            const cliente = req.body.cliente_id
            const adicionarTelefone = telefones.map((t: any) => {
                return {
                    ...t,
                    cliente
                }
            })
            await telefoneRepository
                .createQueryBuilder()
                .insert()
                .into(telefone)
                .values(adicionarTelefone)
                .execute()
            next()
        } catch (error) {
            res.json(error)
        }
    }

    //função que atualiza telefone
    async atualizarTelefone(req: Request, res: Response, next: NextFunction) {
        try {
            const { telefone_id, cliente_id } = req.params
            const body: Telefone = req.body
            await telefoneRepository
                .createQueryBuilder()
                .update()
                .set({
                    "ddd": body.ddd,
                    "numero": body.numero
                })
                .where('telefone_id = :telefone_id', {
                    telefone_id: telefone_id
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

    // função que deleta telefone relacionado ao cliente
    async deleteTelefoneCliente(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            await telefoneRepository
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

    // função que cria telefone
    async criarTelefone(req: Request, res: Response) {
        try {
            const body: Telefone = req.body
            await telefoneRepository
                .createQueryBuilder()
                .insert()
                .into(telefone)
                .values({
                    ddd: body.ddd,
                    numero: body.numero,
                    cliente: req.body.cliente
                })
                .execute()
        } catch (error) {
            res.json(error)
        }
    }

    // função que deleta telefone
    async deletarTelefone(req: Request, res: Response) {
        try {
            const { id, tell} = req.params
            await telefoneRepository
            .createQueryBuilder()
            .delete()
            .from(telefone)
            .where("telefone_id = :telefone_id", {
                telefone_id: tell
            })
            .andWhere("cliente = :cliente_id",{
                cliente_id: id
            })
            .execute()
        } catch (error) {
            res.json(error)
        }
    }
}

export default new Telefones