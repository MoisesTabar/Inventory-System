import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IsaveBills, IsaveBillsResponse } from '../../../models/save-bills';

@Component({
  selector: 'app-update-bills',
  templateUrl: './update-bills.page.html',
  styleUrls: ['./update-bills.page.scss'],
  providers: [ ApiService ]
})
export class UpdateBillsPage{

  public updateBillsForm = new FormGroup({
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
      message: 'Bill Updated!',
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

  public async updateBills(form: IsaveBills){

      await this.presentLoading();
      await this.presentAlert();
      
      await this.service.updateBill(form).subscribe(data => {
          const response: IsaveBills = data;
      })
  }
}
