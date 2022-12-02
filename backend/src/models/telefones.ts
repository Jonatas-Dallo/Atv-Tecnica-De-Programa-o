import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { cliente } from "./clientes";

@Entity()
export class telefone {
    @PrimaryGeneratedColumn({ type: "int" })
    telefone_id!: Number

    @Column({
        type:"varchar"
    })
    ddd!: String

    @Column({
        type:"varchar"
    })
    numero!: String

    @ManyToOne(() => cliente, (cliente) => cliente.telefones)

    @JoinColumn({ name:"cliente_id" }) cliente!: cliente
}