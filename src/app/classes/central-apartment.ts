import { Apartments } from "./apartment";

export class CentralApartments extends Apartments{ //Клас-нащадок
    constructor(
        name: string,
        price: number,
        area: number,
        public district: string
    ){
        super(name, price, area); //Передача даних батьківського класу
    }

    override caclulateCost(): number {
        return super.caclulateCost()*1.01;
    }
}