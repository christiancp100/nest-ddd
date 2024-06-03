import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeviceDto {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  type: 'CAMERA' | 'SENSOR';
}
