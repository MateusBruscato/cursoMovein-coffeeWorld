import { PartialType } from '@nestjs/mapped-types';
import { CreateRoasteryDto } from './create-roastery.dto';

export class UpdateRoasteryDto extends PartialType(CreateRoasteryDto) {}
