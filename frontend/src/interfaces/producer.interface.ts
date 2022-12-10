export interface ProducerInterface{
    producer_id: number;
    farmer: string;
    farm: string;
    city: string;
    region: string;
    country: string;
    district: string;
}

export interface ProducerServiceInterface {
    getProducers() : Promise<any>;
}