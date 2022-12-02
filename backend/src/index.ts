import { AppDataSource } from "database/database";
import express from "express";
import cors from 'cors'
import clienteRoute from 'routes/cliente'
import produtoRoute from 'routes/produto'
import ServicoRoute from 'routes/servico'
import { produtos } from "models/produtos";
import { servicos } from "models/servicos";
import { cliente } from "models/clientes";

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccesStatus: 200
};

const app = express();
try {
    AppDataSource.initialize().then(async () => {
        console.log('Banco conectado com sucesso');
         await AppDataSource.createQueryBuilder()
            .insert()
            .into(produtos)
            .values([
                { nomeProduto: "Sabonete", custo: 10.00 },
                { nomeProduto: "Creme de Cabelo", custo: 20.00 },
                { nomeProduto: "Cortador de unhas", custo: 5.00 },
                { nomeProduto: "Creme Dental", custo: 7.50 },
            ])
            .execute()
        await AppDataSource.createQueryBuilder()
        .insert()
        .into(servicos)
        .values([
            {nomeServico: "Cortar Cabelo", custo: 50.75},
            {nomeServico: "Manicure", custo: 50.75},
            {nomeServico: "Pedicure", custo: 50.75},
            {nomeServico: "Cabelo na régua", custo: 50.75}
        ])
        .execute() 
        await AppDataSource.createQueryBuilder()
        .insert()
        .into(cliente)
        .values([
            {cliente_id: 1, nome: 'Jonatas', nomeSocial: 'Jonatas', genero: 'Masculino'},
        ])
        .execute()
    })
} catch (error) {
    console.log(`Connection error ${error}`);
}

app.use(cors());
app.use(express.json());
app.use('/cliente', clienteRoute)
app.use('/produto', produtoRoute)
app.use('/servico', ServicoRoute)
app.listen(5000, () => console.log('Serve conectado'))