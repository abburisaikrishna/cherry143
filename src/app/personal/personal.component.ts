import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  i:number=0;
  fetchData = [];
  mySubscription: Subscription
  constructor() {
    this.mySubscription= interval(5000).subscribe((x =>{
      this.life();
  }));
   }

  ngOnInit(): void {
  
  
  }
  life(){
  if(this.i==0){
    this.fetchData.push({"title":"CHERRY I LOAVE YOU SO MUCH"});
    this.i++;
  }
  else if(this.i==1){
    this.fetchData.push({"love":"You're in my thoughts all day long. On this day, I propose you and invite you to live in my heart all my life. "});
    this.i++;
  
  }
  else if(this.i==2){
    this.fetchData.push({"loveone":" I want to walk with you, I want to talk with you."});
    this.i++;
  
  }else if(this.i==3){
    this.fetchData.push({"loveTWO":"For all the time my utmost desire is to be with you!"});
    this.i++;
  
  }else if(this.i==4){
    this.fetchData.push({"loveThree":"Feelings are always the same, saying it could be in different ways, some say it directly are called \"lovers\". Some write on paper called \"poet\""});
    this.i++;
  
  }else if(this.i==5){
    this.fetchData.push({"loveFive":" I can't imagine a life without you in it, I want to grow old with you, let’s spend the rest of our lives together."});
    this.i++;
  }else if(this.i==6){
    this.fetchData.push({"lovesix":" I want to seal our bond forever today"});
    this.i++;
  } 
  else if(this.i==7){
    this.fetchData.push({"loveseven":" My feelings for you have only grown stronger since the day we first met."});
    this.i++;
  
  } 

}
}