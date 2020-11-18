import { Component } from '@angular/core';
import { SaveBillsPage } from '../pages/bills/save-bills/save-bills.page';
import { ModalController } from '@ionic/angular';
import { UpdateBillsPage } from '../pages/bills/update-bills/update-bills.page';
import { DeleteBillsPage } from '../pages/bills/delete-bills/delete-bills.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public modalController: ModalController){}

  public async presentModal(){
    const modal = await this.modalController.create({
      component: SaveBillsPage,
      cssClass: 'bills-page-class',
      animated: true
    });
    return await modal.present();
  } 

  public async presentSecondModal(){
    const modal = await this.modalController.create({
      component: UpdateBillsPage,
      cssClass: 'bills-page-class',
      animated: true
    });
    return await modal.present();
  }

  public async presentThirdModal(){
    const modal = await this.modalController.create({
      component: DeleteBillsPage,
      cssClass: 'bills-page-class',
      animated: true
    });
    return await modal.present();
  }
}
