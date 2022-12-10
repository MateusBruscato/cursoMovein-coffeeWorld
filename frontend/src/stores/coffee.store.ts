import create from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

import { CoffeeInterface, CoffeePostInterface, CoffeeDeleteInterface, CoffeePatchInterface } from '../interfaces/coffee.interface';
import coffeeService from '../services/coffee.service';

interface CoffeeState {
    loadingCoffees: boolean;
    coffee: CoffeeInterface | null;
    coffees: CoffeeInterface[];
    errorCoffees: any;
    getCoffees(): Promise<any>;
    createCoffee(data: CoffeePostInterface): Promise<any>;
    deleteCoffee(data: CoffeeDeleteInterface): Promise<any>;
    updateCoffee(data: CoffeePatchInterface): Promise<any>;
    findCoffeeById(id: number | string): Promise<any>;
    setCoffeNull (): void;
}

export const useCoffee = create(
    subscribeWithSelector<CoffeeState>((set, get) => ({
        loadingCoffees: false,
        errorCoffees: null,
        coffees: [],
        coffee: null,
        getCoffees: async () => {

            try {
                const coffeesResult = await coffeeService.getCoffees();
                set({
                    coffees: coffeesResult,
                });
            } catch (e) {
                set({
                    coffees: [],
                    errorCoffees: e,
                });
            } finally {
                set({ loadingCoffees: false });

            }
        },
        createCoffee: async (data: CoffeePostInterface) => {
            set({
                loadingCoffees: true,
                errorCoffees: null
            });

            try {
                const result = await coffeeService.createCoffee(data);
                set({
                    coffees: [...get().coffees, result],
                });
            } catch (e) {
                set({
                    errorCoffees: e,
                });
                return e;
            } finally {
                set({
                    loadingCoffees: false,
                });
            }
        },
        updateCoffee: async (data: CoffeePatchInterface) => {
            set({
                loadingCoffees: true,
                errorCoffees: null
            });
            try {
                const result = await coffeeService.updateCoffee(data);

                const updatedCoffees = get().coffees.map((coffee) => coffee.id !== data.id ? coffee : 
                {...coffee,
                   variety: data.variety,
                   height: data.height,
                   notes: data.notes,
                   process: data.process,
                   scaa: data.scaa,
                   roast_date: data.roast_date,
                   price: data.price,
                   roastery: data.roastery,
                   producer: data.producer
                })

                set({
                    coffees: updatedCoffees
                });

                return result;
            } catch (e) {
                set({
                    errorCoffees: e,
                });
                return e;
            } finally {
                set({
                    loadingCoffees: false,
                });
            }
        },
        findCoffeeById: async (id: number | string) => {
            set({ loadingCoffees: true });
            try {
              const coffeeResult = await coffeeService.findCoffeeById(id);
              set({
                coffee: coffeeResult[0],
              });
            } catch (e) {
              set({
                coffee: null,
                errorCoffees: e,
              });
            } finally {
              set({ loadingCoffees: false });
            }
          },
      
        deleteCoffee: async (data: CoffeeDeleteInterface) => {
            set({
                loadingCoffees: true,
                errorCoffees: null
            });
            try {

                const result = await coffeeService.deleteCoffee(data);
                const coffeesList = get().coffees.filter((coffee) => coffee.id !== data.id ? coffee : undefined);
                console.log(coffeesList);
                set({
                    coffees: coffeesList
                });

                return result;
            } catch (e) {
                set({
                    errorCoffees: e,
                });
                return e;
            } finally {
                set({
                    loadingCoffees: false,
                });
            }
        },
        setCoffeNull: () => {
            set({coffee: null})
        }

    }))
);

