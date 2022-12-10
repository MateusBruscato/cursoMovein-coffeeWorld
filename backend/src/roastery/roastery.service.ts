import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoasteryDto } from './dto/create-roastery.dto';
import { UpdateRoasteryDto } from './dto/update-roastery.dto';
import { Repository } from 'typeorm';
import { Roastery } from 'src/entities/roastery.entity';

@Injectable()
export class RoasteryService {
  constructor(
    @InjectRepository(Roastery)
    private roasteryRepository: Repository<Roastery>
  ){}

  async create(createRoasteryDto: CreateRoasteryDto) {
    const newRoastery = this.roasteryRepository.create(createRoasteryDto);
    await this.roasteryRepository.save(newRoastery);
    return newRoastery;
  }

  findAll() {
    return this.roasteryRepository.find();
  }

  findOne(id: number) {
    return this.roasteryRepository.find({where: {roastery_id: id}});
  }

  update(id: number, updateRoasteryDto: UpdateRoasteryDto) {
    return `This action updates a #${id} roastery`;
  }

  remove(id: number) {
    return `This action removes a #${id} roastery`;
  }
}
