import { ProducerInterface } from './producer.interface';
import { RoasteryInterface } from './roastery.interface';
export interface CoffeeInterface {
    id: string;
    variety: string;
    height: number;
    notes: string;
    process: string;
    scaa: number;
    roast_date: Date | string;
    price: number;
    producer: Partial<ProducerInterface>;
    roastery: Partial<RoasteryInterface>;
}

export interface CoffeeServiceInterface {
    createCoffee(data: CoffeePostInterface): Promise<any>;
    getCoffees() : Promise<any>;
    deleteCoffee(data: CoffeeDeleteInterface): Promise<any>;
    updateCoffee(data: CoffeePatchInterface): Promise<any>;
    findCoffeeById(id: number | string): Promise<any>;
}

export interface CoffeePostInterface {
    variety: string;
    height: number;
    notes: string;
    process: string;
    scaa: number;
    roast_date: Date | string;
    price: number;
    producer: Partial<ProducerInterface>;
    roastery: Partial<RoasteryInterface>;
    date:any;
}

export interface CoffeePatchInterface {
    id?: string;
    variety: string;
    height: number;
    notes: string;
    process: string;
    scaa: number;
    roast_date: string | Date;
    date: any;
    price: number;
    producer: Partial<ProducerInterface>;
    roastery: Partial<RoasteryInterface>;
}

export interface CoffeeDeleteInterface {
    id: string | number;
}