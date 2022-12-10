import { Coffee } from './../entities/coffee.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Roastery } from 'src/entities/roastery.entity';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';


@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private coffeeRepository: Repository<Coffee>,
  ){}
  async create(createCoffeeDto: CreateCoffeeDto) {
    const newCoffee = this.coffeeRepository.create(createCoffeeDto);
    await this.coffeeRepository.save(newCoffee);
    return newCoffee;
  }

  findAll() {
    return this.coffeeRepository.find();
  }

  findOne(id: number) {
    return this.coffeeRepository.find({where: {id: id}});
  }

  async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    this.coffeeRepository.update(id, updateCoffeeDto);
    const updatedCoffee = await this.coffeeRepository.findOneBy({
      id: id,
    });
    if (updatedCoffee) {
      return updatedCoffee;
    }

    throw new HttpException('Coffee not found', HttpStatus.NOT_FOUND);
  }


  remove(id: number) {
    return this.coffeeRepository.delete(id);
  }
}
