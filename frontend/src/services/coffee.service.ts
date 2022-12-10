import { CoffeeServiceInterface, CoffeeInterface, CoffeePostInterface, CoffeeDeleteInterface, CoffeePatchInterface } from '../interfaces/coffee.interface';
import fetch from '../config/Fetch';


const getCoffees = async () => {
    const result = await fetch({
        url: `/coffee`,
        method: 'get'
    })
    return result.data;
};

const findCoffeeById = async (id: number | string) => {
    const result = await fetch({
        url: `/coffee/${id}`,
        method: 'get'
    })
    console.log(result.data)
    return result.data;
};

const createCoffee = async (data: CoffeePostInterface) => {
    const result = await fetch({
        url: `/coffee/`,
        method: 'post',
        data
    })
    return result.data;
};

const updateCoffee = async (data: CoffeePatchInterface) => {
    const result = await fetch({
        url: `/coffee/${data.id}`,
        method: 'patch',
        data
    })
    return result.data;
};

const deleteCoffee = async (data: CoffeeDeleteInterface) => {
    const result = await fetch({
        url: `/coffee/${data.id}`,
        method: 'delete',
    })
    return result.data;
};

const coffeeService: CoffeeServiceInterface = {
    getCoffees,
    createCoffee,
    deleteCoffee,
    updateCoffee,
    findCoffeeById
}

export default coffeeService;