import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActiveHighlightDirective } from './shared/active-highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockedusersService } from './shared/mockedusers.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MockedusersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
