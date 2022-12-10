import { Producer } from "src/entities/producer.entity";
import { Roastery } from "src/entities/roastery.entity";

export class UpdateCoffeeDto {
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
