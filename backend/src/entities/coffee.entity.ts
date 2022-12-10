import { Column, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producer } from "./producer.entity";
import { Roastery } from "./roastery.entity";

@Index('roasteryId', ['id'], {})
@Entity()
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('timestamp', { name: 'dtc_coffee', nullable: true })
    dtcCoffee: Date | null;
  
    @Column('int', { name: 'atv_coffee', nullable: true })
    atvCoffee: number | null;
  
    @DeleteDateColumn({ name: 'deletedAt' })
    deletedAt: Date;

    @Column({ length: 100 })
    variety: string;

    @Column('int')
    height: number;

    @Column({length: 100})
    notes: string;

    @Column({length: 100})
    process: string;

    @Column('decimal')
    scaa: number;

    @Column('date')
    roast_date: Date;

    @Column('decimal')
    price: number;

    @ManyToOne(()=> Roastery, (roastery) => roastery.coffees,
    {
        eager: true,
        cascade: true
    })
    @JoinColumn()
    roastery: Roastery | null;

    @ManyToOne(()=> Producer, (producer) => producer.coffees, {
        eager: true,
        cascade: true
    })
    @JoinColumn([{ name: 'producer_id' }])
    producer: Producer;
}