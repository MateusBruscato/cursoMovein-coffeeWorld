import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoasteryService } from './roastery.service';
import { CreateRoasteryDto } from './dto/create-roastery.dto';
import { UpdateRoasteryDto } from './dto/update-roastery.dto';

@Controller('roastery')
export class RoasteryController {
  constructor(private readonly roasteryService: RoasteryService) {}

  @Post()
  create(@Body() createRoasteryDto: CreateRoasteryDto) {
    return this.roasteryService.create(createRoasteryDto);
  }

  @Get()
  findAll() {
    return this.roasteryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roasteryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoasteryDto: UpdateRoasteryDto) {
    return this.roasteryService.update(+id, updateRoasteryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roasteryService.remove(+id);
  }
}
