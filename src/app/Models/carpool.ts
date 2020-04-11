import {PaystyleEnum} from './paystyle';
import {Tour} from './tour';

export class Carpool {
    id: string;
    driver: string;
    payment: PaystyleEnum;
    price: number;
    currentMonth: Tour[];
}
