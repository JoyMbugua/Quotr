import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quoteText: string;
quotes: Quote[] = [
  new Quote('John Doe', "If you only do what you can do, you'll never be anything more than who you are now.", "Alex MarzBar", new Date(2020,0,26)),
  new Quote("Njuguna Mwangi", "You may be disappointed if you fail, but you are doomed if you don't try.", "Beverly Sills", new Date(2021,0,13)),
  new Quote("Ada Lovelace", "You shouldn't focus on why you cant do something, which is what most people do. You should focus on why perhaps you can, and be one of the exceptions.", "Steve Case", new Date(2021,0,30))
]
  addNewQuote(quote){
    quote.postedDate = new Date();
    this.quotes.push(quote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
