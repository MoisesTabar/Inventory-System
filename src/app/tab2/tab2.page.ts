import { Component, OnInit } from '@angular/core';
import { SaveArticlesPage } from '../pages/articles/save-articles/save-articles.page';
import { ModalController } from '@ionic/angular';
import { IsaveArticleResponse } from '../models/save-article';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [ ApiService ]
})
export class Tab2Page implements OnInit {

  public articles: IsaveArticleResponse[];

  constructor(public modalController: ModalController, private service: ApiService){}

  public async presentModal(){
    const modal = await this.modalController.create({
      component: SaveArticlesPage,
      cssClass: 'articles-page-class',
      animated: true
    });
    return await modal.present();
  } 

  ngOnInit(){
      this.service.getArticles().subscribe(data => {
          this.articles = data;
          console.log(this.articles);
      });
  }


}
