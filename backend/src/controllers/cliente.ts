import { cliente } from 'models/clientes'
import { AppDataSource } from 'database/database'
import { NextFunction, Request, Response } from 'express'
import { Cliente } from 'interface'

const clienteRepository = AppDataSource.getRepository(cliente)

class Clientes {
    async criarCliente(req: Request, res: Response, next: NextFunction) {
        try {
            const { }: Cliente = req.body
            await clienteRepository
                .createQueryBuilder()
                .insert()
                .into(cliente)
                .values(req.body)
                .execute()
            next()
        } catch (error) {
            res.json(error)
        }
    }
    async atualizarCliente(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await clienteRepository
                .createQueryBuilder()
                .update(cliente)
                .set({
                    "nome": req.body.nome,
                    "nomeSocial": req.body.nomeSocial,
                    "genero": req.body.genero
                })
                .where("cliente_id = :cliente_id", {
                    cliente_id: id
                })
                .execute()
            res.json(req.body)
        } catch (error) {
            res.json(error)
        }
    }
    async deletarCliente(req: Request, res: Response) {
        try {
            const { id } = req.params
            await clienteRepository
                .createQueryBuilder()
                .delete()
                .where("cliente_id = :cliente_id", {
                    cliente_id: id
                })
                .execute()
            res.json({ message: "Cliente deletado com sucesso" })
        } catch (error) {
            res.json(error)
        }
    }

    // achar 1
    async findOne(req: Request, res: Response) {
        try {
            const { id } = req.params
            const find = await clienteRepository
                .createQueryBuilder()
                .select([
                    "cli",
                    "cpf",
                    "rg",
                    "tell",
                    "prod",
                    "serv"
                ])
                .from(cliente, 'cli')
                .leftJoin('cli.cpf', 'cpf')
                .leftJoin('cli.rg', 'rg')
                .leftJoin('cli.telefones', 'tell')
                .leftJoin('cli.produtos', 'prod')
                .leftJoin('cli.servicos', 'serv')
                .where("cli.cliente_id = :cliente_id", {
                    cliente_id: id
                })
                .getOne()
            res.json(find)
        } catch (error) {
            res.json(error)
        }
    }

    // achar todos
    async findMany(req: Request, res: Response) {
        try {
            const find = await clienteRepository
                .createQueryBuilder()
                .select([
                    "cli",
                    "cpf",
                    "rg"
                ])
                .from(cliente, 'cli')
                .leftJoin('cli.cpf', 'cpf')
                .leftJoin('cli.rg', 'rg')
                .getMany()
            res.json(find)
        } catch (error) {
            res.json(error)
        }
    }
}

export default new Clientes;