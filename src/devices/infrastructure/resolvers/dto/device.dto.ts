import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class DeviceType {
  @Field((_type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  type: string;
}
