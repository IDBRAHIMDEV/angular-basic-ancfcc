import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { ContentComponent } from './content/content.component';
import { IntroComponent } from './intro/intro.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesComponent } from './articles/articles.component';
import { GithubComponent } from './github/github.component';
import { OneUserComponent } from './one-user/one-user.component';

import { RouterModule } from '@angular/router';


const routes = [
  { path: "", component: ArticlesComponent },
  { path: "github", component: GithubComponent },
  { path: "coursera", component: CoursesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    SidebarComponent,
    LayoutComponent,
    ContentComponent,
    IntroComponent,
    ArticlesComponent,
    GithubComponent,
    OneUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
