import create from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

import { ProducerInterface } from '../interfaces/producer.interface';
import producerService from '../services/producer.service';

interface ProducerState {
    loadingProducers: boolean;
    producer: ProducerInterface | null;
    producers: ProducerInterface[];
    errorProducers: any;
    getProducers(): Promise<any>;
}

export const useProducer = create(
    subscribeWithSelector<ProducerState>((set, get) => ({
        loadingProducers: false,
        errorProducers: null,
        producers: [],
        producer: null,
        getProducers: async () => {
            set({ loadingProducers: true });

            try {
                const producersResult = await producerService.getProducers();
                console.log(producersResult)
                set({
                    producers: producersResult,
                });
            } catch (e) {
                set({
                    producers: [],
                    errorProducers: e,
                });
            } finally {
                set({ loadingProducers: false });
            }
        },

    }))
    );

