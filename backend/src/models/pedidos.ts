import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { cliente } from "./clientes";
import { produtos } from "./produtos";
import { servicos } from "./servicos";

@Entity()
export class pedido {
    @PrimaryGeneratedColumn({ type: "int" })
    pedido_id!: Number

    @Column({
        type: "varchar"
    })
    numero_do_pedido!: number;
    @ManyToMany(() => cliente, (cliente) => cliente.pedidos)
    @JoinTable({
        name: "Pedido_Cliente"
    })
    cliente!: cliente[]
    @ManyToMany(() => servicos, (servicos) => servicos.pedidos)
    @JoinTable({
        name: "Pedido_Servico"
    })
    servicos!: servicos[]
    @ManyToMany(() => produtos, (produtos) => produtos.pedidos)
    @JoinTable({
        name: "Pedido_Produto"
    })
    produtos!: produtos[]
}