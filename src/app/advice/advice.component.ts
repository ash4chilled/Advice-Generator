import { AdviceService } from './../advice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent implements OnInit{
  advices :any;
  adviceId!: number;
  advice!: string;

  constructor(private service:AdviceService){}

  ngOnInit(): void {
      this.getAdvice();
  }
  getAdvice(){
    this.service.getAdvices().
    subscribe(response=>{
      console.log(response)
      this.advices = response;
      this.advice = this.advices['slip'].advice;
      this.adviceId= this.advices['slip'].id;
      console.log("Advice " + this.advice)


    })
    
  }

}
