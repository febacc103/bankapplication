import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname="";
  acno="";
  acctype="";
  pswd="";

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var acno=this.acno;
    var uname=this.uname;
    var pwd=this.pswd;
    var acctype=this.acctype;
    var result=this.ds.register(acno,uname,pwd,acctype)
    if(result) {
       alert("registered successfully")
       this.router.navigateByUrl("")
      }
    else{
      alert("Account already Exist!!!!pleade login")
      this.router.navigateByUrl("")
    }  
  }
}
