import { Component } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
emp1:any[]=[];
emp2:any[]=[];
emp3:any[]=[];
emp4:any[]=[];
emp5:any[]=[];
getEmp1(){
  this.emp1=this.es.sendEmp1();
}
getEmp2(){
  this.emp2=this.es.sendEmp2();
}
getEmp3(){
  this.emp3=this.es.sendEmp3();
}
getEmp4(){
  this.emp4=this.es.sendEmp4();
}
getEmp5(){
  this.emp5=this.es.sendEmp5();
}

constructor(private es:EmpserviceService){}
}