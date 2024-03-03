import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"contact",component:ContactComponent},
  {path:"portofolio",component:PortofolioComponent},
  {path:"about" , component:AboutComponent},


  {path:"**" , component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
