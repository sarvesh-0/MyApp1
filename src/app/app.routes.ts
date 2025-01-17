import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [{path:'',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'services',component:ServicesComponent},
    {path:'courses',component:CoursesComponent}
];
