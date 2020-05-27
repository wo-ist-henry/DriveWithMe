import {createAction, props} from '@ngrx/store';
import {Carpool} from '../../models/carpool';

export const loadCarpools = createAction(
    '[Carpools] Loading Carpools',
    props<{ carpools: Carpool[] }>());
