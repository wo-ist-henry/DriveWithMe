import {Carpool} from '../../models/carpool';
import {both, loadCarpools, loadedCarpools} from './home.actions';

export const homeFeatureKey = 'home';


export interface HomeState {
    carpools: Carpool[];
}

export const initialState: HomeState = {
    carpools: []
};

export function homeReducer(state = initialState, action: typeof both.actions): HomeState {
    switch (action.type) {
        case loadCarpools.type:
            return {...state};
        case loadedCarpools.type:
            return {...state, carpools: action.payload};
    }
}
