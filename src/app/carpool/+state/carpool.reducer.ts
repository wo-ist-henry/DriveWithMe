import {Carpool} from '../../models/carpool';
import {both, loadCarpool, loadedCarpool} from './carpool.action';

export const carpoolFeatureKey = 'carpool';

class CarpoolState {
    carpool: Carpool;
}

export const initialState: CarpoolState = {
    carpool: undefined
};

export function carpoolReducer(state = initialState, action: typeof both.actions): CarpoolState {
    switch (action.type) {
        case loadCarpool.type:
            return {...state};
        case loadedCarpool.type:
            return {...state, carpool: action.payload};
    }
}

