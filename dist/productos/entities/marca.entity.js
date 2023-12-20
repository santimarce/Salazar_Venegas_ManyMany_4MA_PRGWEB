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
exports.MarcaEntity = void 0;
const typeorm_1 = require("typeorm");
const producto_entity_1 = require("./producto.entity");
let MarcaEntity = class MarcaEntity {
};
exports.MarcaEntity = MarcaEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_marca' }),
    __metadata("design:type", Number)
], MarcaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', name: 'nombre_marca' }),
    __metadata("design:type", String)
], MarcaEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => producto_entity_1.ProductoEntity, producto => producto.productos_marca),
    (0, typeorm_1.JoinColumn)({ name: 'marca' }),
    __metadata("design:type", producto_entity_1.ProductoEntity)
], MarcaEntity.prototype, "marcaId", void 0);
exports.MarcaEntity = MarcaEntity = __decorate([
    (0, typeorm_1.Entity)()
], MarcaEntity);
//# sourceMappingURL=marca.entity.js.map