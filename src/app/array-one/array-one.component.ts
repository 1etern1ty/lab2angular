import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-array-one',
  styleUrl: './array-one.component.css',
  templateUrl: './array-one.component.html',
})
export class ArrayOne {
  //Введені дані
  input: string = '';
  temperatures: number[] = [];
  average: number = 0;
  count: number = 0;
  error: string = '';
  hasResult: boolean = false;

  //Метод для обробки і обчислення
  calculate(){
    //Очищення попередніх результатів
    this.error = '';
    this.hasResult = false;

    const values = this.input.split(',').map(value => value.trim());//Розділення введеного рядка за комами

    //Перевірка коректності вводу
    if(values.length !== 10 ||
    values.some(value => !/^-?\d+(\.\d+)?$/.test(value))){
      this.error = 'Введіть 10 коректних чисел через кому!';
      return;
    }

    this.temperatures = values.map(value => Number(value));//Перетворення текстових значень на масив


    let sum = 0;//Сума всіх температур

    for(let i = 0; i<this.temperatures.length; i++){
      sum+= this.temperatures[i];
    }

    this.average = sum/this.temperatures.length;//Середня температура

    this.count = 0;//К-сть температур вищих за середню

    for(let i = 0; i<this.temperatures.length; i++){
      if(this.temperatures[i] > this.average){
        this.count++;
      }
    }
    this.hasResult = true;//Відображення результатів
  }
}
