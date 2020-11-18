import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { IsaveBills, IsaveBillsResponse } from '../../../models/save-bills';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-save-bills',
  templateUrl: './save-bills.page.html',
  styleUrls: ['./save-bills.page.scss'],
  providers: [ ApiService ]
})
export class SaveBillsPage{

  public saveBillsForm = new FormGroup({
      bill_id: new FormControl('', Validators.required),
      client_name: new FormControl('', Validators.required),
      rnc: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      article_id: new FormControl('', Validators.required)
  });

  constructor(private service: ApiService, private loadingController: LoadingController, private alertController: AlertController){}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'present-alert',
      header: 'Congratulations',
      message: 'Bill Registered',
      buttons: ['OK']
    });

    await alert.present();
  }

  public async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'present-loading',
      message: 'Please wait...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  public async saveBills(form: IsaveBills){
    await this.presentLoading();

      await this.service.saveBill(form).subscribe(data => {
          const response: IsaveBills = data
          console.log(response);
          this.presentAlert();
      });
  }


}
