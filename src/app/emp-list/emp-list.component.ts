import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private http:HttpClient) { }
employees=[]
get_EmpList=function(){
  this.http.get("http:/localhost:5555/employees").subscribe(
    (result:any[])=>{
      this.employees=result
    }
  
  )
}

  ngOnInit() {
    this.get_EmpList()
  }

}
