import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'user' })
export class User {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  nickname: string;

  @Field((type) => String)
  email: string;

  @Field((type) => String)
  password: string;

  @Field({ nullable: true })
  profile_image: string;

  @Field()
  createdAt: Date;
}
