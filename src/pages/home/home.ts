import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { UserInfoPage } from '../user-info/user-info';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions; // Barcode Options
  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, public loadingController: LoadingController) {

  }


  scan() {
    this.options = {
      prompt: "", // empty text .. better UI
      resultDisplayDuration: 0, // hide text result inside camera
    }

    this.barcodeScanner.scan(this.options).then((barcodeData) => {

      //alert( barcodeData.text )

      // trying to make fake loading..
      let loading = this.loadingController.create({
        content: "Please wait..."
      })
      loading.present();
      setTimeout(() => {
        loading.dismiss();
        this.openPage();
      }, 2000)
        
      //
    }, (err) => {
      //alert(err);
    });
  }

  openPage(){
    this.navCtrl.push(UserInfoPage);
  }


}
