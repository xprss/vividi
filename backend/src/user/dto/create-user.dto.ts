import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { Badge } from 'libs/common/badge.enum';

export class CreateUserDto {
  @ApiProperty({
    example: 'Sibilla',
    type: 'string',
    title: 'user',
    description: "The user's first name",
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  firstName: string;

  @ApiProperty({
    example: 'Sagristano',
    type: 'string',
    title: 'user',
    description: "The user's last name",
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  lastName: string;

  @ApiProperty({
    example: 'name.surname@domain.com',
    type: 'string',
    title: 'user',
    description: "The user's email",
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: [Badge.BRIDE],
    type: 'string',
    title: 'user',
    description: 'The user creating the vibe',
  })
  @IsArray()
  @IsEnum(Badge, { each: true })
  badges: Badge[];
}
