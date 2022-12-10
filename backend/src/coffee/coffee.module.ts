import { Coffee } from './../entities/coffee.entity';
import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roastery } from '../entities/roastery.entity';
import { Producer } from '../entities/producer.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Coffee, Roastery, Producer])],
  controllers: [CoffeeController],
  providers: [CoffeeService]
})
export class CoffeeModule {}
