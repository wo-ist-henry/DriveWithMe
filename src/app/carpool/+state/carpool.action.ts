import {createAction, props} from '@ngrx/store';
import {Carpool} from '../../models/carpool';

export const loadCarpool = createAction(
    '[Carpools] Loading Carpools',
    props<{ carpool: Carpool }>());
