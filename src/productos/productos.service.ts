/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoEntity } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { MarcaEntity } from './entities/marca.entity';
import { PaginacionDto } from 'src/common/dto/paginacion.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(ProductoEntity)
    private readonly productoRepository: Repository<ProductoEntity>,
    @InjectRepository(MarcaEntity)
    private readonly marcaRepository: Repository<MarcaEntity>,
  ) {}

  async create(createProductoDto: CreateProductoDto) {
    try {
      const { productos_marca = [], ...marcaDetalle } = createProductoDto

      const product = this.productoRepository.create(
        {
          ...marcaDetalle,
          productos_marca: productos_marca.map( producto_marca => this.marcaRepository.create({ nombre: producto_marca }))
        }
      );
      await this.productoRepository.save(product);
      return { ...product, productos_marca }
    }
    catch (error) {
      console.log(error)
      throw new Error('No se pudo acceder a la base de datos')
    }
  }

  async findAll(paginacionDto: PaginacionDto) {
    const { limit = 10, offset = 1 } = paginacionDto;
    const productos = await this.productoRepository.find({
      take: limit,
      skip: offset,
      relations: {
        productos_marca: true
      }
    })

    return productos.map( product => ({
      ...product,
      productos_marca: product.productos_marca.map( model => model.nombre )
    }))
  }

  async findOne(id: number) {
    const product = await this.productoRepository.findOneBy({ id })
    if (!product)
      throw new NotFoundException(id)
    return product;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const product = await this.productoRepository.preload({
      id: id,
      ...updateProductoDto,
      productos_marca: []
    })
    if (!product)
      throw new NotFoundException("NO SE PUDO ELIMINAR");
    await this.productoRepository.save(product);
    return product;
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    await this.productoRepository.delete(id);
    return product;
  }
}
