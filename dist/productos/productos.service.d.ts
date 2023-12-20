import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ProductoEntity } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { MarcaEntity } from './entities/marca.entity';
import { PaginacionDto } from 'src/common/dto/paginacion.dto';
export declare class ProductosService {
    private readonly productoRepository;
    private readonly marcaRepository;
    constructor(productoRepository: Repository<ProductoEntity>, marcaRepository: Repository<MarcaEntity>);
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
    findOne(id: number): Promise<ProductoEntity>;
    update(id: number, updateProductoDto: UpdateProductoDto): Promise<ProductoEntity>;
    remove(id: number): Promise<ProductoEntity>;
}
