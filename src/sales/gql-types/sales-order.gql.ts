import {Field, ObjectType} from "@nestjs/graphql";
import {SalesOrderLine} from "./sales-order-line.gql";
import {Client} from "./client.gql";

@ObjectType({description: 'Sales Order'})
export class SalesOrder {
    @Field(() => String, {nullable: false})
    id: string;

    @Field(() => Client, {nullable: false})
    client: Client;

    @Field(() => String, {nullable: false})
    number: string;

    @Field(() => String, {nullable: false})
    reference: string

    @Field(() => [SalesOrderLine])
    lines: SalesOrderLine[]

}