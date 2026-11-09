import { Routes } from "@angular/router";
import { ApartmentComponent } from "./apartment/apartment.component";
import { ArrayOne } from "./array-one/array-one.component";
import { ArrayTwo } from "./array-two/array-two.component";

export const routes: Routes = [
    { path: '', component: ApartmentComponent},
    { path: 'array-one', component: ArrayOne },
    { path: 'array-two', component: ArrayTwo}
];