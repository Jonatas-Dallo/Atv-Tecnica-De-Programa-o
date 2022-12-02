import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { cliente } from "./clientes";
import { pedido } from "./pedidos";

@Entity()
export class servicos {
    // chave primaria
    @PrimaryGeneratedColumn({ type: "int" })
    servico_id!: Number

    //coluna nome do serviço
    @Column({
        type: "varchar"
    })
    nomeServico!: String

    //coluna custo
    @Column({
        type: "float"
    })
    custo!: Number

    // chave estrangeira no serviço_cliente
    @ManyToMany(() => cliente, (cliente) => cliente.servicos)
    cliente!: cliente[]

    // chave estrangeira no pedido_serviço
    @ManyToMany(() => pedido, (pedidos) => pedidos.servicos)
    pedidos!: pedido[]
}