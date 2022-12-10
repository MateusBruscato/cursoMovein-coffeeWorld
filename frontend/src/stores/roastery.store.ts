import create from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { RoasteryInterface } from '../interfaces/roastery.interface';
import RoasteryService from '../services/roastery.service';

interface RoasteryState {
    loadingRoasteries: boolean;
    roastery: RoasteryInterface | null;
    roasteries: RoasteryInterface[];
    errorRoasteries: any;
    getRoasteries(): Promise<any>;
}

export const useRoastery = create(
    subscribeWithSelector<RoasteryState>((set, get) => ({
        loadingRoasteries: false,
        errorRoasteries: null,
        roasteries: [],
        roastery: null,
        getRoasteries: async () => {
            set({ loadingRoasteries: true });

            try {
                const roasteriesResult = await  RoasteryService.getRoasteries();
                console.log(roasteriesResult)
                set({
                    roasteries: roasteriesResult,
                });
            } catch (e) {
                set({
                    roasteries: [],
                    errorRoasteries: e,
                });
            } finally {
                set({ loadingRoasteries: false });
            }
        },

    }))
    );

