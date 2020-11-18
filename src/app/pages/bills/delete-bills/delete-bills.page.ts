import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { IdeleteBills } from '../../../models/save-bills';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-delete-bills',
  templateUrl: './delete-bills.page.html',
  styleUrls: ['./delete-bills.page.scss'],
  providers: [ ApiService ]
})
export class DeleteBillsPage{

  public deleteBillsForm = new FormGroup({
    bill_id: new FormControl('', Validators.required),
  });

  constructor(private service: ApiService, private loadingController: LoadingController, private alertController: AlertController){}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'present-alert',
      header: 'Congratulations',
      message: 'Bill deleted',
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

  public async deleteBills(form: IdeleteBills){
    await this.presentLoading();

      await this.service.deleteBills(form).subscribe(data => {
          const response: IdeleteBills = data
          this.presentAlert();
      });
  }



}
