import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-array-two',
  styleUrl: './array-two.component.css',
  templateUrl: './array-two.component.html',
})
export class ArrayTwo {
  matrix: number[][] = [];
  count: number = 0;
  hasResult: boolean = false;

  //Створення випадкової матриці
  generate(){
    this.matrix = [];
    this.hasResult = false;

    for(let i = 0; i<5; i++){
      let row: number[]=[];

      for(let j = 0; j<5; j++){
        let number = Math.floor(Math.random()*21) - 10;
        row.push(number);
      }
      this.matrix.push(row);
    }
  }
  //Підрахунок відʼємних елементів нижче діагоналі
  calculate(){
    this.count = 0;

    for(let i = 0; i<5; i++){
      for(let j = 0; j<5; j++){
        if(i > j && this.matrix[i][j] < 0){
          this.count++
        }
      }
    }
    this.hasResult = true;
  }
}
