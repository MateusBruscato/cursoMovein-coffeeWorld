import fetch from '../config/Fetch';
import { RoasteryServiceInterface } from '../interfaces/roastery.interface';


const getRoasteries = async () => {
    const result = await fetch({
        url: `/roastery`,
        method: 'get'
    })
    return result.data;
};


const RoasteryService: RoasteryServiceInterface = {
    getRoasteries,
}

export default RoasteryService;