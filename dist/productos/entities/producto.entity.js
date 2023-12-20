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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoEntity = void 0;
const typeorm_1 = require("typeorm");
const marca_entity_1 = require("./marca.entity");
let ProductoEntity = class ProductoEntity {
};
exports.ProductoEntity = ProductoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_producto' }),
    __metadata("design:type", Number)
], ProductoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], ProductoEntity.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying' }),
    __metadata("design:type", String)
], ProductoEntity.prototype, "nombre_producto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying' }),
    __metadata("design:type", String)
], ProductoEntity.prototype, "descripcion_producto", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => marca_entity_1.MarcaEntity, producto => producto.marcaId, { cascade: true, eager: true }),
    __metadata("design:type", Array)
], ProductoEntity.prototype, "productos_marca", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying' }),
    __metadata("design:type", String)
], ProductoEntity.prototype, "tamanio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric' }),
    __metadata("design:type", Number)
], ProductoEntity.prototype, "precio", void 0);
exports.ProductoEntity = ProductoEntity = __decorate([
    (0, typeorm_1.Entity)()
], ProductoEntity);
//# sourceMappingURL=producto.entity.js.map