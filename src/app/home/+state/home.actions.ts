import {Carpool} from '../../models/carpool';
import {HomeLoadedEffect, HomeLoadingEffect} from './home.effect';
import {action, payload, union} from 'ts-action';


export const loadCarpools = action(HomeLoadingEffect);
export const loadedCarpools = action(HomeLoadedEffect, payload<{ carpools: Carpool[] }>());
export const both = union(loadCarpools, loadedCarpools);
