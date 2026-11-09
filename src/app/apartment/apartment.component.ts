import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Apartments } from '../classes/apartment';
import { CentralApartments } from '../classes/central-apartment';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-apartment',
  styleUrl: './apartment.component.css',
  templateUrl: './apartment.component.html',
})
export class ApartmentComponent {
  //Дані які вводить користувач
  name = '';
  price: number | null = null;
  area: number | null = null;
  district = '';

  result: number | null = null;
  apartmentType = '';
  error = '';

  calculate(){
    //Очищення попереднього результату
    this.result = null; 
    this.apartmentType = '';
    this.error = '';

    //Перевірка полів
    if(!this.name.trim() ||
    this.price === null || this.price <=0 ||
    this.area === null || this.area <=0 ||
    !this.district){
      this.error = 'Введіть коректні дані!';
      return;
    }

    let apartment: Apartments;
    //Центральні райони
    if(this.district === 'Шевченківський' ||
      this.district === 'Подільський' ||
      this.district === 'Печерський'){

        apartment = new CentralApartments(
          this.name, this.price, this.area, this.district
        );
        this.apartmentType = 'Квартира в центрі';
    } else{

      apartment = new Apartments(
        this.name, this.price, this.area
      );
      this.apartmentType = 'Звичайна квартира';
    }

    this.result = apartment.caclulateCost();
  }
}
