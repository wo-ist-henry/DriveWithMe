import {CarpoolLoadedEffect, CarpoolLoadingEffect} from './carpool.effect';
import {action, payload, union} from 'ts-action';
import {Carpool} from '../../models/carpool';

export const loadCarpool = action(CarpoolLoadingEffect);
export const loadedCarpool = action(CarpoolLoadedEffect, payload<Carpool>());
export const both = union(loadCarpool, loadedCarpool);
