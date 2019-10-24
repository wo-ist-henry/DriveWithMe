import {paymentArt} from './paymentArt';
import {Guid} from 'guid-typescript';
import {Tour} from './tour';

export class Carpool {
    id: string;
    driver: string;
    payment: paymentArt;
    price: number;
    currentMonth: Tour[];
    archive: Tour[];
}
