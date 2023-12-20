"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const producto_entity_1 = require("./entities/producto.entity");
const typeorm_2 = require("typeorm");
const marca_entity_1 = require("./entities/marca.entity");
let ProductosService = class ProductosService {
    constructor(productoRepository, marcaRepository) {
        this.productoRepository = productoRepository;
        this.marcaRepository = marcaRepository;
    }
    async create(createProductoDto) {
        try {
            const { productos_marca = [], ...marcaDetalle } = createProductoDto;
            const product = this.productoRepository.create({
                ...marcaDetalle,
                productos_marca: productos_marca.map(producto_marca => this.marcaRepository.create({ nombre: producto_marca }))
            });
            await this.productoRepository.save(product);
            return { ...product, productos_marca };
        }
        catch (error) {
            console.log(error);
            throw new Error('No se pudo acceder a la base de datos');
        }
    }
    async findAll(paginacionDto) {
        const { limit = 10, offset = 1 } = paginacionDto;
        const productos = await this.productoRepository.find({
            take: limit,
            skip: offset,
            relations: {
                productos_marca: true
            }
        });
        return productos.map(product => ({
            ...product,
            productos_marca: product.productos_marca.map(model => model.nombre)
        }));
    }
    async findOne(id) {
        const product = await this.productoRepository.findOneBy({ id });
        if (!product)
            throw new common_1.NotFoundException(id);
        return product;
    }
    async update(id, updateProductoDto) {
        const product = await this.productoRepository.preload({
            id: id,
            ...updateProductoDto,
            productos_marca: []
        });
        if (!product)
            throw new common_1.NotFoundException("NO SE PUDO ELIMINAR");
        await this.productoRepository.save(product);
        return product;
    }
    async remove(id) {
        const product = await this.findOne(id);
        await this.productoRepository.delete(id);
        return product;
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(producto_entity_1.ProductoEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(marca_entity_1.MarcaEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductosService);
//# sourceMappingURL=productos.service.js.map