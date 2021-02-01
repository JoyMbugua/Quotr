import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuote: Quote = new Quote("", "", "", new Date());

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(): void{
    this.addQuote.emit(this.newQuote);
    
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
