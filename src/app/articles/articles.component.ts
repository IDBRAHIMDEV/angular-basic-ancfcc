import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {


  display: boolean = false;
  editable: boolean = false;
  listArticles: Article[] = [];

  article: Article = {
    title: "",
    body: ""
  }

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticle()
  }

  getArticle() {
    this.articleService.getAll().subscribe((response: Article[]) => {
          this.listArticles = response;
    });
  }

  persistArticle(data) {


    if(data.invalid) {
      
      return;
    }


    this.articleService.save(this.article).subscribe((response: Article) => {
      this.listArticles = [response, ...this.listArticles];
      this.display = false;
      data.reset();
    })
  }


  info(data) {
    console.log(data);
  }

  displayForm() {
     
    this.display = !this.display;
  }

  editArticle(article: Article) {
    this.article = article;
    this.display = true;
    this.editable = true;
  }

  updateArticle(f) {
      
    if(f.invalid) {
      return;
    }

    this.articleService.update(this.article).subscribe(() => {
      this.display = false;
      this.editable = false;

      this.article = {
        title: "",
        body: ""
      }
    })

  }

  deleteArticle(id: number,index: number) {
    this.articleService.delete(id).subscribe(() => {

      this.listArticles = this.listArticles.filter(article => article.id !== id)
      // this.listArticles = this.listArticles.filter(function(article) {
      //   return article.id !== id
      // })

    })
  }


}
