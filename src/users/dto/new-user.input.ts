import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class NewUserInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  nickname: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(30)
  email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(12)
  password: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(200)
  profile_image?: string;
}
