import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IsaveArticle, IsaveArticleResponse} from '../models/save-article'
import { IsaveBills, IsaveBillsResponse, IdeleteBills} from '../models/save-bills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public saveArticleUrl: string = 'articles/save';
  public saveBillsUrl: string = 'bills/save';
  public updateBillsUrl: string = 'bills/update';
  public getBillsUrl: string = 'bills/get';
  public getArticleUrl: string = 'articles/get';
  public deleteBillUrl: string = 'bills/delete';

  constructor(private http: HttpClient){}

  saveArticle(form: IsaveArticle): Observable<IsaveArticleResponse>{
      const route = this.saveArticleUrl;
      return this.http.post<IsaveArticleResponse>(route, form);
  }

  saveBill(form: IsaveBills): Observable<IsaveBills>{
      const route = this.saveBillsUrl;
      return this.http.post<IsaveBills>(route, form);
  }

  updateBill(form: IsaveBills): Observable<IsaveBills>{
      const route = this.updateBillsUrl;
      return this.http.post<IsaveBills>(route, form);
  }

  getBills(): Observable<IsaveBillsResponse[]>{
    const route = this.getBillsUrl;
    return this.http.get<IsaveBillsResponse[]>(route);
  }

  getArticles(): Observable<IsaveArticleResponse[]>{
      const route = this.getArticleUrl;
      return this.http.get<IsaveArticleResponse[]>(route);
  }

  deleteBills(form: IdeleteBills): Observable<IdeleteBills>{
      const route = this.deleteBillUrl;
      return this.http.post<IdeleteBills>(route, form);
  }
  
}
