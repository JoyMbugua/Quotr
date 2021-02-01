import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FormsModule } from '@angular/forms';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { VotesComponent } from './votes/votes.component';
import { TimePassedPipe } from './time-passed.pipe';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    QuotesFormComponent,
    VotesComponent,
    TimePassedPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
