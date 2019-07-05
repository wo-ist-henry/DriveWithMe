import {paymentArt} from './paymentArt';
import {Guid} from 'guid-typescript';

export class Carpool {
    id: string;
    driver: string;
    payment: paymentArt;
    price: number;
    currentMonth: string[];
}
