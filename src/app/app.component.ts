import { Component, signal } from '@angular/core';
import { Header } from './header/header.component';
import { ApartmentComponent } from './apartment/apartment.component';

@Component({
  imports: [Header, ApartmentComponent],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('lab2angular');
}
