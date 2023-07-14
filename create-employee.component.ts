import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  title='Addition of new employee';
  loginform= new FormGroup({user:new FormControl('',[Validators.required, Validators.email]),
  password:new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern('[a-zA-Z]*')])

})

login(){
  console.log(this.loginform)
}
get user(){
  return this.loginform.get("user")
}
get password(){
  return this.loginform.get("password")
}

}
