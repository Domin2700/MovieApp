import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { OrderbyPipe } from './pipes/orderby.pipe';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, LoadingComponent,  OrderbyPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    OrderbyPipe
  ]
})
export class SharedModule { }
