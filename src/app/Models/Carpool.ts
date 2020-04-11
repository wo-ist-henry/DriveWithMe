import {PaystyleEnum} from './Payart';
import {Tour} from './Tour';


export class Carpool {
    id: string;
    driver: string;
    payment: PaystyleEnum;
    price: number;
    currentMonth: Tour[];
    archive: Tour[];
}
