/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductoEntity } from "./producto.entity";

@Entity()
export class MarcaEntity {
    @PrimaryGeneratedColumn({name: 'id_marca'})
    id: number;

    @Column({ type: 'character varying', name: 'nombre_marca'})
    nombre: string;

    @ManyToOne(() => ProductoEntity, producto => producto.productos_marca)
    @JoinColumn({ name: 'marca' })
    marcaId: ProductoEntity;

}