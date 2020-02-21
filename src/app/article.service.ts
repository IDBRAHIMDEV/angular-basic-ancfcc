import { Article } from './article';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  urlApi: string;
  constructor(private http: HttpClient) { 
    this.urlApi = "http://localhost:5000/posts"
  }

  getAll() {
    return this.http.get(this.urlApi);
  }

  save(data: Article) {
    return this.http.post(this.urlApi, data);
  }

  update(data: Article) {
    return this.http.put(`${this.urlApi}/${data.id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.urlApi}/${id}`);
  }

}
