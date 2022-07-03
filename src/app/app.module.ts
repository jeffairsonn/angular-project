import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { MatSliderModule } from '@angular/material/slider';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { ModalAddCardComponent } from './modal-add-card/modal-add-card.component';
import { QuestionCardComponent } from './question-card/question-card.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'dashboard/:id', component: QuestionCardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscribeComponent,
    DashboardComponent,
    CourseCardComponent,
    ModalAddCardComponent,
    QuestionCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
