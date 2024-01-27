import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {PurchaseOrder} from "./entities/porder.entity";
import {PurchaseOrderService} from "./purchase_order.service";
import {PurchaseOrderResolver} from "./purchase_order.resolver";


@Module({
    imports: [SequelizeModule.forFeature([PurchaseOrder])],
    exports: [SequelizeModule],
    providers: [PurchaseOrderService, PurchaseOrderResolver],
})
export class PurchaseModule {}