import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CPF } from "./cpf";
import { pedido } from "./pedidos";
import { produtos } from "./produtos";
import { RG } from "./rgs";
import { servicos } from "./servicos";
import { telefone } from "./telefones";



@Entity()
export class cliente {
    @PrimaryGeneratedColumn({ type: "int" })
    cliente_id!: Number

    @Column({
        type: "varchar"
    })
    nome!: String

    @Column({
        type: "varchar"
    })
    nomeSocial!: String

    @Column({
        type: "varchar"
    })
    genero!: String

    @CreateDateColumn({
        type: "datetime"
    })
    cliente_dataCadastro!: Date

    @OneToOne(() => CPF, (cpf) => cpf.cliente)
    cpf!: CPF

    @OneToMany(() => RG, (rg) => rg.cliente)
    rg!: RG

    @OneToMany(() => telefone, (telefones) => telefones.cliente)
    telefones!: telefone

    @ManyToMany(() => produtos, (produtos) => produtos.cliente)
    produtos!: produtos[]

    @ManyToMany(() => servicos, (servicos) => servicos.cliente)

    @JoinTable({
        name: "servico_cliente"
    })
    servicos!: produtos[]
    
    @ManyToMany(() => pedido, (pedidos) => pedidos.cliente)
    pedidos!: pedido[]

}