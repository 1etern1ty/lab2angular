export class Apartments{
    constructor(
        public name: string,
        public price: number,
        public area: number
    ) {}

    caclulateCost(): number{
        return this.price * this.area;
    }
}