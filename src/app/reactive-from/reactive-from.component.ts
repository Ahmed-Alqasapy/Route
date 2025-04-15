import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-from',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-from.component.html',
  styleUrl: './reactive-from.component.css'
})
export class ReactiveFromComponent {

  submitted = false

  stdForm:FormGroup = new FormGroup({
    fname:new FormControl('ahmed',[Validators.required , Validators.minLength(5)]),
    lname:new FormControl('ibrahim',[Validators.required , Validators.minLength(5)]),
    email:new FormControl('',[Validators.required , Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
    age : new FormControl(20,[Validators.min(20),Validators.max(40)]),
    address:new FormArray([])

  });

get address(){
  return this.stdForm.get('address') as FormArray
}

addAddress(){
  this.address.push(new FormControl(''))
}

get fname(){
  return this.stdForm.get('fname') as FormControl
}

get lname(){
  return this.stdForm.get('lname') as FormControl

}

get age(){
  return this.stdForm.get('age') as FormControl

}

get email(){
  return this.stdForm.get('email') as FormControl

}


  UpdateFname(){
    this.fname.setValue('alaa');
  }

  showDetails(s:any){
console.log(s)
  }

  onSubmit(){
    this.submitted=true;
    console.log(this.stdForm.value)
  }
}
