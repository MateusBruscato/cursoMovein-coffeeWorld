import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Coffee } from './coffee.entity';

@Entity()
export class Producer {
    @PrimaryGeneratedColumn()
    producer_id: number;

    @Column({ length: 100 })
    farmer: string;
    
    @Column({length: 100})
    farm: string;

    @Column({length: 100})
    city: string;

    @Column({length: 100})
    region: string;

    @Column({length: 100})
    country: string;

    @Column({length: 100})
    district: string;

    @OneToMany(() => Coffee, (coffee) => coffee.producer)
    coffees: Coffee[];

}