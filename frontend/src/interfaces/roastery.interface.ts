export interface RoasteryInterface{
    roastery_id: number;
    roaster_name: string;
    company: string;
    city: string;
}

export interface RoasteryServiceInterface {
    getRoasteries() : Promise<any>;
}