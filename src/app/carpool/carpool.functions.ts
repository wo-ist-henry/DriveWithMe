import {Tour} from '../models/tour';

export const getRides = (rides: Tour[]): number => {
    return rides.length;
};
