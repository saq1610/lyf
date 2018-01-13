import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) { }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: '42',
      duration: 3000
    });
    toast.present();
  
}
}