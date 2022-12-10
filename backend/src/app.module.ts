import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeModule } from './coffee/coffee.module';
import { RoasteryModule } from './roastery/roastery.module';
import { ProducerModule } from './producer/producer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'pass123',
        database: 'mundocafe',
        synchronize: true,
        entities: ['dist/**/*.entity{.ts,.js}'],
      }),
    CoffeeModule,
    RoasteryModule,
    ProducerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
