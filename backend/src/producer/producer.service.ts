import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProducerDto } from './dto/create-producer.dto';
import { UpdateProducerDto } from './dto/update-producer.dto';
import { Repository } from 'typeorm';
import { Producer } from 'src/entities/producer.entity';

@Injectable()
export class ProducerService {
  constructor(
    @InjectRepository(Producer)
    private producerRepository: Repository<Producer>
  ) {}

  async create(createProducerDto: CreateProducerDto) {
    const newProducer = this.producerRepository.create(createProducerDto);
    await this.producerRepository.save(newProducer);
    return newProducer;
  }

  findAll() {
    return this.producerRepository.find();
  }

  findOne(id: number) {
    return this.producerRepository.find({where: {producer_id: id}});
  }

  update(id: number, updateProducerDto: UpdateProducerDto) {
    return `This action updates a #${id} producer`;
  }

  remove(id: number) {
    return `This action removes a #${id} producer`;
  }
}
