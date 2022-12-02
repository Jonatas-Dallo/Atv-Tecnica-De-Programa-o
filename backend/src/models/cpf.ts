import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { cliente } from "./clientes";

@Entity()
export class CPF {
    @PrimaryGeneratedColumn({ type: "int" })
    cpf_id!: Number

    @Column({
        type:"varchar",
        length: 14
    })
    valor!: String

    @Column({
        type:"varchar"
    })
    dataEmissao!: String

    @OneToOne(() => cliente, (cliente) => cliente.cpf)
    
    @JoinColumn({ name:"cliente" }) cliente!: cliente
}