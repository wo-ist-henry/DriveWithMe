import {HomeState} from './home.reducer';
import {createSelector} from '@ngrx/store';

const homeState = (state: HomeState) => state;

export const selectCarpools = createSelector(
    homeState,
    (state: HomeState) => state.carpools);
