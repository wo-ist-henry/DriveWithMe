import {Carpool} from '../../models/carpool';
import {createReducer, on} from '@ngrx/store';
import {loadCarpools} from './carpool.action';

export const carpoolFeatureKey = 'carpool';

class CarpoolState {
    carpools: Carpool[];
}

export const initialState: CarpoolState = {
    carpools: []
};

export const carpoolReducer = createReducer(initialState,
    on(loadCarpools, (state, action) => ({carpools: action.carpools}))
);
