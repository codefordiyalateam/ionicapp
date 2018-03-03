import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController , AlertController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';

import {AddneedingPage} from '../addneeding/addneeding';
import {HomePage} from '../home/home';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email :string ;
  password : string ;

  constructor( public alertCtrl:AlertController , public toastCtrl:ToastController,public loginfire: AngularFireAuth , public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() { console.log('ionViewDidLoad LoginPage'); }



  Login(){
    let toast = this.toastCtrl.create({
      message: 'اهلا بك مجددا  ',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    }); 
    this.loginfire.auth.signInWithEmailAndPassword(this.email,this.password).then(user =>{
      toast.present();
    
   this.navCtrl.setRoot(AddneedingPage);
     
    }).catch(error=>{
      this.showAlert();
    })
      
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'خطا ',
      subTitle: ' ! يرجى التاكد من الايميل و كلمة السر الخاصة بك ',
      buttons: ['حسنا ']
    });
    alert.present();
  }
  signUP(){
    this.navCtrl.push(SignupPage);
  }
  google(){
    let toast = this.toastCtrl.create({
      message: 'اهلا بك مجددا  ',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    this.loginfire.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(user =>{
      toast.present();
      this.navCtrl.setRoot(AddneedingPage);
    });
  }
  facebook(){
    let toast = this.toastCtrl.create({
      message: 'اهلا بك مجددا  ',
      duration: 3000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    }); 
    this.loginfire.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()).then(user =>{
      this.navCtrl.setRoot(HomePage);
    });
    
  }
}
