import {Carpool} from '../../models/carpool';
import {createReducer, on} from '@ngrx/store';
import {loadCarpool} from './carpool.action';

export const carpoolFeatureKey = 'carpool';

class CarpoolState {
    carpool: Carpool;
}

export const initialState: CarpoolState = {
    carpool: undefined
};

export const carpoolReducer = createReducer(initialState,
    on(loadCarpool, (state, action) => ({carpool: action.carpool}))
);
