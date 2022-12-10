import { Module } from '@nestjs/common';
import { RoasteryService } from './roastery.service';
import { RoasteryController } from './roastery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roastery } from 'src/entities/roastery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Roastery])],
  controllers: [RoasteryController],
  providers: [RoasteryService]
})
export class RoasteryModule {}
