import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { cliente } from "./clientes";
import { pedido } from "./pedidos";

@Entity()
export class produtos {
    @PrimaryGeneratedColumn({ type: "int" })
    produto_id!: Number
    @Column({
        type: "varchar"
    })
    nomeProduto!: String
    @Column({
        type: "float"
    })
    custo!: Number

    @ManyToMany(() => cliente, (cliente) => cliente.produtos)
    @JoinTable({
        name: "produto_cliente"
    })
    cliente!: cliente[]
    @ManyToMany(() => pedido, (pedidos) => pedidos.produtos)
    pedidos!: pedido[]

}