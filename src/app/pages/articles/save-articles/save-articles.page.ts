import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { IsaveArticle, IsaveArticleResponse} from '../../../models/save-article';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-save-articles',
  templateUrl: './save-articles.page.html',
  styleUrls: ['./save-articles.page.scss'],
  providers: [ ApiService ]
})
export class SaveArticlesPage{

  public saveArticleForm = new FormGroup({
      article_id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required)
  });

  constructor(private service: ApiService, private loadingController: LoadingController, private alertController: AlertController){}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'present-alert',
      header: 'Congratulations',
      message: 'Article registered',
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

  public async saveArticle(form: IsaveArticle){
    await this.presentLoading();

      await this.service.saveArticle(form).subscribe(data => {
          const response: IsaveArticleResponse = data;
          console.log(response);

          this.presentAlert();
      })
  }

}
