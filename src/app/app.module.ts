import {DEFAULT_CURRENCY_CODE, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductService} from "./services/product.service";
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductComponent } from './components/product/product.component';
import { BtnBackgroundDirective } from './directives/btn-background.directive';
import { TextCutPipe } from './pipes/text-cut.pipe';
import { PrettyPhonePipe } from './pipes/pretty-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvantageComponent,
    ProductComponent,
    BtnBackgroundDirective,
    TextCutPipe,
    PrettyPhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService, {provide: DEFAULT_CURRENCY_CODE, useValue: 'руб.'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
