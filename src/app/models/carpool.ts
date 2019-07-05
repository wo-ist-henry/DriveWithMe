import {paymentArt} from './paymentArt';
import {Guid} from 'guid-typescript';

export class Carpool {
    id: Guid;
    driver: string;
    payment: paymentArt;
    price: number;
    currentMonth: string[];
}
