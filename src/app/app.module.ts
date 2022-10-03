import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import AletModule from 'ngx-bootstrap';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  Title='reportedeventas'
}
