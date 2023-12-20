/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MarcaEntity } from "./marca.entity";

@Entity()
export class ProductoEntity {
    @PrimaryGeneratedColumn({ name: 'id_producto' })
    id: number;

    @Column({ type: 'integer' })
    stock: number;

    @Column({ type: 'character varying' })
    nombre_producto: string;

    @Column({ type: 'character varying' })
    descripcion_producto: string;

    @OneToMany(() => MarcaEntity, producto => producto.marcaId, { cascade: true, eager: true })
    productos_marca?: MarcaEntity[];

    @Column({ type: 'character varying' })
    tamanio: string;

    @Column({ type: 'numeric' })
    precio: number;
}
