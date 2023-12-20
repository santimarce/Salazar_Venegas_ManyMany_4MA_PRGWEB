import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { PaginacionDto } from 'src/common/dto/paginacion.dto';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    create(createProductoDto: CreateProductoDto): Promise<{
        productos_marca: string[];
        id: number;
        stock: number;
        nombre_producto: string;
        descripcion_producto: string;
        tamanio: string;
        precio: number;
    }>;
    findAll(paginacionDto: PaginacionDto): Promise<{
        productos_marca: string[];
        id: number;
        stock: number;
        nombre_producto: string;
        descripcion_producto: string;
        tamanio: string;
        precio: number;
    }[]>;
    findOne(id: number): Promise<import("./entities/producto.entity").ProductoEntity>;
    update(id: number, updateProductoDto: UpdateProductoDto): Promise<import("./entities/producto.entity").ProductoEntity>;
    remove(id: number): Promise<import("./entities/producto.entity").ProductoEntity>;
}
