import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  logindata:any;
  logoutdata:any;
  constructor(private googlePlus: GooglePlus) { }
  login(){
    console.log('login')
    this.googlePlus.login({})
    .then(res => 
      this.logindata=res)
    .catch(err => console.log(err))
  }
  logout(){
    console.log('logout')
   this.googlePlus.logout().then(data=>{
     this.logoutdata=data;
   })
  }
}
