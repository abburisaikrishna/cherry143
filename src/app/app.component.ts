import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { OldPwdValidators } from './old-pwd.validators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  nam:number=1;
  items:[];
  form: FormGroup; 
  i:number=0;
  fetchData = [];
  constructor(fb: FormBuilder){
  
  }
  ngOnInit(){
   
    }
  

}
