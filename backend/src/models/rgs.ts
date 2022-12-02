import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { cliente } from "./clientes";

@Entity()
export class RG {
    @PrimaryGeneratedColumn({ type: "int" })
    rg_id!: Number
    
    @Column({
        type:"varchar",
        length: 14
    })
    valor!: String

    @Column({
        type:"varchar"
    })
    dataEmissao!: String

    @ManyToOne(() => cliente, (cliente) => cliente.rg)

    @JoinColumn({ name:"cliente_id" }) cliente!: cliente
}