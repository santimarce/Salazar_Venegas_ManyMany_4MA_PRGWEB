import { MarcaEntity } from "./marca.entity";
export declare class ProductoEntity {
    id: number;
    stock: number;
    nombre_producto: string;
    descripcion_producto: string;
    productos_marca?: MarcaEntity[];
    tamanio: string;
    precio: number;
}
