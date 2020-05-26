export enum paymentArt {
    default,
    perDrive,
    perDay
}

export class ZahlArt {
    value: paymentArt;
    view: string;
}
