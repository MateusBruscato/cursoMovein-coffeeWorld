import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Coffee } from './coffee.entity';

@Entity()
export class Roastery {
    @PrimaryGeneratedColumn({type: 'int'})
    roastery_id: number;

    @Column({ length: 100 })
    roaster_name: string;
    
    @Column({length: 100})
    company: string;

    @Column({length: 100})
    city: string;

    @OneToMany(() => Coffee, (coffee) => coffee.roastery)
    coffees: Coffee[];

}