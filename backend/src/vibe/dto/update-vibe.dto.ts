import { PartialType } from '@nestjs/swagger';
import { CreateVibeDto } from './create-vibe.dto';

export class UpdateVibeDto extends PartialType(CreateVibeDto) {}
