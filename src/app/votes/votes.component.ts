import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  upVoteCount: number = 0;
  downVoteCount: number = 0;

  

  upVote(){
    this.upVoteCount++;
  }
  downVote(){
    this.downVoteCount++;
  }

 
  constructor() { }

  ngOnInit(): void {
  }

}
