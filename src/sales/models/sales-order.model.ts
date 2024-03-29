import {
    AllowNull,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Index,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import {UserModel} from "../../users/user.model";
import {SalesOrder} from "../interfaces/sales-order.interface";
import {SalesOrderLineModel} from "./sales-order-line.model";
import {SalesOrderLine} from "../interfaces/sales-order-line.interface";
import {ClientModel} from "./client.model";
import {Client} from "../interfaces/client.interface";

@Table({tableName: 'SalesOrder'})
export class SalesOrderModel extends Model implements SalesOrder {

    @PrimaryKey
    @AllowNull(false)
    @Column(DataType.UUID)
    id: string;

    @Index({name: 'userId-clientId-orderNum', unique: true})
    @ForeignKey(() => UserModel)
    @Column(DataType.UUID)
    userId: string;

    @BelongsTo(() => UserModel, 'userId')
    user: UserModel;

    @Index('userId-clientId-orderNum')
    @ForeignKey(() => ClientModel)
    @Column(DataType.UUID)
    clientId: string;

    @BelongsTo(() => ClientModel, 'clientId')
    client: Client;

    @Index('userId-clientId-orderNum')
    @Column(DataType.STRING)
    number: string;

    @Column(DataType.STRING)
    reference: string;

    @HasMany(() => SalesOrderLineModel)
    lines: SalesOrderLine[]

}