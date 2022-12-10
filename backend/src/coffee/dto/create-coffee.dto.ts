import { Roastery } from '../../entities/roastery.entity';
import { Producer } from '../../entities/producer.entity';
export class CreateCoffeeDto {
    dtcCoffee?: Date | null;
    atvCoffee?: number | null;
    variety: string;
    height: number;
    notes?: string;
    process: string;
    scaa?: number;
    roast_date?: Date;
    price?: number;
    roastery: Roastery;
    producer: Producer;
}
