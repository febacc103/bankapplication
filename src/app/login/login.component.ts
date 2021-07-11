import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim= "Welcome to LuminarBank";
  acc="";
  accno="account number please";
  pswd="";


  

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  accChange(event:any){
    this.accno=event.target.value;
    console.log(event.target.value);

  }

  pswdChange(event:any){
    this.pswd=event.target.value;
    console.log(event.target.value);

  }
  login(){
    var acno=this.accno;
    var pwd=this.pswd;
    let accDetails = this.ds.users;
    var result=this.ds.login(acno,pwd)
    if(result){
      alert("login success");
      this.router.navigateByUrl("dashboard");
    }
    //    if(acno in accDetails){
    
    //     if(pwd==accDetails[acno]["password"]){}    
    //     else{
    //       alert("incorrect password");
    //     }
    //   }
    //     else{ 
    //    alert("invalid account number");
    //  } 
 
    }
 
  }
  
 
//  login(a:any,p:any){
//    var acno=a.value;
//    var pwd=p.value;

//    let accDetails = this.users;

//    if(acno in accDetails){

//     if(pwd==accDetails[acno]["password"])
//     {
//       alert("login success");
      
//     }
//     else{
//       alert("incorrect password");
//     }
// }
//   else{

  
//    alert("invalid account number");
//  } 


//  }}
