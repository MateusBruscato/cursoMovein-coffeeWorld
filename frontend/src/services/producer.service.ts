import fetch from '../config/Fetch';
import { ProducerServiceInterface } from '../interfaces/producer.interface';


const getProducers = async () => {
    const result = await fetch({
        url: `/producer`,
        method: 'get'
    })
    return result.data;
};


const ProducerService: ProducerServiceInterface = {
    getProducers,

}

export default ProducerService;